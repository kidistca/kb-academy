import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

import { signIn as signInService } from "./../../services/auth-api";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  onSubmitForm(event) {
    event.preventDefault();
    const { email, password } = this.state;
    signInService({ email, password })
      .then(user => {
        this.props.history.push("/profile");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container className="d-flex justify-content-center">
        <Card bg="transparent" text="info" border="info" className="my-5  px-3">
          <Card.Body>
            <h1 className="my-3 font-weight-lighter">
              Find a challenge for you!
            </h1>
            <Form onSubmit={this.onSubmitForm}>
              <Form.Group>
                <Form.Label htmlFor="user-email" className="mt-3">
                  Email
                </Form.Label>
                <Form.Control
                  id="user-email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="user-password" className="mt-3">
                  Password
                </Form.Label>
                <Form.Control
                  id="user-password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button type="submit" className="mt-3" variant="info">
                Sign in
              </Button>
              <p className="text-info mt-5 mb-3">
                New in Edukids?{" "}
                <Link className="text-info" to="/signup">
                  Create account
                </Link>
              </p>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

//client - services- authentication axios,
//        views - forms with handle changes
//server - controllers -router contrroller
// routes - login
