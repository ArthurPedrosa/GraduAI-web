import Vue from "vue";
import VueRouter from "vue-router";

import * as IdentificationRoutes from "$modules/identification/routes";

Vue.use(VueRouter);

const routes = [...Object.values(IdentificationRoutes)];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
