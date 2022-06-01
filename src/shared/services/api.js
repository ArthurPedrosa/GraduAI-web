import store from "$shared/store";
import axios from "axios";
import "regenerator-runtime/runtime";

const api = () => {
  const token = store.getters["Identification/getToken"];

  if (token) {
    return axios.create({
      baseURL: process.env.VUE_APP_ROOT_API,
      headers: {
        Authorization: "Bearer " + store.getters["Identification/getToken"],
      },
    });
  }

  return axios.create({
    baseURL: process.env.VUE_APP_ROOT_API,
  });
};

export default api();
