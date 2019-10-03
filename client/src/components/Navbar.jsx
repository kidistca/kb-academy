import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { withRouter } from "react-router";

const Menu = props => {
  return (
    <Navbar bg="transparent" expand="lg">
      <Link to="/">Train Your Brain</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Fragment>
            <Link className="btn" to="/signin">
              Sign In
            </Link>
            <Link className="btn" to="/signup">
              Sign Up
            </Link>
          </Fragment>

          <Fragment>
            <Link className="btn" to="/profile">
              Profile
            </Link>
            <Form onSubmit={props.signOut}>
              <Button type="submit">Sign Out</Button>
            </Form>
          </Fragment>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Menu);
