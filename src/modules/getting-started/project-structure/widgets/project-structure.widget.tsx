import { CodeBlock } from '@/shared/components/code-block'

export const ProjectStructureWidget = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Top-level folders</h2>
        <p className="text-muted-foreground">
          Next.js uses the following top-level folders to organize your
          application:
        </p>
        <div className="overflow-hidden rounded-lg border">
          {[
            { name: 'app', desc: 'App Router' },
            { name: 'pages', desc: 'Pages Router' },
            { name: 'public', desc: 'Static assets to be served' },
            { name: 'src', desc: 'Optional application source folder' },
          ].map((row) => (
            <div key={row.name} className="flex border-b last:border-0">
              <div className="w-40 shrink-0 border-r bg-muted/50 px-4 py-3 font-mono text-sm">
                {row.name}
              </div>
              <div className="px-4 py-3 text-sm text-muted-foreground">
                {row.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Top-level files</h2>
        <div className="overflow-hidden rounded-lg border">
          {[
            { name: 'next.config.js', desc: 'Configuration file for Next.js' },
            { name: 'package.json', desc: 'Project dependencies and scripts' },
            {
              name: 'tsconfig.json',
              desc: 'Configuration file for TypeScript',
            },
            { name: '.env', desc: 'Environment variables' },
            { name: '.eslintrc.json', desc: 'Configuration file for ESLint' },
          ].map((row) => (
            <div key={row.name} className="flex border-b last:border-0">
              <div className="w-48 shrink-0 border-r bg-muted/50 px-4 py-3 font-mono text-sm">
                {row.name}
              </div>
              <div className="px-4 py-3 text-sm text-muted-foreground">
                {row.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">App Router conventions</h2>
        <p className="text-muted-foreground">
          Special files used inside the{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            app
          </code>{' '}
          directory:
        </p>
        <CodeBlock
          code={`app/
├── layout.tsx       # Shared UI for a segment and its children
├── page.tsx         # Unique UI of a route and publicly accessible
├── loading.tsx      # Loading UI for a segment and its children
├── not-found.tsx    # Not found UI for a segment and its children
├── error.tsx        # Error UI for a segment and its children
├── route.ts         # Server-side API endpoint
└── template.tsx     # Re-rendered layout`}
          language="text"
        />
      </section>
    </div>
  )
}
