import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { CodeBlock, InlineCode } from "./code-block";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold tracking-tight mt-8 mb-4 text-foreground">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-bold tracking-tight mt-8 mb-4 text-foreground border-b border-border pb-2">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-semibold tracking-tight mt-6 mb-3 text-foreground">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl font-semibold tracking-tight mt-4 mb-2 text-foreground">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-lg leading-relaxed my-4 text-foreground/90">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside space-y-2 my-4 text-lg text-foreground/90">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside space-y-2 my-4 text-lg text-foreground/90">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="ml-4">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 italic text-muted-foreground bg-muted/30 rounded-r">
      {children}
    </blockquote>
  ),
  code: ({ children, className }) => {
    const isInline = !className;
    
    // Inline code
    if (isInline) {
      return <InlineCode>{children}</InlineCode>;
    }
    
    // Block code with syntax highlighting
    return (
      <CodeBlock className={className}>
        {String(children).replace(/\n$/, "")}
      </CodeBlock>
    );
  },
  pre: ({ children }) => {
    return <>{children}</>;
  },
  strong: ({ children }) => (
    <strong className="font-bold text-foreground">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-foreground/90">{children}</em>
  ),
  a: ({ href, children }) => {
    if (!href) return <span>{children}</span>;
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:text-primary/80 underline underline-offset-4 font-medium transition-colors"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className="text-primary hover:text-primary/80 underline underline-offset-4 font-medium transition-colors">
        {children}
      </Link>
    );
  },
};
