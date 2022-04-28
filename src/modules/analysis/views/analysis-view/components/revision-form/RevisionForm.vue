<style lang="scss" src="./RevisionForm.scss" scoped></style>

<template>
  <v-container class="revision-form">
    <v-col class="container-half">
      <TextDefault class="text-h6 font-weight-bold pl-4">
        Dados Pessoais
      </TextDefault>
      <v-divider></v-divider>
    </v-col>

    <v-col class="container-half">
      <TextDefault class="text-h6 font-weight-bold pl-4">
        Universidade
      </TextDefault>
      <v-divider></v-divider>
    </v-col>
  </v-container>
</template>

<script>
import { TextDefault } from "$shared/components";
export default {
  name: "RevisionForm",
  components: { TextDefault },
};
</script>
