<template>
  <Input
    label="Senha"
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
  },

  computed: {
    getRules() {
      return [...this.rules, this.passwordRules];
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
