import { CodeBlock } from '@/shared/components/code-block'

export const ManualInstallWidget = () => {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Manual Installation</h2>
        <p className="text-muted-foreground">
          To manually create a new Next.js app, install the required packages:
        </p>
        <CodeBlock
          code="npm install next@latest react@latest react-dom@latest"
          language="bash"
        />
        <p className="text-muted-foreground">
          Open your{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            package.json
          </code>{' '}
          and add the following scripts:
        </p>
        <CodeBlock
          code={`{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}`}
          language="json"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Run the Development Server</h2>
        <CodeBlock code="npm run dev" language="bash" />
        <p className="text-muted-foreground">
          Visit{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            http://localhost:3000
          </code>{' '}
          to view your application.
        </p>
      </div>
    </section>
  )
}
