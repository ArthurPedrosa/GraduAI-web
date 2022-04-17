import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import Identification from "$modules/identification/store";
import Analysis from "$modules/analysis/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Identification, Analysis },
  plugins: [createPersistedState()],
});
