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
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          Contact
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          Want to build an MVP, dashboard, backend API, or need a bug fixed? Send a short
          brief and a deadline.
        </p>
      </div>

      <div className="rounded-xl border bg-card p-4 shadow-sm sm:p-8">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Email</p>
        <p className="mt-2 break-all text-lg font-semibold sm:text-xl">{siteConfig.email}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href={`mailto:${siteConfig.email}`}>Email me</a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
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
