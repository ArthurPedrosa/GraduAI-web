<template>
  <UserEditContainer
    title="Dados cadastrais"
    subtitle="Aqui estão os seus dados cadastrados"
  >
    <v-form ref="editForm" lazy-validation class="pa-md-16 pa-10">
      <v-row justify="center" class="pa-md-10 pa-2">
        <v-col cols="12">
          <InputEmail
            v-model="form.email"
            label="E-mail"
            class="mb-2"
            :rules="[$rulesValidations.required]"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12"
          ><InputPassword
            v-model="form.password"
            label="Senha"
            :rules="[$rulesValidations.required]"
            auto-complete="current-password"
            class="pa-md-10 pa-2"
        /></v-col>
        <v-spacer></v-spacer>
      </v-row>

      <v-row align="center" justify="end">
        <Button
          small
          outlined
          class="mr-7 mb-7"
          color="success"
          @click="goToRoute('/login/register')"
        >
          Continuar
        </Button>
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
