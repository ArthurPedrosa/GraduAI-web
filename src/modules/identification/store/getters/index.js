export default {
  isLoggedIn(state) {
    return !!state.token && !!state.user;
  },

  getToken(state) {
    return state.token;
  },

  userData(state) {
    return state.user;
  },
};
