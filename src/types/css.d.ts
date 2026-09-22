import "react";

declare module "react" {
  /**
   * The ported markup sets CSS custom properties inline (Tailwind's --tw-*,
   * the terminal's --caret-row/col). React allows this at runtime; this just
   * tells TypeScript about it.
   */
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
