// import Instance from "../../utils/axiosInstance";

// export const getUser = async () => {
//   const { data } = await Instance.get(`/users/me`);

//   return data;
// };

import AxiosInstance from "../../utils/axiosConfig";

export const getUser = async (token) => {
  const { data } = await AxiosInstance.get(`/users/me`, {
    headers: {
      accept: "*/*",
      authorization: `Bearer ${token}`,
    },
  });

  return data;
};
