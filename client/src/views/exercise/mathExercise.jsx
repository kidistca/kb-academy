import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card, { CardBody } from "react-bootstrap/Card";

// import { createExercise } from "./../../services/exercise-api";
let operators = [
  {
    sign: "+",
    method: function(a, b) {
      return a + b;
    }
  },
  {
    sign: "-",
    method: function(a, b) {
      return a - b;
    }
  },
  {
    sign: "x",
    method: function(a, b) {
      return a * b;
    }
  },
  {
    sign: "÷",
    method: function(a, b) {
      return a / b;
    }
  }
];

export default class MathExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: {
        question: "",
        valueOne: Math.floor(Math.random() * 1000),
        valueTwo: Math.floor(Math.random() * 1000),
        answer: 0,
        solution: 0
      },
      score: 0,
      correct: false,
      wrong: false,
      operators: operators,
      randomOperator: Math.floor(Math.random() * operators.length)
    };

    this.handleAnswer = this.handleAnswer.bind(this);
    this.scoreCounter = this.scoreCounter.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.nextNumberToCaculate = this.nextNumberToCaculate.bind(this);
  }

  nextNumberToCaculate() {
    this.setState({
      exercise: {
        question: "",
        valueOne: Math.floor(Math.random() * 1000),
        valueTwo: Math.floor(Math.random() * 1000),
        answer: 0,
        solution: 0
      },
      correct: false,
      wrong: false,
      operators: operators,
      randomOperator: Math.floor(Math.random() * operators.length)
    });
  }

  handleAnswer(event) {
    this.setState({
      exercise: {
        ...this.state.exercise,
        answer: event.target.valueAsNumber
      }
    });
    console.log("STATE answer", this.state.exercise.answer);
  }

  checkAnswer() {
    const answer1 = this.state.exercise.answer;
    const solution = this.state.operators[this.state.randomOperator].method(
      this.state.exercise.valueOne,
      this.state.exercise.valueTwo
    );
    console.log("solu", solution);
    if (answer1 === solution) {
      this.setState({
        score: this.state.score + 5,
        correct: true
      });
    } else {
      this.setState({
        score: this.state.score,
        wrong: true
      });
    }
  }

  scoreCounter() {
    this.setState({
      score: this.state.score + 5
    });
  }

  render() {
    return (
      <Container className="my-4">
        <Card bg="transparent" className="mb-2 border-0">
          <Card.Body className="d-flex justify-content-center">
            <Row>
              <h1 className="text-info font-weight-lighter">
                SCORE: {this.state.score}
              </h1>
            </Row>
          </Card.Body>
        </Card>
        <Card bg="transparent" border="info p-4">
          <Card.Body>
            <Row>
              <h5 className="text-white mr-4 display-1 font-weight-lighter">
                {this.state.exercise.valueOne}
              </h5>
              <h6 className="text-white mr-4 display-1 font-weight-lighter">
                {this.state.operators[this.state.randomOperator].sign}
              </h6>
              <h5 className="text-white mr-5 display-1 font-weight-lighter">
                {this.state.exercise.valueTwo} ={" "}
              </h5>
              <Form.Control
                size="lg"
                id="answer"
                type="number"
                name="answer"
                value={this.state.exercise.answer}
                onChange={this.handleAnswer}
                style={{
                  fontSize: "80px",
                  width: "20rem",
                  height: "6rem",
                  background: "transparent"
                }}
                className="text-white font-weight-lighter mt-3"
              />
              <Col>
                {(this.state.correct && (
                  <Image
                    className="ml-3 mt-4"
                    src={this.state.correct ? "../images/correct.png" : false}
                  />
                )) || (
                  <Image
                    className="ml-3 mt-4"
                    src={this.state.wrong ? "../images/wrong.png" : false}
                  />
                )}
              </Col>
            </Row>

            <Row>
              <Accordion>
                <Row>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    bg="transparent"
                  >
                    <Button variant="outline-secondary" size="sm">
                      Get the solution
                    </Button>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0" bg="transparent">
                    <Card.Body>
                      <h5 className="text-secondary font-weight-lighter">
                        {this.state.operators[this.state.randomOperator].method(
                          this.state.exercise.valueOne,
                          this.state.exercise.valueTwo
                        )}
                      </h5>
                    </Card.Body>
                  </Accordion.Collapse>
                </Row>
              </Accordion>
            </Row>
          </Card.Body>
        </Card>
        <Card bg="transparent" className="border-0">
          <Card.Body>
            <Row>
              <Button
                variant="outline-info"
                type="submit"
                onClick={this.checkAnswer}
                size="lg"
                className="ml-auto mb-3"
              >
                Check answer
              </Button>
            </Row>
            <Row>
              <Button
                variant="outline-light"
                onClick={this.nextNumberToCaculate}
                size="lg"
                className="ml-auto"
              >
                Next
              </Button>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
