const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const commentsResolvers = require('./comments');
const viewUsersResolvers = require('./viewUser');
const roomsResolvers = require('./room');
const countriesResolvers = require('./country');

module.exports = {
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...postsResolvers.Query,
    ...viewUsersResolvers.Query,
    ...roomsResolvers.Query,
    ...countriesResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
    ...roomsResolvers.Mutation,
    ...countriesResolvers.Mutation,
  },
  Subscription: {
    ...postsResolvers.Subscription,
  },
};
