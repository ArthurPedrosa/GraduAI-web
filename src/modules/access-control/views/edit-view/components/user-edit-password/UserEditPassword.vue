<template>
  <v-form ref="formPassword" lazy-validation>
    <TextDefault class="text-h6 font-weight-bold pl-4">
      Alterar Senha
    </TextDefault>
    <v-divider class="mb-10"></v-divider>

    <div class="form px-5">
      <InputPassword
        v-model="form.oldPassword"
        label="Senha Atual"
        :rules="[this.$rulesValidations.required]"
        auto-complete="current-password"
      />

      <InputPassword
        v-model="form.newPassword"
        label="Nova Senha"
        :rules="[this.$rulesValidations.required]"
        auto-complete="current-password"
      />

      <InputPassword
        v-model="form.newPasswordConfirmation"
        label="Confirmação de Nova Senha"
        :rules="[pswdConfirmationValidation]"
        auto-complete="current-password"
      />
    </div>

    <div class="d-flex justify-end">
      <Button small outlined color="success" class="mr-2" @click="editPassword">
        Atualizar Senha
      </Button>
    </div>
  </v-form>
</template>

<script>
import { InputPassword, Button, TextDefault } from "$shared/components";

export default {
  name: "UserEditPassword",

  components: {
    InputPassword,
    Button,
    TextDefault,
  },

  data: () => ({
    form: {
      oldPassword: undefined,
      newPassword: undefined,
      newPasswordConfirmation: undefined,
    },
  }),

  methods: {
    pswdConfirmationValidation(value) {
      return (
        (value && value === this.form.newPassword) || "As senhas não coincidem."
      );
    },

    async editPassword() {
      try {
        const isValid = this.$refs.formPassword.validate();

        if (isValid) {
          const existAllFields =
            this.form.oldPassword &&
            this.form.newPassword &&
            this.form.newPasswordConfirmation;

          if (existAllFields) {
            await this.$store.dispatch("AccessControl/UPDATE_USER", this.form);

            this.form = {
              oldPassword: undefined,
              newPassword: undefined,
              newPasswordConfirmation: undefined,
            };
            this.$notify({
              group: "app",
              type: "success",
              title: "Senha atualizada!",
              text: "Atualizamos seu usuário com sucesso",
            });
          }
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
