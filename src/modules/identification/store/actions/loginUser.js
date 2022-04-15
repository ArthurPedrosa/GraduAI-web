import api from "$shared/services/api";

const loginUser = async (store, { email, password }) => {
  try {
    const response = await api.post("/access-control/login", {
      email,
      password,
    });

    return response.data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default loginUser;
