/** FAQ content, lifted verbatim from the bundle (chunk 3jywhg9pc-bb9.js). */
export const FAQ: { q: string; a: string }[] = [
  {
    q: "Is it bare metal? Containers? VMs?",
    a: "Bare metal and managed Slurm for the lowest-level access, and VMs for flexibility.",
  },
  {
    q: "How fast do VMs spin up?",
    a: "Most VMs are ready in well under a minute. Cold starts on uncommon configurations can take a little longer.",
  },
  {
    q: "Are nodes fully-interconnected with InfiniBand?",
    a: "Contact us for a BM or managed Slurm cluster which both support InfiniBand today. We'll support InfiniBand on VMs in Q3 2026.",
  },
  {
    q: "Will the nodes go down?",
    a: "Yes. Hardware failure rates are much higher on GPU clusters than on web servers. At certain scales, they're guaranteed, so we've designed for failure. We have strict hardware requirements and have seen just about everything that can go wrong. Unlike other providers, we refund for failed nodes and can repack your nodes to ones with healthy hardware.",
  },
  {
    q: "What support do you have?",
    a: "Shared Slack channels with our engineers, plus on-call coverage for production clusters. Enterprise plans include a dedicated solutions engineer.",
  },
];

/** How long the fill keeps re-measuring while a panel expands (matches the 0.32s transition). */
export const FILL_FOLLOW_MS = 360;
