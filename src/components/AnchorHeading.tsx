"use client";

import { cn } from "@/lib/cn";

/**
 * Section heading whose trailing `#` copies a deep link on click — the source
 * site renders it as a button, so this ports the behavior rather than the
 * frozen markup.
 */
export function AnchorHeading({
  id,
  headingId,
  as: Tag = "h2",
  scale = "t-h1 text-pretty",
  className,
  children,
}: {
  /** Fragment the copied link points at, when the target is an ancestor section. */
  id?: string;
  /** Fragment the heading element itself owns — doubles as the copy target. */
  headingId?: string;
  as?: "h1" | "h2" | "h3";
  /** Type-scale classes; override for the smaller `t-h3` document headings. */
  scale?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const anchor = headingId ?? id;
  const copy = () => {
    const url = `${window.location.origin}${window.location.pathname}${anchor ? `#${anchor}` : ""}`;
    navigator.clipboard?.writeText(url).catch(() => {});
  };

  return (
    <Tag id={headingId} className={cn(scale, "text-ink", className)}>
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
