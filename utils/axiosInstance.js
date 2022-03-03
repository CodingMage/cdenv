import axios from "axios";
import { getCookie } from "cookies-next";

const token = getCookie("token");

const Instance = axios.create({
  baseURL: "https://cdenv.herokuapp.com/api",
  headers: {
    accept: "*/*",
    authorization: `Bearer ${token}`,
  },
});

export default Instance;
