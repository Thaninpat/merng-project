const { ApolloServer, PubSub } = require('apollo-server');

// Database & config
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const { DB_USER, DB_PASSWORD1, DB_PASSWORD2, DB_NAME, PORT } = process.env;

// Resolvers
const pubsub = new PubSub();
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const createServer = async () => {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: ({ req }) => ({ req, pubsub }),
    });
    await mongoose
      .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD2}@cluster0.ghzsn.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
      )
      .then(() => {
        console.log('MongoDB Connected');
        return server.listen({ port: PORT });
      })
      .then((res) => {
        console.log(`Server running at -> ${res.url}`);
      });
  } catch (err) {
    console.log(err);
  }
};
createServer();
