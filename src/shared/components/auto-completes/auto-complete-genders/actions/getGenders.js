import api from "$shared/services/api";

const getGenders = async () => {
  try {
    const response = await api.get("/analysis/genders");

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getGenders;
