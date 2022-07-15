export default {
  setProfile(state, { profileId, profileName }) {
    state.analisys.profileId = profileId;
    state.analisys.profileName = profileName;
  },

  setPersonalData(
    state,
    { name, sex, race, birthDate, nationality, deficiency }
  ) {
    state.analisys.personalData = {
      name,
      sex,
      race,
      birthDate,
      nationality,
      deficiency,
    };
  },

  setStudentData(
    state,
    {
      ticket,
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
      ticket,
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

  setNewProfileStatus(state, pBoolean) {
    state.newProfileStatus = pBoolean;
  },

  clearStepperLevel(state) {
    state.stepper = undefined;
  },

  clearAnalisysForm(state) {
    state.stepper = undefined;

    state.analisys.profileId = undefined;

    state.analisys.personalData = {
      name: undefined,
      sex: undefined,
      race: undefined,
      birthDate: new Date().toISOString().slice(0, 10),
      uf: undefined,
      city: undefined,
      nationality: undefined,
      deficiency: undefined,
      financing: undefined,
    };

    state.analisys.studentData = {
      ticket: undefined,
      university: undefined,
      location: undefined,
      socialSupport: undefined,
      school: undefined,
      semester: undefined,
      parfor: undefined,
      financing: undefined,
      extraCurricular: [],
      scholarship: [],
      reservation: [],
    };
  },
};
