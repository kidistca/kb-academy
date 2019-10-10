import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";

import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";

import { withRouter } from "react-router";

class NavbarEdu extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   user: null
    // };
    // this.signOut = this.signOut.bind(this);
  }

  // componentDidMount() {
  //   signedInService()
  //     .then(user => {
  //       this.setState({
  //         user
  //       });
  //       // console.log("loged in", user);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  // componentDidUpdate(previousProps, previousState) {
  //   if (!this.state.user) this.componentDidMount();
  // }

  // signOut(event) {
  //   event.preventDefault();
  //   signOutService()
  //     .then(() => {
  //       this.setState({
  //         user: null
  //       });
  //       this.props.history.push("/");
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
  render() {
    const user1 = this.props.user;

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          {" "}
          <Link to="/">
            <Image
              alt="logo"
              src="../images/logo-edukids.png"
              className="mr-auto"
              style={{ maxWidth: "100%" }}
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      // <Navbar className="mt-3">
      //   <Col>
      // <Link to="/">
      //   <Image
      //     alt="logo"
      //     src="../images/logo-edukids.png"
      //     className="mr-auto"
      //     style={{ maxWidth: "100%" }}
      //   />
      // </Link>
      //   </Col>
      //   {(!user1 && (
      //     <Fragment>
      //       <Link to="/signin">
      //         <Button variant="outline-light">Sign In</Button>
      //       </Link>
      //     </Fragment>
      //   )) || (
      //     <Fragment>
      //       <Link className="btn text-white" to="/">
      //         Home
      //       </Link>
      //       {user1.role === "Administrator" && (
      //         <Fragment>
      //           <Link
      //             className="btn text-white"
      //             to="/create-interview-question"
      //           >
      //             Create Interview Question
      //           </Link>
      //           <Link className="btn text-white" to="/create-geo">
      //             Create Geography Exercise
      //           </Link>
      //         </Fragment>
      //       )}
      //       <Link className="btn text-white" to="/profile">
      //         Profile
      //       </Link>
      //       <Form onSubmit={this.props.signOut}>
      //         <Button
      //           type="submit"
      //           className="btn btn-outline-light bg-transparent"
      //         >
      //           Sign Out
      //         </Button>
      //       </Form>
      //     </Fragment>
      //   )}
      // </Navbar>
    );
  }
}

export default withRouter(NavbarEdu);
