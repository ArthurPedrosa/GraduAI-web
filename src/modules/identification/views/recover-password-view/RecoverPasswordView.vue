<template>
  <AuthenticateContainer
    title-card="Recuperação de Senha"
    subtitle="Digite seu email cadastrado para receber um email de recuperação de senha."
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
      </div>

      <div class="d-flex flex-column align-center footer-card">
        <Button
          small
          outlined
          class="mb-2 mt-2"
          color="primary"
          width="60%"
          @click="sendRecover"
        >
          Enviar
        </Button>

        <Button
          small
          outlined
          class="mt-2"
          color="danger"
          width="60%"
          @click="goToRoute('/login')"
        >
          Voltar
        </Button>
      </div>
    </v-form>
  </AuthenticateContainer>
</template>

<script>
import { AuthenticateContainer } from "$modules/identification/components";
import { Button, InputEmail } from "$shared/components";

export default {
  name: "RecoverPassword",
  components: {
    AuthenticateContainer,
    Button,
    InputEmail,
  },

  data: () => ({
    form: {
      email: undefined,
    },
  }),

  methods: {
    goToRoute(pRouteName) {
      if (pRouteName) {
        this.$router.push(pRouteName);
      }
    },

    sendRecover() {
      try {
        const isValid = this.$refs.form.validate();

        if (isValid) {
          alert("Enviado");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
