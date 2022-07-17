<style lang="scss" src="./ResultForm.scss" scoped></style>

<template>
  <v-container class="result-form pa-0">
    <div v-if="loader" class="align-loader">
      <LoaderDefault />

      <TextDefault class="text-center font-weight-bold">
        Aguarde, estamos preparando tudo para você!
      </TextDefault>

      <TextDefault class="text-center">
        A análise pode demorar um pouco.
      </TextDefault>
    </div>
    <div v-else class="content">
      <v-row>
        <v-col cols="12" sm="3" class="card-info">
          <MagnifierIcon class="icon mb-2" />
          <TextDefault class="text-center"> Nome. </TextDefault>
        </v-col>

        <v-col cols="12" sm="3" class="card-info">
          <CertificateIcon class="icon mb-2" />
          <TextDefault class="text-center"> Universidade. </TextDefault>
        </v-col>

        <v-col cols="12" sm="3" class="card-info">
          <EarthIcon class="icon mb-2" />
          <TextDefault class="text-center"> Campus. </TextDefault>
        </v-col>

        <v-col cols="12" sm="3" class="card-info">
          <BookIcon class="icon mb-2" />
          <TextDefault class="text-center"> Curso. </TextDefault>
        </v-col>
      </v-row>

      <v-row class="mt-8 area-info">
        <v-col class="chart-size mr-auto" col="12" md="4">
          <PieChart :chartData="chartData" />
          <TextDefault class="mt-4 text-center">
            Graduação:
            <span class="success--text font-weight-bold">
              {{ percentFormat(predictDropoutData.probAprovado) }}
            </span>
          </TextDefault>

          <TextDefault class="text-center">
            Evasão:
            <span class="danger--text font-weight-bold">
              {{ percentFormat(predictDropoutData.probReprovado) }}
            </span>
          </TextDefault>
        </v-col>

        <v-col
          class="dflex justify-space-around align-center content px-10"
          col="12"
          md="8"
        >
          <div>
            <TextDefault class="text-center">
              De acordo com os atributos informados, o GraduAI classificou que
              há uma maior probabilidade de :
            </TextDefault>

            <TextDefault
              class="text-center mt-2 mb-2 text-h5 result-border fit-content mx-auto"
              :style="{
                borderColor: predictDropoutData.aprovado
                  ? '#44af69'
                  : '#e03616',
              }"
            >
              {{ resultText }}
            </TextDefault>
          </div>

          <TextDefault class="text-center">
            Obrigado por utilizar o GraduAI!
          </TextDefault>
        </v-col>
      </v-row>

      <TextDefault class="text-center font-weight-bold text-subtitle-2 mt-4">
        GraduAI classificou seus dados utilizando técnicas de aprendizado de
        máquinas, baseado em dados do INEP do ano de 2019.
      </TextDefault>
    </div>
  </v-container>
</template>

<script>
import {
  PieChart,
  TextDefault,
  LoaderDefault,
  MagnifierIcon,
  BookIcon,
  CertificateIcon,
  EarthIcon,
} from "$shared/components";
import { mapGetters } from "vuex";

export default {
  name: "ResultForm",
  components: {
    PieChart,
    TextDefault,
    LoaderDefault,
    MagnifierIcon,
    BookIcon,
    CertificateIcon,
    EarthIcon,
  },

  props: {
    changeLevel: {
      type: Function,
      default: () => {},
    },
  },

  data() {
    return {
      loader: true,
      chartData: null,
      predictDropoutData: {
        aprovado: false,
        probAprovado: 0,
        probReprovado: 0,
      },
    };
  },

  computed: {
    ...mapGetters({
      getStudentData: "Analysis/getStudentData",
      getPersonalData: "Analysis/getPersonalData",
      getUserData: "AccessControl/userData",
      getNewProfileStatus: "Analysis/getNewProfileStatus",
    }),

    resultText() {
      if (!this.predictDropoutData) {
        return "";
      }

      return this.predictDropoutData.aprovado ? "Aprovação" : " Evasão";
    },
  },

  mounted() {
    this.submitAnalysis();
  },

  created() {
    this.STUDENT_FORM = 3;
  },

  methods: {
    async submitAnalysis() {
      try {
        if (this.getStudentData && this.getPersonalData) {
          this.loader = true;
          const params = {
            analisys: {
              ...this.getStudentData,
              ...this.getPersonalData,
            },
            saveProfile: this.getNewProfileStatus,
          };

          if (this.getUserData?.id) {
            params.analisys.userId = this.getUserData.id;
          }

          const data = await this.$store.dispatch(
            "Analysis/PREDICT_DROPOUT_RATE",
            params
          );

          this.$store.commit("Analysis/setNewProfileStatus", false);

          this.predictDropoutData = data;
          this.chartData = [
            { label: "Graduação", color: "#41B883", value: data.probAprovado },
            { label: "Evasão", color: "#E46651", value: data.probReprovado },
          ];
        }
      } catch (err) {
        this.$notify({
          group: "app",
          type: "error",
          title: err.status || "Error",
          text: err.message || "",
        });
        this.changeLevel(this.STUDENT_FORM);
      } finally {
        this.loader = false;
      }
    },

    percentFormat(pParam) {
      return `${pParam.toFixed(2)} %`;
    },
  },
};
</script>
