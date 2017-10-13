import { mainURL } from '../constants';
import { getUsers } from './userActions';

const getCardItemsBegin = () => {
  return { type: 'GET_CARD_ITEMS_BEGIN' }
}

const getCardItemsSuccess = (items) => {
  return { type: 'GET_CARD_ITEMS_SUCCESS', items }    
}

const getCardItemsError = (error) => {
  return { type: 'GET_CARD_ITEMS_ERROR', error }  
}


export const getCardItems = async () => {
  return (dispatch) => {
    dispatch(getCardItemsBegin())
    return fetch(`${mainURL}/items`)
       .then(resp => resp.json())
       .then(items => {
         await getUsers()
        dispatch(getCardItemsSuccess(items))        
       }).catch(err => {
        dispatch(getCardItemsError(err))                  
       })
  } 
} 