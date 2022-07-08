import api from "$shared/services/api";

const getLocations = async ({ universityId }) => {
  try {
    const response = await api.get(
      `/analisys/locations/universities/${universityId}`
    );

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getLocations;
