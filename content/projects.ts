export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "nextjs-dashboard",
    title: "Next.js Dashboard UI",
    description:
      "A modern dashboard layout with tables, filters, and form flows built with Next.js App Router, TypeScript, Tailwind, and shadcn/ui.",
    tags: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    href: "https://example.com",
    repo: "https://github.com/your-username/your-repo",
    highlights: [
      "Reusable layout: sidebar + header + content",
      "Accessible components and responsive UI",
      "Form handling patterns (RHF + Zod)",
    ],
  },
  {
    slug: "nest-api-foundation",
    title: "NestJS API Foundation",
    description:
      "A scalable REST API foundation with JWT auth, RBAC, PostgreSQL schema design, Prisma migrations, and Swagger docs.",
    tags: ["NestJS", "PostgreSQL", "Prisma", "JWT", "RBAC"],
    repo: "https://github.com/your-username/your-repo",
    highlights: [
      "Auth + RBAC guards",
      "Prisma schema + migrations",
      "Swagger/OpenAPI documentation",
    ],
  },
  {
    slug: "bugfix-case-study",
    title: "Bug Fix / Feature Case Study",
    description:
      "A small case study showing how I reproduce issues, fix root causes, and deliver clean patches with verification steps.",
    tags: ["Debugging", "React", "Next.js", "TypeScript"],
    highlights: [
      "Reproduction steps + root cause analysis",
      "Minimal safe fix with regression check",
      "Clear delivery notes and next steps",
    ],
  },
];
