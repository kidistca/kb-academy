import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

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
        console.log("Exercise GEO question", questionGeoList);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const questionGeoList = this.state.questionGeoList;
    console.log("List questions", this.state.questionGeoList.question);

    return (
      (!questionGeoList && (
        <div>
          <h1 className="text-white">Loading exercise...</h1>
        </div>
      )) || (
        <Container>
          {questionGeoList.map(questionGeoItem => (
            <div style={{ backgroundColor: "grey" }}>
              <h3 className="text-white">
                Questions: {questionGeoItem.question}
              </h3>
              <Image className="text-white">
                A: {questionGeoItem.imageOne}
              </Image>
              <Image className="text-white">
                B: {questionGeoItem.imageTwo}
              </Image>
              <Image className="text-white">
                C: {questionGeoItem.imageThree}
              </Image>
              <Image className="text-white">
                D: {questionGeoItem.imageFour}
              </Image>
              <h3 className="text-white">
                Solution: {questionGeoItem.solution}
              </h3>
            </div>
          ))}
        </Container>
      )
    );
  }
}
