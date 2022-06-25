export default {
  setPersonalData(
    state,
    {
      name,
      sex,
      race,
      birthDate,
      uf,
      city,
      naturality,
      extraCurricular,
      socialSupport,
    }
  ) {
    state.analisys.personalData = {
      name,
      sex,
      race,
      birthDate,
      uf,
      city,
      naturality,
      extraCurricular,
      socialSupport,
    };
  },

  setStepperLevel(state, level) {
    state.stepper = level;
  },

  clearStepperLevel(state) {
    state.stepper = undefined;
  },

  clearAnalisysForm(state) {
    state.stepper = undefined;

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
