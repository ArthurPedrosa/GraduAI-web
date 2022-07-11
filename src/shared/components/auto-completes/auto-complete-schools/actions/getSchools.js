import api from "$shared/services/api";

const getSchools = async () => {
  try {
    const response = await api.get("/analisys/schools");

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getSchools;
