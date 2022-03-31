<style lang="scss" src="./AboutCreatorsArea.scss" scoped></style>
<template>
  <v-container>
    <v-col align="center">
      <SubTitle class="text-center primary--text mb-16"> Sobre Nós </SubTitle>

      <CreatorsIcon class="creators-icon hidden-xs-only" />
    </v-col>
  </v-container>
</template>

<script>
import { SubTitle, CreatorsIcon } from "$shared/components";

export default {
  name: "AboutCreatorsArea",
  components: {
    SubTitle,
    CreatorsIcon,
  },
};
</script>
