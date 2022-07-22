import { useQuery } from "react-query";

import { queryClient } from "./queryClient";

const chainInfoQueryKey = "@chain-info";

export const unsafelyReadChainInfoCache = () =>
  queryClient.getQueryCache().find(chainInfoQueryKey)?.state?.data;

export const useChainInfo = () => {
  const { data, isLoading } = useQuery(
    chainInfoQueryKey,
    async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_CHAIN_INFO_URL);
      return await response.json();
    },
    {
      onError(e) {
        console.error("Error loading chain info:", e);
      },
    }
  );
  console.log("data", data);
  return [data, isLoading];
};
