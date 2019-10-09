import React, { Component } from "react";
import "./Home.css";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

export default class HomeView extends Component {
  render() {
    return (
      <div className="Background">
        <Container>
          <Row className="my-3">
            <Col sm={4} className="my-5">
              <Link to="/create-exercise">
                <Image
                  alt="logo"
                  src="../images/math-exercise.png"
                  className="mr-auto"
                  style={{ maxWidth: "100%" }}
                />
              </Link>
              <Accordion>
                <Card style={{ width: "20rem" }} bg="transparent" text="white">
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    bg="transparent"
                  >
                    <Link to="/create-exercise">
                      <Button variant="outline-light" className="mr-2">
                        Go!
                      </Button>
                    </Link>
                    <Button variant="outline-light">Read more</Button>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0" bg="transparent">
                    <Card.Body>
                      Hello! Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
            <Col sm={4} className="my-5">
              <Link to="/list-geo-question">
                <Image
                  alt="logo"
                  src="../images/geo-exercise.png"
                  className="mr-auto"
                  style={{ maxWidth: "100%" }}
                />
              </Link>
              <Accordion>
                <Card style={{ width: "20rem" }} bg="transparent" text="white">
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    bg="transparent"
                  >
                    <Link to="/list-geo-question">
                      <Button variant="outline-light" className="mr-2">
                        Go!
                      </Button>
                    </Link>
                    <Button variant="outline-light">Read more</Button>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0" bg="transparent">
                    <Card.Body>
                      Hello! Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
            <Col sm={4} className="my-5">
              <Link to="/list-interview-question">
                <Image
                  alt="logo"
                  src="../images/webdev-exercise.png"
                  className="mr-auto"
                  style={{ maxWidth: "100%" }}
                />
              </Link>
              <Accordion>
                <Card style={{ width: "20rem" }} bg="transparent" text="white">
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    bg="transparent"
                  >
                    <Link to="/list-interview-question">
                      <Button variant="outline-light" className="mr-2">
                        Go!
                      </Button>
                    </Link>
                    <Button variant="outline-light">Read more</Button>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0" bg="transparent">
                    <Card.Body>
                      Hello! Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>

          {/* <br />
          <br />
          <Link to="/create-exercise">
            <Button variant="outline-info" size="lg">
              Math Exercise
            </Button>
          </Link>
          <br />
          <br />
          <Link to="/multiple-choice">
            <Button variant="outline-info" size="lg">
              Multiple Choice - temp
            </Button>
          </Link>
          <Link to="/create-interview-question">
            <Button variant="outline-info" size="lg">
              Create Interview Question
            </Button>
          </Link>
          <Link to="/list-interview-question">
            <Button variant="outline-info" size="lg">
              List of Interview Question
            </Button>
          </Link>
          <Link to="/create-geo">
            <Button variant="outline-info" size="lg">
              Create Geography Questions
            </Button>
          </Link>
          <Link to="/list-geo-question">
            <Button variant="outline-info" size="lg">
              List of Geography Question
            </Button>
          </Link> */}
        </Container>
      </div>
    );
  }
}
