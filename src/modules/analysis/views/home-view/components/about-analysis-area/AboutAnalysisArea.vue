<style lang="scss" src="./AboutAnalysisArea.scss" scoped></style>
<template>
  <v-container class="container">
    <div>
      <v-col align="center">
        <SubTitle class="primary--text mb-8">Sobre a Análise</SubTitle>
        <div>
          <CardText>
            <TextDefault class="font-weight-bold primary--text text-h6">
              O que é o Graduai ?
            </TextDefault>
            <TextDefault>
              <div class="mt-5">
                O GraduAI é um software que utiliza um modelo de aprendizado de
                máquina para apresentar ao estudante a probabilidade de
                aprovação ou de evasão no curso pretendido. Para isso, o sistema
                coleta dados do estudante, do curso, da instituição de ensino e
                do campus no qual ele deseja se matricular. A partir destas
                informações, o resultado da aplicação é demonstrado por meio de
                gráficos, tabelas e estatísticas que informam quais foram os
                fatores que mais influenciaram no resultado obtido. Além disso,
                outra finalidade é apresentar os cursos nos quais o estudante
                terá mais chances de se formar, dentro de alguns parâmetros
                previamente definidos.
              </div>
              <div class="mt-5">
                O objetivo primário fornecer aos estudantes as informações sobre
                a probabilidade de graduação no curso pretendido, utilizando um
                modelo treinado de Aprendizado de Máquina. Como objetivo
                secundário, visamos apresentar gráficos, tabelas e dados
                estatísticos sobre a evasão, além de informar os cursos nos
                quais os alunos terão mais chances de se formar e os principais
                atributos que podem ser trabalhados para aumentar essas chances.
              </div>

              <div class="mt-5">
                Dessa forma, o estudo almeja preencher a lacuna de conhecimento
                sobre as probabilidades de conclusão dos cursos e os fatores que
                possuem maior influência neste cenário. Com isso, espera-se que
                não só a entrada, como toda a trajetória do estudante em uma
                instituição de ensino superior pública brasileira seja
                facilitada e bem-sucedida, o que irá contribuir para a redução
                da evasão e os problemas socioeconômicos causados por ela.
              </div>
            </TextDefault>
          </CardText>
        </div>
      </v-col>
    </div>

    <div>
      <v-col align="center">
        <div class="container">
          <CardText>
            <TextDefault class="font-weight-bold primary--text text-h6">
              Como é feita a Análise ?
            </TextDefault>
            <TextDefault>
              <div class="mt-5">
                Os dados disponibilizados pelo INEP sobre o
                <span class="font-weight-bold">ano de 2019</span> foram obtidos,
                filtrados e pré-processados. A partir disso, foi feita a
                separação da base original em base de teste e de treinamento,
                com as proporções de 25% e 75%, respectivamente. No treinamento,
                foram utilizados cinco algoritmos de aprendizado de máquina:
                Árvores de Decisão, Florestas Randômicas, Redes Neurais, Naive
                Bayes e K-Nearest Neighbors. Depois, foram calculadas as
                métricas para a comparação do desempenho das técnicas de
                aprendizado de máquina e foi realizada a validação cruzada para
                o modelo que obteve os melhores resultados. Por fim, o modelo
                treinado e validado foi exportado para utilização no GraduAI.
              </div>

              <div class="mt-5">
                Para a montagem da base de dados utilizada pelos modelos
                preditivos, foram explorada as relações entre dados de todos os
                alunos que já se matricularam em instituições de ensino
                superior, dados de todos os cursos superiores cadastrados no
                MEC, dados de todos os docentes das instituições de ensino
                superior, dados de todas as instituições de ensino
                superior,dados de todos os locais de oferta dos cursos
                superiores e dados de todas as áreas relativas aos cursos
                superiores, de acordo com a Classificação Internacional
                Normalizada da Educação Cine/Unesco, que são disponibilizadas
                pelo INEP
              </div>

              <div class="mt-5">
                Para investigação e obtenção de conhecimento a partir da massa
                de dados educacionais disponibilizada pelo INEP no ano de 2019,
                com o foco na previsão do risco de evasão de um aluno em uma
                instituição de ensino superior pública, o escopo deste trabalho
                é limitado para apenas os
                <span class="font-weight-bold">
                  alunos de instituições públicas
                </span>
                , que falharam ou tiveram sucesso em sua formação. Por isso, são
                desconsiderados os dados de alunos de instituições privadas,
                além dos alunos desligados do curso por motivo de falecimento,
                por exemplo.
              </div>

              <div class="mt-5">
                O total de registros presentes na base final balanceada é de

                <span class="font-weight-bold">470.678 </span>, número que
                corresponde ao total de alunos considerados neste estudo. Nesta
                base, foi realizada ainda uma etapa simples de seleção de
                variáveis, em que foram removidas colunas que apresentavam
                muitos valores nulos, inválidos, com baixa variância e
                agrupamento de algumas colunas dummies. No total, a base
                construída e utilizada no presente trabalho ficou com 152
                variáveis previsoras, correspondentes às características, ou
                atributos, dos alunos, e uma única variável de classe, que pode
                possuir dois valores: sucesso ou evasão.
              </div>

              <div class="mt-5">
                <ul>
                  <li>
                    A terminologia “positivo”, representa um caso de evasão.
                  </li>
                  <li>
                    Os verdadeiros positivos são os valores que realmente
                    correspondem a uma evasão e foram previstos como tal.
                  </li>
                  <li>
                    Os falsos positivos são os valores que correspondem a uma
                    não-evasão e foram previstos como evasão.
                  </li>
                </ul>

                <div class="mt-5">
                  Por fim, o modelo construído pelo Random Forest foi o que
                  obteve o melhor desempenho em geral. Como mostra sua curva
                  ROC, este classificador é o que permite a escolha de um
                  critério mais alto de aceitação. Mesmo com um resultado para
                  recall um pouco mais baixo que o do Naive Bayes, por exemplo,
                  o método se mostrou mais estável e confiável levando em
                  consideração todas as outras métricas, que mostram eficácia
                  tanto em suas previsões de evasão quanto de sucesso. Além
                  disso, esse classificador ainda se adequa bem ao problema,
                  pois fornece dados que tornam possível a geração de um
                  relatório sobre quais atributos foram os mais importantes para
                  as suas previsões. Por estes motivos, é a técnica cujos
                  resultados foram os mais importantes.
                </div>
              </div>
            </TextDefault>
          </CardText>
        </div>
      </v-col>
    </div>

    <ImageField
      src="machine_learning_graph.png"
      class="img-bar-size img"
      legend="Figura 1: Resultados obtidos pela validação cruzada de cada técnica."
    />

    <ImageField
      src="ROCAUC.png"
      class="img-bar-size img hidden-xs-only"
      legend="Figura 2: Curvas ROC médias para cada classificador."
    />

    <div>
      <v-col align="center">
        <div class="container">
          <CardText>
            <TextDefault class="font-weight-bold primary--text text-h6">
              Resultados
            </TextDefault>
            <TextDefault>
              <div class="mt-5">
                A análise exploratória das variáveis possibilitou o entendimento
                dos padrões e perfis dos grupos mais críticos de alunos que
                precisam de mais atenção no desenvolvimento de políticas
                públicas de combate à evasão. Os atributos apresentados na
                Figura abaixo podem, então, ser considerados importantes para a
                orientação do combate ao problema em foco, com medidas como
                ampliação de planos de apoio social e incentivos à pesquisa e à
                adesão dos alunos a atividades extracurriculares, além de
                investimentos na formação dos professores.
              </div>

              <div class="font-weight-bold mt-5 text-center">
                Logo abaixo, estão as relações dos resultados obtidos
                exemplificados por gráficos:
              </div>
            </TextDefault>
          </CardText>
        </div>
      </v-col>
    </div>

    <ImageField
      src="mapa.png"
      class="img-map-size img"
      legend="Figura 3: Taxa de evasão de acordo com o local de oferta do curso."
    />

    <ImageField
      src="evasao_estado.png"
      class="img-bar-size img hidden-xs-only"
      legend="Figura 4: Total de casos de evasão e sucesso de acordo com os estados brasileiros."
    />

    <ImageField
      src="barra_idade.png"
      class="img-bar-size img hidden-xs-only"
      legend="Figura 5: Histograma da variável Idade, separada em casos de evasão e sucesso."
    />

    <ImageField
      src="sexo.png"
      class="img-bar-size img hidden-xs-only"
      legend="Figura 6: Total de casos de evasão e sucesso de acordo com o sexo dos alunos."
    />

    <ImageField
      src="semestre.png"
      class="img-bar-size img hidden-xs-only"
      legend="Figura 7: Total de casos de evasão e de sucesso de acordo com o semestre de referência do vínculo ao curso."
    />

    <ImageField
      src="etnia.png"
      class="img-bar-size img hidden-xs-only"
      legend="Figura 8: Total de casos de evasão e sucesso de acordo com a raça declarada dos alunos."
    />

    <ImageField
      src="ensino_medio.png"
      class="img-bar-size img hidden-xs-only"
      legend="Figura 9: Total de casos de evasão e sucesso de acordo com o tipo de escola que o aluno concluiu ensino médio."
    />

    <ImageField
      src="reserva_etnico.png"
      class="img-bar-size img hidden-xs-only"
      legend="Figura 10: Total de casos de evasão e sucesso comparando alunos que possuem e que não possuem reserva de vaga étnica."
    />

    <ImageField
      src="pesquisa.png"
      class="img-bar-size img hidden-xs-only"
      legend="Figura 11: Total de casos de evasão e sucesso dos alunos de acordo com a prática de atividades extracurriculares."
    />

    <ImageField
      src="TP_INGRESSO.png"
      class="img-bar-size img hidden-xs-only"
      legend="Figura 12: Total de casos de evasão e sucesso de acordo com o tipo de ingresso do aluno."
    />

    <ImageField
      src="cursos.png"
      class="img-bar-size img hidden-xs-only"
      legend="Figura 13: Total de casos de evasão e sucesso para os 20 cursos com maior número de alunos na base de dados."
    />

    <ImageField
      src="area_especifica.png"
      class="img-bar-size img hidden-xs-only"
      legend="Figura 14: Evasão e sucesso de acordo com a área específica do curso."
    />
  </v-container>
</template>

<script>
import { SubTitle, CardText, TextDefault } from "$shared/components";
import { ImageField } from "$modules/analysis/components";

export default {
  name: "AboutAnalysisArea",
  components: {
    SubTitle,
    CardText,
    TextDefault,
    ImageField,
  },
};
</script>
