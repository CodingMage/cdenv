import { useQuery } from "react-query";
import { getUser } from "../queryFunction/user";

export function useGetUser(token) {
  return useQuery("user", () => getUser(token), {
    useErrorBoundary: (error) => error.response?.status >= 500,
  });
}
