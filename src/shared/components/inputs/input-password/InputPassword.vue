<template>
  <Input
    label="Senha"
    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
    :rules="getRules"
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
      show: false,
    };
  },

  methods: {
    passwordRules: (pValue) => {
      return pValue.length >= 8 || "A senha deve conter 8 ou mais caracteres.";
    },

    clickAppend: () => {
      console.log("alo", this.show);
      // this.show = !this.show;
    },
  },
};
</script>
