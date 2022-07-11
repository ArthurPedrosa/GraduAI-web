export default {
  setPersonalData(
    state,
    { name, sex, race, birthDate, uf, city, nationality, deficiency }
  ) {
    state.analisys.personalData = {
      name,
      sex,
      race,
      birthDate,
      uf,
      city,
      nationality,
      deficiency,
    };
  },

  setStudentData(
    state,
    {
      university,
      location,
      course,
      extraCurricular,
      socialSupport,
      school,
      semester,
      parfor,
      financing,
      reservation,
      scholarship,
    }
  ) {
    state.analisys.studentData = {
      university,
      location,
      course,
      socialSupport,
      extraCurricular,
      school,
      semester,
      parfor,
      financing,
      reservation,
      scholarship,
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
      nationality: undefined,
      deficiency: undefined,
      financing: undefined,
    };

    state.analisys.studentData = {
      university: undefined,
      location: undefined,
      socialSupport: undefined,
      extraCurricular: undefined,
      school: undefined,
      semester: undefined,
      parfor: undefined,
      scholarship: undefined,
      reservation: undefined,
      financing: undefined,
    };
  },
};
