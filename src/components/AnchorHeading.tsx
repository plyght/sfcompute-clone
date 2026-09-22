"use client";

import { cn } from "@/lib/cn";

/**
 * Section heading whose trailing `#` copies a deep link on click — the source
 * site renders it as a button, so this ports the behavior rather than the
 * frozen markup.
 */
export function AnchorHeading({
  id,
  as: Tag = "h2",
  className,
  children,
}: {
  id?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
}) {
  const copy = () => {
    const url = `${window.location.origin}${window.location.pathname}${id ? `#${id}` : ""}`;
    navigator.clipboard?.writeText(url).catch(() => {});
  };

  return (
    <Tag className={cn("t-h1 text-pretty text-ink", className)}>
      <button
        type="button"
        title="Copy link to this section"
        onClick={copy}
        className="group/anchor inline-block rounded-[4px] text-left text-inherit [font:inherit] [letter-spacing:inherit]"
      >
        {children}
        <span
          aria-hidden="true"
          className="ml-1 font-mono text-[0.7em] text-dark-300 opacity-0 transition-opacity group-hover/anchor:opacity-100 group-focus-visible/anchor:opacity-100"
        >
          #
        </span>
      </button>
    </Tag>
  );
}
