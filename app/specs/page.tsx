import type { Metadata } from "next";
import { AnchorHeading } from "@/components/AnchorHeading";
import { Faq } from "@/components/Faq";
import { InlineLink } from "@/components/Prose";

const DESCRIPTION =
  "Vetted GPU clusters with 24/7 support, 1.5TB+ NVMe storage, 1TB+ of RAM, and no ingress or egress fees.";

export const metadata: Metadata = {
  title: "Specs | SF Compute",
  description: DESCRIPTION,
  openGraph: { title: "Specs | SF Compute", description: DESCRIPTION },
  twitter: { title: "Specs | SF Compute", description: DESCRIPTION },
};

const HIGHLIGHTS = [
  "24/7 support (Slack, phone, email)",
  "1.5TB+ NVMe storage",
  "1TB+ of RAM",
  "No ingress/egress fees",
];

export default function Specs() {
  return (
    <>
      <section id="gpu-clusters" className="flex scroll-mt-20 flex-col gap-8 pb-12 lg:scroll-mt-32">
        <div className="flex flex-col gap-10 px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            <AnchorHeading as="h1" id="gpu-clusters">
              GPU clusters
            </AnchorHeading>
            <p className="t-pl text-muted">
              All clusters are vetted and meet{" "}
              <InlineLink href="/requirements">minimum technical requirements</InlineLink>. Deploy
              on-demand or reserve instances with no long-term contracts.
            </p>
            <ul className="flex flex-col gap-2">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="t-pl flex items-center gap-2 text-dark-600">
                  <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-dark-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
