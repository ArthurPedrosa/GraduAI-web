<style lang="scss" src="./RegisterView.scss" scoped></style>

<template>
  <AuthenticateContainer
    title-card="Cadastrar um Usuário"
    subtitle="Informe os campos para cadastrar um usuário."
  >
    <v-form
      ref="form"
      class="register-view d-flex flex-column justify-center flex-grow-1"
    >
      <div
        class="px-sm-10 pt-5 d-flex flex-column align-start justify-center flex-grow-1 form"
      >
        <Input
          id="name"
          v-model="form.name"
          label="Nome"
          :rules="[nameValidation, $rulesValidations.required]"
        />

        <InputEmail
          v-model="form.email"
          label="Email"
          :rules="[$rulesValidations.required]"
        />

        <InputPassword
          id="password"
          v-model="form.password"
          :rules="[$rulesValidations.required]"
        />

        <InputPassword
          id="password-confirmation"
          v-model="form.passwordConfirmation"
          label="Confirme sua senha"
          :rules="[pswdConfirmationValidation]"
        />

        <Checkbox
          id="term"
          v-model="form.agreement"
          label="Concordo com os termos"
          class="align-self-center checkbox"
          required
          :rules="[checkboxValidation]"
        />
      </div>

      <div class="d-flex flex-column align-center pb-5">
        <Button
          id="term"
          class="align-self-center"
          small
          plain
          @click="showModal = true"
          color="primary"
        >
          Termo de Uso
        </Button>

        <Button
          id="register"
          small
          outlined
          class="mb-2 mt-2"
          color="success"
          width="60%"
          @click="register"
        >
          Registrar-se
        </Button>

        <Button
          id="back"
          small
          outlined
          class="mt-2"
          color="danger"
          width="60%"
          @click="() => $router.go(-1)"
        >
          Voltar
        </Button>
      </div>

      <Modal
        class="align-self-center"
        :show="showModal"
        @close="() => (showModal = false)"
      >
        <AgreementUser />
      </Modal>
    </v-form>
  </AuthenticateContainer>
</template>

<script>
import {
  AuthenticateContainer,
  AgreementUser,
} from "$modules/identification/components";
import {
  InputPassword,
  InputEmail,
  Input,
  Button,
  Checkbox,
  Modal,
} from "$shared/components";

export default {
  name: "Register",
  components: {
    AuthenticateContainer,
    Button,
    Checkbox,
    Input,
    InputEmail,
    InputPassword,
    Modal,
    AgreementUser,
  },

  data: () => ({
    form: {
      name: undefined,
      email: undefined,
      password: undefined,
      passwordConfirmation: undefined,
      agreement: false,
    },
    showModal: false,
  }),

  methods: {
    checkboxValidation(value) {
      return value || "Você deve aceitar para continuar.";
    },

    pswdConfirmationValidation(value) {
      return (
        (value && value == this.form.password) || "As senhas não coincidem."
      );
    },

    nameValidation: (value) => {
      const pattern = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

      if (!pattern.test(value)) {
        return "Informe um nome válido.";
      }

      if (value.length >= 60) {
        return "O nome deve conter até 60 caractéres.";
      }

      return true;
    },

    async register() {
      try {
        const isValid = this.$refs.form.validate();

        if (isValid) {
          const variables = {
            name: this.form.name,
            email: this.form.email,
            password: this.form.password,
            passwordConfirmation: this.form.passwordConfirmation,
          };

          await this.$store.dispatch("Identification/CREATE_USER", variables);

          this.$notify({
            group: "app",
            type: "success",
            title: "Boas Vindas!",
            text: "O usuário foi criado com sucesso.",
          });

          this.$router.push("/login").catch(() => {});
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
