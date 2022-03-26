<template>
  <div>
    <WelcomeArea />

    <Divider />

    <UniversitiesArea />

    <Divider />
  </div>
</template>

<script>
import { WelcomeArea, UniversitiesArea } from "./components";
import { Divider } from "$shared/components";

export default {
  name: "Home",

  components: {
    WelcomeArea,
    UniversitiesArea,
    Divider,
  },
};
</script>
