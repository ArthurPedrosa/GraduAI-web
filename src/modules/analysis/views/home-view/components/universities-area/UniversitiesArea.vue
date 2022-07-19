<style lang="scss" src="./UniversitiesArea.scss" scoped></style>

<template>
  <v-container>
    <v-col align="center">
      <SubTitle class="text-center primary--text mb-16">
        As {{ universities.length || " " }} Universidades com Menores Taxas de
        Evasão por Cursos
      </SubTitle>

      <div class="container-card">
        <v-form
          ref="form-profile"
          lazy-validation
          class="d-flex align-center justify-center flex-column"
        >
          <AutoCompleteCourses
            v-model="form.courseName"
            label="Informe um Curso"
          />
        </v-form>

        <div v-if="universities.length === 0">
          <EmptyIcon class="empty-icon-size my-4 hidden-xs-only" />

          <TextDefault class="text-center font-weight-bold">
            Não encontramos dados para esse curso.
          </TextDefault>

          <TextDefault class="text-center">
            Selecione um curso para visualizar as universidades com menores
            taxas de evasões.
          </TextDefault>
        </div>

        <div v-else-if="loader" class="align-loader">
          <LoaderDefault />

          <TextDefault class="text-center font-weight-bold">
            Aguarde, estamos preparando tudo para você!
          </TextDefault>
        </div>

        <v-row
          v-else
          v-for="(item, index) in universities"
          :key="index"
          :justify="isOdd(index) ? 'start' : 'end'"
          class="my-8"
          align="center"
        >
          <v-progress-circular
            :rotate="360"
            :size="80"
            :width="5"
            :value="item.dropOutRate.toFixed(2)"
            color="success"
          >
            {{ item.dropOutRate.toFixed(2) }} %
          </v-progress-circular>

          <TextDefault class="text-university">
            {{ item.universityName }}
            <TextDefault
              v-if="item.universityInitials.length > 0"
              class="font-weight-bold"
            >
              ({{ item.universityInitials }})
            </TextDefault>
          </TextDefault>
        </v-row>
      </div>
    </v-col>
  </v-container>
</template>

<script>
import {
  SubTitle,
  TextDefault,
  AutoCompleteCourses,
  EmptyIcon,
} from "$shared/components";
export default {
  name: "UniversitiesArea",
  components: {
    SubTitle,
    TextDefault,
    AutoCompleteCourses,
    EmptyIcon,
  },

  data() {
    return {
      form: {
        courseName: undefined,
      },
      universities: [],
      loader: false,
    };
  },

  watch: {
    "form.courseName"() {
      this.getCollegesLessDropoutRatesByCourse();
    },
  },

  methods: {
    isOdd(index) {
      return index % 2 === 0;
    },

    async getCollegesLessDropoutRatesByCourse() {
      try {
        if (!this.form.courseName) {
          this.universities = [];
          return;
        }

        this.loader = true;
        const data = await this.$store.dispatch(
          "Analysis/GET_COLLEGES_LESS_DROPOUT_RATES_BY_COURSE",
          { courseName: this.form.courseName }
        );

        this.universities = data;
        console.log(this.universities);
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
