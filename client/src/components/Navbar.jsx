import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { signOut as signOutService } from "../services/auth-api";

import { withRouter } from "react-router";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.signOut = this.signOut.bind(this);
  }

  signOut(event) {
    event.preventDefault();
    signOutService()
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <Container>
        <Row>
          <Navbar>
            <Col>
              <Image
                alt="logo"
                src="./logo-edukids.png"
                className="mr-auto"
                style={this.state.imgWidth}
              />
            </Col>
            <Row>
              <Fragment>
                <Link className="btn text-white" to="/signin">
                  Sign In
                </Link>
                <Link className="btn text-white" to="/signup">
                  Sign Up
                </Link>
              </Fragment>
              <Fragment>
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
            </Row>
          </Navbar>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Menu);
