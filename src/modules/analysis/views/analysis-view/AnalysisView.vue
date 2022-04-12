<style lang="scss" src="./AnalysisView.scss" scoped></style>

<template>
  <v-container class="analysis-view">
    <v-row align="center" class="position-absolute ml-3 hidden-xs-only">
      <InfoIcon class="my-4 mr-2" />

      <TextDefault>Como é feita a analise?</TextDefault>
    </v-row>

    <TextDefault class="text-h4 font-weight-bold text-center mt-8">
      Análise
    </TextDefault>

    <TextDefault class="text-center mb-8">
      Crie um perfil ou selecione um já existente para começar a análise
    </TextDefault>

    <div class="stepper-area mb-4">
      <StepperForm
        :stepper-data="STEPPER_DATA"
        :actual-level="actualLevel"
        @click:change-level="changeLevel"
        @click:next-level="changeLevel"
      >
        <div v-if="actualLevel === 1">Aqui é a seleção do perfil</div>
        <div v-else-if="actualLevel === 2">Aqui é os Dados Pessoais</div>
        <div v-else-if="actualLevel === 3">Aqui é a Universidades</div>
        <div v-else-if="actualLevel === 4">Aqui é a Revisão</div>
        <div v-else-if="actualLevel === 5">Aqui é os Resultados</div>
      </StepperForm>
    </div>
  </v-container>
</template>

<script>
import { InfoIcon, TextDefault } from "$shared/components";

import { StepperForm } from "$modules/analysis/components";

export default {
  name: "Analysis",
  components: { InfoIcon, TextDefault, StepperForm },

  created() {
    this.STEPPER_DATA = [
      { level: 1, label: "Selecione um perfil" },
      { level: 2, label: "Dados Pessoais" },
      { level: 3, label: "Universidades" },
      { level: 4, label: "Revisão" },
      { level: 5, label: "Resultados" },
    ];
  },

  data: () => ({
    actualLevel: 1,
  }),

  methods: {
    changeLevel(pNewValue) {
      this.actualLevel = pNewValue;
    },
  },
};
</script>
