import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

import { listGeoQuestion as listGeoQuestionServices } from "../../services/exercise-api";

export default class ListGeoQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionGeoList: [],
      correct: false,
      wrong: false,
      itemObjId1: "",
      itemObjId2: ""
    };
    this.onClickImage = this.onClickImage.bind(this);
  }

  componentDidMount() {
    listGeoQuestionServices()
      .then(questionGeoList => {
        this.setState({
          questionGeoList
        });
        console.log("Exercise GEO question", questionGeoList);
      })
      .catch(error => {
        console.log(error);
      });
  }

  onClickImage(event) {
    let right = false;
    const id = event.target.id;
    const objId = event.target.alt;
    console.log("the clicked event", event.target.alt);
    for (let question of this.state.questionGeoList) {
      if (question.solution === id && question._id === objId) {
        console.log("Corect");
        this.setState({
          ...this.state,
          correct: true,
          wrong: false,
          itemObjId1: objId
        });
      }
      if (question.solution !== id && question._id === objId) {
        console.log("Wrong answer", objId);
        this.setState({
          ...this.state,
          correct: false,
          wrong: true,
          itemObjId2: objId
        });
      }
    }
  }

  render() {
    let correct = this.state.correct;
    let wrong = this.state.wrong;
    let itemObjId1 = this.state.itemObjId1;
    let itemObjId2 = this.state.itemObjId2;
    const questionGeoList = this.state.questionGeoList;
    return (
      (!questionGeoList && (
        <div>
          <h1 className="text-white">Loading exercise...</h1>
        </div>
      )) || (
        <Container className="d-flex justify-content-center">
          <Card
            bg="transparent"
            className="mb-2 px-4 mt-5"
            border="info"
            style={{ width: "45rem" }}
          >
            <Card.Body>
              {questionGeoList.map(questionGeoItem => (
                <div key={questionGeoItem._id}>
                  <Row>
                    <h1 className="font-weight-lighter text-info">
                      Question: {questionGeoItem.question}
                    </h1>
                  </Row>

                  <Row>
                    <Col className="d-flex justify-content-center">
                      <Image
                        src={questionGeoItem.imageOne}
                        alt={questionGeoItem._id}
                        style={{ maxWidth: "50%" }}
                        className="text-white"
                        id="1"
                        onClick={this.onClickImage}
                      />
                      <Image
                        src={questionGeoItem.imageTwo}
                        alt={questionGeoItem._id}
                        style={{ maxWidth: "50%" }}
                        className="text-white"
                        id="2"
                        onClick={this.onClickImage}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="d-flex justify-content-center">
                      <Image
                        src={questionGeoItem.imageThree}
                        alt={questionGeoItem._id}
                        style={{ maxWidth: "50%" }}
                        className="text-white"
                        id="3"
                        onClick={this.onClickImage}
                      />
                      <Image
                        src={questionGeoItem.imageFour}
                        alt={questionGeoItem._id}
                        style={{ maxWidth: "50%" }}
                        className="text-white"
                        id="4"
                        onClick={this.onClickImage}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Accordion>
                      <Row>
                        <Col>
                          <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            bg="transparent"
                          >
                            <Button variant="outline-secondary" size="sm">
                              Solution
                            </Button>
                          </Accordion.Toggle>
                        </Col>
                        <Col>
                          <Accordion.Collapse eventKey="0" bg="transparent">
                            <Card.Body>
                              <h5 className="text-secondary font-weight-lighter">
                                {questionGeoItem.solution}
                              </h5>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Col>
                        <Col>
                          {(correct && itemObjId1 === questionGeoItem._id && (
                            <Image
                              className="ml-3 mt-4"
                              src={
                                correct
                                  ? "../images/correct.png"
                                  : "../images/wrong.png"
                              }
                            />
                          )) ||
                            (wrong &&
                              (itemObjId2 === questionGeoItem._id && (
                                <Image
                                  className="ml-3 mt-4"
                                  src={
                                    wrong
                                      ? "../images/wrong.png"
                                      : "../images/correct.png"
                                  }
                                />
                              )))}
                        </Col>
                      </Row>
                    </Accordion>
                  </Row>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Container>
      )
    );
  }
}
