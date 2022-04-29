<style lang="scss" src="./ProfileForm.scss" scoped></style>

<template>
  <v-form
    ref="form-profile"
    lazy-validation
    class="form-profile d-flex align-center justify-center flex-column"
  >
    <AutoComplete
      label="Perfil"
      width="40%"
      minWidth="250px"
      maxWidth="450px"
      class="align-self-center"
    />

    <Button class="mr-2" color="success" small width="15%" minWidth="200px">
      Novo Perfil
    </Button>
  </v-form>
</template>

<script>
import { Button, AutoComplete } from "$shared/components";
export default {
  name: "ProfileForm",

  components: {
    Button,
    AutoComplete,
  },
};
</script>
