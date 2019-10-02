import React, { Fragment } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Menu = user => {
  return (
    <Navbar bg="transparent" expand="lg">
      <Navbar.Brand href="/">Train Your Brain</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Fragment>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/signout">Sign Out</Nav.Link>
          </Fragment>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
