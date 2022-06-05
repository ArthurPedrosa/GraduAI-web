<template>
  <v-form ref="formPersonal" lazy-validation class="pb-5">
    <TextDefault class="text-h6 font-weight-bold pl-4">
      Informações Pessoais
    </TextDefault>
    <v-divider class="mb-10"></v-divider>

    <div class="form px-5">
      <InputEmail v-model="form.email" label="E-mail" disabled readonly />

      <Input
        v-model="form.name"
        label="Nome"
        :rules="[nameValidation, $rulesValidations.required]"
      />
    </div>

    <div class="d-flex justify-end">
      <Button
        small
        outlined
        color="success"
        class="mr-2"
        @click="editPersonalData"
      >
        Atualizar Nome
      </Button>
    </div>
  </v-form>
</template>

<script>
import { Input, InputEmail, Button } from "$shared/components";
import { mapGetters } from "vuex";

export default {
  name: "UserEditData",
  components: {
    Input,
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
    },
  }),

  mounted() {
    this.form.name = this.userData.name;
    this.form.email = this.userData.email;
  },
  methods: {
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

    async editPersonalData() {
      try {
        const isValid = this.$refs.formPersonal.validate();

        if (isValid) {
          if (this.form.name) {
            const variables = { name: this.form.name };

            await this.$store.dispatch("Identification/UPDATE_USER", variables);

            this.$notify({
              group: "app",
              type: "success",
              title: "Usuario atualizado!",
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
