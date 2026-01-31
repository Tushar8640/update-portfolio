import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "About",
  description: "About me and how I work.",
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">About</h1>
        <p className="text-muted-foreground">
          I’m a product-minded Full-Stack JavaScript Developer focused on clean, scalable,
          real-world applications.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">What I build</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Next.js (App Router)</Badge>
          <Badge variant="secondary">React + TypeScript</Badge>
          <Badge variant="secondary">Tailwind + shadcn/ui</Badge>
          <Badge variant="secondary">Redux + RTK Query</Badge>
          <Badge variant="secondary">Node/NestJS</Badge>
          <Badge variant="secondary">PostgreSQL + Prisma</Badge>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold">How I work</h2>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Clarify scope and acceptance criteria before coding</li>
          <li>Build the smallest correct version first</li>
          <li>Polish UX, accessibility basics, and code quality</li>
          <li>Deliver with a short summary + next steps</li>
        </ul>
      </div>
    </div>
  );
}
