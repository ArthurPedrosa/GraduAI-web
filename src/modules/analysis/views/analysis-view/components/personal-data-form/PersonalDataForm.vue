<style lang="scss" src="./PersonalDataForm.scss" scoped></style>

<template>
  <v-form
    lazy-validation
    class="personal-data-form d-flex flex-column py-15 px-5"
  >
    <div class="d-flex fields-area">
      <v-row>
        <v-col cols="12" md="6">
          <Input v-model="form.name" label="Nome" @blur="setStore" />
        </v-col>
        <v-col cols="12" md="3">
          <AutoComplete v-model="form.sex" label="Sexo" @blur="setStore" />
        </v-col>
        <v-col cols="12" md="3">
          <AutoComplete v-model="form.race" label="Raça" @blur="setStore" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <InputDate
            v-model="form.birthDate"
            label="Data de Nascimento"
            @blur="setStore"
          />
        </v-col>

        <v-col cols="12" md="4">
          <AutoComplete
            v-model="form.socialSupport"
            label="Apoio Social"
            @blur="setStore"
          />
        </v-col>

        <v-col cols="12" md="4">
          <AutoComplete
            v-model="form.extraCurricular"
            label="Atividades Extras Curriculares"
            @blur="setStore"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <AutoCompleteUfs v-model="form.uf" label="Estado" @blur="setStore" />
        </v-col>

        <v-col cols="12" md="4">
          <AutoComplete
            v-model="form.city"
            label="Municipio"
            @blur="setStore"
          />
        </v-col>

        <v-col cols="12" md="4">
          <AutoComplete
            v-model="form.naturality"
            label="Naturalidade"
            @blur="setStore"
          />
        </v-col>
      </v-row>
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
