const sessions = require('../data/sessions.json');
const _ = require('lodash');
const { DataSource } = require('apollo-datasource');

class SessionsAPI extends DataSource {
  constructor() {
    super();
  }
  
  initialize(config) {
  }

  getSessions() {
    return sessions;
  }

  getSession(id) {
    const session = _.filter(sessions, { id: parseInt(id) });
    return session[0];
  }

  toggleFavoriteSession(id) {
    const session = _.filter(sessions, { id: parseInt(id) });
    session[0].favorite = !session[0].favorite;
    return session[0];
  }

  addNewSession(session) {
    session.id = 12;
    sessions.push(session);
  }
}

module.exports = SessionsAPI;
