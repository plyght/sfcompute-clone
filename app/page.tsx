import { AnchorHeading } from "@/components/AnchorHeading";
import { Button } from "@/components/Button";
import { CareersCarousel } from "@/components/CareersCarousel";
import { CareersRoles } from "@/components/CareersRoles";
import { CliFeature } from "@/components/CliFeature";
import { HeroRack } from "@/components/HeroRack";
import { Partners } from "@/components/Partners";
import { PriceChart } from "@/components/PriceChart";
import { Body, InlineLink, Code } from "@/components/Prose";
import { ResellChart } from "@/components/ResellChart";
import { SectionLabel } from "@/components/SectionLabel";
import { ALL_ROLES_URL } from "@/data/careers";

const SECTION = "scroll-mt-20 lg:scroll-mt-[74px] py-12";

/** The 8×8 corner arrow used on the wide link buttons. */
function ArrowOut() {
  return (
    <svg width="8" height="8" viewBox="0 0 8.85355 8.85355" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M0.353553 8.5L8.35355 0.500001M8.35355 8.49993L8.35355 0.500001L0.353622 0.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <section id="introduction" className="flex scroll-mt-24 flex-col gap-10 pb-8 lg:scroll-mt-32">
        <div className="flex flex-col gap-6 px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            <AnchorHeading as="h1">Supercomputers you can sublease</AnchorHeading>
            <Body className="text-pretty text-muted">
              <p>
                SF Compute exists to give ambitious teams serious compute without overbuying,
                underutilizing, or taking on unnecessary risk.
              </p>
              <p>
                We build data centers, the GPU clusters inside them, &amp; the cloud on top. Get VMs,
                Bare Metal, &amp; managed Slurm from the only cloud designed to let you sublease your
                reserved capacity when plans change.
              </p>
            </Body>
          </div>
          <div className="flex items-center gap-3">
            <Button href="/dashboard" variant="primary">
              Sign up
            </Button>
            <Button href="/contact">Request a demo</Button>
          </div>
        </div>
        <HeroRack />
      </section>

      <Partners />

      <section id="resell" className={SECTION}>
        <SectionLabel>Resell</SectionLabel>
        <div className="mt-8 flex flex-col gap-4 px-6 lg:px-8">
          <AnchorHeading id="resell">Sell back compute you don&apos;t use</AnchorHeading>
          <Body className="text-dark-500">
            <p>
              Reserve the compute you need and resell what you don&apos;t, so idle GPUs become
              revenue instead of sunk cost. Our scheduler allows tenants to sell back their idle
              compute to others.
            </p>
          </Body>
        </div>
        <div className="mt-8 px-6 lg:px-8">
          <ResellChart />
        </div>
      </section>

      <section id="prices" className={SECTION}>
        <SectionLabel>Pricing</SectionLabel>
        <div className="mt-8 flex flex-col gap-4 px-6 lg:px-8">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <AnchorHeading id="prices">Reserve compute at market rate</AnchorHeading>
          </div>
          <Body className="text-dark-500">
            <p>
              We support contracts ranging from one node for one hour to thousands of nodes for
              multiple years. Customers can access compute via our API, CLI, or by working directly
              with our team for larger deployments. We offer virtual machines, bare metal, and
              managed slurm.
            </p>
            <p>
              For long-term commitments, reserve a custom H100, B300, or GB300 cluster with us. View{" "}
              <InlineLink href="/dashboard">our available clusters</InlineLink> and{" "}
              <InlineLink href="/contact">reach out</InlineLink> to secure a contract.
            </p>
          </Body>
          <PriceChart />
        </div>
      </section>

      <section id="cli" className={SECTION}>
        <SectionLabel>CLI</SectionLabel>
        <div className="px-6 lg:px-8">
          <div className="mt-8">
            <AnchorHeading id="cli">A simple but powerful CLI</AnchorHeading>
            <p className="t-pl mt-4 text-muted">
              No dashboards to learn. Install <Code>sf</Code>, log in, and buy or resell GPU capacity
              right from the terminal. Plain commands you can script and automate.
            </p>
          </div>
          <CliFeature />
        </div>
      </section>

      <section id="careers" className={SECTION}>
        <SectionLabel>Careers</SectionLabel>
        <div className="px-6 lg:px-8">
          <div className="mt-8">
            <AnchorHeading id="careers">
              Help folks get supercomputers without risking it all
            </AnchorHeading>
            <p className="t-pl mt-4 text-muted">
              We&apos;re a small, dense team in San Francisco building the order book and running the
              GPU clusters behind it. If you ship fast and enjoy solving hard systems problems,
              we&apos;d love to talk.
            </p>
          </div>
        </div>
        <CareersCarousel />
        <div className="mt-10 px-6 lg:px-8">
          <CareersRoles />
          <div className="mt-8">
            <a
              href={ALL_ROLES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center gap-2.5 overflow-clip rounded-md border border-line bg-card px-[18px] py-2.5 text-dark-600 transition-colors hover:bg-light-400"
            >
              <span className="t-pl flex-1">See all roles</span>
              <ArrowOut />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
