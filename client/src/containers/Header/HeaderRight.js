import React, { Component } from "react";
import LogoutButton from "./LogoutButton";
import MyProfileButton from "./MyProfileButton";

const HeaderRight = ({ handleLogout, cuid }) => {
  return (
    <div className="header-right">
      <MyProfileButton cuid={cuid} />
      <LogoutButton handleLogout={handleLogout} />
    </div>
  );
};

export default HeaderRight;
