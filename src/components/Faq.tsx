"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import s from "./Faq.module.css";
import { FAQ, FILL_FOLLOW_MS } from "@/data/faq";
import { AnchorHeading } from "./AnchorHeading";
import { InlineLink } from "./Prose";

export function Faq() {
  const listRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const raf = useRef(0);

  const [open, setOpen] = useState<number[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);

  /** Park the fill over the hovered item, inset 5px on every side. */
  const place = useCallback(() => {
    const fill = fillRef.current;
    const item = hovered === null ? null : itemRefs.current[hovered];
    if (!fill || !item) return;
    fill.style.transform = `translateY(${item.offsetTop + 5}px)`;
    fill.style.height = `${Math.max(0, item.offsetHeight - 10)}px`;
  }, [hovered]);

  /**
   * An expanding panel changes its item's height over 0.32s, so the fill has to
   * keep re-measuring for the duration rather than being set once.
   */
  const follow = useCallback(
    (duration = FILL_FOLLOW_MS) => {
      cancelAnimationFrame(raf.current);
      const start = performance.now();
      const step = (now: number) => {
        place();
        if (now - start < duration) raf.current = requestAnimationFrame(step);
      };
      raf.current = requestAnimationFrame(step);
    },
    [place],
  );

  const toggle = useCallback((i: number) => {
    setOpen((prev) => (prev.includes(i) ? prev.filter((n) => n !== i) : [...prev, i]));
    setHovered(i);
  }, []);

  useLayoutEffect(() => {
    if (open.length !== 0 || hovered !== null) place();
  }, [hovered, open.length, place]);

  useEffect(() => {
    if (open.length !== 0 || hovered !== null) follow();
  }, [hovered, open.length, follow]);

  useEffect(() => {
    const onResize = () => {
      place();
      follow(120);
    };
    window.addEventListener("resize", onResize);
    document.fonts?.ready.then(onResize).catch(() => {});
    return () => window.removeEventListener("resize", onResize);
  }, [place, follow]);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  return (
    <section id="faq" className="scroll-mt-24 pt-12 pb-12">
      <div className="px-6 lg:px-8">
        <AnchorHeading id="faq">Frequently asked questions</AnchorHeading>
        <p className="t-pl mt-4 mb-10 text-muted">
          Everything you need to know about running on SF Compute. Still have questions?{" "}
          <InlineLink href="/contact">Reach out</InlineLink> — we&apos;re quick to respond.
        </p>

        <div
          ref={listRef}
          className={s.list}
          data-active={hovered === null ? "false" : "true"}
          onPointerLeave={() => setHovered(null)}
        >
          <div className={s.fill} ref={fillRef} />
          {FAQ.map((entry, i) => {
            const isOpen = open.includes(i);
            return (
              <div
                key={entry.q}
                className={s.item}
                data-open={isOpen ? "true" : "false"}
                onFocus={() => setHovered(i)}
                onPointerEnter={() => setHovered(i)}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
              >
                <button
                  type="button"
                  aria-controls={`faq-panel-${i}`}
                  aria-expanded={isOpen}
                  className={s.head}
                  id={`faq-trigger-${i}`}
                  onClick={() => toggle(i)}
                >
                  <span className={s.question}>{entry.q}</span>
                  <svg
                    className={s.chev}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden={true}
                  >
                    <title>Toggle answer</title>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {/* grid-template-rows 0fr -> 1fr is what animates the height. */}
                <section
                  aria-labelledby={`faq-trigger-${i}`}
                  className={s.panel}
                  id={`faq-panel-${i}`}
                >
                  <div className={s.panelInner}>
                    <div className={s.answer}>{entry.a}</div>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
