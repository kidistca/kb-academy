import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import { listInterviewQuestion as listInterviewQuestionServices } from "../../services/exercise-api";

export default class ListQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: []
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

  // data() {
  //   return {
  //     local_data: JSON.parse(JSON.stringify(this.data))
  //   };
  // }

  render() {
    const questionList = this.state.questionList;
    console.log("List questions", this.state.questionList.question);

    return (
      (!questionList && (
        <div>
          <h1 className="text-white">Loading exercise...</h1>
        </div>
      )) || (
        <Container>
          {questionList.map(questionItem => (
            <div style={{ backgroundColor: "grey" }}>
              <h3 className="text-white">Questions: {questionItem.question}</h3>
              <h3 className="text-white">A: {questionItem.optionOne}</h3>
              <h3 className="text-white">B: {questionItem.optionTwo}</h3>
              <h3 className="text-white">C: {questionItem.optionThree}</h3>
              <h3 className="text-white">D: {questionItem.optionFour}</h3>
              <h3 className="text-white">Solution: {questionItem.solution}</h3>
              <h3 className="text-white">
                Explanation: {questionItem.description}
              </h3>
            </div>
          ))}
        </Container>
      )
    );
  }
}
