import { mainURL } from '../constants';

const getUsersBegin = () => {
  return { type: 'GET_USERS_BEGIN' }
}

const getUsersSuccess = (users) => {
  return { type: 'GET_USERS_SUCCESS', users }    
}

const getUsersError = (error) => {
  return { type: 'GET_USERS_ERROR', error }  
}


export const getUsers = () => {
  return (dispatch) => {
    dispatch(getUsersBegin())
    return fetch(`${mainURL}/users`)
       .then(resp => resp.json())
       .then(users => {
        dispatch(getUsersSuccess(users))        
       }).catch(err => {
        dispatch(getUsersError(err))                  
       })
  } 
} 