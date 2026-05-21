import { CodeBlock } from '@/shared/components/code-block'
import { PageHeader } from '@/shared/components/page-header'

export const RenderingWidget = () => {
  return (
    <div className="max-w-3xl space-y-10">
      <PageHeader
        title="Rendering"
        description="Explore Server and Client Components and when to use each."
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Server Components</h2>
        <p className="text-muted-foreground">
          By default, all components inside the{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            app
          </code>{' '}
          directory are Server Components. They render on the server, reducing
          the JavaScript sent to the client.
        </p>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Fetch data directly without an API layer</li>
          <li>Keep sensitive logic on the server</li>
          <li>Reduce client-side JavaScript bundle</li>
          <li>Access backend resources directly</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Client Components</h2>
        <p className="text-muted-foreground">
          Add the{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            "use client"
          </code>{' '}
          directive to enable interactivity, browser APIs, and React hooks.
        </p>
        <CodeBlock
          code={`'use client'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  )
}`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">When to use which?</h2>
        <div className="overflow-hidden rounded-lg border">
          <div className="flex border-b bg-muted/50 text-sm font-medium">
            <div className="flex-1 px-4 py-2">What do you need?</div>
            <div className="w-36 shrink-0 border-l px-4 py-2">Server</div>
            <div className="w-36 shrink-0 border-l px-4 py-2">Client</div>
          </div>
          {[
            { need: 'Fetch data', server: '✓', client: '' },
            { need: 'useState / useEffect', server: '', client: '✓' },
            { need: 'Event listeners', server: '', client: '✓' },
            { need: 'Browser APIs', server: '', client: '✓' },
            { need: 'Custom hooks with state', server: '', client: '✓' },
            { need: 'Access backend resources', server: '✓', client: '' },
          ].map((row) => (
            <div key={row.need} className="flex border-b text-sm last:border-0">
              <div className="flex-1 px-4 py-3 text-muted-foreground">
                {row.need}
              </div>
              <div className="w-36 shrink-0 border-l px-4 py-3 text-green-500">
                {row.server}
              </div>
              <div className="w-36 shrink-0 border-l px-4 py-3 text-green-500">
                {row.client}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
