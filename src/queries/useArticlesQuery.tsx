import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export interface Article {
  title: string
  description: string
  image: string
  date: string
}

export interface GetArticlesRequest {
  q?: string
  source?: string
  from?: string
  to?: string
  category?: string
}

async function getArticles(params: GetArticlesRequest) {
  if (params.source === "the-guardian") {
    const response = await axios({
      url: "https://content.guardianapis.com/search",
      params: {
        "api-key": import.meta.env.VITE_THE_GUARDIAN_KEY,
        ...params
      }
    })

    const articles = response.data.response.results.map((article: any) => {
      return {
        title: article.webTitle,
        description: "",
        image: "",
        date: article.webPublicationDate,
      }
    })

    return articles as Article[]
  }

  else if (params.source === "news-api") {
    const response = await axios({
      url: "https://newsapi.org/v2/everything",
      params: {
        "apiKey": import.meta.env.VITE_NEWS_API_KEY,
        "sources": "abc-news",
        ...params
      }
    })
    const articles = response.data.articles.map((article: any) => {
      return {
        title: article.title,
        description: article.description,
        image: article.urlToImage,
        date: article.publishedAt,
      }
    })

    return articles as Article[]
  }

  else if (params.source === "" || params.source === "new-york-times") {
    const response = await axios({
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      params: {
        "api-key": import.meta.env.VITE_NEW_YORK_TIMES_KEY,
        ...params
      }
    })

    const articles = response.data.response.docs.map((article: any) => {
      return {
        title: article.headline.main,
        description: article.snippet,
        image: article.multimedia.find((media: any) => media.subType === "thumbnail")?.url || "",
        date: article.pub_date,
      }
    })

    return articles as Article[]
  }
}

export default function useArticlesQuery(params: GetArticlesRequest) {
  return useQuery({
    queryKey: ["articles", params],
    queryFn: () => getArticles(params),
  })
}
