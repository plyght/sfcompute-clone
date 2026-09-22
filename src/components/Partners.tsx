import { PARTNERS } from "@/data/partners";

export function Partners() {
  return (
    <section id="partners" className="@container scroll-mt-24 py-12">
      <div className="flex flex-wrap content-start items-start justify-center gap-x-9 gap-y-[26px] bg-card px-5 py-[26px] @min-[760px]:flex-nowrap @min-[760px]:items-center @min-[760px]:justify-between @min-[760px]:gap-0 @min-[760px]:px-16 @min-[760px]:py-6">
        {PARTNERS.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={p.name}
            className="-m-2 p-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt="" width={p.width} height={p.height} style={p.style} />
          </a>
        ))}
      </div>
    </section>
  );
}
