<template>
  <AuthenticateContainer
    title-card="Cadastrar um Usuário"
    subtitle="Informe os campos para cadastrar um usuário."
  >
    <div slot="card-footer" class="d-flex flex-column align-center">
      <Button small outlined class="mb-2 mt-2" color="success" width="60%">
        Registrar-se
      </Button>

      <Button
        small
        outlined
        class="mt-2"
        color="danger"
        width="60%"
        @click="() => $router.go(-1)"
      >
        Voltar
      </Button>
    </div>
  </AuthenticateContainer>
</template>

<script>
import { AuthenticateContainer } from "$modules/identification/components";
import { Button } from "$shared/components";

export default {
  name: "Register",
  components: {
    AuthenticateContainer,
    Button,
  },
};
</script>
