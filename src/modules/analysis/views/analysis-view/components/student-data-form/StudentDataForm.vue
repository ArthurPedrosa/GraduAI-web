<style lang="scss" src="./StudentDataForm.scss" scoped></style>

<template>
  <v-form lazy-validation class="college-form d-flex flex-column py-15 px-5">
    <div class="d-flex fields-area">
      <v-row>
        <v-col cols="12" md="6">
          <AutoCompleteUniversities
            v-model="form.university"
            label="Universidade"
            @blur="setStore"
          />
        </v-col>

        <v-col cols="12" md="6">
          <AutoCompleteLocations
            v-model="form.location"
            :university-id="form.university"
            label="Campus"
            @blur="setStore"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <AutoCompleteCourses
            v-model="form.course"
            :location-id="form.location"
            :university-id="form.university"
            label="Cursos"
            @blur="setStore"
          />
        </v-col>

        <v-col cols="12" md="3">
          <AutoCompleteYesOrNo
            v-model="form.socialSupport"
            :persistent-hint="true"
            label="Apoio Social"
            hint="Informa se o aluno recebe algum tipo de apoio social na forma de
          moradia, transporte, alimentação, material didático e bolsas
          (trabalho/permanência)"
            @blur="setStore"
          />
        </v-col>

        <v-col cols="12" md="3">
          <AutoCompleteYesOrNo
            v-model="form.extraCurricular"
            :persistent-hint="true"
            label="Atividades Extras Curriculares"
            hint="Informa se o aluno participa de algum tipo de atividade extracurricular (estágio não obrigatório, extensão, monitoria e pesquisa)"
            @blur="setStore"
          />
        </v-col>
      </v-row>
    </div>
  </v-form>
</template>

<script>
import {
  AutoCompleteUniversities,
  AutoCompleteLocations,
  AutoCompleteYesOrNo,
  AutoCompleteCourses,
} from "$shared/components";
import { mapGetters } from "vuex";

export default {
  name: "StudentDataForm",

  components: {
    AutoCompleteUniversities,
    AutoCompleteLocations,
    AutoCompleteYesOrNo,
    AutoCompleteCourses,
  },

  data() {
    return {
      form: {
        university: undefined,
        location: undefined,
        course: undefined,
        socialSupport: undefined,
        extraCurricular: undefined,
      },
    };
  },

  computed: {
    ...mapGetters({
      getStudentData: "Analysis/getStudentData",
    }),
  },

  mounted() {
    this.getStore();
  },

  methods: {
    setStore() {
      this.$store.commit("Analysis/setStudentData", this.form);
    },

    getStore() {
      this.form = this.getStudentData;
    },
  },
};
</script>
