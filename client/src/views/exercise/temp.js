// import React, { Component } from "react";

// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";

// import { createExercise } from "./../../services/exercise-api";

// export default class MathExercise extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       exercise: {
//         question: "",
//         valueOne: Math.floor(Math.random() * 1000),
//         valueTwo: Math.floor(Math.random() * 1000),
//         answer: "",
//         solution: ""
//       },
//       score: 0
//     };
//     this.onSubmitAnswer = this.onSubmitAnswer.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleAnswer = this.handleAnswer.bind(this);
//     this.scoreCounter = this.scoreCounter.bind(this);
//   }

//   onSubmitAnswer(event) {
//     event.preventDefault();
//     const { solution } = this.state.exercise;
//     createExercise({ solution })
//       .then(exercise => {
//         this.props.history.push("/create-exercise");
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   handleChange(event) {
//     const name = event.target.name;
//     const value = event.target.value;
//     console.log("first-value", value);
//     this.setState({
//       // exercise: { solution: value }
//       exercise: { ...this.state.exercise, ...{ solution: event.target.value } }
//     });
//   }

//   handleAnswer(event) {
//     this.setState({
//       exercise: { answer: event.target.value }
//     });
//   }

//   scoreCounter() {
//     this.setState({
//       score: this.state.score + 1
//     });
//   }

//   render() {
//     return (
//       <Container>
//         <Button onClick={this.scoreCounter}>{this.state.score}</Button>
//         <Form onSubmit={this.onSubmitAnswer}>
//           <Form.Group>
//             <Form.Label htmlFor="math-question">Question</Form.Label>
//             <Form.Control
//               id="math-question"
//               name="question"
//               type="text"
//               placeholder="Do addition"
//             />
//           </Form.Group>
//           <Form.Group>
//             {/* <Form.Label htmlFor="first-value">First Value</Form.Label> */}
//             <Form.Control
//               style={{ borderWidth: "0px", border: "none", background: "none" }}
//               id="first-value"
//               type="text"
//               name="valueOne"
//               value={this.state.exercise.valueOne}
//             />
//           </Form.Group>
//           <Form.Group>
//             {/* <Form.Label htmlFor="second-value">Second Value</Form.Label> */}
//             <Form.Control
//               style={{ borderWidth: "0px", border: "none", background: "none" }}
//               id="second-value"
//               type="text"
//               name="valueTwo"
//               value={this.state.exercise.valueTwo}
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label htmlFor="answer">Answer</Form.Label>
//             <Form.Control
//               id="answer"
//               type="text"
//               name="answer"
//               onChange={this.handleAnswer}
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label htmlFor="answer">Solution</Form.Label>
//             <Form.Control
//               id="answer"
//               type="text"
//               name="solution"
//               value={
//                 this.state.exercise.valueOne + this.state.exercise.valueTwo
//               }
//             />
//           </Form.Group>
//           ()
//           <Button type="submit">Calculate</Button>
//           <br />
//           <br />
//         </Form>
//         <Form onSubmit="">
//           <Button type="submit">Next</Button>
//         </Form>
//       </Container>
//     );
//   }
// }

/* <Form onSubmit={this.onSubmitAnswer}>
<Form.Group>
  <Form.Label htmlFor="answer">Answer</Form.Label>
  <Form.Control
    id="answer"
    type="text"
    name="answer"
    placeholder="Answer"
    onChange={this.handleAnswer}
  />
</Form.Group>
<Form.Group>
  <Form.Label htmlFor="answer">Solution</Form.Label>
  <Form.Control
    id="answer"
    type="text"
    name="solution"
    value={
      this.state.exercise.valueOne + this.state.exercise.valueTwo
    }
  />
</Form.Group>
<Button type="submit" onClick={this.checkAnswer}>
  Check answer
</Button>
<br />
<br />
</Form>
<Form onSubmit="">
<Button type="submit">Next</Button>
</Form> */
//}
