<template>
  <v-container fluid class="pa-0" :style="{ width, minWidth, maxWidth }">
    <v-row>
      <v-col class="py-0" align="start">
        <v-input>
          <v-text-field
            v-model.trim="inputValue"
            :id="`input-${id}`"
            :label="label"
            :rules="getRules"
            :type="type"
            :prepend-inner-icon="icon"
            :append-icon="appendIcon"
            :readonly="readonly"
            :disabled="disabled"
            :hint="hint"
            persistent-hint="true"
            outlined
            dense
            :autocomplete="autoComplete"
            v-bind="bind"
            v-on="on"
            @click:append="$emit('click-append')"
            @blur="$emit('blur')"
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
    id: {
      type: String,
      default: "email",
    },
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
    readonly: {
      type: Boolean,
      default: false,
    },
    appendIcon: {
      type: String,
      default: "",
    },
    autoComplete: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "",
    },
    minWidth: {
      type: String,
      default: "100px",
    },
    maxWidth: {
      type: String,
      default: "",
    },
    bind: {
      default: undefined,
    },
    on: {
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    hint: {
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
