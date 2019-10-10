import React, { Component } from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavbarEdu from "./components/NavbarEdu";

import Container from "react-bootstrap/Container";

import HomeView from "./views/Home";
import SignUpView from "./views/user/SignUp";
import SignInView from "./views/user/SignIn";
import ProfileView from "./views/user/Profile";
import EditProfileView from "./views/user/Edit";

import MathExercise from "./views/exercise/mathExercise";
import MultipleChoice from "./views/exercise/multiple-choice";
import EditMultipleChoice from "./views/exercise/editInterview";
import InterviewQuestion from "./views/exercise/CreateInterviewQuestion";
import ListOfInterviewQuestion from "./views/exercise/GetInterviewQuestion";

import GeoQuestion from "./views/exercise/CreateGeoQuestion";
import ListOfGeoQuestion from "./views/exercise/GetGeoQuestion";

import ErrorView from "./views/Error";
import CatchAllView from "./views/CatchAll";
import { signedIn } from "./services/auth-api";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loaded: false
    };
  }

  componentDidMount() {
    signedIn()
      .then(user => {
        this.setState({
          ...(user && { user }),
          loaded: true
        });
      })
      .catch(error => {
        this.setState({
          loaded: true
        });
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Container>
            <NavbarEdu />
            <Switch>
              <Route path="/" exact component={HomeView} />
              <Route path="/signup" component={SignUpView} />
              <Route path="/signin" component={SignInView} />
              <Route path="/profile" component={ProfileView} />
              <Route path="/profile-edit" component={EditProfileView} />
              <Route path="/create-exercise" component={MathExercise} />
              <Route path="/multiple-choice" component={MultipleChoice} />
              <Route
                path="/create-interview-question"
                component={InterviewQuestion}
              />
              <Route
                path="/edit-interview/:id"
                exact
                component={EditMultipleChoice}
              />
              <Route
                path="/list-interview-question"
                component={ListOfInterviewQuestion}
              />
              <Route path="/create-geo" component={GeoQuestion} />
              <Route path="/list-geo-question" component={ListOfGeoQuestion} />
              <Route path="/error/:code" component={ErrorView} />
              <Route path="/" component={CatchAllView} />
            </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}
