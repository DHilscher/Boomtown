import { database } from "../index";

import {
  // getItem,
  // getUsers,
  // getUser,
  createNewItem
} from "./jsonHelpers";
import { getUser, getUsers } from "./firebaseHelpers";

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
    },
    tags() {
      return database.getTags();
    }
  },
  Item: {
    borrower(item, arg, context) {
      if (!item.borrower) return null;
      return context.loaders.SingleUser.load(item.borrower);
    },
    itemowner(item, arg, context) {
      if (!item.itemowner) return null;
      return context.loaders.SingleUser.load(item.itemowner);
    },
    tags(item) {
      return database.getTag(item.id);
    }
  },
  User: {
    async owneditems(user, arg, context) {
      if (!user.id) return null;
      // return getUserOwneditems(user.id)
      return context.loaders.UserOwnedItems.load(user.id);
    },
    async borroweditems(user, arg, context) {
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
