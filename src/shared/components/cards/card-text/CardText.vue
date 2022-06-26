<template>
  <v-card color="primary-light black--text rounded-lg" elevation="3">
    <v-card-title class="text-h6 pb-0 primary--text text-capitalize">
      {{ titleCard }}
    </v-card-title>

    <v-card-text class="black--text text-left">
      <TextDefault>
        <slot />
      </TextDefault>
    </v-card-text>
  </v-card>
</template>

<script>
import { TextDefault } from "$shared/components/texts";

export default {
  name: "CardText",
  components: {
    TextDefault,
  },

  props: {
    titleCard: {
      type: String,
      default: "",
    },
  },
};
</script>
