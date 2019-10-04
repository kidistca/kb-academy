import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import { createExercise } from "./../../services/exercise-api";

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
      score: 0
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
      }
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
    const solution =
      this.state.exercise.valueOne + this.state.exercise.valueTwo;
    console.log("answer from checkanswer", answer1, "solution", solution);
    console.log(typeof answer1, typeof solution);
    if (answer1 === solution) {
      this.setState({
        score: this.state.score + 1
      });
      alert("Right answer", answer1);
    } else {
      alert("Yo, its addition- Wronggggg");
    }
  }

  scoreCounter() {
    this.setState({
      score: this.state.score + 1
    });
  }

  render() {
    return (
      <Container>
        <Button onClick={this.checkAnswer}>{this.state.score}</Button>
        <h6 className="text-white">Do addition</h6>
        <h5 className="text-white">{this.state.exercise.valueOne}</h5>
        <h5 className="text-white">{this.state.exercise.valueTwo}</h5>
        <Form.Group>
          <Form.Label htmlFor="answer" className="text-white">
            Answer
          </Form.Label>
          <Form.Control
            id="answer"
            type="number"
            name="answer"
            placeholder="Answer"
            onChange={this.handleAnswer}
          />
        </Form.Group>
        <h5 className="text-white">Solution</h5>
        <h5 className="text-white">
          {this.state.exercise.valueOne + this.state.exercise.valueTwo}
        </h5>
        <Button type="submit" onClick={this.checkAnswer} className="text-white">
          Check answer
        </Button>
        <br />
        <br />
        <Button onClick={this.nextNumberToCaculate} className="text-white">
          Next
        </Button>
      </Container>
    );
  }
}
