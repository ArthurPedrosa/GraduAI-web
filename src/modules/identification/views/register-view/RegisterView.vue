<template>
  <AuthenticateContainer
    title-card="Cadastrar um Usuário"
    subtitle="Informe os campos para cadastrar um usuário."
  >
    <v-form ref="form" class="d-flex flex-column justify-center flex-grow-1">
      <div
        class="pa-10 d-flex flex-column align-start justify-center flex-grow-1"
      >
        <Input
          v-model="form.name"
          label="Nome"
          class="mb-2"
          :rules="[nameValidation, $rulesValidations.required]"
        />

        <InputEmail
          v-model="form.email"
          class="mb-2"
          label="Email"
          :rules="[$rulesValidations.required]"
        />

        <InputPassword
          v-model="form.password"
          class="mb-2"
          :rules="[$rulesValidations.required]"
        />

        <InputPassword
          v-model="form.passwordConfirmation"
          label="Confirme sua senha"
          class="mb-2"
          :rules="[pswdConfirmationValidation]"
        />

        <Checkbox
          v-model="form.agreement"
          label="Concordo com os termos"
          required
          :rules="[checkboxValidation]"
        />
      </div>

      <div class="d-flex flex-column align-center">
        <Button
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
    </v-form>
  </AuthenticateContainer>
</template>

<script>
import { AuthenticateContainer } from "$modules/identification/components";
import { Button } from "$shared/components";
import { Input } from "$shared/components";
import { InputEmail } from "$shared/components";
import { InputPassword } from "$shared/components";
import { Checkbox } from "$shared/components";

export default {
  name: "Register",
  components: {
    AuthenticateContainer,
    Button,
    Checkbox,
    Input,
    InputEmail,
    InputPassword,
  },

  data: () => ({
    form: {
      name: undefined,
      email: undefined,
      password: undefined,
      passwordConfirmation: undefined,
      agreement: false,
    },
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
      return (
        pattern.test(value) || "Informe um nome válido.",
        value.length <= 200 || "O nome deve conter até 60 caractéres."
      );
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

          this.$router.push("/login");
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
