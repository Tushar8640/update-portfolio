import Link from "next/link";
import { Clock, TrendingUp, Tag } from "lucide-react";
import { formatBlogDate, getAllPosts, type BlogPostMeta } from "@/lib/blog";
import { Card } from "./ui/card";

export function BlogSidebar({ currentSlug }: { currentSlug: string }) {
  const allPosts = getAllPosts();
  const currentPost = allPosts.find(p => p.slug === currentSlug);
  
  // Get related posts by matching tags
  const relatedPosts = currentPost
    ? allPosts
        .filter(p => p.slug !== currentSlug)
        .filter(p => p.tags.some(tag => currentPost.tags.includes(tag)))
        .slice(0, 3)
    : [];

  // Get most read posts (by reading time as a proxy)
  const mostReadPosts = allPosts
    .filter(p => p.slug !== currentSlug)
    .sort((a, b) => b.readingMinutes - a.readingMinutes)
    .slice(0, 4);

  // Get all unique tags from all posts
  const allTags = Array.from(
    new Set(allPosts.flatMap(p => p.tags))
  ).slice(0, 10);

  return (
    <aside className="space-y-4">
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Card className="p-3">
          <h3 className="text-sm font-bold mb-2 flex items-center gap-1.5">
            <TrendingUp className="h-3.5 w-3.5 text-primary" />
            Related
          </h3>
          <div className="space-y-2.5">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <h4 className="font-semibold text-[11px] group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h4>
                <div className="flex items-center gap-1 mt-0.5 text-[10px] text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{post.readingMinutes} min</span>
                </div>
              </Link>
            ))}
          </div>
        </Card>
      )}

      {/* Most Read */}
      <Card className="p-3">
        <h3 className="text-sm font-bold mb-2 flex items-center gap-1.5">
          <TrendingUp className="h-3.5 w-3.5 text-primary" />
          Most Read
        </h3>
        <div className="space-y-2.5">
          {mostReadPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <div className="flex gap-1.5">
                <span className="text-base font-bold text-primary/20 shrink-0">
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-[11px] group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {formatBlogDate(post.date)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Card>

      {/* Popular Tags */}
      <Card className="p-3">
        <h3 className="text-sm font-bold mb-2 flex items-center gap-1.5">
          <Tag className="h-3.5 w-3.5 text-primary" />
          Tags
        </h3>
        <div className="flex flex-wrap gap-1">
          {allTags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${tag}`}
              className="text-[10px] px-2 py-0.5 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </Card>

      {/* Quick Links */}
      <Card className="p-3">
        <h3 className="text-sm font-bold mb-2">Links</h3>
        <div className="space-y-1.5 text-[11px]">
          <Link href="/blog" className="block hover:text-primary transition-colors">
            → All Posts
          </Link>
          <Link href="/projects" className="block hover:text-primary transition-colors">
            → Projects
          </Link>
          <Link href="/contact" className="block hover:text-primary transition-colors">
            → Contact
          </Link>
        </div>
      </Card>
    </aside>
  );
}
