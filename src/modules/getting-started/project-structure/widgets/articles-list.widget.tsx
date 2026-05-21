import type { IArticle } from '@/domains/article/types.article'

import { ArticleCard } from '../ui/article-card'

interface IArticlesListWidgetProps {
  articles: IArticle[]
}

export const ArticlesListWidget = ({ articles }: IArticlesListWidgetProps) => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Articles</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  )
}
