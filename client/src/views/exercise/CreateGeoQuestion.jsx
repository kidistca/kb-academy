import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";

// import PrettyFileInput from "../../components/PrettyFileInput";

import { geoQuestion } from "./../../services/exercise-api";

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
    geoQuestion(exercise)
      .then(exercise => {
        this.props.history.push("/list-geo-question");
      })
      .catch(error => {
        console.log("this is the error", error);
      });
  }

  render() {
    // const exercise = this.state.exercise;
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
            <h1 className="my-3 font-weight-lighter">Geography Question</h1>
            <Form onSubmit={this.onSubmitForm}>
              <Form.Group>
                <Form.Label htmlFor="question" className="mt-3">
                  Question
                </Form.Label>
                <Form.Control
                  id="question"
                  name="question"
                  type="text"
                  required
                  placeholder="Type your question here"
                  value={this.state.question}
                  onChange={this.handleChange}
                />
              </Form.Group>
              {this.state.exercise.answers.map(answer => (
                <div key={answer.id}>
                  <Form.Group>
                    <Form.Control
                      id="geo-one-image"
                      type="file"
                      name={answer.id}
                      onChange={this.handleChangeImage}
                      className="text-white"
                      required
                    />
                  </Form.Group>
                </div>
              ))}
              <Form.Group>
                <Form.Label htmlFor="choice" className="mt-3 mr-5">
                  Choose the right answer:
                </Form.Label>

                <Form.Check
                  className="text-info"
                  inline
                  name="choice"
                  value="1"
                  label="1"
                  type="radio"
                  id="optionA"
                  onChange={this.handleCheck}
                />
                <Form.Check
                  className="text-info"
                  inline
                  name="choice"
                  label="2"
                  value="2"
                  required
                  type="radio"
                  id="optionB"
                  onChange={this.handleCheck}
                />
                <Form.Check
                  className="text-info"
                  inline
                  name="choice"
                  label="3"
                  value="3"
                  type="radio"
                  id="optionC"
                  onChange={this.handleCheck}
                />
                <Form.Check
                  className="text-info"
                  inline
                  name="choice"
                  label="4"
                  value="4"
                  type="radio"
                  id="optionD"
                  onChange={this.handleCheck}
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
