import api from "$shared/services/api";

const getNationalities = async () => {
  try {
    const response = await api.get("/analysis/nationalities");

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getNationalities;
