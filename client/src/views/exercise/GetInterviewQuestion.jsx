import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import { listInterviewQuestion as listInterviewQuestionServices } from "../../services/exercise-api";
import SingleInterviewQuestion from "../../components/SingleInterviewQuestion";

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
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const questionList = this.state.questionList;

    return (
      (!questionList && (
        <div>
          <h1 className="text-white">Loading exercise...</h1>
        </div>
      )) || (
        <Container>
          <h1 className="font-weight-lighter text-info text-center mt-5">
            WebDev Interview
          </h1>
          {questionList.map((questionItem, index) => (
            <SingleInterviewQuestion
              key={questionItem._id}
              question={questionItem}
              index={index}
            />
          ))}
        </Container>
      )
    );
  }
}
