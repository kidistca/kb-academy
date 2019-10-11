import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Radio from "react-bootstrap";

import { interviewQuestion as interviewQuestionServices } from "../../services/exercise-api";
//import GetInterviewQuestion from "../../views/exercise/GetInterviewQuestion";

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
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleCheck(event) {
    const checked = event.currentTarget.value;
    this.setState({
      ...this.state,
      solution: checked
    });
  }

  onSubmitForm(event) {
    event.preventDefault();
    const {
      question,
      optionOne,
      optionTwo,
      optionThree,
      optionFour,
      solution,
      description
    } = this.state;
    interviewQuestionServices({
      question,
      optionOne,
      optionTwo,
      optionThree,
      optionFour,
      solution,
      description
    })
      .then(user => {
        this.props.history.push("/list-interview-question");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // const question = this.state.question;
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
            <Form onSubmit={this.onSubmitForm}>
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
                  required
                  placeholder="Type your question here"
                  value={this.state.question}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="option-one">Answer A</Form.Label>
                <Form.Control
                  id="option-one"
                  name="optionOne"
                  type="text"
                  as="textarea"
                  rows="2"
                  required
                  placeholder="Type an answer"
                  value={this.state.optionOne}
                  onChange={this.handleChange}
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
                  required
                  placeholder="Type an answer"
                  value={this.state.optionTwo}
                  onChange={this.handleChange}
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
                  required
                  placeholder="Type an answer"
                  value={this.state.optionThree}
                  onChange={this.handleChange}
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
                  required
                  placeholder="Type an answer"
                  value={this.state.optionFour}
                  onChange={this.handleChange}
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
                  required
                  type="radio"
                  id="optionA"
                  onChange={this.handleCheck}
                />
                <Form.Check
                  label="B"
                  className="text-info"
                  inline
                  name="choice"
                  value="B"
                  type="radio"
                  id="optionB"
                  onChange={this.handleCheck}
                />
                <Form.Check
                  label="C"
                  className="text-info"
                  inline
                  name="choice"
                  value="C"
                  type="radio"
                  id="optionC"
                  onChange={this.handleCheck}
                />
                <Form.Check
                  label="D"
                  className="text-info"
                  inline
                  name="choice"
                  value="D"
                  type="radio"
                  id="optionD"
                  onChange={this.handleCheck}
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
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button
                type="submit"
                variant="outline-info"
                className="my-4"
                block
              >
                Add question
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
