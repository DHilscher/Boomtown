import React, { Component } from "react";
import PropTypes from "prop-types";
import * as firebase from "firebase";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from "react-redux";

import Login from "./Login";
import { login, logout } from "../../redux/modules/authentication";
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

  login = e => {
    e.preventDefault();
    const { email, password } = this.props.user;
    try {
      const user = firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  };

  // login = async e => {
  //   e.preventDefault();

  // try {
  //   await firebase
  //     .auth()
  //     .signInWithEmailAndPassword(
  //       (this.props.user.email = " "),
  //       (this.props.user.password = " ")
  //     );
  // } catch (e) {
  //   console.log(e);
  // }

  // firebase.auth().signInWithEmailAndPassword(function(user) {
  //   if (user) {
  //     store.dispatch(login(user));
  //   } else {
  //     store.dispatch(logout());
  //   }
  // });
  //   console.log("You clicked the login button.");
  // };

  render() {
    return <Login login={this.login} />;
  }
}

const newItemForm = reduxForm({
  form: "newItemForm"
})(LoginContainer);

export default connect(state => {
  const values = formValueSelector("newItemForm");
  return {
    user: values(state, "email", "password")
  };
})(newItemForm);
