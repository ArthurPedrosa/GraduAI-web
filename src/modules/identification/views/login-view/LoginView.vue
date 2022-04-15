<style lang="scss" src="./LoginView.scss" scoped></style>

<template>
  <AuthenticateContainer
    title-card="Iniciar Sessão"
    subtitle="Digite o email e a senha de um usuário ja cadastrado para iniciar a sessão."
  >
    <v-form
      ref="form"
      lazy-validation
      class="d-flex flex-column justify-center flex-grow-1"
    >
      <div
        class="pa-10 d-flex flex-column align-start justify-center flex-grow-1"
      >
        <InputEmail
          v-model="form.email"
          label="E-mail"
          class="mb-2"
          :rules="[$rulesValidations.required]"
        />

        <InputPassword
          v-model="form.password"
          label="Senha"
          :rules="[$rulesValidations.required]"
          auto-complete="current-password"
        />

        <ButtonText
          class="primary--text position-button"
          @click="goToRoute('/login/recover-password')"
        >
          Esqueci minha senha
        </ButtonText>
      </div>

      <div class="d-flex flex-column align-center footer-card">
        <Button
          small
          outlined
          class="mb-2 mt-2"
          color="primary"
          width="60%"
          @click="login"
        >
          Entrar
        </Button>

        <Button
          small
          outlined
          class="mt-2"
          color="success"
          width="60%"
          @click="goToRoute('/login/register')"
        >
          Registrar-se
        </Button>
      </div>
    </v-form>
  </AuthenticateContainer>
</template>

<script>
import { AuthenticateContainer } from "$modules/identification/components";
import {
  Button,
  ButtonText,
  InputEmail,
  InputPassword,
} from "$shared/components";

export default {
  name: "Login",
  components: {
    AuthenticateContainer,
    Button,
    ButtonText,
    InputEmail,
    InputPassword,
  },

  data: () => ({
    form: {
      email: undefined,
      password: undefined,
    },
  }),

  methods: {
    goToRoute(pRouteName) {
      if (pRouteName) {
        this.$router.push(pRouteName);
      }
    },

    async login() {
      try {
        const isValid = this.$refs.form.validate();

        if (isValid) {
          const variables = {
            email: this.form.email,
            password: this.form.password,
          };

          const { user, token } = await this.$store.dispatch(
            "Identification/LOGIN_USER",
            variables
          );

          this.$store.commit("Identification/setToken", token);
          this.$store.commit("Identification/setUser", user);

          this.$notify({
            group: "app",
            type: "success",
            title: "Bem vindo!",
            text: "Acesso realizado com sucesso.",
          });

          this.$router.push("/");
        }
      } catch (err) {
        this.$notify({
          group: "app",
          type: "error",
          title: err.status || "Error",
          text: err.message || "",
        });
      }
    },
  },
};
</script>
