import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type BlogPostFrontmatter = {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  published?: boolean;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  published: boolean;
  readingMinutes: number;
};

const blogDir = path.join(process.cwd(), "content", "blog");

function listMdxFiles(): string[] {
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((fileName) => fileName.endsWith(".mdx"));
}

export function getAllPosts(): BlogPostMeta[] {
  const files = listMdxFiles();

  const posts = files
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(blogDir, fileName);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(raw);

      const fm = data as Partial<BlogPostFrontmatter>;
      if (!fm.title || !fm.date) return null;

      const minutes = Math.max(1, Math.round(readingTime(content).minutes));

      return {
        slug,
        title: fm.title,
        date: fm.date,
        description: fm.description ?? "",
        tags: fm.tags ?? [],
        published: fm.published ?? true,
        readingMinutes: minutes,
      } satisfies BlogPostMeta;
    })
    .filter((post): post is BlogPostMeta => post !== null)
    .filter((post) => post.published !== false)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

export function getPostBySlug(slug: string): {
  meta: BlogPostMeta;
  content: string;
} {
  const fullPath = path.join(blogDir, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const fm = data as Partial<BlogPostFrontmatter>;
  if (!fm.title || !fm.date) {
    throw new Error(`Missing frontmatter fields in ${slug}.mdx`);
  }

  const minutes = Math.max(1, Math.round(readingTime(content).minutes));

  return {
    meta: {
      slug,
      title: fm.title,
      date: fm.date,
      description: fm.description ?? "",
      tags: fm.tags ?? [],
      published: fm.published ?? true,
      readingMinutes: minutes,
    },
    content,
  };
}

export function formatBlogDate(isoDate: string): string {
  const d = new Date(isoDate);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}
