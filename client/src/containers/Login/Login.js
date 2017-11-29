import React from "react";
import PropTypes from "prop-types";

import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from "react-redux";

import ValidatedTextField from "../../components/ValidatedTextField";

import "./styles.css";
import logo from "../../images/boomtown-logo.svg";
import bottomLeft from "../../images/home-bl.svg";
import topRight from "../../images/home-tr.svg";

const Login = ({ handleSubmit, ...props }) => {
  return (
    <div className="page login">
      <div className="logo">
        <img src={logo} alt="Boomtown Logo" />
      </div>
      <div className="topRight">
        <img src={topRight} alt="Sky" />
      </div>
      <div className="bottomLeft">
        <img src={bottomLeft} alt="City" />
      </div>
      <div className="cardContainer">
        <Paper zDepth={5}>
          <div className="formContainer">
            <form onSubmit={handleSubmit} autoComplete="off">
              <div>
                <Field
                  name="email"
                  type="email"
                  label="Email"
                  component={ValidatedTextField}
                />
              </div>
              <div>
                <Field
                  name="password"
                  type="password"
                  label="Password"
                  component={ValidatedTextField}
                />
              </div>
              <RaisedButton
                className="enterButton"
                primary
                fullWidth
                type="submit"
                onClick={() =>
                  setTimeout(function() {
                    props.history.push("/");
                  }, 1000)}
              >
                Enter
              </RaisedButton>
            </form>
          </div>
        </Paper>
      </div>
    </div>
  );
};

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const loginForm = reduxForm({
  form: "loginForm"
})(Login);

export default loginForm;

// export default connect(state => {
//   const values = formValueSelector("LoginForm");
//   return {
//     user: values(state, "email", "password")
//   };
// })(LoginForm);
