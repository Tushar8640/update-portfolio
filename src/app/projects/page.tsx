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
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          Projects
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          Selected full-stack work across real-time platforms, admin systems, and scalable backend services.
        </p>
      </div>

      <ProjectsFilter projects={projects} />
    </div>
  );
}
