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
        :actual-level="actualLevel.id"
        @click:change-level="changeLevel"
        @click:next-level="changeLevel"
      >
        <ProfileForm v-if="isPerfil" />
        <PersonalDataForm ref="personal-data" v-else-if="isPersonalData" />
        <CollegeForm v-else-if="isCollege" />
        <RevisionForm v-else-if="isRevision" />
        <ResultForm v-else-if="isResult" />
      </StepperForm>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { InfoIcon, TextDefault } from "$shared/components";
import {
  ProfileForm,
  PersonalDataForm,
  CollegeForm,
  RevisionForm,
  ResultForm,
} from "./components";
import { StepperForm } from "$modules/analysis/components";

export default {
  name: "Analysis",

  components: {
    InfoIcon,
    TextDefault,
    StepperForm,
    ProfileForm,
    PersonalDataForm,
    CollegeForm,
    RevisionForm,
    ResultForm,
  },

  created() {
    this.STEPPER_DATA = [
      {
        id: 2,
        label: "Dados Pessoais",
        subtitle: "Informe os dados pessoais.",
        disabled: false,
      },
      {
        id: 3,
        label: "Universidades",
        subtitle: "Informe dados da universidade.",
        disabled: false,
      },
      {
        id: 4,
        label: "Revisão",
        subtitle: "Revise os dados informados.",
        disabled: false,
      },
      {
        id: 5,
        label: "Resultados",
        subtitle: "Aqui estão os resultados obtidos.",
        disabled: false,
      },
    ];

    if (this.isLoggedIn)
      this.STEPPER_DATA.unshift({
        id: 1,
        label: "Perfil",
        subtitle:
          "Crie um perfil ou selecione um já existente para começar a análise.",
        disabled: false,
      });
  },

  computed: {
    ...mapGetters({
      isLoggedIn: "AccessControl/isLoggedIn",
      getStepperLevel: "Analysis/getStepperLevel",
    }),

    isPerfil() {
      return this.actualLevel.label === "Perfil";
    },

    isPersonalData() {
      return this.actualLevel.label === "Dados Pessoais";
    },

    isCollege() {
      return this.actualLevel.label === "Universidades";
    },

    isRevision() {
      return this.actualLevel.label === "Revisão";
    },

    isResult() {
      return this.actualLevel.label === "Resultados";
    },
  },

  data: () => ({
    actualLevel: {},
  }),

  mounted() {
    if (this.getStepperLevel) {
      this.actualLevel = this.getStepperLevel;
    } else {
      this.actualLevel = this.STEPPER_DATA[0];
    }
  },

  methods: {
    changeLevel(pNewId) {
      const hasSelected = this.STEPPER_DATA.find(
        (stepper) => stepper.id === pNewId
      );

      if (hasSelected) {
        this.$store.commit("Analysis/setStepperLevel", hasSelected);
        this.actualLevel = hasSelected;
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
