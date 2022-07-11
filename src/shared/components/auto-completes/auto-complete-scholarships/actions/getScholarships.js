import api from "$shared/services/api";

const getScholarships = async () => {
  try {
    const response = await api.get("/analisys/scholarships");

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getScholarships;
