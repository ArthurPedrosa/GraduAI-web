<template>
  <v-container>
    <v-row align="center">
      <InfoIcon class="my-4 mr-2"> </InfoIcon>
      <TextDefault>Como é feita a analise?</TextDefault>
    </v-row>
    <v-row align="center">
      <v-col>
        <Title class="mt-3 text-center">Análise</Title>
        <TextDefault class="mt-1 text-center">
          Crie um perfil ou selecione um já existente para começar a análise
        </TextDefault>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-16">
      <v-col>
        <v-stepper>
          <v-stepper-header>
            <v-stepper-step step="1"> Selecione um perfil </v-stepper-step>
            <v-stepper-step step="2"> Dados Pessoais </v-stepper-step>
            <v-stepper-step step="3"> Universidades </v-stepper-step>
            <v-stepper-step step="4"> Revisão </v-stepper-step>
            <v-stepper-step step="5"> Resultados </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1" class="mb-4">
              <v-row class="ma-5 pa-10">
                <v-select label="Perfil" filled outlined></v-select>
              </v-row>
              <v-row justify="space-between" class="ma-5">
                <TextDefault>* Campos obrigatórios </TextDefault>
                <Button
                  outlined
                  class="ml-2"
                  color="primary"
                  @click="goToRoute('/login')"
                >
                  Próximo
                </Button>
              </v-row>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { InfoIcon, TextDefault, Title, Button } from "$shared/components";
export default {
  name: "Analysis",
  components: { InfoIcon, TextDefault, Title, Button },
};
</script>
