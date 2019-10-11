import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import "./SingleInterviewQuestion.scss";
import { Link } from "react-router-dom";

export default class SingleInterviewQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null
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
    if (answeredId) {
      if (answeredId === itemId && itemId === solutionId) {
        return "answer-selected-correct";
      } else if (answeredId === itemId && itemId !== solutionId) {
        return "answer-selected-wrong";
      } else if (answeredId !== solutionId && itemId === solutionId) {
        return "answer-correct";
      }
    }
  }

  render() {
    const questionItem = this.props.question;
    const index = this.props.index;

    return (
      <div key={questionItem._id} className="interview-question">
        <Row>
          <Col className="d-flex justify-content-center">
            <Card
              bg="transparent"
              text="info"
              border="info"
              className="mt-3 px-3"
              style={{ width: "45rem" }}
            >
              <Card.Header
                className=" mt-3 mb-2 text-info text-newline font-weight-light"
                as="h5"
              >
                <strong>{index + 1}</strong>
                {". "}

                {questionItem.question}
              </Card.Header>
              <Card.Body className="text-newline">
                <Row className="mx-3 text-newline">
                  <Button
                    block
                    className={this.chooseClass("A")}
                    variant="outline-light"
                    id="A"
                    onClick={e => this.handleClick(e, questionItem)}
                  >
                    A. {questionItem.optionOne}
                  </Button>

                  <Button
                    block
                    className={this.chooseClass("B")}
                    variant="outline-light"
                    id="B"
                    onClick={e => this.handleClick(e, questionItem)}
                  >
                    B. {questionItem.optionTwo}
                  </Button>

                  <Button
                    block
                    className={this.chooseClass("C")}
                    variant="outline-light"
                    id="C"
                    onClick={e => this.handleClick(e, questionItem)}
                  >
                    C. {questionItem.optionThree}
                  </Button>
                  <Button
                    block
                    className={this.chooseClass("D")}
                    variant="outline-light"
                    id="D"
                    onClick={e => this.handleClick(e, questionItem)}
                  >
                    D. {questionItem.optionFour}
                  </Button>
                </Row>
                <Row className="mx-2 mt-3">
                  <Accordion>
                    <Row>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        bg="transparent"
                      >
                        <Button variant="outline-secondary">
                          View the explanation
                        </Button>
                      </Accordion.Toggle>
                    </Row>
                    <Row>
                      <Accordion.Collapse eventKey="0" bg="transparent">
                        <Card.Body className="text-newline">
                          <p className="text-info font-weight-lighter">
                            Solution: {questionItem.solution}
                          </p>
                          <p className="text-light">
                            {questionItem.description}
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Row>
                  </Accordion>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Link to={"/edit-interview/" + questionItem._id}>
              <Button className="my-3 mr-3" variant="info">
                Edit Question
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}
