<style lang="scss" src="./AnalysisView.scss" scoped></style>

<template>
  <v-container class="analysis-view">
    <button
      class="position-absolute ml-3 hidden-xs-only"
      @click="goToAboutAnalisis"
    >
      <v-row align="center">
        <InfoIcon class="my-4 mr-2" />

        <TextDefault>Como é feita a analise?</TextDefault>
      </v-row>
    </button>

    <TextDefault class="text-h4 font-weight-bold text-center mt-8">
      {{ actualLevel.label }}
    </TextDefault>

    <TextDefault class="text-center mb-8">
      {{ actualLevel.subtitle }}
    </TextDefault>

    <div class="stepper-area mb-4">
      <StepperForm
        :stepper-data="STEPPER_DATA"
        :actual-level="actualLevel.level"
        @click:change-level="changeLevel"
        @click:next-level="changeLevel"
      >
        <FormProfile v-if="actualLevel.level === 1" />
        <div v-else-if="actualLevel.level === 2">Aqui é os Dados Pessoais</div>
        <div v-else-if="actualLevel.level === 3">Aqui é a Universidades</div>
        <div v-else-if="actualLevel.level === 4">Aqui é a Revisão</div>
        <div v-else-if="actualLevel.level === 5">Aqui é os Resultados</div>
      </StepperForm>
    </div>
  </v-container>
</template>

<script>
import { InfoIcon, TextDefault } from "$shared/components";
import { FormProfile } from "./components";
import { mapGetters } from "vuex";
import { StepperForm } from "$modules/analysis/components";

export default {
  name: "Analysis",
  components: { InfoIcon, TextDefault, StepperForm, FormProfile },

  created() {
    this.STEPPER_DATA = [
      {
        level: 1,
        label: "Perfil",
        subtitle:
          "Crie um perfil ou selecione um já existente para começar a análise.",
        disabled: false,
      },
      {
        level: 2,
        label: "Dados Pessoais",
        subtitle: "Informe os dados pessoais.",
        disabled: false,
      },
      {
        level: 3,
        label: "Universidades",
        subtitle: "Informe dados da universidade.",
        disabled: false,
      },
      {
        level: 4,
        label: "Revisão",
        subtitle: "Revise os dados informados.",
        disabled: false,
      },
      {
        level: 5,
        label: "Resultados",
        subtitle: "Aqui estão os resultados obtidos.",
        disabled: false,
      },
    ];
  },

  computed: {
    ...mapGetters({
      isLoggedIn: "Identification/isLoggedIn",
    }),
  },

  data: () => ({
    actualLevel: {},
  }),

  mounted() {
    this.actualLevel = this.isLoggedIn
      ? this.STEPPER_DATA[0]
      : this.STEPPER_DATA[1];
  },

  methods: {
    changeLevel(pNewValue) {
      const hasSelectedLevel = this.STEPPER_DATA.find(
        (stepper) => stepper.level === pNewValue
      );

      if (hasSelectedLevel) {
        this.actualLevel = hasSelectedLevel;
      }
    },

    goToAboutAnalisis() {
      this.$router
        .push({
          name: "Home",
          params: { scrollTo: "about-analisis" },
        })
        .catch(() => {});
    },
  },
};
</script>
