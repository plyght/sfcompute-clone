"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { useTween } from "@/lib/useTween";
import {
  BASE_PRICE,
  BLOCKS,
  EASE,
  FADE,
  RESERVED_COST,
  RESERVED_PRICE,
  TICKS,
  TIERS,
  USAGE,
  USD,
  USED_GPU_HOURS,
  revealDelay,
  type TierKey,
} from "@/data/resell";

type Geometry = ReturnType<typeof buildGeometry>;

function buildGeometry(COL: number) {
  const X1 = 22 + 12 * COL;
  const x = (w: number) => 22 + w * COL;
  const y = (r: number) => 6 + r * 24;
  const Y1 = 246;

  let usagePath = `M ${x(0)} 246`;
  for (let w = 0; w < 12; w++) {
    usagePath += ` L ${x(w)} ${y(USAGE[w])} L ${x(w + 1)} ${y(USAGE[w])}`;
  }
  usagePath += ` L ${x(12)} 246 Z`;

  const blockPath = (b: (typeof BLOCKS)[number]) => {
    const last = b.segs[b.segs.length - 1];
    let d = `M ${x(b.segs[0].w0)} ${y(b.r0)} L ${x(last.w1)} ${y(b.r0)}`;
    for (let i = b.segs.length - 1; i >= 0; i--) {
      const s = b.segs[i];
      d += ` L ${x(s.w1)} ${y(s.r1)} L ${x(s.w0)} ${y(s.r1)}`;
    }
    return `${d} Z`;
  };

  return { x, y, X1, Y1, VIEW_W: X1 + 22, VIEW_H: 272, blockPath, usagePath };
}

