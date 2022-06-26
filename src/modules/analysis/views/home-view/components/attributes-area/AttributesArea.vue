<style lang="scss" src="./AttributesArea.scss" scoped></style>

<template>
  <v-container>
    <v-col align="center">
      <SubTitle class="text-center primary--text">
        Os {{ attributtes.length || "" }} Atributos Mais Influentes
      </SubTitle>

      <div class="container">
        <LoaderDefault v-if="loader" />

        <div v-else-if="attributtes.length > 0">
          <BarChart
            :chart-data="attributtes"
            labelChart="Porcentagem(%) influência atributos."
            variable-label-name="feature"
            variable-value-name="importance"
          />

          <v-row
            v-for="(item, index) in attributtes"
            :key="index"
            :justify="isOdd(index) ? 'start' : 'end'"
            class="my-7"
            align="center"
          >
            <CardText
              :title-card="item.feature"
              :subtitle-card="`${item.importance} %`"
              class="card"
            >
              {{ item.description }}
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

  async mounted() {
    await this.getAttributes();
  },

  data() {
    return {
      loader: false,
      attributtes: [],
    };
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
