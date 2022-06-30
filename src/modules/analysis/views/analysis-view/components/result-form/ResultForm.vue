<style lang="scss" src="./ResultForm.scss" scoped></style>

<template>
  <v-container class="result-form pa-0">
    <v-col class="justify-center align-center pa-0">
      <!-- <TextDefault class="text-h5 font-weight-bold text-center">
        Análise Realizada Com Sucesso!
      </TextDefault> -->

      <TextDefault class="text-center">
        De acordo com os atributos informados, o GraduAI considera que há uma
        probabilidade de :
      </TextDefault>

      <!-- <TextDefault class="text-center">
        Graduação de
        <span class="success--text font-weight-bold">60%</span>
      </TextDefault>

      <TextDefault class="text-center">
        Evasão de
        <span class="danger--text font-weight-bold">40%</span>
      </TextDefault> -->
    </v-col>

    <div class="chart-size mr-auto">
      <PieChart />
    </div>
  </v-container>
</template>

<script>
import { PieChart, TextDefault } from "$shared/components";
export default {
  name: "ResultForm",
  components: {
    PieChart,
    TextDefault,
  },
};
</script>
