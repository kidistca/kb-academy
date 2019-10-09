import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./SingleInterviewQuestion.scss";

export default class SingleInterviewQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.chooseClass = this.chooseClass.bind(this);
  }

  handleClick(event, item) {
    if (!this.state.answer) {
      const correct = event.target.id === item.solution ? true : false;
      this.setState({
        ...this.state,
        correct,
        answer: event.target.id
      });
    }
  }

  chooseClass(itemId) {
    const answeredId = this.state.answer;
    const solutionId = this.props.question.solution;
    if (answeredId) {
      if (answeredId === itemId && itemId === solutionId) {
        return "answer-selected-correct";
      } else if (answeredId === itemId && itemId !== solutionId) {
        return "answer-selected-wrong";
      } else if (answeredId !== solutionId && itemId === solutionId) {
        return "answer-correct";
      }
    }
  }

  render() {
    const questionItem = this.props.question;

    return (
      <div key={questionItem._id} className="interview-question">
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
                <h1 className="font-weight-lighter mb-4">
                  {questionItem.question}
                </h1>
                <Row>
                  <pre className="text-white">
                    {JSON.stringify(questionItem, null, 2)}
                  </pre>
                  {/* <pre className="text-white">
                    {JSON.stringify(this.state.answeredId, null, 2)}
                  </pre> */}
                  <Button
                    className={this.chooseClass("A")}
                    variant="outline-light"
                    id="A"
                    onClick={e => this.handleClick(e, questionItem)}
                  >
                    A. {questionItem.optionOne}
                  </Button>

                  <Button
                    className={this.chooseClass("B")}
                    variant="outline-light"
                    id="B"
                    onClick={e => this.handleClick(e, questionItem)}
                  >
                    B. {questionItem.optionTwo}
                  </Button>

                  <Button
                    className={this.chooseClass("C")}
                    variant="outline-light"
                    id="C"
                    onClick={e => this.handleClick(e, questionItem)}
                  >
                    C. {questionItem.optionThree}
                  </Button>

                  <Button
                    className={this.chooseClass("D")}
                    variant="outline-light"
                    id="D"
                    onClick={e => this.handleClick(e, questionItem)}
                  >
                    D. {questionItem.optionFour}
                  </Button>
                </Row>

                <h3 className="text-white">
                  Solution: {questionItem.solution}
                </h3>
                <h3 className="text-white">
                  Explanation: {questionItem.description}
                </h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
