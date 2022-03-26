<template>
  <v-btn
    :rounded="rounded"
    :outlined="outlined"
    :color="color"
    class="px-6"
    @click="() => $emit('click')"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: "Button",
  props: {
    color: {
      type: String,
      default: "success",
    },
    rounded: {
      type: Boolean,
      default: true,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
