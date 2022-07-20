<style lang="scss" src="./StepperForm.scss" scoped></style>

<template>
  <div class="stepper">
    <div class="stepper-level mb-2">
      <button
        v-for="(stepper, index) in stepperData"
        :key="index"
        class="level-button mx-2"
        @click="emitChangeLevel(stepper.id)"
      >
        <TextDefault
          class="font-weight-medium text-color text-subtitle-2 ml-sm-2"
          :class="{
            'primary--text': actualLevel >= stepper.id,
            opacity: actualLevel > stepper.id,
          }"
        >
          {{ index + 1 }}
          <span class="hidden-xs-only">. {{ stepper.label }}</span>
        </TextDefault>
        <div
          class="level-bar"
          :class="{
            primary: actualLevel >= stepper.id,
            opacity: actualLevel > stepper.id,
          }"
        />
      </button>
    </div>

    <CardDefault class="pa-3 stepper-content" height="100%">
      <div class="stepper-contante-body">
        <slot />
      </div>

      <div v-if="!lastLevel" class="stepper-content-footer mx-5">
        <Button
          v-if="showNewProfileButton && !getProfileId"
          small
          text
          color="success"
          class="new-profile-button"
          @click="deleteNewProfile"
        >
          Você está criando um novo perfil!
        </Button>

        <Button
          v-if="getProfileId"
          small
          text
          color="success"
          @click="emitChangeLevel(1)"
        >
          Editando Perfil: {{ getProfileName }}
        </Button>

        <Button
          small
          outlined
          class="ml-auto mb-2 mt-2"
          color="primary"
          @click="emitNextLevel"
        >
          Próximo
        </Button>
      </div>
    </CardDefault>
  </div>
</template>

<script>
import { CardDefault, TextDefault, Button } from "$shared/components";

import { mapGetters } from "vuex";

export default {
  name: "Stepper",
  components: { CardDefault, TextDefault, Button },

  props: {
    stepperData: {
      type: Array,
      default: () => [{ level: 1, label: "Informe uma label" }],
    },

    actualLevel: {
      type: Number,
      default: 1,
    },
  },

  computed: {
    ...mapGetters({
      getCreateOrUpdateProfile: "Analysis/getCreateOrUpdateProfile",
      getProfileId: "Analysis/getProfileId",
      getProfileName: "Analysis/getProfileName",
    }),

    showNewProfileButton() {
      return this.getCreateOrUpdateProfile && this.actualLevel !== 1;
    },

    lastLevel() {
      return this.actualLevel === 4;
    },
  },

  methods: {
    emitChangeLevel(pNewLevel) {
      if (!pNewLevel) {
        return;
      }

      this.$emit("click:change-level", pNewLevel);
    },

    emitNextLevel() {
      const maxLevel = this.stepperData[this.stepperData.length - 1].id;

      if (this.actualLevel >= maxLevel) {
        this.$emit("click:next-level", maxLevel);
      } else {
        this.$emit("click:next-level", this.actualLevel + 1);
      }
    },

    deleteNewProfile() {
      this.$store.commit("Analysis/setCreateOrUpdateProfile", false);
    },
  },
};
</script>
