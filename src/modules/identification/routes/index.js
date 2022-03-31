import HomeView from "$modules/identification/views/home-view/HomeView.vue";
import LoginView from "$modules/identification/views/login-view/LoginView.vue";
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

export const LoginRoute = {
  path: "/login",
  name: "Login",
  components: {
    default: LoginView,
    NavBar,
    Footer,
  },
};
