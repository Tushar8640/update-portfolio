import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

import { mdxComponents } from "@/components/mdx-components";
import { formatBlogDate, getAllPosts, getPostBySlug } from "@/lib/blog";
import { BackButton } from "@/components/back-button";
import { BlogSidebar } from "@/components/blog-sidebar";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getPostBySlug(slug);
    return {
      title: meta.title,
      description: meta.description,
    };
  } catch {
    return {
      title: "Post not found",
    };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const compiled = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
    },
  });

  return (
    <div className="max-w-7xl mx-auto">
      <BackButton />
      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-4 lg:gap-6">
        {/* Main Content */}
        <article className="max-w-4xl">
          <header className="space-y-4 pb-8 border-b border-border mb-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              {post.meta.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <time dateTime={post.meta.date}>{formatBlogDate(post.meta.date)}</time>
              <span>•</span>
              <span>{post.meta.readingMinutes} min read</span>
              {post.meta.tags.length > 0 && (
                <>
                  <span>•</span>
                  <div className="flex flex-wrap gap-2">
                    {post.meta.tags.map((tag) => (
                      <span key={tag} className="text-primary font-medium">#{tag}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
            {post.meta.description && (
              <p className="text-xl text-muted-foreground leading-relaxed mt-4">
                {post.meta.description}
              </p>
            )}
          </header>

          <div className="prose-custom">
            {compiled.content}
          </div>
        </article>

        {/* Sidebar */}
        <div className="lg:sticky lg:top-20 lg:self-start">
          <BlogSidebar currentSlug={slug} />
        </div>
      </div>
    </div>
  );
}
