import { QueryClient } from "@tanstack/react-query"

const queryConfig = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      staleTime: Number(import.meta.env.VITE_QUERY_STALE_TIME) * 1000,
      gcTime: Number(import.meta.env.VITE_QUERY_CACHE_TIME) * 1000,
    },
    mutations: {
      retry: false,
    },
  }
})

export default queryConfig
