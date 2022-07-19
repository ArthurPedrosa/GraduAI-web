<style lang="scss" src="./UniversitiesArea.scss" scoped></style>

<template>
  <v-container>
    <v-col align="center">
      <GraduateHatIcon class="hidden-xs-only" />

      <SubTitle class="text-center primary--text mb-16">
        As Universidades com Menores Taxas de Evasão
      </SubTitle>

      <div class="container-card">
        <v-form
          ref="form-profile"
          lazy-validation
          class="d-flex align-center justify-center flex-column"
        >
          <AutoCompleteCoursesByLocation
            v-model="form.courseName"
            label="Informe um Curso"
            :items="[{ value: 'alo', text: 'alooo' }]"
            itemValue="name"
            itemText="name"
          />
        </v-form>

        <v-row
          v-for="(item, index) in 5"
          :key="index"
          :justify="isOdd(index) ? 'start' : 'end'"
          class="my-10"
          align="center"
        >
          <v-progress-circular
            :rotate="360"
            :size="80"
            :width="5"
            :value="item"
            color="success"
          >
            {{ item }} %
          </v-progress-circular>

          <TextDefault class="text-university">
            Centro Federal de Educação Tecnológica Celso Suckow da Fonseca
            <TextDefault class="font-weight-bold">(CEFET-RJ)</TextDefault>
          </TextDefault>
        </v-row>
      </div>
    </v-col>
  </v-container>
</template>

<script>
import {
  SubTitle,
  GraduateHatIcon,
  TextDefault,
  AutoCompleteCoursesByLocation,
} from "$shared/components";
export default {
  name: "UniversitiesArea",
  components: {
    SubTitle,
    GraduateHatIcon,
    TextDefault,
    AutoCompleteCoursesByLocation,
  },

  data() {
    return {
      form: {
        courseName: undefined,
      },
    };
  },

  computed: {},

  methods: {
    isOdd(index) {
      return index % 2 === 0;
    },
  },
};
</script>
