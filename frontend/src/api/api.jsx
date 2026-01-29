import axios from "axios";

const api = axios.create({
  baseURL: "https://hrms-lite-xejf.onrender.com",
});

export default api;
