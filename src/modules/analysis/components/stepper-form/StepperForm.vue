<style lang="scss" src="./StepperForm.scss" scoped></style>

<template>
  <div class="stepper">
    <div class="stepper-level mb-2">
      <button
        v-for="(stepper, index) in stepperData"
        :key="index"
        class="level-button mx-2"
        @click="emitChangeLevel(stepper.level)"
      >
        <TextDefault
          class="font-weight-medium text-color text-subtitle-2 ml-sm-2"
          :class="{
            'primary--text': actualLevel >= stepper.level,
            opacity: actualLevel > stepper.level,
          }"
        >
          {{ stepper.level }}
          <span class="hidden-xs-only">. {{ stepper.label }}</span>
        </TextDefault>
        <div
          class="level-bar"
          :class="{
            primary: actualLevel >= stepper.level,
            opacity: actualLevel > stepper.level,
          }"
        />
      </button>
    </div>

    <CardDefault class="pa-3 stepper-content">
      <div class="stepper-contante-body">
        <slot />
      </div>

      <div class="stepper-content-footer mx-5">
        <TextDefault> * Campos de preenchimento obrigatórios </TextDefault>

        <Button
          small
          outlined
          class="mb-2 mt-2"
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

  methods: {
    emitChangeLevel(pNewLevel) {
      if (!pNewLevel) {
        return;
      }

      this.$emit("click:change-level", pNewLevel);
    },

    emitNextLevel() {
      const maxLevel = this.stepperData[this.stepperData.length - 1].level;

      if (this.actualLevel >= maxLevel) {
        this.$emit("click:next-level", maxLevel);
      } else {
        this.$emit("click:next-level", this.actualLevel + 1);
      }
    },
  },
};
</script>
