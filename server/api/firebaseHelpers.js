import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCHsgvChhhyADCqvtAi0b1abHFf9bQ-U64",
  authDomain: "boomtown-4fe4a.firebaseapp.com",
  databaseURL: "https://boomtown-4fe4a.firebaseio.com",
  projectId: "boomtown-4fe4a",
  storageBucket: "boomtown-4fe4a.appspot.com",
  messagingSenderId: "219860597276"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();

export const getUser = id => {
  return new Promise((resolve, reject) => {
    firebaseDB
      .ref(`/users/${id}`)
      .once("value")
      .then(snapshot => {
        resolve({
          ...snapshot.val(),
          id
        }).catch(err => {
          console.log(err);
        });
      });
  });
};

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    firebaseDB
      .ref(`/users`)
      .once("value")
      .then(snapshot => {
        resolve({
          ...snapshot.val(),
          id
        }).catch(err => {
          console.log(err);
        });
      });
  });
};
