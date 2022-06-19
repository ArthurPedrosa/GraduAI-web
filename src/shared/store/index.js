import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import AccessControl from "$modules/access-control/store";
import Analysis from "$modules/analysis/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { AccessControl, Analysis },
  plugins: [createPersistedState()],
});
