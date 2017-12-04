import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "../../../node_modules/react-router-dom";

class MyProfileButton extends Component {
  render() {
    return (
      <Link to="/profile/:id">
        <div className="my-profile-button">
          <RaisedButton
            className="my-profile-button"
            primary={true}
            label="My Profile"
          />
        </div>
      </Link>
    );
  }
}

export default MyProfileButton;
