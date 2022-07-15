<style lang="scss" src="./PersonalDataForm.scss" scoped></style>

<template>
  <v-form
    lazy-validation
    class="personal-data-form d-flex flex-column py-15 px-5"
  >
    <div class="d-flex fields-area">
      <v-col cols="12" md="6">
        <Input v-model="form.name" label="Nome" @blur="setStore" />
      </v-col>

      <v-col cols="12" md="3">
        <AutoCompleteGenders v-model="form.sex" label="Sexo" @blur="setStore" />
      </v-col>

      <v-col cols="12" md="3">
        <AutoCompleteRaces
          v-model="form.race"
          class="limit-field"
          label="Raça"
          @blur="setStore"
        />
      </v-col>

      <v-col cols="12" md="4">
        <InputDate
          v-model="form.birthDate"
          label="Data de Nascimento"
          @change="setStore"
          @blur="setStore"
        />
      </v-col>

      <v-col cols="12" md="4">
        <AutoCompleteNationalities
          v-model="form.nationality"
          label="Nacionalidade"
          class="limit-field"
          @blur="setStore"
        />
      </v-col>

      <v-col cols="12" md="4">
        <AutoCompleteYesOrNo
          v-model="form.deficiency"
          :persistent-hint="true"
          label="Deficiência"
          hint="Informa se é uma pessoa com deficiência, transtorno global do desenvolvimento ou altas habilidades/superdotação"
          @blur="setStore"
        />
      </v-col>
    </div>
  </v-form>
</template>

<script>
import {
  AutoCompleteGenders,
  AutoCompleteRaces,
  AutoCompleteNationalities,
  AutoCompleteYesOrNo,
  Input,
  InputDate,
} from "$shared/components";
import { mapGetters } from "vuex";

export default {
  name: "PersonalDataForm",

  components: {
    Input,
    AutoCompleteGenders,
    AutoCompleteRaces,
    AutoCompleteNationalities,
    AutoCompleteYesOrNo,
    InputDate,
  },

  data() {
    return {
      form: {
        name: undefined,
        sex: undefined,
        race: undefined,
        birthDate: new Date().toISOString().slice(0, 10),
        nationality: undefined,
        deficiency: undefined,
      },
    };
  },

  computed: {
    ...mapGetters({
      getPersonalData: "Analysis/getPersonalData",
    }),
  },

  mounted() {
    this.getStore();
  },

  methods: {
    setStore() {
      this.$store.commit("Analysis/setPersonalData", this.form);
    },

    getStore() {
      this.form = this.getPersonalData;
    },
  },
};
</script>
