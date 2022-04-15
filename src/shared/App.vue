<template>
  <v-app>
    <router-view name="NavBar" />
    <v-main class="d-flex">
      <router-view />
    </v-main>
    <router-view name="Footer" />
    <notifications group="app" position="bottom right" />
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
