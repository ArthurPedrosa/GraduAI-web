<style lang="scss" src="./WelcomeArea.scss" scoped></style>

<template>
  <v-container class="py-15">
    <v-row align="center" justify="space-around">
      <v-col lg="6" class="mt-md-5">
        <Title class="text-center mb-5">
          Descubra sua chance de aprovação!
        </Title>

        <TextDefault class="text-center">
          Informe seus dados, e descubra a sua chance de se graduar em uma
          universidade brasileira
        </TextDefault>

        <v-row justify="center" class="mt-5">
          <Button class="mr-2" color="success" @click="goToRoute('/analysis')"
            >Começar</Button
          >

          <Button outlined class="ml-2" color="success">
            Iniciar sessão
          </Button>
        </v-row>
      </v-col>

      <WelcomeIcon lg="6" class="icon-welcome hidden-xs-only" />
    </v-row>
  </v-container>
</template>

<script>
import { Title, TextDefault, WelcomeIcon, Button } from "$shared/components";

export default {
  name: "WelcomeArea",
  components: {
    Title,
    TextDefault,
    WelcomeIcon,
    Button,
  },
  methods: {
    goToRoute(pRouteName) {
      if (pRouteName) {
        this.$router.push(pRouteName);
      }
    },
  },
};
</script>
