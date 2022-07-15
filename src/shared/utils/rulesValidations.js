export default {
  required: (value) => {
    if (value === 0) {
      return true;
    }

    return !!value || "Campo Obrigatório.";
  },
};
