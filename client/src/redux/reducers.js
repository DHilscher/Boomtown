import { combineReducers } from "redux";
import items from "./modules/items";
import users from "./modules/users";
import client from "../config/apolloClient";
import authentication from "./modules/authentication";

export default combineReducers({
  apollo: client.reducer(),
  users: users,
  items: items,
  authentication: authentication
});
