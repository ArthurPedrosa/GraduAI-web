<template>
  <v-app-bar app color="forecolor" class="py-0" elevation="1">
    <div class="d-flex align-center">
      <v-btn text class="text-capitalize" @click="$router.push('/')">
        <LogoIcon />
      </v-btn>
    </div>

    <v-spacer></v-spacer>

    <ProfileAvatar v-if="isLoggedIn" />
  </v-app-bar>
</template>

<script>
import { ProfileAvatar } from "$shared/components/avatars";
import { LogoIcon } from "$shared/components/icons";
import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  components: {
    LogoIcon,
    ProfileAvatar,
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "Identification/isLoggedIn",
    }),
  },
};
</script>
