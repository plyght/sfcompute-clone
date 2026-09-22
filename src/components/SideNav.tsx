"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV, ACCOUNT_NAV } from "@/data/nav";
import { NavLink } from "./NavLink";

const ITEM = "t-nav inline-block transition-colors";

export function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="relative z-10 hidden shrink-0 lg:block lg:w-[224px]">
      <div className="sticky top-0 h-svh">
        <nav className="flex h-full flex-col justify-between px-7 pt-32 pb-11">
          <div className="relative">
            {/* Page-coloured scrim that fades the column out as content scrolls under it. */}
            <div
              aria-hidden="true"
              className="-top-36 -right-7 -bottom-[56px] -left-[100vw] -z-10 pointer-events-none absolute bg-page"
              style={{
                maskImage: "linear-gradient(to bottom, #000, #000 calc(100% - 40px), transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, #000, #000 calc(100% - 40px), transparent)",
              }}
            />
            <div className="flex flex-col gap-5">
              <div className="relative inline-block">
                <Link className="inline-block" href="/">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/home/logo-wordmark.svg"
                    alt="SF Compute"
                    width={92}
                    height={16}
                    className="h-[17px] w-auto"
                  />
                </Link>
              </div>
              <div className="flex flex-col gap-7">
                <ul className="flex flex-col gap-0.5">
                  {PRIMARY_NAV.map((link) => {
                    const active = !link.external && link.href === pathname;
                    return (
                      <li key={link.href}>
                        <NavLink
                          link={link}
                          current={active}
                          className={`${ITEM} ${active ? "text-dark-900" : "text-secondary hover:text-dark-900"}`}
                        />
                      </li>
                    );
                  })}
                </ul>
                <div className="flex flex-col items-start gap-1.5">
                  {ACCOUNT_NAV.map((link) => (
                    <NavLink
                      key={link.href}
                      link={link}
                      className="t-nav text-secondary transition-colors hover:text-dark-900"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col gap-2">
            <div
              aria-hidden="true"
              className="-top-8 -right-7 -bottom-11 -left-[100vw] -z-10 pointer-events-none absolute bg-page"
              style={{
                maskImage: "linear-gradient(to top, #000, #000 calc(100% - 40px), transparent)",
                WebkitMaskImage: "linear-gradient(to top, #000, #000 calc(100% - 40px), transparent)",
              }}
            />
            <div className="flex flex-wrap items-center gap-y-1.5">
              <Link aria-label="View Markdown" className="group relative inline-flex" href="/markdown">
                <span className="flex items-center justify-center rounded-md p-1 transition-colors hover:bg-light-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/home/md-toggle.svg" alt="" width={24} height={24} className="size-6" />
                </span>
                <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 rounded bg-card px-1 t-ps whitespace-nowrap text-dark-300 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  View Markdown
                </span>
              </Link>
            </div>
            <a
              href="https://status.sfcompute.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-1.5 text-dark-300 transition-colors hover:text-dark-900"
            >
              <span className="size-[5px] shrink-0 rounded-full bg-blue" />
              <span className="t-ps">All systems normal</span>
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
}
