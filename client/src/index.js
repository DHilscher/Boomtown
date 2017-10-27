import React, { Component } from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as firebase from "firebase";
import registerServiceWorker from "./registerServiceWorker";
import configStore from "./redux/configStore";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "../node_modules/react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "../src/config/apolloClient";

import "./index.css";
import muiTheme from "./config/theme";

import Layout from "./components/Layout";
import Login from "./containers/Login";
import { Share } from "./containers/Share";
import Items from "./containers/Cards";
import Profile from "./containers/Profile";
import { login, logout } from "./redux/modules/authentication";

const store = configStore();

var config = {
  apiKey: "AIzaSyCHsgvChhhyADCqvtAi0b1abHFf9bQ-U64",
  authDomain: "boomtown-4fe4a.firebaseapp.com",
  databaseURL: "https://boomtown-4fe4a.firebaseio.com",
  projectId: "boomtown-4fe4a",
  storageBucket: "boomtown-4fe4a.appspot.com",
  messagingSenderId: "219860597276"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch(login(user));
  } else {
    store.dispatch(logout());
  }
});

class Boomtown extends Component {
  render() {
    return (
      <ApolloProvider client={client} store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Router>
            <Layout>
              <Switch>
                <Route exact path="/" component={Items} />
                <Route path="/login" component={Login} />
                <Route path="/share" component={Share} />
                <Route path="/profile/:id" component={Profile} />
                <Route path="*" />
              </Switch>
            </Layout>
          </Router>
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<Boomtown />, document.getElementById("root"));
registerServiceWorker();
