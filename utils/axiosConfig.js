import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://cdenv.herokuapp.com/api",
  headers: {
    accept: "*/*",
  },
});

export default AxiosInstance;
