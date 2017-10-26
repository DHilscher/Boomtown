import DataLoader from 'dataloader';
// import { getUser, getUserOwnedItems, getUserBorrowedItems, getItem } from './jsonHelpers';
import { getUser, getUserOwnedItems, getUserBorrowedItems, getItem } from './postgresDB';

export default function() {
  return {
    UserOwnedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => getUserOwnedItems(id))
    ))),
    UserBorrowedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => getUserBorrowedItems(id))
    ))),
    SingleItem: new DataLoader(ids => (
      Promise.all(ids.map(id => getItem(id))
    ))),
    // SingleUser: new DataLoader(ids => (
    //   Promise.all(ids.map(id => getUser(id))
    // ))),
  }
};