import api from "$shared/services/api";

const deleteProfile = async (store, profileId) => {
  try {
    const response = await api.delete(`/analisys/profiles/${profileId}`, {
      headers: {
        Authorization: `Bearer ${store.rootGetters["AccessControl/getToken"]}`,
      },
    });

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default deleteProfile;
