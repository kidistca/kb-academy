import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { signUp as signUpService } from "./../../services/auth-api";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    const { name, email, password } = this.state;
    signUpService({ name, email, password })
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
        <Form onSubmit={this.onSubmitForm}>
          <Card
            bg="transparent"
            text="info"
            border="info"
            className="my-5  px-3"
          >
            <Card.Body>
              <h1 className="my-3 font-weight-lighter">
                Discover our challanges!
              </h1>
              <Form.Group>
                <Form.Label htmlFor="user-name" className="mt-3">
                  Name
                </Form.Label>
                <Form.Control
                  id="user-name"
                  name="name"
                  type="text"
                  placeholder="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Form.Group>
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
                <Form.Label htmlFor="user-password" className="mt-0">
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
                Sign up
              </Button>
              <p className="text-info mt-5 mb-3">
                Already have an account?{" "}
                <Link className="text-info" to="/signin">
                  Sign in
                </Link>
              </p>
            </Card.Body>
          </Card>
        </Form>
      </Container>
    );
  }
}
