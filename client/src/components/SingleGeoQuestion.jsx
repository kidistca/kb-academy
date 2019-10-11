import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import "./SingleGeoQuestion.scss";

// import { listGeoQuestion as listGeoQuestionServices } from "../../services/exercise-api";

export default class SingleGeoQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null,
      src: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.chooseClass = this.chooseClass.bind(this);
  }

  handleClick(event, item) {
    if (!this.state.answer) {
      const correct = event.target.id === item.solution ? true : false;
      this.setState({
        ...this.state,
        correct,
        answer: event.target.id
      });
    }
  }

  chooseClass(itemId) {
    const answeredId = this.state.answer;
    const solutionId = this.props.question.solution;
    let src = "";
    if (answeredId) {
      if (answeredId === itemId && itemId === solutionId) {
        // return "answer-selected-correct";
        this.setState({
          src: "../images/correct.png"
        });
      } else if (answeredId === itemId && itemId !== solutionId) {
        return "answer-selected-wrong";
      } else if (answeredId !== solutionId && itemId === solutionId) {
        return "answer-correct";
      }
    }
  }

  render() {
    const questionGeoItem = this.props.question;
    const index = this.props.index;
    return (
      <div key={questionGeoItem._id} className="interview-question">
        <Card
          bg="transparent"
          className="mb-2 px-4 mt-5"
          border="info"
          style={{ width: "45rem" }}
        >
          <Row>
            <Col sm={9}>
              <h4 className="font-weight-lighter text-info">
                <strong as="h2">{index + 1}. </strong>
                {questionGeoItem.question}
              </h4>
            </Col>
            <Image width="35px" src={this.state.src} />
            width="35px" />
            <Col className="d-flex justify-content-center mt-2">
              <Image
                src={questionGeoItem.imageOne}
                alt={questionGeoItem._id}
                style={{ maxWidth: "50%" }}
                className={this.chooseClass("1")}
                id="1"
                onClick={e => this.handleClick(e, questionGeoItem)}
              />
              <Image
                src={questionGeoItem.imageTwo}
                alt={questionGeoItem._id}
                style={{ maxWidth: "50%" }}
                className={this.chooseClass("2")}
                id="2"
                onClick={e => this.handleClick(e, questionGeoItem)}
              />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <Image
                src={questionGeoItem.imageThree}
                alt={questionGeoItem._id}
                style={{ maxWidth: "50%" }}
                className={this.chooseClass("3")}
                id="3"
                onClick={e => this.handleClick(e, questionGeoItem)}
              />
              <Image
                src={questionGeoItem.imageFour}
                alt={questionGeoItem._id}
                style={{ maxWidth: "50%" }}
                className={this.chooseClass("4")}
                id="4"
                onClick={e => this.handleClick(e, questionGeoItem)}
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
                  ></Accordion.Toggle>
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
              </Row>
            </Accordion>
          </Row>
        </Card>
      </div>
    );
  }
}
