import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";

const LogoutButton = ({ handleLogout }) => {
  return (
    <div className="logout-button">
      <RaisedButton
        className="logout-button"
        style={{ marginRight: "10px", marginLeft: "15px" }}
        backgroundColor="black"
        labelColor="white"
        label="Logout"
        onClick={handleLogout}
      />
    </div>
  );
};

export default LogoutButton;
