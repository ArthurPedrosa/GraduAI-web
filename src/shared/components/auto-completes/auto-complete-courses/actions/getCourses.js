import api from "$shared/services/api";

const getCourses = async () => {
  try {
    const response = await api.get(`/analisys/courses`);

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getCourses;
