import AnalysisView from "$modules/analysis/views/analysis-view/AnalysisView.vue";
import { NavBar, Footer } from "$shared/components";

export const AnalysisRoute = {
  path: "/analysis",
  name: "Analysis",
  components: {
    default: AnalysisView,
    NavBar,
    Footer,
  },
};
