import React, { Component } from "react";
import * as firebase from "firebase";
import { connect } from "react-redux";
import HeaderRight from "./HeaderRight";
import HeaderLeft from "./HeaderLeft";

import "./styles.css";

class Header extends Component {
  handleLogout = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <div className="header-container">
        <HeaderLeft />
        <HeaderRight handleLogout={this.handleLogout} />
      </div>
    );
  }
}

export default connect()(Header);
