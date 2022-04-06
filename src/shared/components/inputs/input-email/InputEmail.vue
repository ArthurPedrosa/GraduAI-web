<script>
import { Input } from "$shared/components/inputs";

export default {
  name: "InputEmail",

  components: { Input },

  extends: Input,

  computed: {
    getRules() {
      return [...this.rules, this.emailValidation];
    },
  },

  methods: {
    emailValidation: (value) => {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return pattern.test(value) || "Informe um e-mail válido.";
    },
  },
};
</script>
