import React, { Component, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import PrettyFileInput from "../../components/PrettyFileInput";

import Card from "react-bootstrap/Card";

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
          <h1 className="text-white">Loading profile...</h1>
        </div>
      )) || (
        <Container>
          <Row className="d-flex justify-content-center">
            <Card
              bg="transparent"
              text="info"
              border="info"
              className="my-5 px-3"
              style={{ width: "50rem" }}
            >
              <Card.Body className="mt-3">
                <Form>
                  <Row>
                    <Col>
                      <Image
                        //image={"../images/correct.png"}
                        variant="top"
                        src={userOne.image}
                        alt={userOne.name}
                        style={{ maxHeight: "300px", maxWidth: "400px" }}
                      />
                      <Form.Group className="text-center"></Form.Group>
                    </Col>
                    <Col>
                      <h2 className="text-info ">{userOne.name}'s Profile</h2>
                      <h4 className="text-white font-weight-lighter mt-3">
                        {userOne.email}
                      </h4>
                      <h5 className="text-info font-weight-lighter">
                        {userOne.role}
                      </h5>

                      <Link to="/profile-edit">
                        <Button className="my-3 mr-3" variant="outline-light">
                          Edit Profile
                        </Button>
                      </Link>
                      <Button className="pb-0" variant="outline-light">
                        <PrettyFileInput
                          id="profile-photo"
                          type="file"
                          name="image"
                          onChange={this.onFileChange}
                        />
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
            <Row>
              {userOne.role === "Administrator" && (
                <Fragment>
                  <Link to="/create-interview-question">
                    <Button variant="outline-info" className="ml-3">
                      Create Interview Question
                    </Button>
                  </Link>
                  <Link to="/create-geo">
                    <Button variant="outline-info" className="ml-3">
                      Create Geography Exercise
                    </Button>
                  </Link>
                </Fragment>
              )}
              <Link to="/">
                <Button variant="info" className="ml-3">
                  Start an exercise!
                </Button>
              </Link>
            </Row>
          </Row>
        </Container>
      )
    );
  }
}
