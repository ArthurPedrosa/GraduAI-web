<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
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
        :rules="getRules"
        :on="on"
        readonly
        :style="{ width, minWidth, maxWidth }"
        @blur="$emit('blur')"
        @input="$emit('change')"
      />
    </template>

    <v-date-picker
      v-model="inputValue"
      no-title
      scrollable
      @input="$emit('change')"
    />
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
    rules: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    dateFormatted: {
      get: function () {
        return this.formatDate(this.inputValue);
      },
      set: function () {},
    },
    getRules() {
      return this.rules;
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
