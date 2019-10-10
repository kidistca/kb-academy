import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import Row from "react-bootstrap/Row";

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
      <Navbar bg="transparent" expand="lg" className="navbar-dark mt-4">
        <Row>
          <Link to="/">
            <Image
              alt="logo"
              src="../images/logo-edukids.png"
              className="mr-auto"
              style={{ maxWidth: "100%" }}
            />
          </Link>
        </Row>
        <div className="ml-auto mt-4">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {(!user1 && (
              <Fragment>
                <Link to="/signin">
                  <Button variant="outline-light">Sign In</Button>
                </Link>
              </Fragment>
            )) || (
              <Fragment>
                <Link to="/profile">
                  <Button variant="outline-info text-white border-0 mr-2 mb-2">
                    Hi, {user1.name}
                  </Button>
                </Link>
                {user1.role === "Administrator" && (
                  <Fragment>
                    <Link to="/create-interview-question">
                      <Button variant="outline-info text-white border-0 mr-2 mb-2">
                        Create Interview Question
                      </Button>
                    </Link>
                    <Link to="/create-geo">
                      <Button variant="outline-info text-white border-0 mr-2 mb-2">
                        Create Geography Exercise
                      </Button>
                    </Link>
                  </Fragment>
                )}

                <Form onSubmit={this.props.signOut}>
                  <Button
                    type="submit"
                    className="btn btn-outline-light bg-transparent mb-2"
                  >
                    Sign Out
                  </Button>
                </Form>
              </Fragment>
            )}
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default withRouter(NavbarEdu);
