import Vue from "vue";
import VueRouter from "vue-router";

import * as IdentificationRoutes from "$modules/identification/routes";
import * as AnalyzeView from "$modules/analysis/routes";

Vue.use(VueRouter);

const routes = [
  ...Object.values(IdentificationRoutes),
  ...Object.values(AnalyzeView),
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
