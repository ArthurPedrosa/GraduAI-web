<template>
  <v-container
    id="input-usage"
    fluid
    class="pa-0"
    :style="{ width, minWidth, maxWidth }"
  >
    <v-row>
      <v-col cols="12" class="py-0" align="start">
        <v-input>
          <v-autocomplete
            v-model="inputValue"
            :label="label"
            :hint="hint"
            :items="items"
            :rules="getRules"
            :multiple="multiple"
            :item-text="itemText"
            :item-value="itemValue"
            :persistent-hint="persistentHint"
            no-data-text="Não há resultados disponíveis"
            outlined
            dense
            small-chips
            @blur="$emit('blur')"
          />
        </v-input>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AutoComplete",

  props: {
    label: {
      type: String,
      default: "",
    },

    rules: {
      type: Array,
      default: () => [],
    },

    icon: {
      type: String,
      default: "",
    },

    hint: {
      type: String,
      default: "",
    },

    value: {
      default: undefined,
    },

    items: {
      type: Array,
      default: () => [],
    },

    multiple: {
      type: Boolean,
      default: false,
    },

    persistentHint: {
      type: Boolean,
      default: false,
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

    itemValue: {
      type: String,
      default: "id",
    },

    itemText: {
      type: String,
      default: "name",
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
