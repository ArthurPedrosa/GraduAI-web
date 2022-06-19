import api from "$shared/services/api";

const updateUser = async (store, variables) => {
  try {
    const response = await api.put("/access-control/", variables, {
      headers: { Authorization: `Bearer ${store.getters.getToken}` },
    });

    store.commit("setUser", response.data);

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default updateUser;
