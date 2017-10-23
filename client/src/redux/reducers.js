import { combineReducers } from 'redux';
import cardReducer from './modules/cardReducer';
import client from '../config/apolloClient';

export default combineReducers({
  apollo: client.reducer(),
  users: cardReducer
});