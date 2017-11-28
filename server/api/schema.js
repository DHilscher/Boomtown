import { makeExecutableSchema } from "graphql-tools";

import resolvers from "./resolvers";

const typeDefs = `
  type Item {
    id: ID!
    title: String!
    description: String
    imageurl: String
    itemowner: User
    created: String!
    borrower: User
    tags: [Tag]
  }

  type User {
    id: ID!
    email: String!
    fullname: String!    
    bio: String
    owneditems: [Item]
    borroweditems: [Item]
  }

  type Query {
  users: [User]
  user(id: ID!): User
  items: [Item]
  item(id: ID!): [Item]
  tags: [Tag]
}
  type Tag {
    id: ID!
    title: String!
  }

type Mutation {
  addItem(
    title: String!
    description: String
    imageurl: String
    tags: [String]
    itemowner: ID!
  ): Item
}
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
