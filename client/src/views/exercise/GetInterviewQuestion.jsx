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
      check: false,
      itemObjId: "",
      itemId: "",
      color: "white"
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
    const id = event.target.id;
    const objId = event.target.name;
    // console.log("the clicked event", event.target);
    for (let question of this.state.questionList) {
      if (question.solution === id && question._id === objId) {
        console.log("Corect", question.solution, question._id);
        this.setState({
          check: !this.state.check,
          itemObjId: objId,
          itemId: id,
          color: "green"
        });
      }
      if (question.solution !== id && question._id === objId) {
        console.log("Wrong answer", id);
        this.setState({
          check: !this.state.check,
          itemObjId: objId,
          itemId: id,
          color: "red"
        });
      }
    }
  }

  render() {
    const questionList = this.state.questionList;
    let check = this.state.check;
    let itemObjId = this.state.itemObjId;
    let itemId = this.state.itemId;
    let color = this.state.color;
    console.log("this is itemid", itemId);
    return (
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
                    <h1 className="font-weight-lighter mb-4">
                      {questionItem.question}
                    </h1>
                    <Row>
                      <Button
                        //className={check ? "text-success" : "text-white"}
                        variant="outline-secondary"
                        id="A"
                        name={questionItem._id}
                        onClick={this.handleClick}
                        // style={
                        //   (check && itemObjId === questionItem._id &&
                        //   itemId === questionItem.solution && {color}
                        // } ) || {{color: "white"}}
                      >
                        A. {questionItem.optionOne}
                      </Button>
                      <Button
                        variant="outline-secondary"
                        id="B"
                        name={questionItem._id}
                        onClick={this.handleClick}
                        style={
                          itemObjId === questionItem._id &&
                          itemId === questionItem.solution && { color: color }
                        }
                      >
                        B. {questionItem.optionTwo}
                      </Button>

                      <Button
                        variant="outline-secondary"
                        id="C"
                        name={questionItem._id}
                        onClick={this.handleClick}
                        style={
                          itemObjId === questionItem._id &&
                          itemId === questionItem.solution && { color: color }
                        }
                      >
                        C. {questionItem.optionThree}
                      </Button>

                      <Button
                        variant="outline-secondary"
                        id="D"
                        name={questionItem._id}
                        onClick={this.handleClick}
                        style={
                          itemObjId === questionItem._id &&
                          itemId === questionItem.solution && { color: color }
                        }
                      >
                        D. {questionItem.optionFour}
                      </Button>
                    </Row>
                    <div className="mt-5">
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
    );
  }
}
