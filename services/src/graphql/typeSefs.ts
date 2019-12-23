import { gql } from "apollo-server";

const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }

  type Book {
    id: ID!
    name: String!
  }

  type Query {
    authors: [Author!]!
  }
`;

export default typeDefs;
