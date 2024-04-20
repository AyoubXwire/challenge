import ArticlesFilter from "components/ArticlesFilter"
import ArticlesList from "components/ArticlesList"

export default function NewsAggregator() {
  return (
    <div className="container mx-auto px-4">
      <div className="my-10">
        <h1 className="text-4xl font-bold text-center">News aggregator</h1>
      </div>

      <div className="my-10">
        <ArticlesFilter />
      </div>

      <div className="my-10">
        <ArticlesList />
      </div>
    </div>
  )
}
