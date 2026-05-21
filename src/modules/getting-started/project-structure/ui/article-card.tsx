import type { IArticle } from '@/domains/article/types.article'

interface IArticleCardProps {
  article: IArticle
}

export const ArticleCard = ({ article }: IArticleCardProps) => {
  return (
    <div className="space-y-2 rounded-lg border p-4">
      <span className="text-xs text-muted-foreground">#{article.id}</span>
      <h3 className="font-medium capitalize leading-snug">{article.title}</h3>
      <p className="line-clamp-2 text-sm text-muted-foreground">
        {article.body}
      </p>
    </div>
  )
}
