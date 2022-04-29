<template>
  <v-btn
    :id="id"
    :rounded="rounded"
    :outlined="outlined"
    :small="small"
    :color="color"
    class="px-6"
    :style="{ width, minWidth }"
    @click="() => $emit('click')"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: "Button",
  props: {
    id: {
      type: String,
      default: "",
    },
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
    minWidth: {
      type: String,
      default: "",
    },
  },
};
</script>
