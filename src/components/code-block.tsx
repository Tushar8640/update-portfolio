"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";
import { normalizeLang, type SupportedLanguage } from "@/types/code-block.types";

interface CodeBlockProps {
  children: string;
  className?: string;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Extract language from className
  const rawLanguage = className?.replace(/language-/, "") || "text";
  const language: SupportedLanguage = normalizeLang(rawLanguage);
  const code = String(children).trim();

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-6 rounded-lg overflow-hidden border border-[#1e1e1e] shadow-2xl">
      {/* Header with language badge and copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#1e1e1e] border-b border-[#2d2d2d]">
        <span className="text-xs font-medium text-[#858585] uppercase tracking-wide">
          {rawLanguage}
        </span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-[#858585] hover:text-[#cccccc] hover:bg-[#2d2d2d] rounded transition-all duration-150"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content with syntax highlighting */}
      <div className="relative bg-[#1e1e1e]">
        <Highlight 
          theme={themes.vsDark} 
          code={code} 
          language={language}
        >
          {({ className: highlightClassName, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className="overflow-x-auto p-4 text-[13.5px] leading-[1.6] custom-scrollbar"
              style={{ ...style, backgroundColor: "#1e1e1e" }}
            >
              <code>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </code>
            </pre>
          )}
        </Highlight>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1e1e1e;
          border-radius: 0 0 8px 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #424242;
          border-radius: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4e4e4e;
        }
      `}</style>
    </div>
  );
}

interface InlineCodeProps {
  children: React.ReactNode;
}

export function InlineCode({ children }: InlineCodeProps) {
  return (
    <code className="px-1.5 py-0.5 mx-0.5 text-sm font-mono bg-zinc-200 dark:bg-zinc-800 text-pink-600 dark:text-pink-400 rounded border border-zinc-300 dark:border-zinc-700">
      {children}
    </code>
  );
}
