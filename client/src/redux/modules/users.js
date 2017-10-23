// import { mainURL } from '../constants';

// const getUsersBegin = () => {
//   return { type: 'GET_USERS_BEGIN' }
// }

// const getUsersSuccess = () => {
//   return { type: 'GET_USERS_SUCCESS' }    
// }

// const getUsersError = (error) => {
//   return { type: 'GET_USERS_ERROR', error }  
// }


// export const getUsers = (dispatch) => {
//     dispatch(getUsersBegin())
//     return fetch(`${mainURL}/users`)
//        .then(resp => {
//            dispatch(getUsersSuccess()) 
//            return resp.json()
//         })
//         .catch(err => {
//         dispatch(getUsersError(err))                  
//        })
//   } 



const initialState = {
  // users: [],
  // errorMsg: {},
  // isLoading: false,
  // allItems: [],
  // items: [],
  filteredItems: []
}

// const mergeUsersItems = (users, items) => {
//   return users.map(user => {
//   return {
//     ...user,
//     items : items.filter(item => item.itemowner === user.id)
//   }
// })
// }

// const mergeItemsUsers = (users, items) => {
//   return items.map(item => {
//   return {
//     ...item,
//     users : users.filter(user => user.id === item.itemowner)
//   }
// })
// }

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS_BEGIN':
      return {
        ...state,
        // isLoading: true,
      }
    case 'GET_USERS_SUCCESS':
    return {
      ...state
    }    
    case 'GET_USERS_ERROR':     
      return {
        ...state,
        // errorMsg: action.error,
        // isLoading: false
      }
    default:
      return state

  }
}