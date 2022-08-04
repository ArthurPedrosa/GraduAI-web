import api from "$shared/services/api";

const getExtras = async () => {
  try {
    const response = await api.get("/analysis/extras");

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getExtras;
