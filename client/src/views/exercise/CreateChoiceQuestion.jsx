import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { multipleChoice as interviewQuestionServices } from "./../../services/exercise-api";

export default class CreateChoiceQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      optionOne: "",
      optionTwo: "",
      optionThree: "",
      optionFour: "",
      solution: "",
      description: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  onSubmitForm(event) {
    event.preventDefault();
    const { question, optionOne, optionTwo } = this.state;
    interviewQuestionServices({ question, optionOne, optionTwo })
      .then(user => {
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container>
        <h1 className="text-white">Interview Question</h1>
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
          <Form.Group>
            <Form.Label htmlFor="option-one" className="text-white">
              A
            </Form.Label>
            <Form.Control
              id="option-one"
              name="optionOne"
              type="text"
              placeholder="Option 1"
              value={this.state.optionOne}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="option-two" className="text-white">
              B
            </Form.Label>
            <Form.Control
              id="option-two"
              name="optionTwo"
              type="text"
              placeholder="Option 2"
              value={this.state.optionTwo}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type="submit">Add question</Button>
        </Form>
      </Container>
    );
  }
}
