<style lang="scss" src="./AttributesArea.scss" scoped></style>

<template>
  <v-container>
    <v-col align="center">
      <SubTitle class="text-center primary--text">
        Os {{ attributtes[1] || "" }} Atributos Mais Influentes
      </SubTitle>

      <div class="container">
        <LoaderDefault v-if="loader" />

        <div v-else-if="attributtes[1] > 0">
          <BarChart
            :chart-data="attributtes[0]"
            labelChart="Porcentagem(%) influência atributos."
            variable-label-name="iat_name"
            variable-value-name="iat_importance"
          />

          <v-row
            v-for="(item, index) in attributtes[0]"
            :key="index"
            :justify="isOdd(index) ? 'start' : 'end'"
            class="my-7"
            align="center"
          >
            <CardText
              :title-card="item.iat_name"
              :subtitle-card="`${item.iat_importance.toFixed(1)} %`"
              class="card"
            >
              {{ item.iat_description }}
            </CardText>
          </v-row>
        </div>

        <div v-else>
          <TextDefault> Falha ao carregador os atributos.</TextDefault>
        </div>
      </div>
    </v-col>
  </v-container>
</template>

<script>
import {
  SubTitle,
  CardText,
  BarChart,
  LoaderDefault,
  TextDefault,
} from "$shared/components";

export default {
  name: "AttributesArea",
  components: {
    SubTitle,
    CardText,
    BarChart,
    LoaderDefault,
    TextDefault,
  },

  data() {
    return {
      loader: false,
      attributtes: [[], 0],
    };
  },

  async mounted() {
    await this.getAttributes();
  },

  methods: {
    isOdd(index) {
      return index % 2 === 0;
    },

    async getAttributes() {
      try {
        this.loader = true;
        const data = await this.$store.dispatch(
          "Analysis/GET_MOST_VALUABLE_ATTRIBUTES"
        );

        this.attributtes = data;
      } catch (err) {
        this.$notify({
          group: "app",
          type: "error",
          title: err.status || "Error",
          text: err.message || "",
        });
      } finally {
        this.loader = false;
      }
    },
  },
};
</script>
