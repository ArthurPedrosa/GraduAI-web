import HomeView from "$modules/identification/views/home-view/HomeView.vue";
import LoginView from "$modules/identification/views/login-view/LoginView.vue";
import RegisterView from "$modules/identification/views/register-view/RegisterView.vue";
import RecoverPasswordView from "$modules/identification/views/recover-password-view/RecoverPasswordView.vue";
import UserEditView from "$modules/identification/views/edit-view/UserEditView.vue";
<<<<<<< HEAD
import AgreementView from "$modules/identification/views/agreement-view/AgreementView.vue";
=======
import ResetPasswordView from "$modules/identification/views/reset-password-view/ResetPasswordView.vue";
>>>>>>> e203233578bcca6e7f9615ed01744f7b6fe10ea0
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
