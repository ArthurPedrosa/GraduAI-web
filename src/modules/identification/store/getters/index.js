export default {
  isLoggedIn(state) {
    return !!state.token && !!state.user;
  },

  userData(state) {
    return state.user;
  },
};
