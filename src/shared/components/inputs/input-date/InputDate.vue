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
        v-model="computedDateFormatted"
        :label="label"
        :icon="icon"
        :bind="attrs"
        :on="on"
        readonly
      />
    </template>

    <v-date-picker v-model="inputValue" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(inputValue)">
        OK
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

  data: () => ({
    inputValue: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),

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
    computedDateFormatted() {
      return this.formatDate(this.inputValue);
    },
  },

  methods: {
    formatDate(pDate) {
      if (!pDate) return null;

      const [year, month, day] = pDate.split("-");
      return `${day}/${month}/${year}`;
    },

    parseDate(pDate) {
      if (!pDate) return null;

      const [month, day, year] = pDate.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
};
</script>
