<style lang="scss" src="./StudentDataForm.scss" scoped></style>

<template>
  <v-form lazy-validation class="college-form d-flex flex-column py-15 px-5">
    <div class="d-flex fields-area">
      <v-row>
        <v-col cols="12" md="6">
          <AutoCompleteUniversities
            v-model="form.university"
            class="limit-field"
            label="Universidade"
            @blur="setStore"
          />
        </v-col>

        <v-col cols="12" md="6">
          <AutoCompleteLocations
            v-model="form.location"
            class="limit-field"
            :university-id="form.university"
            label="Campus"
            @blur="setStore"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <AutoCompleteCourses
            v-model="form.course"
            :location-id="form.location"
            class="limit-field"
            :university-id="form.university"
            label="Cursos"
            @blur="setStore"
          />
        </v-col>

        <v-col cols="12" md="3">
          <AutoCompleteSemesters
            v-model="form.semester"
            label="Semestre"
            persistent-hint
            hint="Semestre do vínculo no curso."
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
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <AutoCompleteSchools
            v-model="form.school"
            label="Escola Conclusão Ensino Médio"
            @blur="setStore"
          />
        </v-col>

        <v-col cols="12" md="4">
          <AutoCompleteYesOrNo
            v-model="form.socialSupport"
            persistent-hint
            label="Apoio Social"
            hint="Informa se o aluno recebe algum tipo de apoio social na forma de
          moradia, transporte, alimentação, material didático e bolsas
          (trabalho/permanência)."
            @blur="setStore"
          />
        </v-col>

        <v-col cols="12" md="4">
          <AutoCompleteYesOrNo
            v-model="form.parfor"
            label="PARFOR"
            persistent-hint
            hint="Informa se o aluno participa do programa especial para a formação de professores em exercício na rede publica de educação básica (PARFOR)."
            @blur="setStore"
          />
        </v-col>
      </v-row>

      <v-row>
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
      </v-row>

      <v-col cols="12" md="4">
        <AutoCompleteYesOrNo
          v-model="form.financing"
          label="Financiamento Estudantil"
          persistent-hint
          hint="Informa se o aluno utiliza financiamento estudantil."
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
  },

  data() {
    return {
      form: {
        university: undefined,
        location: undefined,
        course: undefined,
        socialSupport: undefined,
        extraCurricular: undefined,
        school: undefined,
        semester: undefined,
        parfor: undefined,
        financing: undefined,
        reservation: undefined,
        scholarship: undefined,
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
