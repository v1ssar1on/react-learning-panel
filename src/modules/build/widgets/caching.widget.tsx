import { CodeBlock } from '@/shared/components/code-block'
import { PageHeader } from '@/shared/components/page-header'

export const CachingWidget = () => {
  return (
    <div className="max-w-3xl space-y-10">
      <PageHeader
        title="Caching"
        description="Learn about the caching mechanisms in Next.js and how to optimize performance."
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          Next.js has four caching mechanisms that work together to improve
          performance and reduce costs.
        </p>
        <div className="overflow-hidden rounded-lg border">
          {[
            {
              name: 'Request Memoization',
              scope: 'Per request',
              duration: 'Request lifetime',
            },
            {
              name: 'Data Cache',
              scope: 'Cross-request',
              duration: 'Persistent (revalidatable)',
            },
            {
              name: 'Full Route Cache',
              scope: 'Server',
              duration: 'Persistent (revalidatable)',
            },
            {
              name: 'Router Cache',
              scope: 'Client',
              duration: 'Session / time-based',
            },
          ].map((row) => (
            <div key={row.name} className="flex border-b last:border-0">
              <div className="w-52 shrink-0 border-r bg-muted/50 px-4 py-3 text-sm font-medium">
                {row.name}
              </div>
              <div className="flex-1 border-r px-4 py-3 text-sm text-muted-foreground">
                {row.scope}
              </div>
              <div className="flex-1 px-4 py-3 text-sm text-muted-foreground">
                {row.duration}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Opting out of caching</h2>
        <p className="text-muted-foreground">
          You can opt out of caching for individual fetch requests or entire
          route segments.
        </p>
        <CodeBlock
          code={`// Opt out per request
fetch('https://api.example.com/data', { cache: 'no-store' })

// Opt out for entire route segment
export const dynamic = 'force-dynamic'`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Revalidation</h2>
        <CodeBlock
          code={`// Time-based: revalidate every hour
fetch('...', { next: { revalidate: 3600 } })

// On-demand: revalidate by tag from Server Action
import { revalidateTag } from 'next/cache'

export async function action() {
  'use server'
  revalidateTag('products')
}`}
          language="tsx"
        />
      </section>
    </div>
  )
}
