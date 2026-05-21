import { CodeBlock } from '@/shared/components/code-block'

export const AutoInstallWidget = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Automatic Installation</h2>
      <p className="text-muted-foreground">
        We recommend starting a new Next.js app using{' '}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
          create-next-app
        </code>
        , which sets up everything automatically for you.
      </p>
      <CodeBlock code="npx create-next-app@latest" language="bash" />
      <p className="text-muted-foreground">
        On installation, you'll see the following prompts:
      </p>
      <CodeBlock
        code={`What is your project named? my-app
Would you like to use TypeScript? Yes
Would you like to use ESLint? Yes
Would you like to use Tailwind CSS? Yes
Would you like your code inside a \`src/\` directory? Yes
Would you like to use App Router? (recommended) Yes
Would you like to use Turbopack for next dev? Yes`}
        language="bash"
      />
    </section>
  )
}
