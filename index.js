const { ApolloServer, PubSub } = require('apollo-server');

// Database
const mongoose = require('mongoose')
const { MONGODB } = require('./config')

// Resolvers
const pubsub = new PubSub()
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const createServer = async () => {
    try {
        const server = new ApolloServer({
            typeDefs,
            resolvers,
            context: ({ req }) => ({ req, pubsub })
        })
        await mongoose.connect(
            MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('MongoDB Connected')
                return server.listen({ port: 5000 })
            })
            .then(res => {
                console.log(`Server running at -> ${res.url}`)
            })
    }
    catch (err) {
        console.log(err)
    }
}
createServer()

/* const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
})

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB Connected')
        return server.listen({ port: 5000 })
    })
    .then(res => {
        console.log(`Server running at ${res.url}`)
    }) */