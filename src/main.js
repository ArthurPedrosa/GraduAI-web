import Vue from "vue";
import App from "$shared/App.vue";
import router from "$shared/router";
import store from "$shared/store";
import vuetify from "$shared/plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
