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
    this.handleCheck = this.handleCheck.bind(this);
  }

  componentDidMount() {
    this.setState({
      exercise: this.state.exercise
    });
  }

  handleCheck(event) {
    const checked = event.currentTarget.value;
    console.log(checked);
    this.setState({
      exercise: {
        ...this.state.exercise,
        ...{ solution: checked }
      }
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
        this.props.history.push("/list-geo-question");
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
            <div key={answer.id}>
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
            </div>
          ))}
          <Form.Group>
            <Form.Label htmlFor="choice" className="text-white">
              Solution
            </Form.Label>
            <br />
            <Form.Check
              className="text-white"
              inline
              name="choice"
              value="1"
              label="1"
              type="radio"
              id="optionA"
              onChange={this.handleCheck}
            />
            <Form.Check
              className="text-white"
              inline
              name="choice"
              label="2"
              value="2"
              type="radio"
              id="optionB"
              onChange={this.handleCheck}
            />
            <Form.Check
              className="text-white"
              inline
              name="choice"
              label="3"
              value="3"
              type="radio"
              id="optionC"
              onChange={this.handleCheck}
            />
            <Form.Check
              className="text-white"
              inline
              name="choice"
              label="4"
              value="4"
              type="radio"
              id="optionD"
              onChange={this.handleCheck}
            />
          </Form.Group>

          <Button type="submit">Add question</Button>
        </Form>
      </Container>
    );
  }
}
