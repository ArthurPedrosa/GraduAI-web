<template>
  <div>
    <WelcomeArea />

    <Divider />

    <UniversitiesArea />

    <Divider />

    <AttributesArea />

    <Divider ref="analisis" />

    <AboutAnalysisArea />

    <Divider />

    <AboutCreatorsArea />
  </div>
</template>

<script>
import {
  WelcomeArea,
  UniversitiesArea,
  AttributesArea,
  AboutAnalysisArea,
  AboutCreatorsArea,
} from "./components";
import { Divider } from "$shared/components";

export default {
  name: "Home",

  components: {
    WelcomeArea,
    UniversitiesArea,
    AttributesArea,
    AboutAnalysisArea,
    AboutCreatorsArea,
    Divider,
  },

  mounted() {
    const { scrollTo } = this.$route.params;
    if (scrollTo) {
      const position = this.$refs.analisis.$el.getBoundingClientRect().top;

      window.scrollTo(0, position);
    } else {
      this.clearStore();
    }
  },

  methods: {
    clearStore() {
      this.$store.commit("Analysis/clearAnalisysForm");
    },
  },
};
</script>
