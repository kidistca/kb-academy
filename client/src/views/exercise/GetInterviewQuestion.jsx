import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { listInterviewQuestion as listInterviewQuestionServices } from "../../services/exercise-api";

export default class ListQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: [],
      correct: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    listInterviewQuestionServices()
      .then(questionList => {
        this.setState({
          questionList
        });
        console.log("Exercise question", questionList);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClick(event) {
    let color = "white";
    const id = event.target.id;
    return this.state.questionList.map(function(questionItem) {
      return questionItem.solution === id
        ? (document.getElementById().style.color = "red")
        : (color = "red");
    });
  }

  // (document.getElementById(id).style.color = "red")
  render() {
    let color = "white";
    // for (let i = 0; i < questionList.length; i++) {
    const questionList = this.state.questionList;
    const correct = this.state.correct;
    // console.log(questionList.length);
    return (
      (!questionList && (
        <div>
          <h1 className="text-white">Loading exercise...</h1>
        </div>
      )) || (
        <Container>
          {questionList.map(questionItem => (
            <div style={{ backgroundColor: "grey" }}>
              <h3 className="text-white">Q: {questionItem.question}</h3>
              <h3 className="text-white">
                <Button
                  // style={{ color: color }}
                  className="border-0"
                  variant="outline-light"
                  id="A"
                  onClick={this.handleClick}
                >
                  A. {questionItem.optionOne}
                </Button>
              </h3>
              <h3 className="text-white">
                <Button
                  className="border-0"
                  variant="outline-light"
                  id="B"
                  onClick={this.handleClick}
                >
                  B. {questionItem.optionTwo}
                </Button>
              </h3>
              <h3 className="text-white">
                <Button
                  className="border-0"
                  variant="outline-light"
                  id="C"
                  onClick={this.handleClick}
                >
                  C. {questionItem.optionThree}
                </Button>
              </h3>
              <h3 className="text-white">
                <Button
                  className="border-0"
                  variant="outline-light"
                  id="D"
                  onClick={this.handleClick}
                >
                  D. {questionItem.optionFour}
                </Button>
              </h3>
              <br />
              <div style={{ backgroundColor: "green" }}>
                <h3 className="text-white">
                  Solution: {questionItem.solution}
                </h3>
                <h3 className="text-white">
                  Explanation: {questionItem.description}
                </h3>
              </div>
            </div>
          ))}
        </Container>
      )
    );
  }
}
