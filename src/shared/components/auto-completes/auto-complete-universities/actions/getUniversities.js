import api from "$shared/services/api";

const getUniversities = async () => {
  try {
    const response = await api.get("/analysis/universities");

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getUniversities;
