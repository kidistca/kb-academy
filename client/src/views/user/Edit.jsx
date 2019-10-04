import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as AuthServices from "./../../services/auth-api";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: ""
      }
    };
    this.OnFormValueChange = this.OnFormValueChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    AuthServices.signedIn()
      .then(user => {
        this.setState({
          user: {
            ...user
          }
        });
        console.log("loged in", user);
      })
      .catch(error => {
        console.log(error);
      });
  }

  OnFormValueChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log("this is my name", name, value);
    this.setState({
      user: { ...this.state.user, ...{ [name]: value } }
    });
  }

  onEdit(event) {
    event.preventDefault();
    const { name, email } = this.state.user;
    AuthServices.edit({ name, email })
      .then(user => {
        this.props.history.push("/profile");
      })
      .catch(error => {
        console.log(error);
      });
  }

  onDelete() {
    AuthServices.remove()
      .then(user => {
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const userOne = this.state.user;
    console.log(userOne.name);
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={this.onEdit}>
              <Form.Group>
                <Form.Label htmlFor="user-name">Name</Form.Label>
                <Form.Control
                  id="user-name"
                  name="name"
                  type="text"
                  value={this.state.user.name}
                  onChange={this.OnFormValueChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="user-email">Email</Form.Label>
                <Form.Control
                  id="user-email"
                  type="email"
                  name="email"
                  value={userOne.email}
                  onChange={this.OnFormValueChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="user-role">Role</Form.Label>
                <Form.Control
                  id="user-role"
                  type="text"
                  name="role"
                  value={userOne.role}
                  onChange={this.OnFormValueChange}
                />
              </Form.Group>
              <Button type="submit">Edit</Button>
            </Form>
            <Button onClick={this.onDelete} className="btn-danger">
              Delete
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
