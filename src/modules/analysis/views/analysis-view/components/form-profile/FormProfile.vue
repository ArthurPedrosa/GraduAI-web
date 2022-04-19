<style lang="scss" src="./FormProfile.scss" scoped></style>

<template>
  <div class="form-profile d-flex align-center justify-center">
    <Button class="mr-2" color="success" small width="15%" minWidth="200px">
      Novo Perfil
    </Button>
  </div>
</template>

<script>
import { Button } from "$shared/components";
export default {
  name: "FormProfile",

  components: {
    Button,
  },
};
</script>
