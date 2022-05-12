<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="inputValue"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <Input
        v-model="dateFormatted"
        :label="label"
        :icon="icon"
        :bind="attrs"
        :on="on"
        readonly
        :style="{ width, minWidth, maxWidth }"
        @blur="$emit('blur')"
      />
    </template>

    <v-date-picker v-model="inputValue" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false"> Cancelar </v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(inputValue)">
        Confirmar
      </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
import { Input } from "$shared/components/inputs";
export default {
  name: "InputDate",
  components: { Input },

  extends: Input,

  props: {
    id: {
      type: String,
      default: "input-date",
    },
    icon: {
      type: String,
      default: "mdi-calendar",
    },
    label: {
      type: String,
      default: "Data",
    },
  },

  computed: {
    dateFormatted: {
      get: function () {
        return this.formatDate(this.inputValue);
      },
      set: function () {},
    },
  },

  data: () => ({
    inputValue: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
  }),

  methods: {
    formatDate(pDate) {
      if (!pDate) return null;

      const [year, month, day] = pDate.split("-");
      return `${day}/${month}/${year}`;
    },
  },
};
</script>
