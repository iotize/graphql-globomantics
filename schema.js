const { gql } = require('apollo-server');

module.exports = gql`
type Query {
  sessions: [Session]
  sessionByID(id: String!): Session
}
type Mutation {
  toggleFavoriteSession(id: ID!): Session
  addNewSession(session: SessionInput): Session
}
input SessionInput {
  title: String!
  description: String!
  startsAt: String
  endsAt: String
  room: String
  day: String
  format: String
  track: String
  level: String
}
type Session {
  id: ID!
  title: String!
  description: String!
  startsAt: String
  endsAt: String
  room: String
  day: String
  format: String
  track: String
  level: String
  favorite: Boolean
}
`;
