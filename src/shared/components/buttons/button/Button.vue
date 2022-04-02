<template>
  <v-btn
    :rounded="rounded"
    :outlined="outlined"
    :small="small"
    :color="color"
    class="px-6"
    :style="{ width }"
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
    small: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "",
    },
  },
};
</script>
