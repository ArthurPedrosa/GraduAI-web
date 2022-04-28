<style lang="scss" src="./PersonalDataForm.scss" scoped></style>

<template>
  <v-form
    lazy-validation
    class="personal-data-form d-flex flex-column py-15 px-5"
  >
    <div class="d-flex fields-area">
      <Input label="Nome" minWidth="250px" width="55%" maxWidth="700px" />

      <AutoComplete label="Sexo" minWidth="150px" maxWidth="250px" />

      <AutoComplete label="Raça" minWidth="150px" maxWidth="250px" />

      <InputDate label="Data de Nascimento" minWidth="150px" maxWidth="350px" />

      <AutoComplete label="Apoio Social" minWidth="150px" maxWidth="350px" />

      <AutoComplete
        label="Atividades Extra Curricular"
        minWidth="150px"
        maxWidth="500px"
      />

      <AutoComplete label="Municipio" minWidth="150px" maxWidth="350px" />

      <AutoComplete label="Estado" minWidth="150px" maxWidth="350px" />

      <AutoComplete label="Naturalidade" minWidth="150px" maxWidth="350px" />
    </div>
  </v-form>
</template>

<script>
import { AutoComplete, Input, InputDate } from "$shared/components";

export default {
  name: "PersonalDataForm",
  components: { Input, AutoComplete, InputDate },
};
</script>
