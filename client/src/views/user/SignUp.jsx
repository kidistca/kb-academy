import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

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
      <Container>
        <h1 className="text-white">Sign up</h1>
        <Form onSubmit={this.onSubmitForm}>
          <Form.Group>
            <Form.Label htmlFor="user-name" className="text-white">
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
            <Form.Label htmlFor="user-email" className="text-white">
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
            <Form.Label htmlFor="user-password" className="text-white">
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
          <Button type="submit">Sign up</Button>
        </Form>
      </Container>
    );
  }
}
