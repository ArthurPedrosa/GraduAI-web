export default {
  setUser(state, user) {
    state.user = user;
  },

  setToken(state, token) {
    state.token = token;
  },

  logout(state) {
    state.user = null;
    state.token = null;
  },
};
