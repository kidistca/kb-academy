import React, { Component } from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/Navbar";

import HomeView from "./views/Home";
import SignUpView from "./views/SignUp";
import SignInView from "./views/SignIn";
import ProfileView from "./views/Profile";
// import * as AuthServices from "./services/auth-api";
import ErrorView from "./views/Error";
import CatchAllView from "./views/CatchAll";
import { signedIn } from "./services/auth-api";
//import { SignOut } from "./services/auth-api";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    //this.signOut = this.signOut.bind(this);
  }
  componentDidMount() {
    signedIn()
      .then(user => {
        if (user) {
          this.setState({
            user
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  // signOut(event) {
  //   event.preventDefault();
  //   SignOut()
  //     .then(() => {
  //       this.setState({
  //         user: null
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <div className="App">
        <Router>
          <Menu />
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/signup" component={SignUpView} />
            <Route path="/signin" component={SignInView} />
            <Route path="/profile" component={ProfileView} />
            <Route path="/error/:code" component={ErrorView} />
            <Route path="/" component={CatchAllView} />
          </Switch>
        </Router>
      </div>
    );
  }
}
