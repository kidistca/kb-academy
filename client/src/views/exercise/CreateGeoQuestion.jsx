import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import * as ExercServices from "../../services/exercise-api";

export default class CreateGeoQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: {
        question: "",
        imageOne: "",
        imageTwo: "",
        imageThree: "",
        imageFour: "",
        solution: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      exercise: { ...this.state.exercise, ...{ [name]: value } }
    });
  }

  handleChangeImage(event) {
    this.setState({
      exercise: {
        ...this.state.exercise,
        imageOne: event.target.files[0]
      }
    });
  }

  onSubmitForm(event) {
    event.preventDefault();
    const exercise = this.state.exercise;
    ExercServices.geoQuestion(exercise)
      .then(exercise => {
        console.log("BENIIIII", exercise);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
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
              value={this.state.exercise.question}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Image
            src={this.state.exercise.imageOne}
            alt="Image-One"
            style={{ maxWidth: "100%" }}
          />
          <Form.Group>
            <label for="geo-one-image" className="file-input">
              <span>Image One</span>
            </label>
            <Form.Control
              id="geo-one-image"
              type="file"
              name="imageOne"
              onChange={this.handleChangeImage}
            />
          </Form.Group>

          {/* <Image
                src={this.state.user.image}
                alt={this.state.user.username}
                style={{ maxWidth: "100%" }}
              />
              <Form.Group>
                <label for="profile-photo" className="file-input">
                  <span>Profile Photo</span>
                </label>
                <Form.Control
                  id="profile-photo"
                  type="file"
                  name="image"
                  onChange={this.onFileChange}
                />
              </Form.Group>
            </Form> */}

          {/* <Form.Group>
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
          </Form.Group> */}

          <Button type="submit">Add question</Button>
        </Form>
        {/* <GetInterviewQuestion questions={this.QuestionList} /> */}
      </Container>
    );
  }
}
