import api from "$shared/services/api";

const getSupports = async () => {
  try {
    const response = await api.get("/analysis/supports");

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getSupports;
