import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import { create } from "./../services/exercise-api";

export default class MathExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        question: "",
        answerOne: "",
        answerTwo: "",
        answerThree: "",
        answerFour: "",
        solution: ""
      }
    };
    this.onExerciseValueChange = this.onExerciseValueChange.bind(this);
    this.createExercise = this.createExercise.bind(this);
  }

  //   onExerciseValueChange(data) {
  //     this.setState({
  //       exercise: {
  //         ...this.state.exercise,
  //         ...data
  //       }
  //     });
  //   }

  createExercise() {
    const exercise = this.state.exercise;
    create(exercise)
      .then(exercise => {
        this.props.history.push(`/exercise/${exercise._id}`);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container>
        <Form>
          <Form.Group>
            <Form.Label htmlFor="math-question">Question</Form.Label>
            <Form.Control
              id="math-question"
              name="question"
              type="text"
              //   onChange={this.onExerciseValueChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="first-value">First Value</Form.Label>
            <Form.Control
              id="first-value"
              type="text"
              name="answerOne"
              value={Math.floor(Math.random() * 1000)}
              //onChange={this.onExerciseValueChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="second-value">Second Value</Form.Label>
            <Form.Control
              id="second-value"
              type="text"
              name="answerTwo"
              value={Math.floor(Math.random() * 1000)}
              //onChange={this.onExerciseValueChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="answer">answerOne</Form.Label>
            <Form.Control
              id="answer"
              type="text"
              name="solution"
              value="answer"
              //onChange={this.onExerciseValueChange}
            />
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </Container>
    );
  }
}
