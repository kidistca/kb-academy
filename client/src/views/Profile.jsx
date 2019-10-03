import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import * as AuthServices from "./../services/auth-api";
// import { signedIn as signedInService } from "./../services/auth-api";
// import { uploadPicture as uploadService } from "./../services/auth-api";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.onFileChange = this.onFileChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.onSubmitFormEdit = this.onSubmitFormEdit.bind(this);
  }

  componentDidMount() {
    AuthServices.signedIn()
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
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  onFileChange(event) {
    // console.dir(event.target)
    event.preventDefault();
    const data = new window.FormData();
    data.append("image", event.target.files[0]);
    AuthServices.uploadPicture(data)
      .then(user => {
        console.log(user);
        this.setState({
          user: null
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // onSubmitFormEdit(event) {
  //   event.preventDefault();
  //   const { name, email } = this.state.user;
  //   AuthServices.edit(name, email)
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
              <h3>{userOne.name}</h3>
              <h3>{userOne.email}</h3>
              <h3>{userOne.role}</h3>
              <Link to="/profile-edit">
                <Button>Change Profile</Button>
              </Link>
              {/* <Button>Delet</Button> */}
            </Col>
            <Col>
              <Form>
                <Image
                  src={userOne.image}
                  alt={userOne.name}
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
                {/* <Button type="submit">Upload Image</Button> */}
              </Form>
            </Col>
          </Row>
        </Container>
      )
    );
  }
}
