import React, { Component } from "react";
import PropTypes from "prop-types";
import * as firebase from "firebase";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from "react-redux";

import Login from "./Login";
import configStore from "../../redux/configStore";

const store = configStore();

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
    return <Login handleSubmit={this.handleSubmit} {...this.props} />;
  }
}

const mapStateToProps = state => {
  const values = formValueSelector("loginForm");
  return {
    user: values(state, "email", "password")
  };
};

export default connect(mapStateToProps)(LoginContainer);
