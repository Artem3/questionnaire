import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { doSharing } from 'utils/shareHelper';

export default function List(props) {
  const [content, setContent] = useState(fillContentFromStorage());

  function fillContentFromStorage() {
    const content = new Map();
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      let title = localStorage.key(i);
      if (title === 'userId') {
        continue;
      }
      let qLength = JSON.parse(localStorage.getItem(title)).length;
      content.set(title, qLength);
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
    const shareCode = doSharing(title, pool);
    console.log('SHARED CODE: ', shareCode); // fix order of excecution !!!
    //save updated pool
    const updatedList = {
      // fix structure in localStorage to avoid nested !!!
      questions: JSON.parse(pool),
      sharedCode: shareCode,
    };
    localStorage.setItem(title, JSON.stringify(updatedList));
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
            {Array.from(content)
              .sort()
              .map((elem, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{elem[0]}</td>
                    <td>{elem[1]}</td>
                    <td>
                      {/* --Run button--- */}
                      <Button variant="link">
                        <Link to={'/questionnaire/' + elem[0]}>&#9655;</Link>
                      </Button>
                    </td>
                    <td>
                      {/* --Edit button--- */}
                      <Button variant="link">
                        <Link to={'/' + elem[0]}>&#x270E;</Link>
                      </Button>
                    </td>
                    <td>
                      {/* --Delete button--- */}
                      <Button variant="link" onClick={() => handleDelete(elem[0])}>
                        &#x2716;
                      </Button>
                    </td>
                    <td>
                      {/* --Action button--- */}
                      <Button variant="success" onClick={() => handleShare(elem[0])}>
                        Share this pool &#9741;
                      </Button>
                      code: 258
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
