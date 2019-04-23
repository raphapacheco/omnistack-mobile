import axios from "axios";

const api = axios.create({
  baseURL: "https://raphael-omnistack-backend.herokuapp.com"
});

export default api;
