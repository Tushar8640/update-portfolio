import { projects } from "@/lib/projects";
import { ProjectsFilter } from "@/components/projects-filter";

export const metadata = {
  title: "Projects",
  description: "Selected projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Projects
        </h1>
        <p className="text-lg text-muted-foreground">
          A small selection of work across Next.js UI, backend APIs, and debugging.
        </p>
      </div>

      <ProjectsFilter projects={projects} />
    </div>
  );
}
