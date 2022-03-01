import { useQuery } from "react-query";
import { getAuthorizedData } from "../queryFunctions/getData";

export default function useGetAuthorizedData(
  name,
  url,
  staleTime = 0,
  enabled = true
) {
  return useQuery([name, url], () => getAuthorizedData(url), {
    staleTime: staleTime,
    enabled: enabled,
  });
}
