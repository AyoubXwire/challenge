import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export interface Source {
  id: string
  name: string
  description: string
  url: string
  category: string
  language: string
  country: string
}

async function getSources() {
  const response = await axios({
    method: "get",
    url: "https://newsapi.org/v2/top-headlines/sources",
    params: {
      apiKey: "78884de526d74b119fdca2e6b4e74705",
    }
  })

  return response.data.sources as Source[]
}

export default function useSourcesQuery() {
  return useQuery({
    queryKey: ["sources"],
    queryFn: getSources,
  })
}
