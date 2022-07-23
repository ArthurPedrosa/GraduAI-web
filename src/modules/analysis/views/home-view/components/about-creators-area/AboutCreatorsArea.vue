<style lang="scss" src="./AboutCreatorsArea.scss" scoped></style>
<template>
  <v-container>
    <v-col align="center">
      <SubTitle class="text-center primary--text mb-16"> Sobre Nós </SubTitle>

      <CreatorsIcon class="creators-icon hidden-xs-only mb-8" />
      <div class="container mb-8">
        <v-row>
          <CardText>
            <TextDefault class="font-weight-bold primary--text text-h6">
              Criadores
            </TextDefault>

            <TextDefault>
              <div class="mt-5">
                O GraduAI é um software construído para o trabalho de conclusão
                de curso de Sistemas de Informação do
                <span class="font-weight-bold">
                  Centro Federal de Educação Tecnológica Celso Suckow da Fonseca
                  (CEFET/RJ).
                </span>

                <ul class="mt-5">
                  <ul>
                    <ul>
                      <li>Arthur Pedrosa Ferreira;</li>
                      <li>Leonardo Almeida Teodoro;</li>
                      <li>Marco André Abud Kappel.</li>
                    </ul>
                  </ul>
                </ul>
              </div>
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
