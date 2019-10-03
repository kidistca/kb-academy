import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { withRouter } from "react-router";

const Menu = props => {
  return (
    <Navbar>
      <Link className="btn" to="/">
        Edukids
      </Link>
      {(!props.user && (
        <div className="ml-auto">
          <Link className="btn" to="/signin">
            Sign In
          </Link>
          <Link className="btn" to="/signup">
            Sign Up
          </Link>
        </div>
      )) || (
        <div className="ml-auto">
          <Link className="btn" to="/profile">
            Profile
          </Link>
          <Form onSubmit={props.signOut}>
            <Button type="submit">Sign Out</Button>
          </Form>
        </div>
      )}
    </Navbar>
  );
};

export default withRouter(Menu);
