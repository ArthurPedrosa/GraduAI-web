import api from "$shared/services/api";

const createUser = async (
  store,
  { name, email, password, passwordConfirmation }
) => {
  try {
    const response = await api.post("/access-control/new", {
      name,
      email,
      password,
      passwordConfirmation,
    });

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default createUser;
