import { combineReducers } from 'redux';
import items from './modules/items';
import users from './modules/users';
import client from '../config/apolloClient';

export default combineReducers({
  apollo: client.reducer(),
  users: users,
  items: items
});