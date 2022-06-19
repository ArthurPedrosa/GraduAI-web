import HomeView from "$modules/access-control/views/home-view/HomeView.vue";
import LoginView from "$modules/access-control/views/login-view/LoginView.vue";
import RegisterView from "$modules/access-control/views/register-view/RegisterView.vue";
import RecoverPasswordView from "$modules/access-control/views/recover-password-view/RecoverPasswordView.vue";
import UserEditView from "$modules/access-control/views/edit-view/UserEditView.vue";
import AgreementView from "$modules/access-control/views/agreement-view/AgreementView.vue";
import ResetPasswordView from "$modules/access-control/views/reset-password-view/ResetPasswordView.vue";
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

export const RegisterRoute = {
  path: "/login/register",
  name: "Register",
  components: {
    default: RegisterView,
    NavBar,
    Footer,
  },
};

export const RecoverPasswordRoute = {
  path: "/login/recover-password",
  name: "RecoverPassword",
  components: {
    default: RecoverPasswordView,
    NavBar,
    Footer,
  },
};

export const ResetPasswordRoute = {
  path: "/login/reset-password/:token",
  name: "ResetPassword",
  components: {
    default: ResetPasswordView,
    NavBar,
    Footer,
  },
};

export const UserEditRoute = {
  path: "/user/edit",
  name: "UserEdit",
  components: {
    default: UserEditView,
    NavBar,
    Footer,
  },
};
export const AgreementRoute = {
  path: "/agreement",
  name: "Agreement",
  components: {
    default: AgreementView,
    NavBar,
    Footer,
  },
};
