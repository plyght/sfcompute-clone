"use client";

import { useRef } from "react";
import Image from "next/image";
import s from "./Careers.module.css";
import { PHOTOS } from "@/data/careers";
import { cn } from "@/lib/cn";

/**
 * Drag-to-scroll photo strip. 1px of pointer movement == 1px of scroll; there
 * is deliberately no momentum or inertia — touch flings come from the browser's
 * own `overflow: auto` / `touch-action: pan-x` behavior.
 */
export function CareersCarousel({ className }: { className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const drag = useRef({ down: false, startX: 0, startScroll: 0 });

  const onPointerDown = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    drag.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft };
    el.classList.add(s.dragging);
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (el && drag.current.down) {
      el.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX);
    }
  };

  const end = (e: React.PointerEvent) => {
    const el = ref.current;
    drag.current.down = false;
    el?.classList.remove(s.dragging);
    el?.releasePointerCapture?.(e.pointerId);
  };

  return (
    <section
      ref={ref}
      tabIndex={0}
      aria-label="Team and office photos"
      className={cn(s.scroller, "mt-8", className)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={end}
      onPointerCancel={end}
    >
      <div className={s.track}>
        {PHOTOS.map((photo) => (
          <div key={photo.src} className={s.card}>
            <Image
              className={s.photo}
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              draggable={false}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
