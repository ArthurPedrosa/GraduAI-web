import axios from "axios";
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

    delete axios.defaults.headers.Authorization;
  },
};
