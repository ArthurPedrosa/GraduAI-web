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

  clearPersonalData(state) {
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
