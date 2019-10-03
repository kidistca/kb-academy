import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

// import { SignOut } from "./../services/auth-api";

const Menu = () => {
  // function signOut(event) {
  //   event.preventDefault();
  //   SignOut()
  //     .then(() => {
  //       this.setState({
  //         user: null
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  return (
    <Navbar bg="transparent" expand="lg">
      <Link to="/">Train Your Brain</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Fragment>
            <Link to="/profile">Profile</Link>
            <Link to="/signout">Sign Out</Link>
            {/* <Form onSubmit={signOut}>
              <Button type="submit">Sign Out</Button>
            </Form> */}
          </Fragment>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
