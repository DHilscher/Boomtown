import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import * as firebase from "firebase";

const PrivateRoute = ({ component: Component, authenticate, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authenticate === false ? (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        ) : (
          <Component {...props} />
        )}
    />
  );
};

export default connect(state => {
  return {
    authenticate: state.auth.authenticate
  };
})(PrivateRoute);
