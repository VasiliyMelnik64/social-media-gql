import gql from 'graphql-tag';

export const postTypeDefs = gql`
  type Comment {
    id: ID
    body: String
    userName: String
  }
  type Post {
    id: ID!
    body: String!
    userName: String!
    createdAt: String!
    comments: [Comment]
  }
  type User {
    id: ID!
    userName: String!
    email: String!
    token: String!
    createdAt: String!
  }
  input RegisterInput {
    userName: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getPosts: [Post]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
  }
`;
