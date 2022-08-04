import api from "$shared/services/api";

const getSchools = async () => {
  try {
    const response = await api.get("/analysis/schools");

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getSchools;
