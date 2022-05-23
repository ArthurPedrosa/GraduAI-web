import api from "$shared/services/api";

const recoverPassword = async (store, { email }) => {
  try {
    const { data } = await api.post("/access-control/password/recover", {
      email,
    });

    return data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default recoverPassword;
