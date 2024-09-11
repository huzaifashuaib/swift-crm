import axios from "axios";
const instance = axios.create({
  baseURL: process.env.URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
