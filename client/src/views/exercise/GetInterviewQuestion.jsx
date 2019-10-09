import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

    let found = false;
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
              <Row>
                <Col className="d-flex justify-content-center">
                  <Card
                    bg="transparent"
                    text="info"
                    border="white"
                    className="mt-5 px-3"
                    style={{ width: "45rem" }}
                  >
                    <Card.Body>
                      <h1
                        className="font-weight-lighter mb-4"
                        style={{ color: chooseColor(questionItem._id) }}
                      >
                        {questionItem.question}
                      </h1>
                      <Row>
                        <Button
                          style={{ color: chooseColor(questionItem._id) }}
                          variant="outline-secondary"
                          id="A"
                          onClick={e => this.handleClick(e, questionItem)}
                        >
                          <h4 className="font-weight-lighter">
                            <strong>A.</strong> {questionItem.optionOne}
                          </h4>
                        </Button>

                        <Button
                          style={{ color: chooseColor(questionItem._id) }}
                          variant="outline-secondary"
                          id="B"
                          onClick={e => this.handleClick(e, questionItem)}
                        >
                          <h4 className="font-weight-lighter">
                            <strong>B.</strong> {questionItem.optionTwo}
                          </h4>
                        </Button>

                        <Button
                          style={{ color: chooseColor(questionItem._id) }}
                          variant="outline-secondary"
                          id="C"
                          onClick={e => this.handleClick(e, questionItem)}
                        >
                          <h4 className="font-weight-lighter">
                            <strong>C.</strong> {questionItem.optionThree}
                          </h4>
                        </Button>

                        <Button
                          style={{ color: chooseColor(questionItem._id) }}
                          variant="outline-secondary"
                          id="D"
                          onClick={e => this.handleClick(e, questionItem)}
                        >
                          <h4 className="font-weight-lighter">
                            <strong>D.</strong> {questionItem.optionFour}
                          </h4>
                        </Button>
                      </Row>
                      <div
                        className="mt-5"
                        style={{ color: chooseColor(questionItem._id) }}
                      >
                        <h3 className="text-white">
                          Solution: {questionItem.solution}
                        </h3>
                        <h3 className="text-white">
                          Explanation: {questionItem.description}
                        </h3>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          ))}
        </Container>
      )
    );
  }
}
