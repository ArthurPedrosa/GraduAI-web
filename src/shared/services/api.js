import axios from "axios";
import "regenerator-runtime/runtime";

const api = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API,
});

export default api;
