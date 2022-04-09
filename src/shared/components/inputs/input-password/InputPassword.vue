<template>
  <Input
    v-model="inputValue"
    :label="label"
    :append-icon="hide ? 'mdi-eye' : 'mdi-eye-off'"
    :rules="getRules"
    :type="hide ? 'password' : 'text'"
    :icon="icon"
    @click-append="clickAppend"
  />
</template>

<script>
import { Input } from "$shared/components/inputs";

export default {
  name: "InputPassword",

  components: { Input },

  extends: Input,

  props: {
    type: {
      type: String,
      default: "password",
    },
    icon: {
      type: String,
      default: "fa-lock",
    },
    label: {
      type: String,
      default: "Senha",
    },
  },

  computed: {
    getRules() {
      return [...this.rules, this.passwordRules];
    },
  },
  data() {
    return {
      hide: true,
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
  methods: {
    passwordRules: (pValue) => {
      return pValue.length >= 8 || "A senha deve conter 8 ou mais caracteres.";
    },

    clickAppend() {
      this.hide = !this.hide;
    },
  },
};
</script>
