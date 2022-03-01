import axios from "axios";
import Instance from "../../utils/axiosInstance";

export const getData = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

export const getAuthorizedData = async (url) => {
  const { data } = await Instance.get(url);

  return data;
};
