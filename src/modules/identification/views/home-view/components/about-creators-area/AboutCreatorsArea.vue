<style lang="scss" src="./AboutCreatorsArea.scss" scoped></style>
<template>
  <v-container>
    <v-col align="center">
      <SubTitle class="text-center primary--text mb-16"> Sobre Nós </SubTitle>

      <CreatorsIcon class="creators-icon hidden-xs-only" />
      <div class="container">
        <v-row class="my-8">
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
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </TextDefault>
          </CardText>
        </v-row>
      </div>
    </v-col>
  </v-container>
</template>

<script>
import {
  SubTitle,
  CreatorsIcon,
  CardText,
  TextDefault,
} from "$shared/components";

export default {
  name: "AboutCreatorsArea",
  components: {
    SubTitle,
    CreatorsIcon,
    CardText,
    TextDefault,
  },
};
</script>
