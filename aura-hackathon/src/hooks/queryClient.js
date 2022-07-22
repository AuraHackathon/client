import { QueryClient } from "react-query";
import { DEFAULT_REFETCH_ON_WINDOW_FOCUS_STALE_TIME } from "../utils/constants";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      staleTime: DEFAULT_REFETCH_ON_WINDOW_FOCUS_STALE_TIME,
    },
  },
});
