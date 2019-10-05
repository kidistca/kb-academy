import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { signOut as signOutService } from "../services/auth-api";
import { signedIn as signedInService } from "../services/auth-api";

import { withRouter } from "react-router";

class NavbarEdu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    signedInService()
      .then(user => {
        this.setState({
          user
        });
        console.log("loged in", user);
      })
      .catch(error => {
        console.log(error);
      });
  }
  // componentDidUpdate() {
  //   signedInService()
  //     .then(user => {
  //       this.setState({
  //         user
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  signOut(event) {
    event.preventDefault();
    signOutService()
      .then(() => {
        this.setState({
          user: null
        });
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const user1 = this.state.user;

    return (
      <Navbar>
        <Col>
          <Image
            alt="logo"
            src="../images/logo-edukids.png"
            className="mr-auto"
            style={{ maxWidth: "100%" }}
          />
        </Col>
        {(!user1 && (
          <Fragment>
            <Link className="btn text-white" to="/signin">
              Sign In
            </Link>
          </Fragment>
        )) || (
          <Fragment>
            <Link className="btn text-white" to="/">
              Home
            </Link>
            <Link className="btn text-white" to="/profile">
              Profile
            </Link>
            <Form onSubmit={this.signOut}>
              <Button
                type="submit"
                className="btn btn-outline-light bg-transparent"
              >
                Sign Out
              </Button>
            </Form>
          </Fragment>
        )}
      </Navbar>
    );
  }
}

export default withRouter(NavbarEdu);
