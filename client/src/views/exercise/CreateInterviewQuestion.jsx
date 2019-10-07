import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
// import Radio from "react-bootstrap";

import { interviewQuestion as interviewQuestionServices } from "../../services/exercise-api";
import GetInterviewQuestion from "../../views/exercise/GetInterviewQuestion";

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

  // handleCheck() {
  //   checked = "checked";
  // }

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
        // this.props.history.push("/list-interview-question");
        this.props.history.push("/list-interview-question");
      })
      .catch(error => {
        console.log(error);
      });
  }

  // get QuestionList() {
  //   return this.state;
  // }

  render() {
    const question = this.state.question;
    return (
      <Container>
        <h1 className="text-white">WebDev Interview Question</h1>
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
          <Form.Group>
            <Form.Label htmlFor="option-three" className="text-white">
              C
            </Form.Label>
            <Form.Control
              id="option-three"
              name="optionThree"
              type="text"
              placeholder="Option 3"
              value={this.state.optionThree}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="option-four" className="text-white">
              D
            </Form.Label>
            <Form.Control
              id="option-four"
              name="optionFour"
              type="text"
              placeholder="Option 4"
              value={this.state.optionFour}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="choice" className="text-white">
              Solution
            </Form.Label>
            <br />
            <Form.Check
              className="text-white"
              inline
              name="choice"
              label="A"
              type="radio"
              id="optionA"
              onChange={this.handleChange}
            />
            <Form.Check
              className="text-white"
              inline
              name="choice"
              label="B"
              type="radio"
              id="optionB"
            />
            <Form.Check
              className="text-white"
              inline
              name="choice"
              label="C"
              type="radio"
              id="optionC"
            />
            <Form.Check
              className="text-white"
              inline
              name="choice"
              label="D"
              type="radio"
              id="optionD"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="option-description" className="text-white">
              Explanation
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              id="option-description"
              name="description"
              type="text"
              placeholder="Explanation"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type="submit">Add question</Button>
        </Form>
        {/* <GetInterviewQuestion questions={this.QuestionList} /> */}
      </Container>
    );
  }
}
