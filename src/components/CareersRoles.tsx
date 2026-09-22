"use client";

import { useEffect, useRef } from "react";
import s from "./CareersRoles.module.css";
import { JOBS, type Job } from "@/data/careers";

/**
 * Open-roles list with a highlight pill that slides between rows.
 *
 * The first hover deliberately suppresses the slide (the pill appears in place
 * and fades in); subsequent hovers slide with the stylesheet's
 * `transform .32s cubic-bezier(.32,.72,0,1)`.
 */
export function CareersRoles({ jobs = JOBS }: { jobs?: Job[] }) {
  const listRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  // Department is only worth a column when the roles span more than one.
  const showCat = jobs.length > 0 && jobs.some((j) => j.department !== jobs[0]?.department);

  useEffect(() => {
    const list = listRef.current;
    const fill = fillRef.current;
    if (!list || !fill) return;

    const rows = [...list.querySelectorAll<HTMLElement>(`.${s.row}`)];
    // +5 centers the 34px pill inside the 44px row.
    const move = (row: HTMLElement) => {
      fill.style.transform = `translateY(${row.offsetTop + 5}px)`;
    };

    const cleanups: (() => void)[] = [];
    rows.forEach((row) => {
      const onEnter = () => {
        if (list.dataset.active !== "true") {
          const prev = fill.style.transition;
          fill.style.transition = "opacity 0.18s ease";
          move(row);
          void fill.offsetHeight; // force reflow so the jump isn't animated
          fill.style.transition = prev;
          list.dataset.active = "true";
        } else {
          move(row);
        }
      };
      row.addEventListener("pointerenter", onEnter);
      cleanups.push(() => row.removeEventListener("pointerenter", onEnter));
    });

    const onLeave = () => {
      list.dataset.active = "false";
    };
    list.addEventListener("pointerleave", onLeave);

    return () => {
      for (const c of cleanups) c();
      list.removeEventListener("pointerleave", onLeave);
    };
  }, [jobs]);

  return (
    <>
      <p className="t-pm mb-3 text-dark-200">Open roles</p>
      <div className={s.list} ref={listRef}>
        <div className={s.fill} ref={fillRef} />
        {jobs.length === 0 ? (
          <div className={s.row}>
            <span className={s.title}>No openings right now — check back soon.</span>
          </div>
        ) : (
          jobs.map((job) => (
            <a
              key={job.id}
              className={s.row}
              href={job.jobUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={s.title}>{job.title}</span>
              {showCat && <span className={s.cat}>{job.department}</span>}
            </a>
          ))
        )}
      </div>
    </>
  );
}
