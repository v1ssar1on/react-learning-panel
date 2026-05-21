import { CodeBlock } from '@/shared/components/code-block'
import { PageHeader } from '@/shared/components/page-header'

export const RoutingWidget = () => {
  return (
    <div className="max-w-3xl space-y-10">
      <PageHeader
        title="Routing"
        description="Learn how the Next.js App Router uses the file system to define routes."
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Creating Routes</h2>
        <p className="text-muted-foreground">
          Next.js uses a file-system based router where folders are used to
          define routes. Each folder represents a route segment that maps to a
          URL segment. A{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            page.tsx
          </code>{' '}
          file makes a route segment publicly accessible.
        </p>
        <CodeBlock
          code={`app/
├── page.tsx          # /
├── dashboard/
│   └── page.tsx      # /dashboard
└── blog/
    └── page.tsx      # /blog`}
          language="text"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Nested Routes</h2>
        <p className="text-muted-foreground">
          To create a nested route, you can nest folders inside each other.
          Routes are nested by creating folders in the{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            app
          </code>{' '}
          directory.
        </p>
        <CodeBlock
          code={`// app/dashboard/settings/page.tsx
export default function SettingsPage() {
  return <h1>Settings</h1>
}`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Dynamic Routes</h2>
        <p className="text-muted-foreground">
          Dynamic segments are created by wrapping a folder name in square
          brackets:{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            [slug]
          </code>
          .
        </p>
        <CodeBlock
          code={`// app/blog/[slug]/page.tsx
export default function Post({ params }: { params: { slug: string } }) {
  return <h1>Post: {params.slug}</h1>
}`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Route Groups</h2>
        <p className="text-muted-foreground">
          Route groups allow you to organize routes without affecting the URL by
          wrapping a folder name in parentheses:{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            (group)
          </code>
          .
        </p>
        <CodeBlock
          code={`app/
├── (marketing)/
│   ├── about/page.tsx    # /about
│   └── blog/page.tsx     # /blog
└── (shop)/
    └── cart/page.tsx     # /cart`}
          language="text"
        />
      </section>
    </div>
  )
}
