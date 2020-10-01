module.exports = {
  sessions: (parent, args, { dataSources }) => {
    return dataSources.sessionsAPI.getSessions();
  },
  sessionByID: (parent, { id }, { dataSources }) => {
    return dataSources.sessionsAPI.getSession(id);
  }
};
