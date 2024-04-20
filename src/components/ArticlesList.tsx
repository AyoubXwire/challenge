import useArticlesFilterStore from "features/articlesFilter"
import useArticlesQuery from "queries/useArticlesQuery"
import ArticleCard from "./ArticleCard"

export default function ArticlesList() {

  const {
    q,
    source,
    from,
    to,
    category,
  } = useArticlesFilterStore()

  const {
    data: articlesData,
    isLoading,
    isError,
  } = useArticlesQuery({
    q: q,
    source: source,
    from: from,
    to: to,
    category: category,
  })

  if (isLoading) return (
    <div className="text-center">
      <p>Loading articles...</p>
    </div>
  )

  if (isError) return (
    <div className="text-center">
      <p>An error has occurred</p>
    </div>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articlesData?.map((article, index: number) => {
        return <ArticleCard key={index} article={article} />
      })}
    </div>
  )
}
