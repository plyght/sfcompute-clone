"use client";

import { useEffect, useRef, useState } from "react";
import { easeOut, TWEEN_MS } from "@/data/resell";

/**
 * rAF tween that retargets from its *current* value whenever `target` changes,
 * matching the source site's three independent 700ms easeOutCubic tweens.
 * When `animate` is false (reduced motion) the value snaps.
 */
export function useTween(target: number, animate: boolean, initial = target) {
  const [value, setValue] = useState(initial);
  const raf = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!animate) {
      setValue(target);
      return;
    }
    let from = 0;
    let start = 0;
    setValue((current) => {
      from = current;
      return current;
    });

    const step = (now: number) => {
      if (!start) start = now;
      const t = Math.min(1, (now - start) / TWEEN_MS);
      setValue(from + (target - from) * easeOut(t));
      if (t < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => {
      if (raf.current !== undefined) cancelAnimationFrame(raf.current);
    };
  }, [target, animate]);

  return value;
}
