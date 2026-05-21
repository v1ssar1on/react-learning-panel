export const SystemRequirementsWidget = () => {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">System Requirements</h2>
      <ul className="list-inside list-disc space-y-1 text-muted-foreground">
        <li>Node.js 18.18 or later</li>
        <li>macOS, Windows (including WSL), or Linux</li>
      </ul>
    </section>
  )
}
