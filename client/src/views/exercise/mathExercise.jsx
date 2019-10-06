import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    sign: "/",
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
      <Container>
        <Row className="my-5">
          <Col md={4} className="px-5">
            <h1 className="text-info font-weight-lighter">
              SCORE: {this.state.score}
            </h1>
          </Col>

          {/* <Button onClick={this.checkAnswer}>{this.state.score}</Button> */}
        </Row>
        <Row className="my-5 px-5">
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
                className="ml-5 mt-4"
                src={this.state.correct ? "../images/correct.png" : false}
              />
            )) || (
              <Image
                className="ml-5 mt-4"
                src={this.state.wrong ? "../images/wrong.png" : false}
              />
            )}
          </Col>
        </Row>
        {/* <Row className="mt-5">
          <Form.Group>
            <Form.Label htmlFor="answer" className="text-white">
              Answer 456
            </Form.Label>
          </Form.Group>
        </Row> */}
        <Row className="px-5">
          <Button
            variant="outline-info"
            type="submit"
            onClick={this.checkAnswer}
            size="lg"
            className="mr-5"
          >
            Check answer
          </Button>
          <Button
            variant="outline-secondary"
            onClick={this.nextNumberToCaculate}
            size="lg"
          >
            Next
          </Button>
        </Row>
        <Row className="my-5 px-5">
          <h5 className="text-white">
            Solution{" "}
            {this.state.operators[this.state.randomOperator].method(
              this.state.exercise.valueOne,
              this.state.exercise.valueTwo
            )}
          </h5>
        </Row>
      </Container>
    );
  }
}
