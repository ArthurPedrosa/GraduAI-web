<style lang="scss" src="./AttributesArea.scss" scoped></style>

<template>
  <v-container>
    <v-col align="center">
      <SubTitle class="text-center primary--text">
        Os Atributos Mais Influentes
      </SubTitle>

      <div class="container">
        <BarChart />
        <v-row
          v-for="(item, index) in 10"
          :key="index"
          :justify="isOdd(index) ? 'start' : 'end'"
          class="my-7"
          align="center"
        >
          <CardText title-card="Idade" class="card">
            Idade que o aluno completou no ano de referência do Censo.
          </CardText>
        </v-row>
      </div>
    </v-col>
  </v-container>
</template>

<script>
import { SubTitle, CardText, BarChart } from "$shared/components";

export default {
  name: "AttributesArea",
  components: {
    SubTitle,
    CardText,
    BarChart,
  },

  methods: {
    isOdd(index) {
      return index % 2 === 0;
    },
  },
};
</script>
