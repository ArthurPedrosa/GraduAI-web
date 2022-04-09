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
          class="mt-8"
          :rules="[nameValidation, RULES_VALIDATION.required]"
        />

        <InputEmail
          v-model="form.email"
          class="mt-8"
          label="Email"
          :rules="[RULES_VALIDATION.required]"
        />

        <InputPassword
          v-model="form.password"
          class="mt-8"
          :rules="[RULES_VALIDATION.required]"
        />
        <InputPassword
          v-model="form.passwordConfirmation"
          label="Confirme sua senha"
          class="mt-8"
          :rules="[pswdConfirmationValidation]"
        />
      </div>
      <div class="d-flex flex-column align-center footer-card">
        <Checkbox
          v-model="form.agreement"
          label="Concordo com os termos"
          required
          :rules="[checkboxValidation]"
        />
        <Button
          small
          outlined
          class="mt-2"
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
import rulesValidations from "$shared/utils/rulesValidations";
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
  created() {
    this.RULES_VALIDATION = rulesValidations;
  },

  data: () => ({
    form: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      agreement: false,
    },
  }),
  methods: {
    required: (value) => !!value || "Campo Obrigatório.",
    nameValidation: (value) => {
      const pattern = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
      return (
        pattern.test(value) || "Informe um nome válido.",
        value.length <= 60 || "O nome deve conter até 60 caractéres."
      );
    },
    pswdConfirmationValidation(value) {
      return (
        value == this.form.password || value == "" || "As senhas não coincidem."
      );
    },
    checkboxValidation(value) {
      return value || "Você deve aceitar para continuar.";
    },
    register() {
      try {
        const isValid = this.$refs.form.validate();

        if (isValid) {
          alert("Registrado");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
