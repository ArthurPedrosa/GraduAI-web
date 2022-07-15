<style lang="scss" src="./ProfileForm.scss" scoped></style>

<template>
  <v-form
    ref="form-profile"
    lazy-validation
    class="form-profile d-flex align-center justify-center flex-column"
  >
    <AutoComplete
      v-model="profile"
      label="Perfil"
      width="40%"
      minWidth="250px"
      maxWidth="450px"
      class="align-self-center"
      :items="profilesData"
      itemValue="profileId"
      itemText="name"
    />

    <Button
      class="mr-2"
      color="success"
      small
      width="15%"
      minWidth="200px"
      @click="onButtonClick"
    >
      Novo Perfil
    </Button>

    <Button
      class="mt-3 mr-2"
      color="danger"
      small
      :disabled="!this.profile"
      width="15%"
      minWidth="200px"
      @click="deleteProfile"
    >
      Deletar Perfil
    </Button>
  </v-form>
</template>

<script>
import { mapGetters } from "vuex";
import { Button, AutoComplete } from "$shared/components";
export default {
  name: "ProfileForm",

  components: {
    Button,
    AutoComplete,
  },

  props: {
    onButtonClick: {
      type: Function,
      default: () => {},
    },
  },

  data() {
    return {
      profilesData: [],
      profile: undefined,
    };
  },

  computed: {
    ...mapGetters({
      isLoggedIn: "AccessControl/isLoggedIn",
      getProfileId: "Analysis/getProfileId",
    }),
  },

  mounted() {
    this.searchUserProfiles();
  },

  watch: {
    profile(pValue) {
      if (pValue) {
        this.selectProfile(pValue);
      } else {
        this.cleanProfileForm();
      }
    },
  },

  methods: {
    async searchUserProfiles() {
      try {
        if (!this.isLoggedIn) {
          return;
        }

        const [profiles] = await this.$store.dispatch(
          "Analysis/GET_USER_PROFILES"
        );

        this.profilesData = profiles;
        if (this.getProfileId) this.profile = this.getProfileId;
      } catch (err) {
        this.$notify({
          group: "app",
          type: "error",
          title: err.status || "Error",
          text: err.message || "",
        });
      }
    },

    selectProfile(pProfileId) {
      1;
      const profileData = this.profilesData.find(
        (profile) => profile.profileId === pProfileId
      );
      console.log(this.profilesData);

      this.$store.commit("Analysis/setNewProfileStatus", false);
      this.$store.commit("Analysis/setPersonalData", profileData);
      this.$store.commit("Analysis/setStudentData", profileData);
      this.$store.commit("Analysis/setProfile", {
        profileId: pProfileId,
        profileName: profileData.name,
      });
    },

    cleanProfileForm() {
      this.$store.commit("Analysis/clearAnalisysForm");
    },

    async deleteProfile() {
      try {
        if (!this.profile) {
          return;
        }

        await this.$store.dispatch("Analysis/DELETE_PROFILE", this.profile);
        this.searchUserProfiles();
        this.profile = undefined;
      } catch (err) {
        this.$notify({
          group: "app",
          type: "error",
          title: err.status || "Error",
          text: err.message || "",
        });
      }
    },
  },
};
</script>
