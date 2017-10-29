import { database } from "../index";

import {
  getItems,
  getItem,
  getUsers,
  getUser,
  getUserBorrowedItems,
  getUserOwnedItems,
  createNewItem
} from "./jsonHelpers";
// import { getItems } from "./postgresDB";
// import { getUser } from "./firebaseHelpers";

const resolveFunctions = {
  Query: {
    items() {
      return database.getItems();
    },
    item(root, { id }, context) {
      // return getItem(id);
      return context.loaders.SingleItem.load(id);
    },
    users() {
      return getUsers();
    },
    user(root, { id }, context) {
      // return getUser(id);
      return context.loaders.SingleUser.load(id);
    }
  },
  Item: {
    borrower(item) {
      if (!item.borrower) return null;
      return getUser(item.borrower);
    },
    itemowner(item) {
      if (!item.itemowner) return null;
      return getUser(item.itemowner);
    }
  },
  User: {
    async owneditems(user, args, context) {
      if (!user.id) return null;
      // return getUserOwneditems(user.id)
      return context.loaders.UserOwnedItems.load(user.id);
    },
    async borroweditems(user, args, context) {
      if (!user.id) return null;
      // return getUserBorroweditems(user.id)
      return context.loaders.UserBorrowedItems.load(user.id);
    }
  },
  Mutation: {
    addItem(root, { title, imageurl, description, itemowner, tags }) {
      return createNewItem(title, imageurl, description, itemowner, tags);
    }
  }
};
export default resolveFunctions;
