<template>
  <v-checkbox
    :id="`checkbox-${id}`"
    v-model="checkboxValue"
    :label="label"
    :rules="getRules"
    required
  ></v-checkbox>
</template>

<script>
export default {
  name: "Checkbox",

  props: {
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    value: {
      default: undefined,
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    getRules() {
      return [...this.rules];
    },
  },
  data() {
    return {
      checkboxValue: "",
    };
  },
  mounted() {
    if (this.value) {
      this.checkboxValue = this.value;
    }
  },
  watch: {
    checkboxValue(pValue) {
      this.$emit("checkbox", pValue);
    },

    value(pValue) {
      this.checkboxValue = pValue;
    },
  },
};
</script>
