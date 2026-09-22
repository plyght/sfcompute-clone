import type { ReactNode } from "react";
import { Code } from "@/components/Prose";

/**
 * The two published requirement documents listed under "Specifications".
 * Each links at the version that was current when the page was captured; the
 * unversioned URL is what contracts cite.
 */
export type RequirementDoc = { href: string; label: string; summary: string };

export const REQUIREMENT_DOCS: RequirementDoc[] = [
  {
    href: "/requirements/clusters/v2",
    label: "Cluster Requirements",
    summary:
      "cover supply-side hardware: GPU servers, networking, storage, data center, support, and acceptance.",
  },
  {
    href: "/requirements/colo/v2",
    label: "Colocation Requirements",
    summary:
      "cover colocation facilities: power, cooling, physical security, connectivity, redundancy, and certifications.",
  },
];

/** Bullets under "How versioning works" — mixed prose, so they carry their own nodes. */
export const VERSIONING_NOTES: { key: string; body: ReactNode }[] = [
  {
    key: "frozen-urls",
    body: (
      <>
        Each version has its own URL (<Code>/v1</Code>, <Code>/v2</Code>, …) and is frozen on
        publish.
      </>
    ),
  },
  {
    key: "unversioned",
    body: (
      <>
        The unversioned link (e.g. <Code>/requirements/clusters</Code>) points at the current
        version.
      </>
    ),
  },
  {
    key: "contracts",
    body: (
      <>
        Contracts cite the explicit version, so a signed agreement always resolves to the exact text
        it was signed against.
      </>
    ),
  },
  { key: "retired", body: <>Retired versions stay available indefinitely.</> },
];

/** The right-rail index of requirement documents. */
export type RailLink = { href: string; label: string };

export const REQUIREMENTS_RAIL: RailLink[] = [{ href: "/requirements", label: "Overview" }];
