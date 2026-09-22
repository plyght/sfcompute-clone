"use client";

import { useEffect, useRef, type RefObject } from "react";

/** Callback gets *elapsed seconds*, not a timestamp — the source site's `t`. */
export type RafTick = (elapsedSeconds: number) => void;

/**
 * Writes an attribute only when it actually changed.
 *
 * The hero animation touches ~700 attributes a frame; skipping no-op writes
 * keeps the browser from invalidating geometry it does not need to.
 */
export function setAttr(el: Element, name: string, value: string) {
  if (el.getAttribute(name) !== value) el.setAttribute(name, value);
}

/** Read once per mount, like the source — it never re-subscribes to changes. */
export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * The shared rAF loop behind both hero animations.
 *
 * Elapsed time only advances while the loop is actually running, so a paused
 * animation resumes where it stopped instead of jumping forward — that is why
 * the clock is accumulated by hand rather than read off `performance.now()`.
 *
 * Runs only while `target` is within 200px of the viewport and the tab is
 * visible. Returns its own teardown.
 */
export function startRafDriver(target: Element, tick: RafTick): () => void {
  let frame: number | undefined;
  let last: number | undefined;
  let inView = true;
  let elapsed = 0;

  const canRun = () => inView && document.visibilityState === "visible";

  const stop = () => {
    if (frame !== undefined) {
      cancelAnimationFrame(frame);
      frame = undefined;
    }
    // Forget the last timestamp so the gap while paused is not integrated.
    last = undefined;
  };

  const start = () => {
    if (frame === undefined && canRun()) frame = requestAnimationFrame(step);
  };

  const step = (now: number) => {
    frame = undefined;
    if (!canRun()) {
      last = undefined;
      return;
    }
    if (last !== undefined) elapsed += (now - last) / 1e3;
    last = now;
    tick(elapsed);
    start();
  };

  const observer =
    typeof IntersectionObserver === "undefined"
      ? undefined
      : new IntersectionObserver(
          (entries) => {
            inView = entries.at(-1)?.isIntersecting ?? false;
            if (inView) start();
            else stop();
          },
          { rootMargin: "200px" },
        );
  observer?.observe(target);

  const onVisibilityChange = () => {
    if (document.visibilityState === "visible") start();
    else stop();
  };
  document.addEventListener("visibilitychange", onVisibilityChange);

  start();

  return () => {
    stop();
    observer?.disconnect();
    document.removeEventListener("visibilitychange", onVisibilityChange);
  };
}

/**
 * Hook form used by the hero layers. `ref` points at a `<g>`; the driver
 * observes the whole `<svg>` around it, so every layer starts and stops
 * together no matter how small its own bounding box is.
 *
 * Under reduced motion the loop never starts — the callback is invoked once at
 * t = 0 so the layer still paints a real (frozen) frame instead of nothing.
 */
export function useRafDriver(
  ref: RefObject<SVGGraphicsElement | null>,
  tick: RafTick,
) {
  // The callback closes over refs and is recreated every render; keeping the
  // latest one here means a re-render never restarts the clock.
  const latest = useRef(tick);
  latest.current = tick;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const run: RafTick = (t) => latest.current(t);
    if (prefersReducedMotion()) {
      run(0);
      return;
    }
    return startRafDriver(node.ownerSVGElement ?? node, run);
  }, [ref]);
}
