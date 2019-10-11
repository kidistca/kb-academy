import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
      })
      .catch(error => {
        console.log(error);
      });
  }

  OnFormValueChange(event) {
    const name = event.target.name;
    const value = event.target.value;
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
    return (
      <Container className="d-flex justify-content-center">
        <Card
          bg="transparent"
          text="info"
          border="info"
          className="my-5  px-3"
          style={{ width: "26rem" }}
        >
          <Card.Body>
            <h1 className="my-3 font-weight-lighter">Edit your profile</h1>
            <Form onSubmit={this.onEdit}>
              <Form.Group>
                <Form.Label htmlFor="user-name" className="mt-3">
                  Name
                </Form.Label>
                <Form.Control
                  id="user-name"
                  name="name"
                  type="text"
                  value={this.state.user.name}
                  onChange={this.OnFormValueChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="user-email" className="mt-3">
                  Email
                </Form.Label>
                <Form.Control
                  id="user-email"
                  type="email"
                  name="email"
                  value={userOne.email}
                  onChange={this.OnFormValueChange}
                />
              </Form.Group>
              {/* <Form.Group>
                <Form.Label htmlFor="user-role" className="mt-3">
                  Role
                </Form.Label>
                <Form.Control
                  id="user-role"
                  type="text"
                  name="role"
                  value={userOne.role}
                  onChange={this.OnFormValueChange}
                />
              </Form.Group> */}
              <Button
                type="submit"
                className="my-3 mr-3"
                variant="outline-light"
              >
                Edit
              </Button>
              <Button
                onClick={this.onDelete}
                className="my-3"
                variant="outline-danger"
              >
                Delete
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
