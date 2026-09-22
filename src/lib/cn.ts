/** Minimal classnames join — the bundle's `cn()` with no Tailwind merge needed. */
export function cn(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}
