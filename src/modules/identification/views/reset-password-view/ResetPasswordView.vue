<template>
  <AuthenticateContainer
    title-card="Alteração de Senha"
    subtitle="Digite a nova senha do seu usuário."
  >
    <v-form
      ref="form"
      lazy-validation
      class="d-flex flex-column justify-center flex-grow-1"
    >
      <div
        class="pa-10 d-flex flex-column align-start justify-center flex-grow-1"
      >
        <InputPassword
          v-model="form.password"
          class="mb-2"
          :rules="[$rulesValidations.required]"
        />

        <InputPassword
          v-model="form.passwordConfirmation"
          label="Confirme sua senha"
          :rules="[pswdConfirmationValidation]"
        />
      </div>

      <div class="d-flex flex-column align-center footer-card">
        <Button
          small
          outlined
          class="mb-2 mt-2"
          color="primary"
          width="60%"
          @click="resetPassword"
        >
          Enviar
        </Button>

        <Button
          small
          outlined
          class="mt-2"
          color="danger"
          width="60%"
          @click="goToLogin"
        >
          Voltar
        </Button>
      </div>
    </v-form>
  </AuthenticateContainer>
</template>

<script>
import { AuthenticateContainer } from "$modules/identification/components";
import { Button, InputPassword } from "$shared/components";

export default {
  name: "RecoverPassword",
  components: {
    AuthenticateContainer,
    Button,
    InputPassword,
  },

  data: () => ({
    form: {
      password: undefined,
      passwordConfirmation: undefined,
    },
  }),

  methods: {
    goToLogin() {
      this.$router.push("/login");
    },

    pswdConfirmationValidation(value) {
      return (
        (value && value == this.form.password) || "As senhas não coincidem."
      );
    },

    async resetPassword() {
      try {
        const isValid = this.$refs.form.validate();

        if (isValid) {
          const { token } = this.$route.params;

          await this.$store.dispatch("Identification/RESET_PASSWORD", {
            token,
            password: this.form.password,
            passwordConfirmation: this.form.passwordConfirmation,
          });

          this.$notify({
            group: "app",
            type: "success",
            title: "Senha Alterada!",
            text: "Sua senha foi alterada com sucesso.",
          });

          this.goToLogin();
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
