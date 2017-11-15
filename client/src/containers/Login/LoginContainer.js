import React, { Component } from "react";
import PropTypes from "prop-types";
import * as firebase from "firebase";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from "react-redux";

import Login from "./Login";
import configStore from "../../redux/configStore";

const store = configStore();

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

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.props.user;
    console.log(this.props);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return <Login handleSubmit={this.handleSubmit} />;
  }
}

const mapStateToProps = state => {
  const values = formValueSelector("loginForm");
  return {
    user: values(state, "email", "password")
  };
};

export default connect(mapStateToProps)(LoginContainer);

// login = e => {
//   e.preventDefault();
//   const { email, password } = this.props.user;
//   console.log(this);
//   try {
//     const user = firebase.auth().signInWithEmailAndPassword(email, password);
//   } catch (e) {
//     console.log(e);
//   }
// };

// firebase.auth().signInWithEmailAndPassword(function(user) {
//   if (user) {
//     store.dispatch(login(user));
//   } else {
//     store.dispatch(logout());
//   }
// });
//   console.log("You clicked the login button.");
// };
