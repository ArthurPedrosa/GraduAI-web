export default {
  setPersonalData(state, { name, sex, race, birthDate, uf, city, naturality }) {
    state.analisys.personalData = {
      name,
      sex,
      race,
      birthDate,
      uf,
      city,
      naturality,
    };
  },

  setStepperLevel(state, level) {
    state.stepper = level;
  },

  clearStepperLevel(state) {
    state.stepper = undefined;
  },

  clearAnalisysForm(state) {
    this.clearStepperLevel();

    state.analisys.personalData = {
      name: undefined,
      sex: undefined,
      race: undefined,
      birthDate: undefined,
      uf: undefined,
      city: undefined,
      naturality: undefined,
    };
  },
};
