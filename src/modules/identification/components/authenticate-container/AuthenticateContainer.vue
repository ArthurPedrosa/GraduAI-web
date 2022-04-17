<style lang="scss" src="./AuthenticateContainer.scss" scoped></style>

<template>
  <v-container
    class="authenticate-container d-flex align-center justify-space-around"
  >
    <v-col align="center" justify="center">
      <v-row align="center" justify="space-around">
        <v-col class="col-md-4">
          <CardDefault elevation="2" class="card-size pa-5">
            <div class="flex-grow-1 d-flex flex-column">
              <TextDefault class="text-h6 font-weight-bold">
                {{ titleCard }}
              </TextDefault>

              <TextDefault class="mb-2">{{ subtitle }}</TextDefault>

              <slot />

              <div class="btns-area">
                <slot name="card-footer" />
              </div>
            </div>
          </CardDefault>
        </v-col>

        <v-col class="col-md-8 hidden-xs-only hidden-sm-only info-area">
          <CloudIcon class="cloud-icon" />

          <SubTitle>
            Crie um usuário para futuras consultas mais simples.
          </SubTitle>

          <TextDefault class="my-5">
            Faça a análise sem a necessidade de registrar-se, clicando
            <ButtonText
              class="warning--text"
              @click="() => $router.push('/analysis').catch(() => {})"
            >
              aqui
            </ButtonText>
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
  CardDefault,
  ButtonText,
} from "$shared/components";
export default {
  name: "AuthenticateContainer",

  components: {
    SubTitle,
    TextDefault,
    CloudIcon,
    LoginIcon,
    CardDefault,
    ButtonText,
  },

  props: {
    titleCard: {
      type: String,
      default: "Titulo",
    },

    subtitle: {
      type: String,
      default: "SubTitulo",
    },
  },
};
</script>
