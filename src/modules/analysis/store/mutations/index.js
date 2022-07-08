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

  setStudentData(
    state,
    { university, location, course, extraCurricular, socialSupport }
  ) {
    state.analisys.studentData = {
      university,
      location,
      course,
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

    state.analisys.studentData = {
      university: undefined,
      location: undefined,
      socialSupport: undefined,
      extraCurricular: undefined,
    };
  },
};
