import api from "$shared/services/api";

const getUserProfiles = async (store) => {
  try {
    const response = await api.get("/analysis/profiles", {
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

export default getUserProfiles;
