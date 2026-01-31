import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/spotlight-card";
import { formatBlogDate, getAllPosts } from "@/lib/blog";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const posts = getAllPosts().slice(0, 2);
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="space-y-24">
      <section className="space-y-8 pt-10 md:pt-20">
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="gradient-text pb-2 inline-block">
              {siteConfig.name}
            </span>
          </h1>
          <p className="max-w-3xl text-xl text-muted-foreground leading-relaxed md:text-2xl">
            {siteConfig.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {["Next.js (App Router)", "React", "TypeScript", "Tailwind", "shadcn/ui", "Node/NestJS", "PostgreSQL + Prisma"].map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="px-3 py-1 text-sm bg-secondary/50 hover:bg-secondary border-secondary-foreground/10 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button asChild size="lg" className="rounded-full px-8 text-base transition-all hover:-translate-y-0.5">
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base bg-background/50 backdrop-blur transition-all hover:-translate-y-0.5">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
             <span className="relative z-10">Featured Projects</span>
             <span className="absolute -left-4 -top-4 -z-10 h-16 w-16 bg-primary/10 rounded-full blur-2xl" />
          </h2>
          <Button variant="ghost" className="group" asChild>
            <Link href="/projects">
              View all 
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((p) => (
            <SpotlightCard key={p.slug} className="group flex h-full flex-col p-6">
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold transition-colors group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.slice(0, 4).map((t) => (
                    <Badge key={t} variant="outline" className="bg-primary/5 border-primary/10">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex gap-4 text-sm font-medium">
                {p.href && (
                  <a href={p.href} target="_blank" rel="noreferrer" className="flex items-center text-primary transition-opacity hover:opacity-80">
                    Live Demo <span className="sr-only">for {p.title}</span>
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="flex items-center text-muted-foreground transition-colors hover:text-foreground">
                    Code <span className="sr-only">for {p.title}</span>
                  </a>
                )}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            <span className="relative z-10">Experience</span>
            <span className="absolute -left-4 -top-4 -z-10 h-16 w-16 bg-primary/10 rounded-full blur-2xl" />
          </h2>
        </div>

        <div className="grid gap-6">
          {/* Fiverr Experience */}
          <SpotlightCard className="p-6 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative z-10 space-y-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    Freelance Full-Stack Developer
                  </h3>
                  <p className="text-lg text-muted-foreground mt-1">Fiverr</p>
                </div>
                <p className="text-sm text-muted-foreground shrink-0">
                  2022 - Present
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Building production-ready web applications for international clients. Specializing in Next.js, React, NestJS, and PostgreSQL. 
                Delivered 50+ projects with consistent 5-star ratings.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/5 border-primary/10">Next.js</Badge>
                <Badge variant="outline" className="bg-primary/5 border-primary/10">React</Badge>
                <Badge variant="outline" className="bg-primary/5 border-primary/10">TypeScript</Badge>
                <Badge variant="outline" className="bg-primary/5 border-primary/10">NestJS</Badge>
                <Badge variant="outline" className="bg-primary/5 border-primary/10">PostgreSQL</Badge>
                <Badge variant="outline" className="bg-primary/5 border-primary/10">Prisma</Badge>
              </div>
            </div>
          </SpotlightCard>

          {/* Previous Experience - Add more as needed */}
          <SpotlightCard className="p-6 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative z-10 space-y-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    Frontend Developer
                  </h3>
                  <p className="text-lg text-muted-foreground mt-1">Various Projects</p>
                </div>
                <p className="text-sm text-muted-foreground shrink-0">
                  2020 - 2022
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Developed responsive web applications and UI components. Focused on modern React patterns, 
                state management with Redux, and building pixel-perfect interfaces from Figma designs.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/5 border-primary/10">React</Badge>
                <Badge variant="outline" className="bg-primary/5 border-primary/10">Redux</Badge>
                <Badge variant="outline" className="bg-primary/5 border-primary/10">Tailwind CSS</Badge>
                <Badge variant="outline" className="bg-primary/5 border-primary/10">Figma</Badge>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Latest from the Blog</h2>
          <Button variant="ghost" className="group" asChild>
            <Link href="/blog">
              Read all roles 
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Button>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <SpotlightCard className="p-6 transition-all hover:border-primary/50 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground shrink-0">
                    {formatBlogDate(post.date)}
                  </p>
                </div>
                <div className="relative z-10 mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{post.readingMinutes} min read</span>
                </div>
                {post.description && (
                  <p className="relative z-10 mt-4 text-muted-foreground max-w-2xl leading-relaxed">
                    {post.description}
                  </p>
                )}
              </SpotlightCard>
             </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
