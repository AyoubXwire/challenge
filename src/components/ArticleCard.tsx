import { Article } from "queries/useArticlesQuery"
import { __date, __text } from "utils/displayUtils"

type Props = {
  article: Article
}

export default function ArticleCard(props: Props) {

  const { article } = props

  return (
    <div className="shadow-md rounded-md bg-white">
      <img className="w-full h-64 object-cover rounded-t-md" src={article.image} alt="thumbnail" />
      <div className="p-4">
        <div className="flex items-center justify-end border-b mb-2 pb-2">
          <p className="text-sm font-semibold text-gray-600">{__date(article.date)}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-2">{__text(article.title)}</h2>
          <p className="text-sm text-gray-600">{__text(article.description)}</p>
        </div>
      </div>
    </div>
  )
}
