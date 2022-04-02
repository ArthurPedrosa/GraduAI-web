<style lang="scss" src="./ButtonText.scss" scoped></style>

<template>
  <button class="btn" @click="() => $emit('click')">
    <TextDefault class="font-weight-bold">
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
};
</script>
