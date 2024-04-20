import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import NewsAggregator from "components/NewsAggregator"
import queryConfig from "config/queryConfig"
import "./App.css"

export default function App() {
  return (
    <QueryClientProvider client={queryConfig}>
      <NewsAggregator />
      <ReactQueryDevtools initialIsOpen={false} position="bottom" />
    </QueryClientProvider>
  )
}
