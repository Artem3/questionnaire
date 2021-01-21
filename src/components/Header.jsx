import React from "react";
import logo from "../logo.svg";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { LinkContainer } from "react-router-bootstrap";

const renderTooltip = (props) => (
  <Tooltip
    id="badge-tooltip"
    {...props}>
    7 quiestions is in this list
  </Tooltip>
);

const Header = () => {
  return (
    <Navbar bg="info" expand="lg" className="py-0" sticky="top">
      <LinkContainer to="/questionnaire">
        <Navbar.Brand className="text-white">
          <img
            src={logo}
            width="60"
            height="60"
            className="d-inline-block"
            alt="questionnaire logo"
          />
          The Qestionnaire
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Navbar.Text>
          <Nav className="mr-auto">
            <LinkContainer to="/new">
              <Nav.Link>Create New</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>
                <span>
                  About
                </span>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Badge className="counter-badge" variant="warning">7</Badge>
                </OverlayTrigger>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
