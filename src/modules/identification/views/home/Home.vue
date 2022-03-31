<template>
  <div>
    <WelcomeArea />

    <Divider />

    <UniversitiesArea />

    <Divider />

    <AttributesArea />

    <Divider />

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
};
</script>
