<template>
  <div>
    <WelcomeArea />

    <Divider />

    <UniversitiesArea />

    <Divider />

    <AttributesArea />

    <Divider />

    <AnalysisArea />

    <Divider />

    <AboutCreatorsArea />
  </div>
</template>

<script>
import {
  WelcomeArea,
  UniversitiesArea,
  AttributesArea,
  AnalysisArea,
  AboutCreatorsArea,
} from "./components";
import { Divider } from "$shared/components";

export default {
  name: "Home",

  components: {
    WelcomeArea,
    UniversitiesArea,
    AttributesArea,
    AnalysisArea,
    AboutCreatorsArea,
    Divider,
  },
};
</script>
