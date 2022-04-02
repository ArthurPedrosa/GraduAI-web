<template>
  <AuthenticateContainer
    title-card="Recuperação de Senha"
    subtitle="Digite seu email cadastrado para receber um email de recuperação de senha."
  >
    <div slot="card-footer" class="d-flex flex-column align-center">
      <Button small outlined class="mb-2 mt-2" color="primary" width="60%">
        Enviar
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
  name: "RecoverPassword",
  components: {
    AuthenticateContainer,
    Button,
  },
};
</script>
