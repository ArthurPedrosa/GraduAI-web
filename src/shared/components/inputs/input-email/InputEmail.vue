<script>
import { Input } from "$shared/components/inputs";
export default {
  name: "InputEmail",

  components: { Input },

  extends: Input,

  computed: {
    getRules() {
      return this.rules;
    },
  },
};
</script>
