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
    const { currentUser } = this.props;
    console.log(currentUser);
    return (
      <div className="header-container">
        <HeaderLeft />
        <HeaderRight
          cuid={currentUser ? currentUser.uid : false}
          handleLogout={this.handleLogout}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.user
});

export default connect(mapStateToProps)(Header);
