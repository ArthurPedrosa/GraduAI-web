import HomeView from "$modules/analysis/views/home-view/HomeView.vue";
import AnalysisView from "$modules/analysis/views/analysis-view/AnalysisView.vue";
import { NavBar, Footer } from "$shared/components";

export const HomeRoute = {
  path: "/",
  name: "Home",
  components: {
    default: HomeView,
    NavBar,
    Footer,
  },
};

export const AnalysisRoute = {
  path: "/analysis",
  name: "Analysis",
  components: {
    default: AnalysisView,
    NavBar,
    Footer,
  },
};
