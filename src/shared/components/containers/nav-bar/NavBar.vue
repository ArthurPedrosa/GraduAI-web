<template>
  <v-app-bar app color="forecolor" class="py-0" elevation="1">
    <div class="d-flex align-center">
      <v-btn text class="text-capitalize" @click="$router.push('/')">
        <LogoIcon />
      </v-btn>
    </div>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
import { LogoIcon } from "$shared/components/icons";
export default {
  name: "NavBar",
  components: {
    LogoIcon,
  },
};
</script>
