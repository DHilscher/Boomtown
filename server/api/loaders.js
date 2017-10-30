import DataLoader from "dataloader";
import {
  getUserOwnedItems,
  getUser,
  // getItem,
  getUserBorrowedItems
} from "./jsonHelpers";
// import { getUser } from "./firebaseHelpers";

export default function() {
  return {
    UserOwnedItems: new DataLoader(ids =>
      Promise.all(ids.map(id => getUserOwnedItems(id)))
    ),
    UserBorrowedItems: new DataLoader(ids =>
      Promise.all(ids.map(id => getUserBorrowedItems(id)))
    ),
    SingleItem: new DataLoader(ids => Promise.all(ids.map(id => getItem(id)))),

    SingleUser: new DataLoader(ids => Promise.all(ids.map(id => getUser(id))))
  };
}
