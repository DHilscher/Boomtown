import fetch from 'node-fetch';

import { getItems, getItem, getUsers, getUser, getUserBorrowedItems, getUserOwnedItems, createNewItem } from "./jsonHelpers";

const resolveFunctions = {
  Query: {
    items() {
      return getItems();
    },
    item(root, { id }, context) {
      // return getItem(id);
        return context.loaders.SingleItem.load(id)      
    },
    users() {
      return getUsers();
    },
    user(root, { id }, context) {
      // return getUser(id);
        return context.loaders.SingleUser.load(id)      
    }
  },
  Item: {
    borrower(item) {
      return getUser(item.borrower);      
    },
    itemowner(item) {
      return getUser(item.itemowner);
    }
  },
  User: {
    async owneditems(user, args, context) {
        if (!user.id) return null;
        // return getUserOwneditems(user.id)
        return context.loaders.UserOwnedItems.load(user.id)
    },
    async borroweditems(user, args, context) {
      if (!user.id) return null;
      // return getUserBorroweditems(user.id)
        return context.loaders.UserBorrowedItems.load(user.id)      
    },
  },
  Mutation: {
    addItem(root, { title, imageurl, description, itemowner, tags }) {
      return createNewItem(title, imageurl, description, itemowner, tags);
    }
  }
};
export default resolveFunctions;