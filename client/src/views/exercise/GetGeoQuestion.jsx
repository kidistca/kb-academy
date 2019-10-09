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

  onClickImage(event) {
    const id = event.target.id;
    const objId = event.target.alt;
    console.log("the clicked event", event.target.alt);
    for (let i of this.state.questionGeoList) {
      if (i.solution === id && i._id === objId) {
        console.log("Corect");
        event.currentTarget.style.backgroundColor = "green";
        // className = "selected";
      } else console.log("Wrong answer", i._id);
    }
  }

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
            <div key={questionGeoItem._id}>
              <h3 className="text-white">
                Questions: {questionGeoItem.question}
              </h3>
              <Image
                src={questionGeoItem.imageOne}
                alt={questionGeoItem._id}
                style={{ maxWidth: "50%" }}
                className="text-white selected"
                id="1"
                // value={data.id}
                onClick={this.onClickImage}
              />
              <Image
                src={questionGeoItem.imageTwo}
                alt={questionGeoItem._id}
                style={{ maxWidth: "50%" }}
                className="text-white"
                id="2"
                onClick={this.onClickImage}
              />
              <Image
                src={questionGeoItem.imageThree}
                alt={questionGeoItem._id}
                style={{ maxWidth: "50%" }}
                className="text-white"
                id="3"
                onClick={this.onClickImage}
              />
              <Image
                src={questionGeoItem.imageFour}
                alt={questionGeoItem._id}
                style={{ maxWidth: "50%" }}
                className="text-white"
                id="4"
                onClick={this.onClickImage}
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
