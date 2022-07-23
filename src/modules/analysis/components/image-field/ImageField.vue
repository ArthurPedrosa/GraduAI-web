<style lang="scss" src="./ImageField.scss" scoped></style>

<template>
  <div class="dflex flex-column my-5 justify-center align-center">
    <img :src="require(`$modules/analysis/assets/${src}`)" />

    <figcaption class="text-center">
      <TextDefault>{{ legend }} </TextDefault>
    </figcaption>
  </div>
</template>

<script>
import { TextDefault } from "$shared/components";
export default {
  name: "ImageField",
  components: { TextDefault },

  props: {
    src: {
      type: String,
      default: "",
    },
    legend: {
      type: String,
      default: "",
    },
  },
};
</script>
