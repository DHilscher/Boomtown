import React, { Component } from "react";
import PropTypes from "prop-types";
import * as firebase from "firebase";

import Login from "./Login";

// const config = {
//   apiKey: "AIzaSyCHsgvChhhyADCqvtAi0b1abHFf9bQ-U64",
//   authDomain: "boomtown-4fe4a.firebaseapp.com",
//   databaseURL: "https://boomtown-4fe4a.firebaseio.com",
//   projectId: "boomtown-4fe4a",
//   storageBucket: "boomtown-4fe4a.appspot.com",
//   messagingSenderId: "219860597276"
// };
// firebase.initializeApp(config);

class LoginContainer extends Component {
  static propTypes = {};

  login = e => {
    e.preventDefault();

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        store.dispatch(login(user));
      } else {
        store.dispatch(logout());
      }
    });
    console.log("You clicked the login button.");
  };

  render() {
    return <Login login={this.login} />;
  }
}

export default LoginContainer;
