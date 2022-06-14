<template>
  <v-row justify="center">
    <v-dialog v-model="show" width="1600px">
      <v-card>
        <div class="pa-5">
          <slot />
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <Button id="close-modal" color="danger" text @click="$emit('close')">
            Fechar
          </Button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { Button } from "$shared/components";
export default {
  name: "Modal",
  components: {
    Button,
  },

  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
