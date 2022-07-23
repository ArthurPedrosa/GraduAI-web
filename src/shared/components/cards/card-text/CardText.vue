<template>
  <v-card
    color="primary-item black--text rounded-lg"
    :elevation="elevation"
    style="border: 1px solid #cdcdcd"
  >
    <v-card-title class="text-h6 pb-0 primary--text text-capitalize">
      {{ titleCard }}

      <span v-if="subtitleCard.length > 0" class="ml-auto subtitle-2">
        {{ subtitleCard }}
      </span>
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
    subtitleCard: {
      type: String,
      default: "",
    },
    elevation: {
      type: String,
      default: "0",
    },
  },
};
</script>
