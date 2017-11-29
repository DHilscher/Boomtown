import { database } from "../index";
import { getUser, getUsers } from "./firebaseHelpers";

const resolveFunctions = {
  Query: {
    items() {
      return database.getItems();
    },
    item(root, { id }, context) {
      return context.loaders.SingleItem.load(id);
    },
    users() {
      return getUsers();
    },
    async user(root, { id }, context) {
      return await context.loaders.SingleUser.load(id);
    },
    tags() {
      return database.getTags();
    }
  },
  Item: {
    async borrower(item, arg, context) {
      if (!item.borrower) return null;
      return await context.loaders.SingleUser.load(item.borrower);
    },
    async itemowner(item, arg, context) {
      if (!item.itemowner) return null;
      return await context.loaders.SingleUser.load(item.itemowner);
    },
    tags(item) {
      return database.getTag(item.id);
    }
  },
  User: {
    async owneditems(user, arg, context) {
      if (!user.id) return null;
      return await context.loaders.UserOwnedItems.load(user.id);
    },
    async borroweditems(user, arg, context) {
      if (!user.id) return null;
      return await context.loaders.UserBorrowedItems.load(user.id);
    }
  },
  Mutation: {
    addItem(root, { title, imageurl, description, itemowner, tags }) {
      return createNewItem(title, imageurl, description, itemowner, tags);
    }
  }
};
export default resolveFunctions;
