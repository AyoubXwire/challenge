import useArticlesFilterStore from "features/articlesFilter"

export default function ArticlesFilter() {

  const {
    q,
    setQ,
    source,
    setSource,
    from,
    setFrom,
    to,
    setTo,
    category,
    setCategory,
  } = useArticlesFilterStore()

  return (
    <div className="shadow-md p-4 rounded-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Search & Filters</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="source">Source</label>
          <select className="w-full border border-gray-300 rounded-md p-2" id="source" value={source} onChange={(e) => setSource(e.target.value)}>
            <option value="new-york-times">New York Times</option>
            <option value="the-guardian">The Guardian</option>
            <option value="news-api">News API</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="search">Search</label>
          <input
            className="w-full border border-gray-300 rounded-md p-2"
            type="text"
            id="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="from">Start date</label>
          <input
            className="w-full border border-gray-300 rounded-md p-2"
            type="date"
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="to">End date</label>
          <input
            className="w-full border border-gray-300 rounded-md p-2"
            type="date"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="category">Category</label>
          <select className="w-full border border-gray-300 rounded-md p-2" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">All</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="general">General</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
        </div>
      </div>
    </div>
  )
}
