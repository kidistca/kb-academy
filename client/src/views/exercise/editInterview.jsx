import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import * as ExerciseServices from "./../../services/exercise-api";

export default class EditInterview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: {
        question: "",
        optionOne: "",
        optionTwo: "",
        optionThree: "",
        optionFour: "",
        solution: "",
        description: ""
      }
    };

    this.OnFormValueChange = this.OnFormValueChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    ExerciseServices.interviewQuestionDetail(id)
      .then(exercise => {
        this.setState({
          exercise
        });
        console.log("Exercise question", exercise);
      })
      .catch(error => {
        console.log(error);
      });
  }

  // handleChange(event) {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // }

  OnFormValueChange(event) {
    console.log("VALUE", event.target.value);
    console.log("name", event.target.name);
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ exercise: { ...this.state.exercise, [name]: value } });
  }

  onEdit(event) {
    event.preventDefault();
    const id = this.props.match.params.id;
    const exercise = this.state.exercise;
    console.log("ID", id);
    ExerciseServices.editInterview(id, exercise)
      .then(response => {
        this.props.history.push("/list-interview-question");
        console.log("RESPONSE", response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  //   onDelete() {
  //     AuthServices.remove()
  //       .then(user => {
  //         this.props.history.push("/");
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }

  render() {
    //const exercise = this.state.exercise;

    return (
      <Container className="d-flex justify-content-center">
        <Card
          bg="transparent"
          text="info"
          border="info"
          className="my-5  px-3"
          style={{ width: "45rem" }}
        >
          <Card.Body>
            <h1 className="my-3 font-weight-lighter">
              WebDev Interview Question
            </h1>
            <Form onSubmit={this.onEdit}>
              <Form.Group>
                <Form.Label htmlFor="question" className="mt-3">
                  Question
                </Form.Label>
                <Form.Control
                  id="question"
                  name="question"
                  type="text"
                  as="textarea"
                  rows="5"
                  placeholder="Type your question here"
                  value={this.state.exercise.question}
                  onChange={this.OnFormValueChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="option-one">Answer A</Form.Label>
                <Form.Control
                  id="option-one"
                  name="optionOne"
                  as="textarea"
                  rows="2"
                  type="text"
                  placeholder="Type an answer"
                  value={this.state.exercise.optionOne}
                  onChange={this.OnFormValueChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="option-two">Answer B</Form.Label>
                <Form.Control
                  id="option-two"
                  name="optionTwo"
                  type="text"
                  as="textarea"
                  rows="2"
                  placeholder="Type an answer"
                  value={this.state.exercise.optionTwo}
                  onChange={this.OnFormValueChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="option-three">Answer C</Form.Label>
                <Form.Control
                  id="option-three"
                  name="optionThree"
                  type="text"
                  as="textarea"
                  rows="2"
                  placeholder="Type an answer"
                  value={this.state.exercise.optionThree}
                  onChange={this.OnFormValueChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="option-four">Answer D</Form.Label>
                <Form.Control
                  id="option-four"
                  name="optionFour"
                  type="text"
                  as="textarea"
                  rows="2"
                  placeholder="Type an answer"
                  value={this.state.exercise.optionFour}
                  onChange={this.OnFormValueChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="choice" className="mt-3 mr-5">
                  Choose the right answer:
                </Form.Label>
                <Form.Check
                  label="A"
                  className="text-info"
                  inline
                  name="choice"
                  value="A"
                  type="radio"
                  id="optionA"
                  onChange={this.OnFormValueChange}
                />
                <Form.Check
                  label="B"
                  className="text-info"
                  inline
                  name="choice"
                  value="B"
                  type="radio"
                  id="optionB"
                  onChange={this.OnFormValueChange}
                />
                <Form.Check
                  label="C"
                  className="text-info"
                  inline
                  name="choice"
                  value="C"
                  type="radio"
                  id="optionC"
                  onChange={this.OnFormValueChange}
                />
                <Form.Check
                  label="D"
                  className="text-info"
                  inline
                  name="choice"
                  value="D"
                  type="radio"
                  id="optionD"
                  onChange={this.OnFormValueChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="option-description" className="text-info">
                  Explanation
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows="5"
                  id="option-description"
                  name="description"
                  type="text"
                  placeholder="Please write the solution explanation"
                  value={this.state.exercise.description}
                  onChange={this.OnFormValueChange}
                />
              </Form.Group>
              <Button
                type="submit"
                variant="outline-info"
                className="my-4"
                block
              >
                Edit Question
              </Button>
            </Form>
            {/* <GetInterviewQuestion questions={this.QuestionList} /> */}
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
