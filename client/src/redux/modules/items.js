// import { mainURL } from '../constants';
// import { getUsers } from './userActions';

// const getCardItemsBegin = () => {
//   return { type: 'GET_CARD_ITEMS_BEGIN' }
// }

// const getCardItemsSuccess = (items, users) => {
//   return { type: 'GET_CARD_ITEMS_SUCCESS', items, users }
// }

// const getCardItemsError = (error) => {
//   return { type: 'GET_CARD_ITEMS_ERROR', error }
// }

// export const getCardItems = () => {
//   return (dispatch) => {
//     dispatch(getCardItemsBegin())
//     return fetch(`${mainURL}/items`)
//        .then(resp => resp.json())
//        .then(items => {
//           return getUsers(dispatch).then(users => {
//             dispatch(getCardItemsSuccess(items, users))
//         })
//        }).catch(err => {
//         dispatch(getCardItemsError(err))
//        })
//   }
// }

const initialState = {
  // users: [],
  // errorMsg: {},
  // isLoading: false,
  // allItems: [],
  items: [],
  filteredItems: []
};

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
    case "GET_CARD_ITEMS_BEGIN":
      return {
        ...state
        // isLoading: true,
      };
    case "GET_CARD_ITEMS_SUCCESS":
      return {
        ...state
        // users: mergeUsersItems(action.users, action.items),
        // items: mergeItemsUsers(action.users, action.items),
        // isLoading: false,
        // allItems: action.items
      };
    case "GET_CARD_ITEMS_ERROR":
      return {
        ...state
        // errorMsg: action.error,
        // isLoading: false
      };
    default:
      return state;
  }
};
