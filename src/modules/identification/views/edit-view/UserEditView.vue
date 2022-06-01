<style lang="scss" src="./UserEditView.scss" scoped></style>

<template>
  <UserEditContainer
    class="user-edit-view"
    title="Editar Informações"
    subtitle="Aqui estão os seus dados, é possivel alterar apenas o seu nome ou a sua senha ou ambos."
  >
    <v-form ref="form" lazy-validation class="form-edit px-10 pt-10 pb-5">
      <div class="form">
        <InputEmail
          v-model="form.email"
          label="E-mail"
          class="mb-2"
          disabled
          readonly
        />

        <Input
          v-model="form.name"
          label="Nome"
          :rules="[nameValidation, $rulesValidations.required]"
        />

        <InputPassword
          v-model="form.password"
          label="Senha"
          :removeDefaultValidate="!form.passwordConfirmation || !form.password"
          :rules="[
            !!this.form.passwordConfirmation
              ? this.$rulesValidations.required
              : true,
          ]"
          auto-complete="current-password"
        />

        <InputPassword
          v-model="form.passwordConfirmation"
          label="Confirmação de Senha"
          :removeDefaultValidate="!form.passwordConfirmation || !form.password"
          :rules="[!!this.form.password ? pswdConfirmationValidation : true]"
          auto-complete="current-password"
        />
      </div>

      <div class="footer-edit">
        <Button small outlined color="success" class="mr-2" @click="edit">
          Atualizar
        </Button>
      </div>
    </v-form>
  </UserEditContainer>
</template>

<script>
import { UserEditContainer } from "$modules/identification/components";
import { Input, InputPassword, InputEmail, Button } from "$shared/components";

import { mapGetters } from "vuex";

export default {
  name: "UserEdit",
  components: {
    UserEditContainer,
    Input,
    InputPassword,
    InputEmail,
    Button,
  },
  computed: {
    ...mapGetters({
      userData: "Identification/userData",
    }),
  },

  data: () => ({
    form: {
      name: undefined,
      email: undefined,
      password: undefined,
      passwordConfirmation: undefined,
    },
  }),

  mounted() {
    this.form.name = this.userData.name;
    this.form.email = this.userData.email;
  },

  watch: {
    "form.password"(pValue) {
      if (!pValue && !this.form.passwordConfirmation) {
        this.$refs.form.resetValidation();
      }
    },

    "form.passwordConfirmation"(pValue) {
      if (!pValue && !this.form.password) {
        this.$refs.form.resetValidation();
      }
    },
  },

  methods: {
    pswdConfirmationValidation(value) {
      return (
        (value && value === this.form.password) || "As senhas não coincidem."
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

    async edit() {
      try {
        const isValid = this.$refs.form.validate();

        if (isValid) {
          const variables = {};

          if (this.form.name) {
            variables.name = this.form.name;
          }

          if (this.form.password && this.form.passwordConfirmation) {
            variables.password = this.form.password;
            variables.passwordConfirmation = this.form.passwordConfirmation;
          }

          await this.$store.dispatch("Identification/UPDATE_USER", variables);

          this.$notify({
            group: "app",
            type: "success",
            title: "Usuario atualizado!",
            text: "Atualizamos seu usuário com sucesso",
          });
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
