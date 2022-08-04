import api from "$shared/services/api";

const getCounties = async ({ ufId }) => {
  try {
    const response = await api.get(`/analysis/counties/ufs/${ufId}`);

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getCounties;
