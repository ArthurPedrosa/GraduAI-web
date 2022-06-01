<template>
  <UserEditContainer
    title="Termos de uso"
    subtitle="Você está de acordo com tudo o que está listado abaixo"
    class="px-5"
  >
    <SubTitle class="text-h5">Política Privacidade</SubTitle>

    <TextDefault class="mt-5">
      A sua privacidade é importante para nós. É política do GraduAI respeitar a
      sua privacidade em relação a qualquer informação sua que possamos coletar
      no site GraduAI, e outros sites que possuímos e operamos.
    </TextDefault>
    <TextDefault class="mt-5">
      Solicitamos informações pessoais apenas quando realmente precisamos delas
      para lhe fornecer um serviço. O fazemos por meios justos e legais, com o
      seu conhecimento e consentimento. Também informamos por que estamos
      coletando e como será usado.
    </TextDefault>
    <TextDefault class="mt-5">
      Apenas retemos as informações coletadas pelo tempo necessário para
      fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro
      de meios comercialmente aceitáveis para evitar perdas e roubos, bem como
      acesso, divulgação, cópia, uso ou modificação não autorizados.
    </TextDefault>
    <TextDefault class="mt-5">
      Não compartilhamos informações de identificação pessoal publicamente ou
      com terceiros, exceto quando exigido por lei.
    </TextDefault>
    <TextDefault class="mt-5">
      O nosso site pode ter links para sites externos que não são operados por
      nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas
      desses sites e não podemos aceitar responsabilidade por suas respectivas
      políticas de privacidade.
    </TextDefault>
    <TextDefault class="mt-5">
      Você é livre para recusar a nossa solicitação de informações pessoais,
      entendendo que talvez não possamos fornecer alguns dos serviços desejados.
    </TextDefault>
    <TextDefault class="mt-5">
      O uso continuado de nosso site será considerado como aceitação de nossas
      práticas em torno de privacidade e informações pessoais. Se você tiver
      alguma dúvida sobre como lidamos com dados do usuário e informações
      pessoais, entre em contato conosco.
    </TextDefault>

    <SubTitle class="mt-5 text-h5">Compromisso do Usuário</SubTitle>
    <TextDefault class="mt-5">
      O usuário se compromete a fazer uso adequado dos conteúdos e da informação
      que o GraduAI oferece no site e com caráter enunciativo, mas não
      limitativo:
    </TextDefault>

    <TextDefault class="mt-5">
      A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé
      a à ordem pública;
    </TextDefault>
    <TextDefault class="mt-5">
      B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica,
      <a
        style="color: inherit !important; text-decoration: none !important"
        href="https://ondeapostar.pt/onde-da-a-bola/"
        >Onde dá a Bola</a
      >
      ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou
      contra os direitos humanos;
    </TextDefault>
    <TextDefault class="mt-5">
      C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares)
      do GraduAI, de seus fornecedores ou terceiros, para introduzir ou
      disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou
      software que sejam capazes de causar danos anteriormente mencionados.
    </TextDefault>

    <TextDefault class="mt-5 text-center">
      Esta política é efetiva a partir de
      <strong>Maio</strong>/<strong>2022</strong>.
    </TextDefault>
  </UserEditContainer>
</template>

<script>
import { UserEditContainer } from "$modules/identification/components";
import {
  // CardDefault,
  TextDefault,
  SubTitle,
} from "$shared/components";

export default {
  name: "UserEdit",
  components: {
    UserEditContainer,
    // CardDefault,
    TextDefault,
    SubTitle,
  },

  methods: {
    goToRoute(pRouteName) {
      if (pRouteName) {
        this.$router.push(pRouteName).catch(() => {});
      }
    },
  },
};
</script>
