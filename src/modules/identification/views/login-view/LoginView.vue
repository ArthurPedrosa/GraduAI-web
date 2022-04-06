<template>
  <AuthenticateContainer
    title-card="Iniciar Sessão"
    subtitle="Digite o email e a senha de um usuário ja cadastrado para iniciar a sessão."
  >
    <div class="pa-10">
      <InputEmail
        v-model="form.email"
        label="E-mail"
        icon="fa-at"
        :rules="[RULES_VALIDATION.required]"
      />

      <Input label="Senha" />
    </div>

    <div slot="card-footer" class="d-flex flex-column align-center">
      <Button
        small
        outlined
        class="mb-2 mt-2"
        color="primary"
        width="60%"
        @click="goToRoute('/login/recover-password')"
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
  </AuthenticateContainer>
</template>

<script>
import rulesValidations from "$shared/utils/rulesValidations";
import { AuthenticateContainer } from "$modules/identification/components";
import { Button, Input, InputEmail } from "$shared/components";

export default {
  name: "Login",
  components: {
    AuthenticateContainer,
    Button,
    Input,
    InputEmail,
  },

  created() {
    this.RULES_VALIDATION = rulesValidations;
  },

  data: () => ({
    form: {
      email: "",
    },
  }),
  methods: {
    goToRoute(pRouteName) {
      if (pRouteName) {
        this.$router.push(pRouteName);
      }
    },
  },
};
</script>
