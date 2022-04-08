<template>
  <v-container class="px-0" fluid>
    <v-row>
      <v-checkbox v-model="checkboxValue" :label="label"></v-checkbox>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Checkbox",

  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      default: undefined,
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
