import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Button";
import Image from "react-bootstrap/Button";

import { listInterviewQuestion as listInterviewQuestionServices } from "../../services/exercise-api";

export default class ListQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: [],
      answers: []
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

  handleClick(event, item) {
    const correct = event.target.id === item.solution ? true : false;
    let answerArray = this.state.answers;

    var found = false;
    for (let i = 0; i < answerArray.length; i++) {
      if (answerArray[i].id === item._id) {
        found = true;
      }
    }
    if (!found) {
      this.setState({
        ...this.state,
        answers: [...this.state.answers, { id: item._id, correct }]
      });
    }
  }

  render() {
    // console.log(this.state.correct);
    const questionList = this.state.questionList;
    let color = "white";

    const answerArray = this.state.answers;

    function chooseColor(itemId) {
      let solution = answerArray.find(x => x.id === itemId);

      if (solution === undefined) return "white";
      else if (solution.correct === true) return "green";
      else if (solution.correct === false) return "red";
    }

    return (
      (!questionList && (
        <div>
          <h1 className="text-white">Loading exercise...</h1>
        </div>
      )) || (
        <Container>
          {questionList.map(questionItem => (
            <div key={questionItem._id}>
              {/* <pre className="text-white">
                {JSON.stringify(this.state.answers, null, 2)}
              </pre> */}
              <h3 className="text-white">Q: {questionItem.question}</h3>

              <Button
                style={{ color: chooseColor(questionItem._id) }}
                className="border-0"
                variant="outline-light"
                id="A"
                onClick={e => this.handleClick(e, questionItem)}
              >
                A. {questionItem.optionOne}
              </Button>

              <Button
                style={{ color: chooseColor(questionItem._id) }}
                className="border-0"
                variant="outline-light"
                id="B"
                onClick={e => this.handleClick(e, questionItem)}
              >
                B. {questionItem.optionTwo}
              </Button>

              <Button
                style={{ color: chooseColor(questionItem._id) }}
                className="border-0"
                variant="outline-light"
                id="C"
                onClick={e => this.handleClick(e, questionItem)}
              >
                C. {questionItem.optionThree}
              </Button>
              <Button
                style={{ color: chooseColor(questionItem._id) }}
                className="border-0"
                variant="outline-light"
                id="D"
                onClick={e => this.handleClick(e, questionItem)}
              >
                D. {questionItem.optionFour}
              </Button>

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
