<template>
  <v-row justify="center">
    <v-dialog v-model="show" width="1600px">
      <v-card>
        <div class="pa-5">
          <slot />
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="danger" text @click="$emit('close')"> Fechar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "Modal",

  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
