/**
 * Scripts and timings for the homepage CLI terminal, recovered verbatim from
 * the source bundle (chunk 2x2mv6t33ponx.js, module 172174 `CliFeature`).
 */

/** The full demo script the terminal types out. No trailing newline. */
export const DEMO_SCRIPT = `# Buy 32 nodes (256 H100s) for 3 days at market price
$ sf buy --count 32 --duration 3d

# Sell 4 idle nodes with a $16.00/node-hour floor
$ sf sell --count 4 --min-rate 16.00

# Launch an instance using your owned compute
$ sf instances create --name training-node-1

# SSH into a running instance
$ sf instances ssh training-node-1`;

/** Seeded into the textarea on mount: the first two blocks. */
export const SEED_SCRIPT = DEMO_SCRIPT.slice(0, DEMO_SCRIPT.indexOf("# Launch"));

/** Typed while the copy button is hovered. */
export const INSTALL_SCRIPT = `# Install the sf CLI
$ curl -fsSL https://cli.sfcompute.com | bash`;

export const INSTALL_COMMAND = "curl -fsSL https://cli.sfcompute.com | bash";

/** Per-character typing delay, in ms. */
export function charDelay(ch: string) {
  if (ch === "\n") return 38 + 50 * Math.random();
  if (ch === " ") return 8 + 20 * Math.random();
  return 6 + 15 * Math.random();
}

export const TIMING = {
  /** Opacity fade before truncating to the common prefix. */
  eraseFadeMs: 200,
  /** Delay from last activity to the resting (blinking) cursor. */
  cursorRestMs: 480,
  /** Idle after user typing before the demo script is restored. */
  idleRestoreMs: 5000,
  /** Debounce on copy-button hover before typing the install script. */
  copyHoverMs: 70,
  /** How long the copy button reads "Copied". */
  copiedLabelMs: 1400,
  /** IntersectionObserver threshold that kicks off the first type-out. */
  revealThreshold: 0.35,
} as const;
