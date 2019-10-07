import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import { listInterviewQuestion as listInterviewQuestionServices } from "../../services/exercise-api";

export default class ListQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: this.props.questions
    };
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

  render() {
    const questionList = this.props.questions;
    console.log(
      "List questions",
      this.props.questions,
      this.state.questionList
    );
    return (
      // (!questionMany && (
      //   <div>
      //     <h1 className="text-white">Loading exercise...</h1>
      //   </div>
      // )) || (
      <Container>
        {/* {questionList.map(questionItem => (
          <div>
            <h3 className="text-white">{questionItem.question}</h3>
            <h3 className="text-white">{questionItem.optionOne}</h3>
            <h3 className="text-white">{questionItem.optionTwo}</h3>
          </div>
        ))} */}
        {/* <h1>{questionList.question}</h1> */}
      </Container>
    );
  }
}
