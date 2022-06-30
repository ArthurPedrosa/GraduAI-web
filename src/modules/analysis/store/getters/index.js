export default {
  getPersonalData(state) {
    return state.analisys.personalData;
  },

  getStudentData(state) {
    return state.analisys.studentData;
  },

  getStepperLevel(state) {
    return state.stepper;
  },
};
