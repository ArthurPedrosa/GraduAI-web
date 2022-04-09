<template>
  <v-container id="input-usage" fluid class="pa-0">
    <v-row>
      <v-col cols="12" class="pa-0" align="start">
        <v-input>
          <v-text-field
            v-model="inputValue"
            :label="label"
            :rules="getRules"
            :type="type"
            :prepend-inner-icon="icon"
            :append-icon="appendIcon"
            outlined
            dense
            :autocomplete="autoComplete"
            @click:append="$emit('click-append')"
          />
        </v-input>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Input",

  props: {
    label: {
      type: String,
      default: "",
    },
    rules: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: "text",
    },
    icon: {
      type: String,
      default: "",
    },
    value: {
      default: undefined,
    },
    appendIcon: {
      type: String,
      default: "",
    },
    autoComplete: {
      type: String,
      default: "",
    },
  },

  computed: {
    getRules() {
      return this.rules;
    },
  },

  data() {
    return {
      inputValue: "",
    };
  },
  mounted() {
    if (this.value) {
      this.inputValue = this.value;
    }
  },

  watch: {
    inputValue(pValue) {
      this.$emit("input", pValue);
    },

    value(pValue) {
      this.inputValue = pValue;
    },
  },
  methods: {},
};
</script>
