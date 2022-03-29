<template>
  <v-footer class="mt-5" padless>
    <v-col class="text-center py-10" cols="12">
      {{ new Date().getFullYear() }} — <strong>GraduAI</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
