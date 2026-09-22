import Image from "next/image";
import { FOOTER_COLUMNS } from "@/data/nav";
import { GEO } from "@/data/geo";
import { NavLink } from "./NavLink";
import { SectionLabel } from "./SectionLabel";

const LINK =
  "-my-[2px] block w-fit py-[2px] t-nav whitespace-nowrap text-dark-600 transition-colors hover:text-dark-900";

const WORDMARK =
  "h-[15px] w-[86px] bg-dark-300 [mask-image:url(/home/logo-wordmark.svg)] [mask-repeat:no-repeat] [mask-size:contain]";

function GeoReadout({ item }: { item: (typeof GEO)[keyof typeof GEO] }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      title={item.title}
      className="group -my-[3px] flex items-center gap-1 py-[3px]"
    >
      <div
        aria-hidden="true"
        className="size-4 bg-dark-300 transition-colors group-hover:bg-dark-500 [mask-repeat:no-repeat] [mask-size:contain]"
        style={{ maskImage: `url(${item.icon})`, WebkitMaskImage: `url(${item.icon})` }}
      />
      <span className="t-ps text-dark-300 transition-colors group-hover:text-dark-500">
        {item.label}
      </span>
    </a>
  );
}

export function Footer() {
  return (
    <>
      <footer className="w-full bg-light-100">
        {/* desktop */}
        <div className="mx-auto hidden h-[340px] w-full max-w-[1248px] grid-cols-[224px_minmax(0,1fr)_224px] lg:grid">
          <div className="flex flex-col justify-between self-stretch px-7 py-12">
            <div className="flex h-[28px] items-center">
              <div aria-label="San Francisco Compute" className={WORDMARK} />
            </div>
            <div className="flex items-center gap-4">
              <GeoReadout item={GEO.tide} />
              <GeoReadout item={GEO.wind} />
            </div>
          </div>

          <div className="flex gap-4">
            {FOOTER_COLUMNS.slice(0, 4).map((col, i) => {
              // The last of these four carries the copyright at its foot.
              const isLast = i === 3;
              return (
                <div
                  key={col.title}
                  className={
                    isLast
                      ? "flex w-42 flex-col justify-between border-l border-light-500 py-12"
                      : "flex h-full w-42 flex-col gap-6 border-l border-light-500 py-12"
                  }
                >
                  <div className="flex flex-col gap-6">
                    <SectionLabel>{col.title}</SectionLabel>
                    <div className="flex flex-col gap-1 pl-8">
                      {col.links.map((link) => (
                        <NavLink key={link.label} link={link} className={LINK} />
                      ))}
                    </div>
                  </div>
                  {isLast && (
                    <span className="t-ps pl-8 whitespace-nowrap text-dark-300">©2026 sfcompute</span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex min-h-[340px] flex-col justify-between self-stretch border-l border-light-500 py-12">
            <div className="flex flex-col gap-6">
              <SectionLabel>{FOOTER_COLUMNS[4].title}</SectionLabel>
              <div className="flex flex-col gap-1 pl-8">
                {FOOTER_COLUMNS[4].links.map((link) => (
                  <NavLink key={link.label} link={link} className={LINK} />
                ))}
              </div>
            </div>
            <p className="t-ps pl-8 text-dark-300">made with love in SF</p>
          </div>
        </div>

        {/* mobile */}
        <div className="px-6 pt-12 pb-2 lg:hidden">
          <div aria-label="San Francisco Compute" className={WORDMARK} />
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <p className="t-ps text-dark-600">{col.title}</p>
                <div className="flex flex-col gap-1">
                  {col.links.map((link) => (
                    <NavLink key={link.label} link={link} className={LINK} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <GeoReadout item={GEO.tide} />
              <GeoReadout item={GEO.wind} />
            </div>
            <span className="t-ps text-dark-300">made with love in SF</span>
          </div>
          <p className="t-pxxs mt-6 text-dark-300">©2026 sfcompute</p>
        </div>
      </footer>

      {/* Full-bleed closing photograph. */}
      <div className="flex h-[318px] w-full flex-col bg-light-100 p-2 lg:h-[496px]">
        <div className="relative flex flex-1 flex-col items-center justify-end overflow-clip rounded-lg">
          <Image
            src="/home/footer-visual.png"
            alt="Point Mugu, CA"
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
}
