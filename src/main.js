import Vue from "vue";
import App from "$shared/App.vue";
import router from "$shared/router";
import store from "$shared/store";
import vuetify from "$shared/plugins/vuetify";
import Notifications from "vue-notification";
import rulesValidations from "$shared/utils/rulesValidations";

Vue.config.productionTip = false;
Vue.prototype.$rulesValidations = rulesValidations;

Vue.use(Notifications);

router.beforeEach((to, from, next) => {
  const AccessControlRoutes = [
    "/login",
    "/login/register",
    "/login/recover-password",
  ];
  const authRequired = !AccessControlRoutes.includes(to.path);
  const loggedIn =
    localStorage.vuex && !!JSON.parse(localStorage.vuex).AccessControl.token;

  if (loggedIn && !authRequired) {
    next("/");
  }

  next();
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
