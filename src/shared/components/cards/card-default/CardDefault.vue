<template>
  <v-card elevation="2" :height="height"> <slot /> </v-card>
</template>

<script>
export default {
  name: "CardDefault",
  props: {
    height: {
      type: String,
      default: "auto",
    },
  },
};
</script>
