import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

import * as ExercServices from "../../services/exercise-api";
import { geoQuestion } from "./../../services/exercise-api";
import { listGeoQuestionServices } from "./../../services/exercise-api";

export default class CreateGeoQuestion extends Component {
  constructor(props) {
    super(props);
    const answers = [...new Array(4)].fill(null).map((value, index) => ({
      id: `image-${index + 1}`,
      value: null
    }));
    this.state = {
      exercise: {
        question: "",
        solution: "",
        answers
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  componentDidMount() {
    this.setState({
      exercise: this.state.exercise
    });
  }

  handleChangeImage(event) {
    const answers = this.state.exercise.answers.map(answer => {
      if (answer.id === event.target.name) {
        return {
          id: answer.id,
          value: event.target.files[0]
        };
      } else {
        return answer;
      }
    });

    this.setState({
      exercise: {
        ...this.state.exercise,
        answers
      }
    });
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      exercise: { ...this.state.exercise, [name]: value }
    });
  }

  onSubmitForm(event) {
    event.preventDefault();
    const exercise = this.state.exercise;
    console.log("what does exercise have", exercise);
    geoQuestion(exercise)
      .then(exercise => {
        // this.setState({
        //   exercise: {
        //     ...this.state.exercise,
        //     imageOne: event.target.files[0]
        //   }
        // });
        this.props.history.push("/");
      })
      .catch(error => {
        console.log("this is the error", error);
      });
  }

  render() {
    const exercise = this.state.exercise;
    return (
      <Container>
        <h1 className="text-white">Geography Question</h1>
        <Form onSubmit={this.onSubmitForm}>
          <Form.Group>
            <Form.Label htmlFor="question" className="text-white">
              Question
            </Form.Label>
            <Form.Control
              id="question"
              name="question"
              type="text"
              placeholder="Question"
              value={this.state.question}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Image
            src={this.state.imageOne}
            alt="Image-One"
            style={{ maxWidth: "100%" }}
            className="text-white"
          />
          {this.state.exercise.answers.map(answer => (
            <Form.Group>
              {/* <label for="geo-one-image" className="file-input text-white">
                  <span>Image One</span>
                </label> */}
              <Form.Control
                id="geo-one-image"
                type="file"
                name={answer.id}
                onChange={this.handleChangeImage}
                className="text-white"
              />
            </Form.Group>
          ))}
          <Button type="submit">Add question</Button>
        </Form>
      </Container>
    );
  }
}
