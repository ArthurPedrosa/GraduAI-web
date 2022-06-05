<style lang="scss" src="./UserEditView.scss" scoped></style>

<template>
  <UserEditContainer
    class="user-edit-view"
    title="Editar Informações"
    subtitle="Aqui estão os seus dados, é possivel alterar apenas o seu nome ou a sua senha ou ambos."
  >
    <UserEditData />

    <UserEditPassword />
  </UserEditContainer>
</template>

<script>
import { UserEditContainer } from "$modules/identification/components";
import {
  UserEditPassword,
  UserEditData,
} from "$modules/identification/views/edit-view/components";

export default {
  name: "UserEdit",
  components: {
    UserEditContainer,
    UserEditPassword,
    UserEditData,
  },
};
</script>
