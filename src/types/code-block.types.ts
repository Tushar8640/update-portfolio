// Supported programming languages for syntax highlighting
export const SUPPORTED_LANGUAGES = [
  "typescript",
  "tsx",
  "javascript",
  "jsx",
  "python",
  "bash",
  "shell",
  "json",
  "css",
  "html",
  "markdown",
  "sql",
  "c",
  "cpp",
  "java",
  "go",
  "rust",
  "php",
  "ruby",
  "yaml",
  "text",
] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

// Helper function to normalize language names
export function normalizeLang(lang: string): SupportedLanguage {
  const normalized = lang.toLowerCase();
  
  // Handle common aliases
  const aliases: Record<string, SupportedLanguage> = {
    "ts": "typescript",
    "js": "javascript",
    "sh": "bash",
    "c++": "cpp",
    "py": "python",
    "md": "markdown",
    "yml": "yaml",
  };
  
  if (normalized in aliases) {
    return aliases[normalized];
  }
  
  if (SUPPORTED_LANGUAGES.includes(normalized as SupportedLanguage)) {
    return normalized as SupportedLanguage;
  }
  
  return "text";
}
