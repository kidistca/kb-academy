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
        answerOne: Math.floor(Math.random() * 1000),
        answerTwo: Math.floor(Math.random() * 1000),
        solution: ""
      },
      score: 0
    };
    this.createExercise = this.createExercise.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.scoreCounter = this.scoreCounter.bind(this);
  }

  // onEdit(event) {
  //   event.preventDefault();
  //   const { name, email } = this.state.exercise;
  //   AuthServices.edit({ name, email })
  //     .then(user => {
  //       this.props.history.push("/profile");
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  createExercise(event) {
    event.preventDefault();
    const { solution } = this.state.exercise;
    createExercise({ solution })
      .then(exercise => {
        this.props.history.push("/create-exercise");
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log("first-value", value);
    this.setState({
      // exercise: { solution: value }
      exercise: { ...this.state.exercise, ...{ solution: event.target.value } }
    });
  }

  scoreCounter() {
    this.setState({
      score: this.state.score + 1
    });
  }

  render() {
    return (
      <Container>
        <Button onClick={this.scoreCounter}>{this.state.score}</Button>
        <Form onSubmit={this.createExercise}>
          <Form.Group>
            <Form.Label htmlFor="math-question">Question</Form.Label>
            <Form.Control
              id="math-question"
              name="question"
              type="text"
              placeholder="Do addition"
              //   onChange={this.onExerciseValueChange}
            />
          </Form.Group>
          <Form.Group>
            {/* <Form.Label htmlFor="first-value">First Value</Form.Label> */}
            <Form.Control
              style={{ borderWidth: "0px", border: "none", background: "none" }}
              id="first-value"
              type="text"
              name="answerOne"
              value={this.state.exercise.answerOne}
              //onChange={this.onExerciseValueChange}
            />
          </Form.Group>

          <Form.Group>
            {/* <Form.Label htmlFor="second-value">Second Value</Form.Label> */}
            <Form.Control
              style={{ borderWidth: "0px", border: "none", background: "none" }}
              id="second-value"
              type="text"
              name="answerTwo"
              value={this.state.exercise.answerTwo}
              // onChange={this.onExerciseValueChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="answer">Solution</Form.Label>
            <Form.Control
              id="answer"
              type="text"
              name="solution"
              value={
                this.state.exercise.answerOne + this.state.exercise.answerOne
              }
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type="submit">Calculate</Button>
          <br />
          <br />
        </Form>
        <Form onSubmit="">
          <Button type="submit">Next</Button>
        </Form>
      </Container>
    );
  }
}
