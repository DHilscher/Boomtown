import React, { Component } from "react";
import LogoutButton from "./LogoutButton";
import MyProfileButton from "./MyProfileButton";

const HeaderRight = ({ handleLogout }) => {
  return (
    <div className="header-right">
      <MyProfileButton />
      <LogoutButton handleLogout={handleLogout} />
    </div>
  );
};

export default HeaderRight;
