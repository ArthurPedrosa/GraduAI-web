export default {
  required: (value) => {
    if (value === 0) {
      return true;
    }

    return !!value || "Campo Obrigatório.";
  },

  birthdateInterval: (value) => {
    const [day, month, year] = value.split("/");
    const formattedDate = new Date(`${year}-${month}-${day}`).getTime();
    const timeDiff = Math.abs(
      new Date().getTime() - new Date(formattedDate).getTime()
    );

    const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);

    const isIntervalDate = age > 15 && age < 90;
    if (!isIntervalDate) {
      return "Informe uma data de nascimento entre 15 e 90 anos.";
    }

    return true;
  },
};
