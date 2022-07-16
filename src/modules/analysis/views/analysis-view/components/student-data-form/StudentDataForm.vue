<style lang="scss" src="./StudentDataForm.scss" scoped></style>

<template>
  <v-form
    ref="form"
    lazy-validation
    class="college-form d-flex flex-column py-15 px-5"
  >
    <div class="d-flex fields-area">
      <v-col cols="12" md="6">
        <AutoCompleteUniversities
          v-model="form.university"
          :rules="[$rulesValidations.required]"
          class="limit-field"
          label="Universidade"
          @blur="setStore"
        />
      </v-col>

      <v-col cols="12" md="6">
        <AutoCompleteLocations
          v-model="form.location"
          :rules="[$rulesValidations.required]"
          class="limit-field"
          :university-id="form.university"
          label="Campus"
          @blur="setStore"
        />
      </v-col>

      <v-col cols="12" md="4">
        <AutoCompleteCourses
          v-model="form.course"
          :rules="[$rulesValidations.required]"
          :location-id="form.location"
          class="limit-field"
          :university-id="form.university"
          label="Cursos"
          @blur="setStore"
        />
      </v-col>

      <v-col cols="12" md="4">
        <AutoCompleteCoursesTurns
          v-model="form.turns"
          :rules="[$rulesValidations.required]"
          :course-id="form.course"
          class="limit-field limit-large"
          persistent-hint
          label="Turno"
          @blur="setStore"
        />
      </v-col>

      <v-col cols="12" md="4">
        <AutoCompleteTickets
          v-model="form.ticket"
          :rules="[$rulesValidations.required]"
          class="limit-field limit-large"
          persistent-hint
          hint="Informa a forma de ingresso na universidade."
          label="Ingresso"
          @blur="setStore"
        />
      </v-col>

      <v-col cols="12" md="5">
        <AutoCompleteReservations
          v-model="form.reservation"
          label="Reservas"
          persistent-hint
          hint="Informa se o aluno participa de programa de reserva de vagas."
          @blur="setStore"
        />
      </v-col>

      <v-col cols="12" md="3">
        <AutoCompleteSemesters
          v-model="form.semester"
          :rules="[$rulesValidations.required]"
          label="Semestre"
          persistent-hint
          hint="Semestre do vínculo no curso."
          @blur="setStore"
        />
      </v-col>

      <v-col cols="12" md="4">
        <AutoCompleteSchools
          v-model="form.school"
          :rules="[$rulesValidations.required]"
          label="Escola Conclusão Ensino Médio"
          @blur="setStore"
        />
      </v-col>

      <v-col cols="12" md="6">
        <AutoCompleteExtras
          v-model="form.extraCurricular"
          persistent-hint
          label="Atividades Extras Curriculares"
          hint="Informa se o aluno participa de algum tipo de atividade extracurricular (estágio não obrigatório, extensão, monitoria e pesquisa)."
          @blur="setStore"
        />
      </v-col>

      <v-col cols="12" md="6">
        <AutoCompleteScholarships
          v-model="form.scholarship"
          label="Bolsas"
          persistent-hint
          hint="Informa se o aluno recebe bolsa/remuneração por fazer atividade extracurricular."
          @blur="setStore"
        />
      </v-col>

      <v-col cols="12" md="6">
        <AutoCompleteSupports
          v-model="form.socialSupport"
          :rules="[$rulesValidations.required]"
          persistent-hint
          label="Apoio Social"
          hint="Informa se o aluno recebe algum tipo de apoio social na forma de
          moradia, transporte, alimentação, material didático e bolsas
          (trabalho/permanência)."
          @blur="setStore"
        />
      </v-col>

      <v-col cols="12" md="3">
        <AutoCompleteYesOrNo
          v-model="form.financing"
          :rules="[$rulesValidations.required]"
          label="Financiamento Estudantil"
          persistent-hint
          hint="Informa se o aluno utiliza financiamento estudantil."
          @blur="setStore"
        />
      </v-col>

      <v-col cols="12" md="3">
        <AutoCompleteYesOrNo
          v-model="form.parfor"
          :rules="[$rulesValidations.required]"
          label="PARFOR"
          persistent-hint
          hint="Informa se o aluno participa do programa especial para a formação de professores em exercício na rede publica de educação básica (PARFOR)."
          @blur="setStore"
        />
      </v-col>
    </div>
  </v-form>
</template>

<script>
import {
  AutoCompleteUniversities,
  AutoCompleteLocations,
  AutoCompleteYesOrNo,
  AutoCompleteCourses,
  AutoCompleteSchools,
  AutoCompleteSemesters,
  AutoCompleteReservations,
  AutoCompleteExtras,
  AutoCompleteScholarships,
  AutoCompleteTickets,
  AutoCompleteSupports,
  AutoCompleteCoursesTurns,
} from "$shared/components";
import { mapGetters } from "vuex";

export default {
  name: "StudentDataForm",

  components: {
    AutoCompleteUniversities,
    AutoCompleteLocations,
    AutoCompleteYesOrNo,
    AutoCompleteCourses,
    AutoCompleteSchools,
    AutoCompleteSemesters,
    AutoCompleteReservations,
    AutoCompleteExtras,
    AutoCompleteScholarships,
    AutoCompleteTickets,
    AutoCompleteSupports,
    AutoCompleteCoursesTurns,
  },

  data() {
    return {
      form: {
        turns: undefined,
        ticket: undefined,
        university: undefined,
        location: undefined,
        course: undefined,
        school: undefined,
        semester: undefined,
        parfor: undefined,
        financing: undefined,
        socialSupport: undefined,
        reservation: undefined,
        scholarship: undefined,
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
    validateForm() {
      return this.$refs.form.validate();
    },

    setStore() {
      this.$store.commit("Analysis/setStudentData", this.form);
    },

    getStore() {
      this.form = this.getStudentData;
    },
  },
};
</script>
