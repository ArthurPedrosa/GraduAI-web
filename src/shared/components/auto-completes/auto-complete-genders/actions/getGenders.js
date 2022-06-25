import api from "$shared/services/api";

const getUfs = async () => {
  try {
    const response = await api.get("/analisys/genders");

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getUfs;
