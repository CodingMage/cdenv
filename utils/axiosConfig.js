import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://cdenv.herokuapp.com/api",
  headers: {
    accept: "*/*",
  },
});

export default AxiosInstance;
