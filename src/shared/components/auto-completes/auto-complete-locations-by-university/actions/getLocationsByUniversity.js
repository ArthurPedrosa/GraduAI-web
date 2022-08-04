import api from "$shared/services/api";

const getLocationsByUniversity = async ({ universityId }) => {
  try {
    const response = await api.get(
      `/analysis/universities/${universityId}/locations`
    );

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default getLocationsByUniversity;
