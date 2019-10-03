import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import * as AuthServices from "./../services/auth-api";
import { signedIn as signedInService } from "./../services/auth-api";
import { uploadPicture as uploadService } from "./../services/auth-api";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.onFileChange = this.onFileChange.bind(this);
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
  onFileChange(event) {
    // console.dir(event.target)
    event.preventDefault();
    const data = new window.FormData();
    data.append("image", event.target.files[0]);
    uploadService(data)
      .then(user => {
        console.log(user);
        this.setState({
          user
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // onSubmitForm(event) {
  //   event.preventDefault();
  //   const { name, email, password } = this.state;
  //   signUpService({ name, email, password })
  //     .then(user => {
  //       this.props.history.push("/profile");
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  render() {
    const userOne = this.state.user;
    // console.log(userOne.name);
    return (
      (!userOne && (
        <div>
          <h1>Loading profile...</h1>
        </div>
      )) || (
        <Container>
          <Row>
            <Col>
              <h1>Your Profile</h1>
              <h2>{userOne.name}</h2>
              <h2>{userOne.email}</h2>
              <h2>{userOne.role}</h2>
              <Button>Edit</Button>
              <Button>Delet</Button>
            </Col>
            <Col>
              <Form onSubmit={this.onFileChange}>
                <Image
                  src={this.state.user.image}
                  alt={this.state.user.name}
                  style={{ maxWidth: "100%" }}
                />
                <Form.Group>
                  <Form.Label htmlFor="profile-photo">Profile Photo</Form.Label>
                  <Form.Control
                    id="profile-photo"
                    type="file"
                    name="image"
                    onChange={this.onFileChange}
                  />
                </Form.Group>
                <Button type="submit">Upload Image</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      )
    );
  }
}
