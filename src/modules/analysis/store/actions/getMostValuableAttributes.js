import api from "$shared/services/api";

const getMostValuableAttributes = async () => {
  try {
    const { data } = await api.get("/analisys/predictions/attributes");

    return data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getMostValuableAttributes;
