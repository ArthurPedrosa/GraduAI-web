<style lang="scss" src="./AuthenticateContainer.scss" scoped></style>

<template>
  <v-container class="authenticate-container align-center justify-center">
    <v-col align="center" justify="center">
      <v-row align="center" justify="center">
        <v-col>
          <v-card elevation="2"> <slot /></v-card>
        </v-col>

        <v-col class="hidden-xs-only">
          <CloudIcon class="cloud-icon" />

          <SubTitle>
            Crie um usuário para futuras consultas mais simples.
          </SubTitle>

          <TextDefault>
            Faça a análise sem a necessidade de registrar-se, clicando aqui
          </TextDefault>

          <LoginIcon class="login-icon mr-15" />
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import {
  SubTitle,
  TextDefault,
  CloudIcon,
  LoginIcon,
} from "$shared/components";
export default {
  name: "AuthenticateContainer",

  components: {
    SubTitle,
    TextDefault,
    CloudIcon,
    LoginIcon,
  },
};
</script>
