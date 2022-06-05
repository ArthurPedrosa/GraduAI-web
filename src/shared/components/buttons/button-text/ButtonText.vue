<style lang="scss" src="./ButtonText.scss" scoped></style>

<template>
  <button :id="id" class="btn" @click="() => $emit('click')">
    <TextDefault>
      <slot />
    </TextDefault>
  </button>
</template>

<script>
import { TextDefault } from "$shared/components/texts";
export default {
  name: "ButtonText",
  components: {
    TextDefault,
  },
  props: {
    id: {
      type: String,
      default: "",
    },
  },
};
</script>
