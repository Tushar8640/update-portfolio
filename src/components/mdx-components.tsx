import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { CodeBlock, InlineCode } from "./code-block";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mt-8 mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-8 mb-4 border-b border-border pb-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-6 mb-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl font-semibold tracking-tight mt-4 mb-2 text-foreground">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="my-4 text-base leading-relaxed text-foreground/90 md:text-lg">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="my-4 list-disc space-y-2 pl-5 text-base text-foreground/90 md:text-lg">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 list-decimal space-y-2 pl-5 text-base text-foreground/90 md:text-lg">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="leading-relaxed">{children}</li>
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
          className="break-words text-primary underline underline-offset-4 font-medium transition-colors hover:text-primary/80"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className="break-words text-primary underline underline-offset-4 font-medium transition-colors hover:text-primary/80">
        {children}
      </Link>
    );
  },
};
