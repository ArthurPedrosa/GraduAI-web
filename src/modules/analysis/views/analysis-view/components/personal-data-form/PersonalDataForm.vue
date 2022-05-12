<style lang="scss" src="./PersonalDataForm.scss" scoped></style>

<template>
  <v-form
    lazy-validation
    class="personal-data-form d-flex flex-column py-15 px-5"
  >
    <div class="d-flex fields-area">
      <Input
        v-model="form.name"
        label="Nome"
        minWidth="250px"
        width="55%"
        maxWidth="700px"
        @blur="setStore"
      />

      <AutoComplete
        v-model="form.sex"
        label="Sexo"
        minWidth="150px"
        maxWidth="250px"
        @blur="setStore"
      />

      <AutoComplete
        v-model="form.race"
        label="Raça"
        minWidth="150px"
        maxWidth="250px"
        @blur="setStore"
      />

      <InputDate
        v-model="form.birthDate"
        label="Data de Nascimento"
        minWidth="150px"
        maxWidth="350px"
        @blur="setStore"
      />

      <AutoComplete
        v-model="form.socialSupport"
        label="Apoio Social"
        minWidth="150px"
        maxWidth="350px"
        @blur="setStore"
      />

      <AutoComplete
        v-model="form.extraCurricular"
        label="Atividades Extras Curriculares"
        minWidth="150px"
        maxWidth="500px"
        @blur="setStore"
      />

      <AutoCompleteUfs
        v-model="form.uf"
        label="Estado"
        minWidth="150px"
        maxWidth="350px"
        @blur="setStore"
      />

      <AutoComplete
        v-model="form.city"
        label="Municipio"
        minWidth="150px"
        maxWidth="350px"
        @blur="setStore"
      />

      <AutoComplete
        v-model="form.naturality"
        label="Naturalidade"
        minWidth="150px"
        maxWidth="350px"
        @blur="setStore"
      />
    </div>
  </v-form>
</template>

<script>
import {
  AutoComplete,
  AutoCompleteUfs,
  Input,
  InputDate,
} from "$shared/components";
import { mapGetters } from "vuex";

export default {
  name: "PersonalDataForm",

  components: { Input, AutoComplete, AutoCompleteUfs, InputDate },

  data() {
    return {
      debounce: null,
      form: {
        name: undefined,
        sex: undefined,
        socialSupport: undefined,
        extraCurricular: undefined,
        race: undefined,
        birthDate: undefined,
        uf: undefined,
        city: undefined,
        naturality: undefined,
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
