"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./MobileMenu.module.css";
import { ACCOUNT_NAV, PRIMARY_NAV } from "@/data/nav";
import { NavLink } from "./NavLink";

/** Matches the source site's --duration-medium, so the sheet finishes sliding out. */
const EXIT_MS = 250;

export function MobileHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const exitTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const close = useCallback(() => {
    setClosing(true);
    clearTimeout(exitTimer.current);
    exitTimer.current = setTimeout(() => {
      setOpen(false);
      setClosing(false);
      triggerRef.current?.focus();
    }, EXIT_MS);
  }, []);

  // Route changes dismiss the sheet.
  useEffect(() => {
    if (open) close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => () => clearTimeout(exitTimer.current), []);

  // Scroll lock + focus trap while open.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = sheetRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    sheetRef.current?.querySelector<HTMLElement>("a[href], button")?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  const state = closing ? "closed" : "open";

  return (
    <div className="contents lg:hidden">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-page/90 px-6 py-4 backdrop-blur-sm">
        <Link aria-label="SF Compute home" className="-my-3.5 inline-flex items-center py-3.5" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/home/logo-wordmark.svg" alt="SF Compute" className="h-4 w-auto" />
        </Link>
        <button
          ref={triggerRef}
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-haspopup="dialog"
          className="-m-2.5 flex size-11 items-center justify-center text-ink"
          onClick={() => (open ? close() : setOpen(true))}
        >
          <svg width="22" height="12" viewBox="0 0 22 12" fill="none" aria-hidden="true">
            <title>Open menu</title>
            <path d="M0 1h22M0 11h22" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </header>

      {open && (
        <>
          <div className={s.scrim} data-state={state} onClick={close} aria-hidden="true" />
          <div
            ref={sheetRef}
            className={s.sheet}
            data-state={state}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <nav className="flex flex-col gap-7 px-6 pt-8 pb-10">
              <ul className="flex flex-col gap-1">
                {PRIMARY_NAV.map((link) => {
                  const active = !link.external && link.href === pathname;
                  return (
                    <li key={link.href}>
                      <NavLink
                        link={link}
                        current={active}
                        className={`t-pl inline-block py-1 transition-colors ${
                          active ? "text-dark-900" : "text-secondary hover:text-dark-900"
                        }`}
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
                    className="t-pl py-1 text-secondary transition-colors hover:text-dark-900"
                  />
                ))}
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
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
