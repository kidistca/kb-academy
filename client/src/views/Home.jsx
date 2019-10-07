import React, { Component } from "react";
import "./Home.css";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default class HomeView extends Component {
  render() {
    return (
      <div className="Background">
        <Container>
          <br />
          <br />
          <Link to="/create-exercise">
            <Button variant="outline-info" size="lg">
              Math Exercise
            </Button>
          </Link>
          <br />
          <br />
          <Link to="/multiple-choice">
            <Button variant="outline-info" size="lg">
              Multiple Choice - temp
            </Button>
          </Link>
          <Link to="/create-interview-question">
            <Button variant="outline-info" size="lg">
              Create Interview Question
            </Button>
          </Link>
          <Link to="/list-of-interview-question">
            <Button variant="outline-info" size="lg">
              List of Interview Question
            </Button>
          </Link>
        </Container>
      </div>
    );
  }
}
