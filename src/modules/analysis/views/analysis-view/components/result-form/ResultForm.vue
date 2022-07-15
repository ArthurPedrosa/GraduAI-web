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
    <div v-else>
      <v-col class="justify-center align-center pa-0">
        <!-- <TextDefault class="text-h5 font-weight-bold text-center">
        Análise Realizada Com Sucesso!
      </TextDefault> -->

        <TextDefault class="text-center">
          De acordo com os atributos informados, o GraduAI considera que há uma
          probabilidade de :
        </TextDefault>

        <!-- <TextDefault class="text-center">
        Graduação de
        <span class="success--text font-weight-bold">60%</span>
      </TextDefault>

      <TextDefault class="text-center">
        Evasão de
        <span class="danger--text font-weight-bold">40%</span>
      </TextDefault> -->
      </v-col>

      <div class="chart-size mr-auto">
        <PieChart />
      </div>
    </div>
  </v-container>
</template>

<script>
import { PieChart, TextDefault, LoaderDefault } from "$shared/components";
import { mapGetters } from "vuex";
export default {
  name: "ResultForm",
  components: {
    PieChart,
    TextDefault,
    LoaderDefault,
  },

  data() {
    return {
      loader: true,
      predictDropoutData: null,
    };
  },

  computed: {
    ...mapGetters({
      getStudentData: "Analysis/getStudentData",
      getPersonalData: "Analysis/getPersonalData",
      getUserData: "AccessControl/userData",
      getNewProfileStatus: "Analysis/getNewProfileStatus",
    }),
  },

  mounted() {
    this.submitAnalysis();
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

          console.log(params);

          const data = await this.$store.dispatch(
            "Analysis/PREDICT_DROPOUT_RATE",
            params
          );

          this.$store.commit("Analysis/setNewProfileStatus", false);
          this.predictDropoutData = data;
        }
      } catch (err) {
        this.$notify({
          group: "app",
          type: "error",
          title: err.status || "Error",
          text: err.message || "",
        });
      } finally {
        this.loader = false;
      }
    },
  },
};
</script>
