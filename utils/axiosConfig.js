import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://cdenv.herokuapp.com/api",
});

export default AxiosInstance;
