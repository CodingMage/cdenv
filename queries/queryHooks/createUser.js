import { useMutation, useQueryClient } from "react-query";
import Instance from "../../utils/axiosInstance";

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation((userData) => Instance.post("/users/register", userData), {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries("user");
    },
  });
};
