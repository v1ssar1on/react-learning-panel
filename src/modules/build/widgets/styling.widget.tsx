import { CodeBlock } from '@/shared/components/code-block'
import { PageHeader } from '@/shared/components/page-header'

export const StylingWidget = () => {
  return (
    <div className="max-w-3xl space-y-10">
      <PageHeader
        title="Styling"
        description="Learn the different ways you can style your Next.js application."
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">CSS Modules</h2>
        <p className="text-muted-foreground">
          Next.js supports CSS Modules using the{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            .module.css
          </code>{' '}
          extension. CSS Module files are locally scoped, avoiding naming
          collisions.
        </p>
        <CodeBlock
          code={`/* styles.module.css */
.container {
  padding: 1rem;
}

/* component.tsx */
import styles from './styles.module.css'

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tailwind CSS</h2>
        <p className="text-muted-foreground">
          Tailwind CSS is a utility-first CSS framework that works well with
          Next.js. It is configured via{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            tailwind.config.js
          </code>{' '}
          and imported in your global CSS.
        </p>
        <CodeBlock
          code={`/* globals.css */
@import "tailwindcss";

/* component.tsx */
export default function Button() {
  return (
    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
      Click me
    </button>
  )
}`}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Global Styles</h2>
        <p className="text-muted-foreground">
          Global styles can be imported in any layout, page, or component inside
          the{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            app
          </code>{' '}
          directory.
        </p>
        <CodeBlock
          code={`// app/layout.tsx
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`}
          language="tsx"
        />
      </section>
    </div>
  )
}
