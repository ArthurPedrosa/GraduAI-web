<style lang="scss" src="./UserEditContainer.scss"></style>

<template>
  <v-row class="user-edit-container">
    <div class="slot-area my-10">
      <div class="title-area mb-5">
        <TextDefault class="text-h4 font-weight-bold text-center">
          {{ title }}
        </TextDefault>
        <TextDefault class="text-center">
          {{ subtitle }}
        </TextDefault>
      </div>

      <CardDefault
        class="overflow-y-auto overflow-x-hidden pa-4 pa-md-7 py-md-4"
      >
        <v-responsive :aspect-ratio="16 / 9">
          <slot />
        </v-responsive>
      </CardDefault>
    </div>
  </v-row>
</template>

<script>
import { CardDefault, TextDefault } from "$shared/components";

export default {
  name: "UserEditContainer",
  components: {
    CardDefault,
    TextDefault,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
  },
  methods: {
    goToRoute(pRouteName) {
      if (pRouteName) {
        this.$router.push(pRouteName).catch(() => {});
      }
    },
  },
};
</script>
