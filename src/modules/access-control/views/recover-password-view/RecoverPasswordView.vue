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
        class="pa-sm-10 d-flex flex-column align-start justify-center flex-grow-1"
      >
        <InputEmail
          v-model="form.email"
          v-if="!sended"
          label="E-mail"
          class="mb-2"
          :rules="[$rulesValidations.required]"
        />
        <TextDefault v-else>
          Enviamos um e-mail de recuparação de senha para você.
        </TextDefault>
      </div>

      <div class="d-flex flex-column align-center footer-card">
        <Button
          v-if="!sended"
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
import { AuthenticateContainer } from "$modules/access-control/components";
import { Button, InputEmail, TextDefault } from "$shared/components";

export default {
  name: "RecoverPassword",
  components: {
    AuthenticateContainer,
    Button,
    InputEmail,
    TextDefault,
  },

  data: () => ({
    sended: false,
    form: {
      email: undefined,
    },
  }),

  mounted() {
    this.sended = false;
  },

  methods: {
    goToRoute(pRouteName) {
      if (pRouteName) {
        this.$router.push({ path: pRouteName });
      }
    },

    async sendRecover() {
      try {
        const isValid = this.$refs.form.validate();

        if (isValid) {
          await this.$store.dispatch("AccessControl/RECOVER_PASSWORD", {
            email: this.form.email,
          });
          this.sended = true;
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
