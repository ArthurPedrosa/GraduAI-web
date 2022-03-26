<template>
  <v-container>
    <v-col align="center">
      <GraduateHatIcon />

      <SubTitle class="text-center primary--text">
        As 5 universidades com menores taxas de evasão
      </SubTitle>

      <v-col align="center" class="mt-10">
        <v-row
          ref="card"
          v-for="(item, index) in 5"
          :key="index"
          class="mb-10"
          align="center"
          justify="center"
        >
          <v-progress-circular
            :rotate="360"
            :size="80"
            :width="5"
            :value="item"
            color="success"
            class="mr-6"
          >
            {{ item }} %
          </v-progress-circular>

          <TextDefault>
            Centro Federal de Educação Tecnológica Celso Suckow da Fonseca
            <TextDefault class="font-weight-bold">(CEFET-RJ)</TextDefault>
          </TextDefault>
        </v-row>
      </v-col>
    </v-col>
  </v-container>
</template>

<script>
import { SubTitle, GraduateHatIcon, TextDefault } from "$shared/components";
export default {
  name: "UniversitiesArea",
  components: {
    SubTitle,
    GraduateHatIcon,
    TextDefault,
  },

  mounted() {
    console.log(this.$refs.card[0].offsetWidth);
  },
};
</script>
