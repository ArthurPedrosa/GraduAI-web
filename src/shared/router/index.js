import Vue from "vue";
import VueRouter from "vue-router";

import * as IdentificationRoutes from "$modules/identification/routes";
import * as AnalysisRoutes from "$modules/analysis/routes";

Vue.use(VueRouter);

const routes = [
  ...Object.values(IdentificationRoutes),
  ...Object.values(AnalysisRoutes),
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
