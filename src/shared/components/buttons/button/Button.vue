<template>
  <v-btn
    :id="id"
    :rounded="rounded"
    :fab="fab"
    :outlined="outlined"
    :small="small"
    :text="text"
    :plain="plain"
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
    fab: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
    plain: {
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
