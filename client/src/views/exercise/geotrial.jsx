import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import SingleGeoQuestion from "../../components/SingleGeoQuestion";
import { listGeoQuestion as listGeoQuestionServices } from "../../services/exercise-api";

export default class ListGeoQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionGeoList: []
    };
  }

  componentDidMount() {
    listGeoQuestionServices()
      .then(questionGeoList => {
        this.setState({
          questionGeoList
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const questionGeoList = this.state.questionGeoList;
    return (
      (!questionGeoList && (
        <div>
          <h1 className="text-white">Loading exercise...</h1>
        </div>
      )) || (
        <Container className="d-flex justify-content-center">
          {questionGeoList.map((questionGeoItem, index) => (
            // <div key={questionGeoItem._id}>

            <SingleGeoQuestion
              key={questionGeoItem._id}
              question={questionGeoItem}
              index={index}
            />
          ))}
        </Container>
      )
    );
  }
}
