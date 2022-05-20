<template>
  <UserEditContainer
    title="Dados cadastrais"
    subtitle="Aqui estão os seus dados cadastrados"
  >
    <v-form ref="editForm" lazy-validation class="pa-10">
      <v-row justify="center" class="pt-md-3 pt-1">
        <v-col cols="10" md="5">
          <InputEmail
            v-model="form.email"
            label="E-mail"
            class="mb-2"
            :rules="[$rulesValidations.required]"
          />
        </v-col>
      </v-row>
      <v-row justify="center" class="pt-md-3 pt-1">
        <v-col cols="10" md="5"
          ><InputPassword
            v-model="form.password"
            label="Senha"
            :rules="[$rulesValidations.required]"
            auto-complete="current-password"
        /></v-col>
      </v-row>

      <v-row align="center" justify="space-between">
        <v-col cols="6" md="4">
          <TextDefault class="caption"
            >* Campos de preenchimento obrigatórios</TextDefault
          >
        </v-col>

        <v-col cols="5" md="4" class="d-flex justify-end">
          <Button
            small
            outlined
            class="mr-7 mb-7"
            color="success"
            @click="goToRoute('/login/register')"
          >
            Atualizar
          </Button>
        </v-col>
      </v-row>
    </v-form>
  </UserEditContainer>
</template>

<script>
import { UserEditContainer } from "$modules/identification/components";
import { InputEmail, InputPassword, Button } from "$shared/components";

export default {
  name: "UserEdit",
  components: {
    UserEditContainer,
    InputEmail,
    InputPassword,

    Button,
  },
  data: () => ({
    form: {
      email: undefined,
      password: undefined,
    },
  }),
  methods: {
    goToRoute(pRouteName) {
      if (pRouteName) {
        this.$router.push(pRouteName).catch(() => {});
      }
    },
    async edit() {
      try {
        const isValid = this.$refs.form.validate();

        if (isValid) {
          const variables = {
            email: this.form.email,
            password: this.form.password,
          };

          const { user, token } = await this.$store.dispatch(
            "Identification/LOGIN_USER",
            variables
          );
          console.log(user, token);
          this.$notify({
            group: "app",
            type: "success",
            title: "Dados atualizados!",
            text: "Alteração realizada com sucesso.",
          });

          this.$router.push("/edit").catch(() => {});
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