export function ResellChart() {
  const rootRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const textRefs = useRef<Record<string, SVGTextElement | null>>({});
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const [width, setWidth] = useState<number | null>(null);
  const [inView, setInView] = useState(false);
  const [animate, setAnimate] = useState(true);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  const [hover, setHover] = useState<string | null>(null);
  const [revealed, setRevealed] = useState<Set<TierKey>>(new Set());
  const [muted, setMuted] = useState<Set<TierKey>>(new Set());
  const [pillW, setPillW] = useState<Record<string, number>>({});

  const isActive = useCallback(
    (k: TierKey) => revealed.has(k) && !muted.has(k),
    [revealed, muted],
  );

  /* ---- reveal lifecycle ------------------------------------------------ */

  useEffect(() => {
    const reduced =
      typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      setAnimate(false);
      setInView(true);
      return;
    }
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (!animate) {
      setRevealed(new Set(TIERS.map((t) => t.key)));
      return;
    }
    const timers = TIERS.map((t, i) =>
      setTimeout(() => setRevealed((s) => new Set(s).add(t.key)), revealDelay(i)),
    );
    return () => timers.forEach(clearTimeout);
  }, [inView, animate]);

  /* ---- measurement ----------------------------------------------------- */

  useLayoutEffect(() => {
    const el = svgRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => setWidth(Math.round(el.getBoundingClientRect().width)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (typeof matchMedia === "undefined") return;
    const mq = matchMedia("(max-width: 999px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  /* ---- derived values -------------------------------------------------- */

  const totalRevenue = TIERS.reduce((acc, t) => (isActive(t.key) ? acc + t.rev : acc), 0);
  const targetPrice = (RESERVED_COST - totalRevenue) / USED_GPU_HOURS;

  const price = useTween(targetPrice, animate, BASE_PRICE);
  const revenue = useTween(totalRevenue, animate, 0);
  const savingsPct = Math.round((1 - price / 3) * 100);

  let FONT = isMobile ? 11.5 : 13;
  let PAD = isMobile ? 6 : 8;
  let COL = isMobile ? 24 : 60;
  if (isMobile && width !== null) {
    if (width < 360) FONT = 10;
    if (width < 310) PAD = 2;
    if (width > 44) COL = (width - 44) / 12;
  }
  const PILL_H_BASE = isMobile ? FONT + 2.5 : 16;
  const LINE_H = FONT + 1.5;
  const twoLine = Boolean(isMobile && width !== null && width < 380);

  const geo: Geometry = useMemo(() => buildGeometry(COL), [COL]);

  /* ---- pill width measurement ------------------------------------------ */

  useLayoutEffect(() => {
    const measure = () =>
      setPillW((prev) => {
        const next = { ...prev };
        let changed = false;
        for (const [key, node] of Object.entries(textRefs.current)) {
          if (!node) continue;
          const w =
            (twoLine ? node.getBBox().width : node.getComputedTextLength()) + 2 * PAD;
          if (next[key] !== w) {
            next[key] = w;
            changed = true;
          }
        }
        return changed ? next : prev;
      });
    measure();
    document.fonts?.ready.then(measure).catch(() => {});
  }, [FONT, twoLine, PAD]);

  /* ---- interaction ----------------------------------------------------- */

  const hoverEnter = (k: string) => {
    clearTimeout(hoverTimer.current);
    setHover(k);
  };
  const hoverLeave = () => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setHover(null), 80);
  };
  const toggle = (k: TierKey) =>
    setMuted((s) => {
      const n = new Set(s);
      if (n.has(k)) n.delete(k);
      else n.add(k);
      return n;
    });

  const ready = width !== null && isMobile !== null;

  /* ---- legend rows ------------------------------------------------------ */

  type Row = {
    label: string;
    value?: string;
    tier: string;
    indent?: boolean;
    toggle?: boolean;
    topGap?: boolean;
  };
  const rows: Row[] = [
    { label: "Reserved (3 mo)", value: USD.format(RESERVED_COST), tier: "used" },
    { label: "Resale revenue", value: `+${USD.format(Math.round(revenue))}`, tier: "resale", topGap: true },
    ...TIERS.map((t, i) => ({ label: t.label, tier: t.key, indent: true, toggle: true, topGap: i === 0 })),
  ];

  return (
    <div ref={rootRef} className="relative">
      <div className="flex flex-wrap items-start gap-x-8 gap-y-3">
        <div>
          <div className="text-[13px] text-muted">Realized price</div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-xl font-medium text-ink tabular-nums leading-none">
              ${price.toFixed(2)}
            </span>
            <span className="t-pm text-muted opacity-80">/gpu/hr</span>
            <span
              className={cn(
                "ml-1 inline-flex items-center gap-0.5 rounded-full px-1.5 text-[13px] font-medium tabular-nums",
                savingsPct >= 0
                  ? "bg-[var(--tag-green-bg)] text-[var(--tag-green-text)] shadow-[inset_0_0_0_1px_var(--tag-green-border)]"
                  : "bg-[var(--tag-red-bg)] text-[var(--tag-red-text)] shadow-[inset_0_0_0_1px_var(--tag-red-border)]",
              )}
            >
              <svg
                viewBox="0 0 15 15"
                fill="currentColor"
                aria-hidden="true"
                className={cn("size-[10px]", savingsPct >= 0 && "rotate-180")}
              >
                <path d="M7.5 3.75 12 11.25H3z" />
              </svg>
              <span className="inline-block w-6 text-center tabular-nums">
                {Math.abs(savingsPct)}%
              </span>
            </span>
          </div>
        </div>
        <div>
          <div className="text-[13px] text-muted">Reserved price</div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span
              className={cn(
                "text-xl font-medium tabular-nums leading-none opacity-80 transition-colors duration-500",
                revealed.size > 0 ? "text-muted" : "text-ink",
              )}
            >
              ${RESERVED_PRICE}
            </span>
            <span className="t-pm text-muted opacity-80">/gpu/hr</span>
          </div>
        </div>
      </div>

      <div className="relative mt-4">
        <div className="relative -mx-6 rounded-md p-4 lg:-mx-4">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${geo.VIEW_W} ${geo.VIEW_H}`}
            className="w-full select-none"
            style={{
              visibility: ready ? undefined : "hidden",
              height: isMobile ? geo.VIEW_H : undefined,
            }}
            role="img"
            aria-label="Reselling idle GPU hours each week lowers the realized price below the reserved rate"
          >
            {/* used / reserved step area */}
            <g onMouseEnter={() => hoverEnter("used")} onMouseLeave={hoverLeave}>
              <path
                d={geo.usagePath}
                fill={hover === "used" ? "var(--color-light-500)" : "var(--color-light-400)"}
                style={{ transition: `fill 0.2s ${EASE}` }}
              />
            </g>

            {/* resold fills */}
            {BLOCKS.map((b) => (
              <path
                key={`fill-${b.segs[0].w0}-${b.r0}`}
                d={geo.blockPath(b)}
                fill={hover === b.tier || hover === "resale" ? "#85AEF0" : "#B3CEF6"}
                style={{
                  mixBlendMode: "multiply",
                  opacity: isActive(b.tier) ? 1 : 0,
                  pointerEvents: revealed.has(b.tier) ? "auto" : "none",
                  transition: animate
                    ? `${FADE}, fill 0.2s ${EASE}`
                    : `fill 0.2s ${EASE}`,
                }}
                onMouseEnter={() => hoverEnter(b.tier)}
                onMouseLeave={hoverLeave}
                onClick={() => toggle(b.tier)}
              />
            ))}

            {/* gridlines */}
            {TICKS.map(([, w]) => (
              <line
                key={`v${w}`}
                x1={geo.x(w)}
                x2={geo.x(w)}
                y1={6}
                y2={geo.Y1}
                stroke="#000"
                strokeOpacity={hover === "used" ? 0.12 : 0.07}
                strokeWidth={1}
                style={{ pointerEvents: "none", transition: "stroke-opacity 0.2s" }}
              />
            ))}
            {Array.from({ length: 11 }, (_, r) => (
              <line
                key={`h${r}`}
                x1={22}
                x2={geo.X1}
                y1={geo.y(r)}
                y2={geo.y(r)}
                stroke="#000"
                strokeOpacity={hover === "used" ? 0.12 : 0.07}
                strokeWidth={1}
                style={{ pointerEvents: "none", transition: "stroke-opacity 0.2s" }}
              />
            ))}

            {/* block outlines + label pills */}
            {BLOCKS.map((b) => {
              const key = `${b.segs[0].w0}-${b.r0}`;
              const last = b.segs[b.segs.length - 1];
              const cx = (geo.x(b.segs[0].w0) + geo.x(last.w1)) / 2;
              const cy = (geo.y(b.r0) + geo.y(b.segs[0].r1)) / 2;
              const lines =
                twoLine && b.label.startsWith("Resold at ")
                  ? ["Resold at", b.label.slice(10)]
                  : [b.label];
              const w =
                pillW[key] ??
                6.2 * Math.max(...lines.map((s) => s.length)) * (FONT / 13) + 2 * PAD;
              const h = PILL_H_BASE + (lines.length - 1) * LINE_H;

              return (
                <g
                  key={`label-${key}`}
                  style={{
                    opacity: isActive(b.tier) ? 1 : 0,
                    pointerEvents: "none",
                    transition: animate ? FADE : "none",
                  }}
                >
                  <path d={geo.blockPath(b)} fill="none" stroke="#93AEF7" strokeWidth={1} />
                  <rect
                    x={cx - w / 2}
                    y={cy - h / 2}
                    width={w}
                    height={h}
                    rx={PILL_H_BASE / 2}
                    fill="#F0F4FF"
                  />
                  <text
                    x={cx}
                    y={cy}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={FONT}
                    fontWeight={400}
                    fill="#2F4FA0"
                    ref={(el) => {
                      textRefs.current[key] = el;
                    }}
                  >
                    {lines.length === 1
                      ? lines[0]
                      : lines.map((line, i) => (
                          <tspan key={line} x={cx} y={cy + (i - 0.5) * LINE_H}>
                            {line}
                          </tspan>
                        ))}
                  </text>
                </g>
              );
            })}

            {/* hover outlines */}
            {BLOCKS.map((b) => (
              <path
                key={`hover-${b.segs[0].w0}-${b.r0}`}
                d={geo.blockPath(b)}
                fill="none"
                stroke="#6A87D0"
                strokeWidth={1}
                style={{
                  opacity:
                    isActive(b.tier) && (hover === b.tier || hover === "resale") ? 1 : 0,
                  pointerEvents: "none",
                  transition: "opacity 0.2s",
                }}
              />
            ))}

            <text
              transform="rotate(-90)"
              x={-(6 + geo.Y1) / 2}
              y={9}
              textAnchor="middle"
              fontSize={11.5}
              fill={hover === "used" ? "var(--color-dark-600)" : "var(--color-dark-500)"}
              className="select-text"
            >
              GPU-hours
            </text>
            {TICKS.map(([label, w]) =>
              label ? (
                <text
                  key={`tick${w}`}
                  x={geo.x(w)}
                  y={geo.Y1 + 22}
                  textAnchor="middle"
                  fontSize={11.5}
                  fill={hover === "used" ? "var(--color-dark-600)" : "var(--color-dark-500)"}
                  className="select-text"
                >
                  {label}
                </text>
              ) : null,
            )}
          </svg>
        </div>

        {/* legend */}
        <div className="mt-8 hidden w-[224px] select-none grid-cols-[1fr_72px] gap-x-6 gap-y-1 text-[13px] leading-[1.5] tabular-nums lg:mt-0 lg:grid lg:absolute lg:top-6 lg:left-full lg:pl-[60px]">
          {rows.map((row) => {
            const tierKey = row.tier as TierKey;
            const isToggle = row.toggle === true;
            const shown = isToggle && revealed.has(tierKey);
            const hidden = isToggle && !shown;
            const off = isToggle && shown && muted.has(tierKey);
            const isHot = !hidden && hover === row.tier;

            const style: React.CSSProperties = {
              opacity: hidden ? 0 : 1,
              transition: animate ? `opacity 0.5s ${EASE}, color 0.15s ${EASE}` : "none",
              pointerEvents: hidden ? "none" : undefined,
            };

            const tierDef = TIERS.find((t) => t.key === tierKey);
            const rowValue = isToggle ? (isActive(tierKey) ? (tierDef?.rev ?? 0) : 0) : 0;
            const inFlight = isToggle
              ? shown && !off && Math.round(rowValue) < (tierDef?.rev ?? 0)
              : row.tier === "resale" && Math.round(revenue) !== totalRevenue;
            const valueStyle = inFlight ? { ...style, opacity: 0.5 } : style;

            const value = isToggle
              ? off
                ? "-"
                : USD.format(Math.round(rowValue))
              : row.value;

            const handlers = {
              onMouseEnter: () => hoverEnter(row.tier),
              onMouseLeave: hoverLeave,
              ...(isToggle ? { onClick: () => toggle(tierKey) } : {}),
            };

            return (
              <div key={row.label} className="contents">
                <div
                  {...handlers}
                  style={style}
                  className={cn(
                    "whitespace-nowrap text-tertiary",
                    row.indent && "pl-6",
                    row.topGap && "mt-0.5",
                    isHot && "text-ink",
                    isToggle && "cursor-pointer",
                  )}
                >
                  {row.label}
                </div>
                <div
                  {...handlers}
                  style={valueStyle}
                  className={cn(
                    "whitespace-nowrap text-right tabular-nums",
                    row.topGap && "mt-0.5",
                    off ? "text-dark-300" : "text-tertiary",
                    isHot && !off && "text-ink",
                    isToggle && "cursor-pointer",
                  )}
                >
                  {value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
