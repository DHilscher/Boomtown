import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const typeDefs = `
  type Item {
    id: ID!
    title: String!
    description: String
    imageurl: String
    tags: [String]
    itemowner: User!
    created: String!
    available: Boolean!
    borrower: User
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
  item(id: ID!): Item
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