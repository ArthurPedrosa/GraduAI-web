import api from "$shared/services/api";

const getRaces = async () => {
  try {
    const response = await api.get("/analysis/races");

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getRaces;
