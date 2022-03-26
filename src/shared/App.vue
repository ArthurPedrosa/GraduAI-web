<template>
  <v-app>
    <router-view name="NavBar" />
    <v-main>
      <router-view />
    </v-main>
    <router-view name="Footer" />
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
