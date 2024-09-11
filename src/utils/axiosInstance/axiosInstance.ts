import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const instance = axios.create({
  baseURL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
