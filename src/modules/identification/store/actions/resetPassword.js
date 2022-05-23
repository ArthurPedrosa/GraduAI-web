import api from "$shared/services/api";

const resetPassword = async (
  store,
  { token, password, passwordConfirmation }
) => {
  try {
    const { data } = await api.patch("/access-control/password/reset", {
      token,
      password,
      passwordConfirmation,
    });

    return data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default resetPassword;
