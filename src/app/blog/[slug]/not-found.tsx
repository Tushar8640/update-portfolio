import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Post not found</h1>
      <p className="text-muted-foreground">The post you’re looking for doesn’t exist.</p>
      <Button asChild variant="secondary">
        <Link href="/blog">Back to blog</Link>
      </Button>
    </div>
  );
}
