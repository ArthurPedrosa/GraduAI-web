<style lang="scss" src="./AboutAnalysisArea.scss" scoped></style>
<template>
  <v-container class="container">
    <div>
      <v-col align="center">
        <SubTitle class="primary--text mb-8">Sobre a Análise</SubTitle>
        <div>
          <CardText>
            <TextDefault class="font-weight-bold">
              What is Lorem Ipsum?
            </TextDefault>
            <TextDefault>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </TextDefault>
          </CardText>
        </div>
      </v-col>
    </div>

    <img src="../../../../assets/ROCAUC.png" class="img-size" />

    <div>
      <v-col align="center">
        <div class="container">
          <CardText>
            <TextDefault class="font-weight-bold">
              What is Lorem Ipsum?
            </TextDefault>
            <TextDefault>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </TextDefault>
          </CardText>
        </div>
      </v-col>
    </div>

    <img src="../../../../assets/mapa.png" class="img-map-size" />
  </v-container>
</template>

<script>
import { SubTitle, CardText, TextDefault } from "$shared/components";

export default {
  name: "AboutAnalysisArea",
  components: {
    SubTitle,
    CardText,
    TextDefault,
  },
};
</script>
