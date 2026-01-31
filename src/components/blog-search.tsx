"use client";

import * as React from "react";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/spotlight-card";

export type BlogSearchItem = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  readingMinutes: number;
  tags: string[];
};

export function BlogSearch({ posts }: { posts: BlogSearchItem[] }) {
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;

    return posts.filter((p) => {
      const haystack = [p.title, p.description, p.tags.join(" ")]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [posts, query]);

  return (
    <div className="space-y-6">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts…"
        aria-label="Search blog posts"
        className="h-11"
      />

      <div className="space-y-5">
        {filtered.map((p) => (
          <SpotlightCard key={p.slug} className="p-6">
            <div className="flex flex-col gap-2">
              <Link href={`/blog/${p.slug}`} className="text-xl font-semibold link-hover">
                {p.title}
              </Link>
              <p className="text-sm text-muted-foreground font-medium">
                {p.date} • {p.readingMinutes} min read
              </p>
            </div>
            {p.description ? (
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            ) : null}
            {p.tags.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            ) : null}
          </SpotlightCard>
        ))}

        {!filtered.length ? (
          <p className="text-sm text-muted-foreground text-center py-8">No posts found.</p>
        ) : null}
      </div>
    </div>
  );
}
