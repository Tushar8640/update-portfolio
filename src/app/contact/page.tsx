import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Get in touch.",
};

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Contact
        </h1>
        <p className="text-lg text-muted-foreground">
          Want to build an MVP, dashboard, backend API, or need a bug fixed? Send a short
          brief and a deadline.
        </p>
      </div>

      <div className="rounded-xl border p-8 bg-card shadow-sm">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Email</p>
        <p className="mt-2 text-xl font-semibold">{siteConfig.email}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={`mailto:${siteConfig.email}`}>Email me</a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </Link>
          </Button>
        </div>
      </div>

      <p className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg border">
        💡 Tip: If you share a repo link + reproduction steps, I can estimate faster.
      </p>
    </div>
  );
}
