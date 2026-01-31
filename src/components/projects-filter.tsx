"use client";

import * as React from "react";

import type { Project } from "../../content/projects";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/spotlight-card";

function uniqTags(projects: Project[]): string[] {
  const tags = new Set<string>();
  for (const p of projects) for (const t of p.tags) tags.add(t);
  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}

export function ProjectsFilter({ projects }: { projects: Project[] }) {
  const [query, setQuery] = React.useState("");
  const [tag, setTag] = React.useState<string>("All");

  const tags = React.useMemo(() => ["All", ...uniqTags(projects)], [projects]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();

    return projects.filter((p) => {
      const matchesTag = tag === "All" ? true : p.tags.includes(tag);
      if (!matchesTag) return false;

      if (!q) return true;
      const hay = [p.title, p.description, p.tags.join(" ")].join(" ").toLowerCase();
      return hay.includes(q);
    });
  }, [projects, query, tag]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects…"
          aria-label="Search projects"
          className="md:max-w-sm"
        />

        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <Button
              key={t}
              variant={t === tag ? "default" : "secondary"}
              size="sm"
              onClick={() => setTag(t)}
            >
              {t}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((p) => (
          <SpotlightCard key={p.slug} className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </div>

            {p.tags.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            ) : null}

            {p.highlights.length ? (
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary link-hover underline underline-offset-4"
                >
                  Live Demo
                </a>
              ) : null}
              {p.repo ? (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground link-hover underline underline-offset-4"
                >
                  View Code
                </a>
              ) : null}
            </div>
          </SpotlightCard>
        ))}
      </div>

      {!filtered.length ? (
        <p className="text-sm text-muted-foreground">No matching projects.</p>
      ) : null}
    </div>
  );
}
