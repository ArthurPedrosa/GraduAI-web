export default {
  getPersonalData(state) {
    return state.analisys.personalData;
  },

  getStudentData(state) {
    return state.analisys.studentData;
  },

  getProfileId(state) {
    return state.analisys.profileId;
  },

  getProfileName(state) {
    return state.analisys.profileName;
  },

  getStepperLevel(state) {
    return state.stepper;
  },

  getCreateOrUpdateProfile(state) {
    return state.createOrUpdateProfile;
  },
};
