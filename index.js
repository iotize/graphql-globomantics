const { ApolloServer, gql } = require('apollo-server');
const SessionsAPI = require('./datasources/sessions');
const SpeakersAPI = require('./datasources/speakers');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const dataSources = () => ({
  sessionsAPI: new SessionsAPI(),
  speakersAPI: new SpeakersAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphql running at ${url}`);
});
