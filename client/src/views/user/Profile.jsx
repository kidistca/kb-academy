import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import * as AuthServices from "./../../services/auth-api";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.onFileChange = this.onFileChange.bind(this);
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

  onFileChange(event) {
    const data = new window.FormData();
    data.append("image", event.target.files[0]);
    AuthServices.uploadPicture(data)
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

  render() {
    const userOne = this.state.user;
    return (
      (!userOne && (
        <div>
          <h1>Loading profile...</h1>
        </div>
      )) || (
        <Container>
          <Row>
            <Col>
              <h3 className="text-white">{userOne.name}</h3>
              <h3 className="text-white">{userOne.email}</h3>
              <h3 className="text-white">{userOne.role}</h3>
              <Link to="/profile-edit">
                <Button>Change Profile</Button>
              </Link>
              <br />
              <br />
              <Link to="/create-exercise">
                <Button>Please create good exercise</Button>
              </Link>
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
