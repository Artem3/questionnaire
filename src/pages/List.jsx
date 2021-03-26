import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { doSharing } from 'utils/shareHelper';

export default function List(props) {
  const [content, setContent] = useState(fillContentFromStorage());
  const [code, setCode] = useState(0);

  function fillContentFromStorage() {
    const content = new Map();
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      let title = localStorage.key(i);
      if (title === 'userId') {
        continue;
      }
      const savedPool = JSON.parse(localStorage.getItem(title));
      // let qLength = savedPool.questions.length;
      content.set(title, savedPool);
    }
    return content;
  }

  const handleDelete = (title) => {
    localStorage.removeItem(title);
    setContent(fillContentFromStorage());
    props.setSize(localStorage.length - 1);
  };

  const handleShare = (title) => {
    const pool = localStorage.getItem(title);
    doSharing(title, pool).then((result) => {
      const updatedPool = {
        questions: JSON.parse(pool).questions,
        sharedCode: result,
      };
      localStorage.setItem(title, JSON.stringify(updatedPool));
      setCode(result); // -?
    });
  };

  return (
    <>
      <Container style={{ minHeight: '100vh', color: 'white' }}>
        <h4 className="text-center py-3">The list of saved questionaries </h4>
        <Table bordered hover size="sm" variant="light">
          <thead className="bg-warning">
            <tr>
              <th>#</th>
              <th>Questionnaire title</th>
              <th>Number of questions</th>
              <th>Run</th>
              <th>Edit</th>
              <th>Remove</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* 
            let map = new Map().set('a', 1).set('b', 2),
            array = Array.from(map, ([name, value]) => ({ name, value }));
            console.log(array); */}
            {Array.from(content, ([title, poolAndCode]) => ({ title, poolAndCode }))
            .map((elem, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{elem.title}</td>
                  <td>{elem.poolAndCode.questions.length}</td>
                  <td>
                    {/* --Run button--- */}
                    <Button variant="link">
                      <Link to={'/questionnaire/' + elem.title}>&#9655;</Link>
                    </Button>
                  </td>
                  <td>
                    {/* --Edit button--- */}
                    <Button variant="link">
                      <Link to={'/' + elem.title}>&#x270E;</Link>
                    </Button>
                  </td>
                  <td>
                    {/* --Delete button--- */}
                    <Button variant="link" onClick={() => handleDelete(elem.title)}>
                      &#x2716;
                    </Button>
                  </td>
                  <td>
                    {/* --Action button--- */}
                    <Button variant="success" onClick={() => handleShare(elem.title)}>
                      Share this pool &#9741;
                    </Button>
                    <span>{elem.poolAndCode.sharedCode}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
