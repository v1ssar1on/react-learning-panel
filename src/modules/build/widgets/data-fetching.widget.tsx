import { CodeBlock } from '@/shared/components/code-block'
import { PageHeader } from '@/shared/components/page-header'

export const DataFetchingWidget = () => {
  return (
    <div className="max-w-3xl space-y-10">
      <PageHeader
        title="Data Fetching"
        description="Understand the different data fetching strategies available in Next.js."
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Fetching on the Server</h2>
        <p className="text-muted-foreground">
          Server Components can fetch data directly using{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            async/await
          </code>
          . By default, Next.js caches the result of{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            fetch
          </code>{' '}
          requests.
        </p>
        <CodeBlock
          code={`// app/page.tsx
async function getData() {
  const res = await fetch('https://api.example.com/data')
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <main>{data.title}</main>
}`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Fetching on the Client</h2>
        <p className="text-muted-foreground">
          For client-side data fetching, use libraries like{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            TanStack Query
          </code>{' '}
          or{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            SWR
          </code>{' '}
          for caching, revalidation, and loading states.
        </p>
        <CodeBlock
          code={`'use client'
import { useQuery } from '@tanstack/react-query'

export default function Page() {
  const { data, isLoading } = useQuery({
    queryKey: ['data'],
    queryFn: () => fetch('/api/data').then(r => r.json()),
  })

  if (isLoading) return <p>Loading...</p>
  return <div>{data?.title}</div>
}`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Revalidating Data</h2>
        <p className="text-muted-foreground">
          You can revalidate cached data at a time interval or on-demand using{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            revalidatePath
          </code>{' '}
          or{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            revalidateTag
          </code>
          .
        </p>
        <CodeBlock
          code={`// Time-based revalidation
fetch('https://api.example.com/data', { next: { revalidate: 3600 } })

// Tag-based revalidation
fetch('https://api.example.com/data', { next: { tags: ['posts'] } })

// On-demand revalidation (Server Action)
import { revalidateTag } from 'next/cache'
revalidateTag('posts')`}
          language="tsx"
        />
      </section>
    </div>
  )
}
