module.exports = {
  toggleFavoriteSession: (parent, { id }, { dataSources }) => {
    return dataSources.sessionsAPI.toggleFavoriteSession(id);
  },
  addNewSession: (parent,  { session }, { dataSources }) => {
    return dataSources.sessionAPI.addNewSession(session);
  }
};
