<template>
  <div>
    <WelcomeArea />

    <Divider />

    <UniversitiesArea />

    <Divider />

    <AttributesArea />

    <Divider />

    <Divider />

    <AboutCreatorsArea />
  </div>
</template>

<script>
import {
  WelcomeArea,
  UniversitiesArea,
  AttributesArea,
  AboutCreatorsArea,
} from "./components";
import { Divider } from "$shared/components";

export default {
  name: "Home",

  components: {
    WelcomeArea,
    UniversitiesArea,
    AttributesArea,
    AboutCreatorsArea,
    Divider,
  },
};
</script>
