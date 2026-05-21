interface ICodeBlockProps {
  code: string
  language?: string
}

export const CodeBlock = ({ code, language }: ICodeBlockProps) => {
  return (
    <div className="relative">
      {language && (
        <span className="absolute top-3 right-4 text-xs text-muted-foreground">
          {language}
        </span>
      )}
      <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  )
}
