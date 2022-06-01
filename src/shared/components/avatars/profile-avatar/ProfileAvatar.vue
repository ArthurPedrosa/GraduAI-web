<template>
  <v-container fluid>
    <v-row justify="end">
      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar color="warning" size="48">
              <span class="white--text text-h5">{{ initialsName }}</span>
            </v-avatar>
          </v-btn>
        </template>

        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="warning">
                <span class="white--text text-h5">{{ initialsName }}</span>
              </v-avatar>

              <h3>{{ userData.name }}</h3>

              <p class="text-caption mt-1">
                {{ userData.email }}
              </p>

              <v-divider class="my-3" />

              <v-btn depressed rounded text @click="edit">
                Editar Informações
              </v-btn>

              <v-divider class="my-3" />

              <v-btn depressed rounded text @click="goToRoute('/agreement')">
                Termo de Uso
              </v-btn>

              <v-divider class="my-3" />

              <v-btn depressed rounded text @click="logout"> Sair </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProfileAvatar",

  computed: {
    ...mapGetters({
      userData: "Identification/userData",
    }),

    initialsName() {
      const fullName = this.userData.name.split(" ");
      if (fullName.length === 1) {
        return this.userData.name[0];
      }

      const initials =
        fullName.shift().charAt(0).toUpperCase() +
        fullName.pop().charAt(0).toUpperCase();

      return initials;
    },
  },

  methods: {
    logout() {
      try {
        this.$store.commit("Identification/logout");

        this.$notify({
          group: "app",
          type: "success",
          title: "Deslogado",
          text: "Você não está mais logado.",
        });

        this.$router.push("/login").catch(() => {});
      } catch (err) {
        this.$notify({
          group: "app",
          type: "error",
          title: err.status || "Error",
          text: err.message || "",
        });
      }
    },

    edit() {
      this.$router.push("/user/edit").catch(() => {});
    },

    goToRoute(pRouteName) {
      if (pRouteName) {
        this.$router.push(pRouteName).catch(() => {});
      }
    },
  },
};
</script>
