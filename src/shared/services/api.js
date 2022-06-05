import axios from "axios";
import "regenerator-runtime/runtime";

export default axios.create({
  baseURL: process.env.VUE_APP_ROOT_API,
});
