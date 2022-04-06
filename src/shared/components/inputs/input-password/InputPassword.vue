<template>
  <Input
    label="Senha"
    :append-icon="hide ? 'mdi-eye' : 'mdi-eye-off'"
    :rules="getRules"
    :type="hide ? 'password' : 'text'"
    @click-append="clickAppend"
  />
</template>

<script>
import { Input } from "$shared/components/inputs";

export default {
  name: "InputPassword",

  components: { Input },

  extends: Input,

  computed: {
    getRules() {
      return [...this.rules, this.passwordRules];
    },
  },

  props: {
    type: {
      type: String,
      default: "password",
    },
  },

  data() {
    return {
      hide: true,
    };
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
