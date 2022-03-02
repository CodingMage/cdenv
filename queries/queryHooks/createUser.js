import { useMutation, useQueryClient } from "react-query";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { removeCookies, setCookies } from "cookies-next";
import useGlobalState from "../../store/global";
import AxiosInstance from "../../utils/axiosConfig";
export const useCreateUser = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { updateToken } = useGlobalState();

  return useMutation(
    (userData) => AxiosInstance.post("/users/register", userData),
    {
      onSuccess: (data) => {
        removeCookies("token");
        toast.success("Signup Successful");
        setCookies("token", data?.data?.user?.token);
        updateToken(data?.data?.user?.token);
        queryClient.invalidateQueries("user");
        setTimeout(() => {
          router.push("/dashboard");
        }, 3000);
      },
    }
  );
};
