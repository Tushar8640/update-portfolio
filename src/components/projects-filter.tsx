import type { Project } from "../../content/projects";

import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/spotlight-card";

export function ProjectsFilter({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-4 sm:gap-6">
      {projects.map((p) => (
          <SpotlightCard key={p.slug} className="p-4 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-lg font-semibold sm:text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </div>

            {p.tags.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="max-w-full text-wrap text-xs leading-relaxed">
                    {t}
                  </Badge>
                ))}
              </div>
            ) : null}

            {p.highlights.length ? (
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
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
              {p.frontendRepo ? (
                <a
                  href={p.frontendRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground link-hover underline underline-offset-4"
                >
                  Frontend Code
                </a>
              ) : null}
              {p.backendRepo ? (
                <a
                  href={p.backendRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground link-hover underline underline-offset-4"
                >
                  Backend Code
                </a>
              ) : null}
            </div>
          </SpotlightCard>
      ))}
    </div>
  );
}
