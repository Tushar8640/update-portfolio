import { BlogSearch } from "@/components/blog-search";
import { formatBlogDate, getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Notes on shipping real-world web apps.",
};

export default function BlogPage() {
  const posts = getAllPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    date: formatBlogDate(p.date),
    readingMinutes: p.readingMinutes,
    tags: p.tags ?? [],
  }));

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          Blog
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          Short, practical notes on building and shipping clean features.
        </p>
      </div>

      <BlogSearch posts={posts} />
    </div>
  );
}
