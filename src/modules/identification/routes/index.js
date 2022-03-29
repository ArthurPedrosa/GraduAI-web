import Home from "$modules/identification/views/home/Home.vue";
import { NavBar, Footer } from "$shared/components";

export const HomeRoute = {
  path: "/",
  name: "Home",
  components: {
    default: Home,
    NavBar,
    Footer,
  },
};
