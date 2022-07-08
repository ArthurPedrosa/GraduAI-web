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
          <AutoCompleteGenders
            v-model="form.sex"
            label="Sexo"
            @blur="setStore"
          />
        </v-col>

        <v-col cols="12" md="3">
          <AutoCompleteRaces
            v-model="form.race"
            label="Raça"
            @blur="setStore"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">
          <InputDate
            v-model="form.birthDate"
            label="Data de Nascimento"
            @blur="setStore"
          />
        </v-col>

        <v-col cols="12" md="3">
          <AutoCompleteUfs v-model="form.uf" label="Estado" @blur="setStore" />
        </v-col>

        <v-col cols="12" md="3">
          <AutoCompleteCounties
            v-model="form.city"
            :uf-id="form.uf"
            label="Municipio"
            @blur="setStore"
          />
        </v-col>

        <v-col cols="12" md="3"> </v-col>
      </v-row>
    </div>
  </v-form>
</template>

<script>
import {
  AutoCompleteGenders,
  AutoCompleteUfs,
  AutoCompleteRaces,
  AutoCompleteCounties,
  Input,
  InputDate,
} from "$shared/components";
import { mapGetters } from "vuex";

export default {
  name: "PersonalDataForm",

  components: {
    Input,
    AutoCompleteGenders,
    AutoCompleteUfs,
    AutoCompleteRaces,
    AutoCompleteCounties,
    InputDate,
  },

  data() {
    return {
      form: {
        name: undefined,
        sex: undefined,
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
