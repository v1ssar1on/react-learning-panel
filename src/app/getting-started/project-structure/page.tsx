import { useGetArticles } from '@/domains/article/hooks.article'
import { ArticlesListWidget } from '@/modules/getting-started/project-structure/widgets/articles-list.widget'
import { ProjectStructureWidget } from '@/modules/getting-started/project-structure/widgets/project-structure.widget'
import { PageHeader } from '@/shared/components/page-header'

export default function ProjectStructurePage() {
  const { data: articles, isLoading } = useGetArticles()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!articles) {
    return <div>No articles found.</div>
  }

  return (
    <div className="max-w-3xl space-y-10">
      <PageHeader
        title="Project Structure"
        description="An overview of the file and folder structure of a Next.js project."
      />
      <ProjectStructureWidget />
      <ArticlesListWidget articles={articles} />
    </div>
  )
}
