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
    this.onClickImage = this.onClickImage.bind(this);
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

  onClickImage() {}

  render() {
    const questionGeoList = this.state.questionGeoList;
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
              <Image
                src={questionGeoItem.imageOne}
                alt="Image-One"
                style={{ maxWidth: "30%" }}
                className="text-white"
                id="1"
              />
              <Image
                src={questionGeoItem.imageTwo}
                alt="Image-Two"
                style={{ maxWidth: "30%" }}
                className="text-white"
                id="2"
              />
              <Image
                src={questionGeoItem.imageThree}
                alt="Image-Three"
                style={{ maxWidth: "30%" }}
                className="text-white"
                id="3"
              />
              <Image
                src={questionGeoItem.imageFour}
                alt="Image-Four"
                style={{ maxWidth: "30%" }}
                className="text-white"
                id="4"
              />
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
