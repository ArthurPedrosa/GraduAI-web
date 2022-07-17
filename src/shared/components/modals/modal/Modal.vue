<template>
  <v-dialog v-model="show" :width="width" @click:outside="$emit('close')">
    <v-card>
      <div class="pa-5">
        <slot />
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <Button id="close-modal" color="danger" text @click="$emit('close')">
          Fechar
        </Button>

        <Button
          v-if="confirmButton"
          id="confirm-modal"
          color="success"
          text
          @click="$emit('confirm')"
        >
          Confirmar
        </Button>
      </v-card-actions>
    </v-card>
  </v-dialog>
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
    confirmButton: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "",
    },
  },
};
</script>
