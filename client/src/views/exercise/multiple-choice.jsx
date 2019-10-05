import React, { Component } from "react";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    let questionCollection = [
      {
        question: "What is html?",
        options: ["hyper", "text", "markup", "lang"],
        correct: 1,
        description: "Answer: B, HTML is ......"
      },
      {
        question: "What is css?",
        options: ["ccccc", "scccc", "aaaa", "dddd"],
        correct: 3,
        description: "Answer: D, CSS is ......"
      }
    ];

    this.state = {
      current: 0,
      questionCollection,
      correct: 0,
      incorrect: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(choice) {
    if (choice == this.state.questionCollection[this.state.current].correct) {
      this.setState({
        correct: this.state.correct + 1
      });
    } else {
      this.setState({
        incorrect: this.state.incorrect + 1
      });
    }

    if (this.state.current == 9) {
      this.setState({ current: 0 });
      this.setState({ incorrect: 0 });
      this.setState({ correct: 0 });
    } else {
      this.setState({ current: this.state.current + 1 });
    }
  }

  render() {
    return (
      <div>
        <div className="text-white">
          <h1>correct: {this.state.correct}</h1>
          <h2>incorrect: {this.state.incorrect}</h2>
        </div>
        <div style={{ backgroundColor: "white" }}>
          <h1>{this.state.questionCollection[this.state.current].question}</h1>

          <QuizArea
            handleClick={this.handleClick}
            questionCollection={
              this.state.questionCollection[this.state.current]
            }
          />
        </div>
        <h4 className="text-white">
          {this.state.questionCollection[this.state.current].description}
        </h4>
      </div>
    );
  }
}

function Option(props) {
  return (
    <div>
      <button onClick={() => props.handleClick(props.choice)}>
        {props.alpha}
      </button>
      <span> {props.answer}</span>
    </div>
  );
}

function OptionList(props) {
  let options = [];
  for (let i = 0; i < props.questionCollection.options.length; i++) {
    options.push(
      <div>
        <Option
          choice={i}
          handleClick={props.handleClick}
          answer={props.questionCollection.options[i]}
          alpha={String.fromCharCode(97 + i)}
        />
      </div>
    );
  }
  return <div>{options}</div>;
}

function QuizArea(props) {
  return (
    <div>
      <OptionList
        questionCollection={props.questionCollection}
        handleClick={props.handleClick}
      />
    </div>
  );
}
