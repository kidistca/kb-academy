import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

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
        <Container className="d-flex justify-content-center">
          <h1 className="font-weight-lighter text-info text-center mt-5">
            WebDev Interview Questions
          </h1>

          {questionList.map((questionItem, index) => (
            <SingleInterviewQuestion
              key={questionItem._id}
              question={questionItem}
              index={index}
            />
          ))}

          <Row className="text-center my-3 mb-5 ">
            <Col md={{ span: 6, offset: 3 }}>
              <Link to="/" className="text-decoration-none">
                <Button variant="outline-light" block>
                  Try another exercise!
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      )
    );
  }
}
