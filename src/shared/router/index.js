import Vue from "vue";
import VueRouter from "vue-router";

import * as AccessControlRoutes from "$modules/access-control/routes";
import * as AnalysisRoutes from "$modules/analysis/routes";

Vue.use(VueRouter);

const routes = [
  ...Object.values(AccessControlRoutes),
  ...Object.values(AnalysisRoutes),
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
