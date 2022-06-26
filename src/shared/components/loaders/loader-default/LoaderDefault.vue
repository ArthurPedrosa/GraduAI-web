<template>
  <div class="d-flex flex-column justify-center align-center my-4">
    <v-progress-circular :size="70" :width="7" color="warning" indeterminate />
    <TextDefault class="mt-4" v-if="label.length > 0">{{ label }}</TextDefault>
  </div>
</template>

<script>
import { TextDefault } from "$shared/components";
export default {
  name: "LoaderDefault",

  components: {
    TextDefault,
  },

  props: {
    label: {
      type: String,
      default: "",
    },
  },
};
</script>
