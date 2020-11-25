const { gql } = require('apollo-server');

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
    id: ID!
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
    viewUser(username: String): ViewUser
    rooms: [Room]
    countries: [Country]
    getDistrict(d: String): [Country]
    getAmphur(a: String): [Country]
    getProvince(p: String): [Country]
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
    createRoom(roomInput: RoomInput): Room
  }
  type Subscription {
    newPost: Post!
    newLike: Post!
  }

  # type Feed {
  #   links: [Country!]!
  #   count: Int!
  # }

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

  type Room {
    _id: ID
    name: String
    summary: String
    description: String
    room_type: String
    maximum_nights: Int
    minimum_nights: Int
    beds: Int
    accommodates: Int
    price: Float
    cleaning_fee: Float
  }

  input RoomInput {
    name: String
    summary: String
    description: String
    room_type: String
    maximum_nights: Int
    minimum_nights: Int
    beds: Int
    accommodates: Int
    price: Float
    cleaning_fee: Float
  }

  type Country {
    _id: ID!
    p: String!
    a: String!
    d: String!
    z: Int
  }

  input CountryInput {
    p: String!
    a: String!
    d: String!
    z: Int
  }
`;
