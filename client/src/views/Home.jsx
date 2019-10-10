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
                      The Math exercises are created to be used as a tool to
                      develop your Math skills. Challenge yourself with four of
                      the fundamental operations of elementary mathematics.
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
                      The geography exercises are created to be used as a tool
                      to gage your geography skill by answering interactive
                      geography questions. This exercises are expected to be fun
                      and entertaining.
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
                      The WebDev interview questioner is intended to be used as
                      a tool to prep Web Developer to employment market and
                      broaden your knowledge horizons. The questioner includes
                      both technical and behavioural questions.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
