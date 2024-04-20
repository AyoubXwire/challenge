import { immer } from "zustand/middleware/immer"
import { createWithEqualityFn } from "zustand/traditional"

interface ArticlesFilter {
  q: string
  setQ: (q: string) => void
  source: string
  setSource: (source: string) => void
  from: string
  setFrom: (from: string) => void
  to: string
  setTo: (to: string) => void
  category: string
  setCategory: (category: string) => void
}

const useArticlesFilterStore = createWithEqualityFn<ArticlesFilter>()(immer(set => ({
  q: "",
  setQ: (q) => {
    set(() => ({ q: q }))
  },
  source: "",
  setSource: (source) => {
    set(() => ({ source: source }))
  },
  from: "",
  setFrom: (from) => {
    set(() => ({ from: from }))
  },
  to: "",
  setTo: (to) => {
    set(() => ({ to: to }))
  },
  category: "",
  setCategory: (category) => {
    set(() => ({ category: category }))
  }
})))

export default useArticlesFilterStore
