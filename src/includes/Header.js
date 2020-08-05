import React from 'react';
import { Link } from "react-router-dom";

import {  Container ,Navbar, Nav, NavDropdown, Form, FormControl, Button  } from "react-bootstrap";

export default function Header() {
    return (
      <Container>
        <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="#home">Know Your Country</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link to="/">
                    <Nav.Link href="#home">Country</Nav.Link>
                </Link>
                <Link to="/languages">
                    <Nav.Link href="#link">Language</Nav.Link>
                </Link>
            </Nav>
            <Navbar.Text>
              Developed By: <a href="#login">Michael Belete</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }