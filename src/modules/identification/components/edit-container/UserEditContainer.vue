<style lang="scss" src="./UserEditContainer.scss"></style>
<template>
  <v-container fluid class="user-edit-container">
    <v-row class="mt-7 mb-7 user-edit-header">
      <v-spacer></v-spacer>
      <v-col offset-md="3" md="7" cols="12" align="center"
        ><Title>{{ title }}</Title>
        <SubTitle>{{ subtitle }}</SubTitle>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row align="center" justify="space-between">
      <v-col
        cols="12"
        md="2"
        sm="12"
        order="last"
        order-md="first"
        class="menu-user-edit"
      >
        <CardDefault>
          <v-list>
            <v-list-item-group color="primary">
              <v-list-item>
                <v-list-item-icon
                  ><v-icon>fa-id-card-o</v-icon>
                </v-list-item-icon>
                Dados Cadastrais
              </v-list-item>
              <v-list-item>
                <v-list-item-icon
                  ><v-icon>fa-handshake-o</v-icon>
                </v-list-item-icon>
                Termos de uso
              </v-list-item>
              <div class="user-edit-list-footer">
                <TextDefault class="text-center user-list-footer-content">
                  Versão 0.0.1
                </TextDefault>
              </div>
            </v-list-item-group>
          </v-list>
        </CardDefault>
      </v-col>

      <v-col
        cols="12"
        md="8"
        sm="12"
        order="first"
        order-md="last"
        class="user-edit-form"
      >
        <CardDefault> <slot></slot> </CardDefault>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Title, SubTitle, CardDefault, TextDefault } from "$shared/components";
export default {
  name: "UserEditContainer",
  components: {
    Title,
    SubTitle,
    CardDefault,
    TextDefault,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
  },
};
</script>
