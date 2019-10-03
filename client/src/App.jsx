import React, { Component } from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/Navbar";
import Container from "react-bootstrap/Container";

import HomeView from "./views/Home";
import SignUpView from "./views/user/SignUp";
import SignInView from "./views/user/SignIn";
import ProfileView from "./views/user/Profile";
import EditProfileView from "./views/user/Edit";
// import * as AuthServices from "./services/auth-api";

import MathExercise from "./views/exercise/mathExercise";

import ErrorView from "./views/Error";
import CatchAllView from "./views/CatchAll";
import { signedIn } from "./services/auth-api";
import { signOut as signOutService } from "./services/auth-api";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.signOut = this.signOut.bind(this);
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

  signOut(event) {
    event.preventDefault();
    signOutService()
      .then(() => {
        this.setState({
          user: null
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Container>
            <Menu user={this.state.user} signOut={this.signOut} />
            <Switch>
              <Route path="/" exact component={HomeView} />
              <Route path="/signup" component={SignUpView} />
              <Route path="/signin" component={SignInView} />
              <Route path="/profile" component={ProfileView} />
              <Route path="/profile-edit" component={EditProfileView} />
              <Route path="/error/:code" component={ErrorView} />
              <Route path="/" component={CatchAllView} />
              <Route path="/create-exercise" exact component={MathExercise} />
            </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}
