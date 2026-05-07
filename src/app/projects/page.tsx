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
          Selected full-stack work across real-time platforms, admin systems, and scalable backend services.
        </p>
      </div>

      <ProjectsFilter projects={projects} />
    </div>
  );
}
