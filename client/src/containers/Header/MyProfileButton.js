import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "../../../node_modules/react-router-dom";

const MyProfileButton = ({ cuid }) => {
  console.log(cuid);
  return (
    <Link to={`/profile/${cuid}`}>
      <div className="my-profile-button">
        <RaisedButton
          className="my-profile-button"
          primary={true}
          label="My Profile"
        />
      </div>
    </Link>
  );
};

export default MyProfileButton;
