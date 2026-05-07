import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 md:h-16 md:flex-nowrap md:py-0">
        <Link href="/" className="flex min-w-0 items-center gap-2 text-base font-bold tracking-tight transition-colors hover:text-primary sm:text-lg">
           <span className="bg-primary/10 p-1 rounded-md text-primary">{siteConfig.shortName.charAt(0)}</span>
           <span className="truncate">{siteConfig.shortName.slice(1)}</span>
        </Link>

        <nav className="order-3 flex w-full items-center gap-4 overflow-x-auto text-sm font-medium md:order-none md:w-auto md:gap-6 md:overflow-visible">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 text-muted-foreground link-hover">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
