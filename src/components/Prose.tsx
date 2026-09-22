import Link from "next/link";
import { cn } from "@/lib/cn";

/** Inline link style used inside body copy. */
export function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="box-decoration-clone rounded-[2px] bg-card px-[3px] underline decoration-dark-500/70 underline-offset-[3px] transition-colors [text-decoration-thickness:1px] hover:bg-light-400 hover:text-ink hover:decoration-ink"
    >
      {children}
    </Link>
  );
}

/** Inline code chip, e.g. the `sf` in the CLI paragraph. */
export function Code({ children }: { children: React.ReactNode }) {
  return (
    <span className="box-decoration-clone rounded-[2px] bg-card px-[3px] font-mono text-[0.95em] tracking-[0.01em]">
      {children}
    </span>
  );
}

export function Body({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("t-pl flex flex-col gap-4", className)}>{children}</div>;
}
