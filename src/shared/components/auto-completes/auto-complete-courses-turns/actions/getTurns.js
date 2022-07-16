import api from "$shared/services/api";

const getTurns = async ({ courseId }) => {
  try {
    const response = await api.get(`/analisys/turns/courses/${courseId}`);

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getTurns;
