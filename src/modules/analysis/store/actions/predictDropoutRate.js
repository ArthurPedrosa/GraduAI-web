import api from "$shared/services/api";

const predictDropoutRate = async (store, params) => {
  try {
    const { data } = await api.post("/analisys/predictions", params);

    return data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default predictDropoutRate;
