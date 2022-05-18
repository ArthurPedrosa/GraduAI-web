import axios from "axios";
import api from "$shared/services/api";

const loginUser = async (store, { email, password }) => {
  try {
    const { data } = await api.post("/access-control/", {
      email,
      password,
    });

    axios.defaults.headers.Authorization = "Bearer " + data.token;

    return data;
  } catch (err) {
    if (err.response.data) throw err.response.data;

    throw new Error(err);
  }
};

export default loginUser;
