<template>
  <UserEditContainer
    title="Termos de uso"
    subtitle="Você está de acordo com tudo o que está listado abaixo"
    class="px-5"
  >
    <AgreementUser />
  </UserEditContainer>
</template>

<script>
import {
  UserEditContainer,
  AgreementUser,
} from "$modules/access-control/components";

export default {
  name: "UserEdit",
  components: {
    UserEditContainer,
    AgreementUser,
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
