import api from "$shared/services/api";

const getCoursesByLocation = async ({ locationId }) => {
  try {
    const response = await api.get(`/analisys/locations/${locationId}/courses`);

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getCoursesByLocation;
