import React, { Component } from "react";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import * as AuthServices from "./../services/auth-api";
import { SignedIn as signedInService } from "./../services/auth-api";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
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

  //   handleChange(event) {
  //     const { name, value } = event.target;
  //     this.setState({
  //       [name]: value
  //     });
  //   }
  // onFileChange() {}
  // console.dir(event.target)
  // const data = new.window.FormData();
  // data.append("image", event.target.files[0]);
  // A
  //  }

  render() {
    const userOne = this.state.user;
    console.log(userOne.name);
    return (
      <Container>
        <h1>Your Profile</h1>
        <h2>{userOne.name}</h2>
        <h2>{userOne.email}</h2>
        <h2>{userOne.role}</h2>
        {/* <Form>
          <Form.Group>
            <Form.Label htmlFor="upload-image">Upload Profile Photo</Form.Label>
            <Form.Control
              id="upload-image"
              type="file"
              name="image"
              onChange={this.onFileChange}
            />
          </Form.Group>
          <Button type="submit">Upload Image</Button>
        </Form> */}
      </Container>
    );
  }
}
