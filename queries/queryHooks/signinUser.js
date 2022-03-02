import { removeCookies, setCookies } from "cookies-next";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { useRouter } from "next/router";
import useGlobalState from "../../store/global";
import AxiosInstance from "../../utils/axiosConfig";
export const useLoginUser = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { updateToken } = useGlobalState();
  return useMutation(
    (userData) => AxiosInstance.post("users/login", userData),
    {
      onSuccess: (data) => {
        removeCookies("token");
        toast.success("Success");
        setCookies("token", data?.data?.user?.token);
        updateToken(data?.data?.user?.token);
        queryClient.invalidateQueries("user");
        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      },
    }
  );
};
