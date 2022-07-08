import api from "$shared/services/api";

const getCourses = async ({ locationId }) => {
  try {
    const response = await api.get(`/analisys/courses/locations/${locationId}`);

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getCourses;
