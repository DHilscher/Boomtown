import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import client from '../config/apolloClient';

export default combineReducers({
  apollo: client.reducer(),
  users: cardReducer
});