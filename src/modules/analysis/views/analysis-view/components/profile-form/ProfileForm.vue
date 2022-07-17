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
      :disabled="!profile"
      width="15%"
      minWidth="200px"
      @click="confirmDeletation"
    >
      Deletar Perfil
    </Button>

    <Modal
      width="450px"
      :show="showModalConfirmation"
      confirmButton
      @close="() => (showModalConfirmation = false)"
      @confirm="deleteProfile"
    >
      <TextDefault>
        Você está prestes a deletar o perfil selecionado, esse perfil não poderá
        ser recuperado.
        <span class="font-weight-bold"> Deseja continuar ? </span>
      </TextDefault>
    </Modal>
  </v-form>
</template>

<script>
import { mapGetters } from "vuex";
import { Button, AutoComplete, Modal, TextDefault } from "$shared/components";
export default {
  name: "ProfileForm",

  components: {
    Button,
    AutoComplete,
    Modal,
    TextDefault,
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
      showModalConfirmation: false,
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

    confirmDeletation() {
      this.showModalConfirmation = true;
    },

    async deleteProfile() {
      try {
        if (!this.profile) {
          return;
        }

        await this.$store.dispatch("Analysis/DELETE_PROFILE", this.profile);
        this.searchUserProfiles();
        this.profile = undefined;
        this.showModalConfirmation = false;
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
