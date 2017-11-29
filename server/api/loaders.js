import DataLoader from "dataloader";

import { getUser, getUsers } from "./firebaseHelpers";
import { database } from "../index";

export default function() {
  return {
    UserOwnedItems: new DataLoader(ids =>
      Promise.all(ids.map(id => database.getUserOwnedItems(id)))
    ),
    UserBorrowedItems: new DataLoader(ids =>
      Promise.all(ids.map(id => database.getUserBorrowedItems(id)))
    ),
    SingleItem: new DataLoader(ids =>
      Promise.all(ids.map(id => database.getItem(id)))
    ),

    SingleUser: new DataLoader(ids => Promise.all(ids.map(id => getUser(id))))
  };
}
