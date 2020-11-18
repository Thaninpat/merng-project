const { gql } = require('apollo-server');

// Relation สร้างความสัมพันธ์ของแต่ละตาราง

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }
  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  type ViewUser {
    email: String!
    username: String!
    password: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
    getCompanies: [Company]
    getCompany(postId: ID!): Company
    viewUsers: [ViewUser]
    viewUser(postId: ID!): ViewUser
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
    createCompany(companyInput: CompanyInput): Company!
  }
  type Subscription {
    newPost: Post!
    newLike: Post!
  }
  type Company {
    id: ID!
    name: String!
    province: String!
    amphur: String!
    district: String!
    zipCode: String!
  }
  input CompanyInput {
    name: ID!
    province: String!
    amphur: String!
    district: String!
    zipCode: String!
  }
`;
