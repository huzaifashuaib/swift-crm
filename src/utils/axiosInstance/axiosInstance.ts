import axios from "axios";
const instance = axios.create({
  baseURL:process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
