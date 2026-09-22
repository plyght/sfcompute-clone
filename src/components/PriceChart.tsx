"use client";

import { useEffect, useMemo, useState } from "react";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { Group } from "@visx/group";
import { ParentSize } from "@visx/responsive";
import { scaleLinear, scaleTime } from "@visx/scale";
import { Line, LinePath } from "@visx/shape";
import { localPoint } from "@visx/event";
import { bisector, extent } from "d3-array";
import { cn } from "@/lib/cn";
import { PRICES_BY_HARDWARE, type PricePoint } from "@/data/prices";

type Datum = { date: Date; avg: number; top: number; bottom: number };

/* Implicit margins in the original — no margin object, just these literals. */
const M = { top: 20, right: 8, bottom: 40, left: 40 } as const;
const WHISKER = "var(--color-light-600)";
const AVG = "var(--color-dark-300)";
const TICK = "var(--color-dark-500)";
const DOT = "rgba(128, 128, 128, 1.000)";
const DOT_FAINT = "rgba(128, 128, 128, 0.5)";
const TOOLTIP = { w: 198, h: 64 } as const;

const bisectDate = bisector<Datum, Date>((d) => d.date).left;
const shortDate = (d: Date) => `${d.toLocaleString("en-US", { month: "short" })} ${d.getDate()}`;

function Inner({
  width,
  height,
  data,
}: {
  width: number;
  height: number;
  data: Datum[];
}) {
  const [hovered, setHovered] = useState<Datum | null>(null);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [mouseY, setMouseY] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  /**
   * Leading and trailing zero-price days are back/forward-filled from the
   * nearest real reading, and drawn dashed as imputed "Market Rate" days.
   */
  const series = useMemo(() => {
    const sorted = [...data].sort((a, b) => a.date.getTime() - b.date.getTime());
    if (sorted.length === 0 || sorted.every((d) => d.avg === 0)) {
      return { allZero: true, leftIndex: 0, rightIndex: 0, leading: [], real: [], trailing: [], imputed: [] };
    }
    const leftIndex = Math.max(
      sorted.findIndex((d) => d.avg !== 0),
      0,
    );
    const rightIndex = sorted.length - 1 - [...sorted].reverse().findIndex((d) => d.avg !== 0);
    const leading = sorted.slice(0, leftIndex).map((d) => ({ ...sorted[leftIndex], date: d.date }));
    const trailing = sorted.slice(rightIndex + 1).map((d) => ({ ...sorted[rightIndex], date: d.date }));
    const real = sorted.slice(leftIndex, rightIndex + 1);
    return { allZero: false, leftIndex, rightIndex, leading, real, trailing, imputed: [...leading, ...real, ...trailing] };
  }, [data]);

  const { imputed, real, leading, trailing, leftIndex, rightIndex } = series;

  const xScale = useMemo(
    () =>
      scaleTime({
        domain: extent(imputed, (d) => d.date) as [Date, Date],
        range: [M.left, width - M.right],
      }),
    [imputed, width],
  );

  const yScale = useMemo(() => {
    const minBottom = Math.min(...imputed.map((d) => d.bottom ?? 0));
    const maxTop = Math.max(...imputed.map((d) => d.top ?? 0));
    // Note the Math.min: padding is capped at 0.125 regardless of range.
    const pad = 0.25 * Math.min(maxTop - minBottom, 0.5);
    return scaleLinear({
      domain: [minBottom - pad, maxTop + pad],
      range: [height - M.bottom, M.top],
    });
  }, [imputed, height]);

  if (series.allZero) {
    return (
      <div className="flex h-full min-h-[250px] w-full flex-col items-center justify-center">
        <p className="t-pm text-muted">No data available</p>
      </div>
    );
  }
  if (width === 0 || height === 0) return null;

  const numDateTicks = Math.max(5, Math.floor(width / 100));
  const last = real.at(-1);

  /* Tooltip placement: offset from the cursor, flipped then clamped to a 10px inset. */
  let tx = (mouseX ?? 0) + 10;
  let ty = (mouseY ?? 0) - 25;
  if (tx + TOOLTIP.w > width - M.right) tx = (mouseX ?? 0) - TOOLTIP.w - 10;
  if (ty + TOOLTIP.h > height - M.bottom) ty = (mouseY ?? 0) - TOOLTIP.h - 10;
  tx = Math.max(10, Math.min(tx, width - TOOLTIP.w - 10));
  ty = Math.max(10, Math.min(ty, height - TOOLTIP.h - 10));

  const hoveredIdx = hovered
    ? imputed.findIndex((d) => d.date.getTime() === hovered.date.getTime())
    : -1;
  const hoveredIsImputed = hoveredIdx < leftIndex || hoveredIdx > rightIndex;
  const singleValue = hovered ? hovered.bottom === hovered.top && hovered.bottom !== 0 : false;

  return (
    <svg
      width={width}
      height={height}
      aria-hidden={true}
      className={cn("opacity-0 transition-opacity", mounted && "opacity-100")}
    >
      <Group>
        <LinePath
          data={imputed}
          x={(d) => xScale(d.date)}
          y={(d) => yScale(d.top)}
          stroke={WHISKER}
          strokeWidth={2}
          strokeDasharray="4,4"
        />
        {/* One dashed vertical per day — this is the "band"; there is no area fill. */}
        {imputed.map((d) => (
          <Line
            key={d.date.toISOString()}
            from={{ x: xScale(d.date), y: yScale(d.top) }}
            to={{ x: xScale(d.date), y: yScale(d.bottom) }}
            stroke={WHISKER}
            strokeWidth={2}
            strokeDasharray="4,4"
          />
        ))}
        <LinePath
          data={imputed}
          x={(d) => xScale(d.date)}
          y={(d) => yScale(d.bottom)}
          stroke={WHISKER}
          strokeWidth={2}
          strokeDasharray="4,4"
        />

        <LinePath
          data={[...leading, ...(real.length > 0 ? [real[0]] : [])]}
          x={(d) => xScale(d.date)}
          y={(d) => yScale(d.avg)}
          stroke={AVG}
          strokeWidth={2}
          strokeDasharray="4,4"
        />
        <LinePath
          data={real}
          x={(d) => xScale(d.date)}
          y={(d) => yScale(d.avg)}
          stroke={AVG}
          strokeWidth={2}
        />
        <LinePath
          data={[...(real.length > 0 && last ? [last] : []), ...trailing]}
          x={(d) => xScale(d.date)}
          y={(d) => yScale(d.avg)}
          stroke={AVG}
          strokeWidth={2}
          strokeDasharray="4,4"
        />

        {!hovered && last && (
          <circle
            cx={xScale(last.date)}
            cy={yScale(last.avg)}
            r={4}
            fill={DOT}
            stroke="var(--color-page)"
            strokeWidth={2}
            pointerEvents="none"
          />
        )}

        <AxisBottom
          scale={xScale}
          top={height - M.bottom}
          stroke="transparent"
          tickStroke="transparent"
          numTicks={numDateTicks}
          tickFormat={(v) => shortDate(new Date(v as Date))}
          tickLabelProps={() => ({
            fontSize: 11.5,
            textAnchor: "middle" as const,
            dy: "0.5em",
            fill: TICK,
          })}
        />
        <AxisLeft
          scale={yScale}
          left={M.left}
          stroke="transparent"
          tickStroke="transparent"
          tickFormat={(v) => `$${(v as number).toFixed(2)}`}
          labelOffset={0}
          tickValues={yScale.ticks(4)}
          tickLabelProps={() => ({
            fontSize: 11.5,
            textAnchor: "end" as const,
            dx: "0",
            dy: "0.3em",
            fill: TICK,
            className: "tabular-nums",
          })}
        />

        {hovered && (
          <g>
            {/* Crosshair starts at y=40 while the plot top is y=20 — as in the original. */}
            <Line
              from={{ x: xScale(hovered.date), y: 40 }}
              to={{ x: xScale(hovered.date), y: height - M.bottom }}
              stroke={DOT_FAINT}
              strokeWidth={2}
              pointerEvents="none"
            />
            <circle cx={xScale(hovered.date)} cy={yScale(hovered.avg)} r={4} fill={DOT} stroke="var(--color-page)" strokeWidth={2} pointerEvents="none" />
            <circle cx={xScale(hovered.date)} cy={yScale(hovered.top)} r={4} fill={DOT_FAINT} stroke="var(--color-page)" strokeWidth={2} pointerEvents="none" />
            <circle cx={xScale(hovered.date)} cy={yScale(hovered.bottom)} r={4} fill={DOT_FAINT} stroke="var(--color-page)" strokeWidth={2} pointerEvents="none" />
          </g>
        )}

        {hovered && mouseX !== null && mouseY !== null && (
          <g>
            <rect
              x={tx}
              y={ty}
              width={TOOLTIP.w}
              height={TOOLTIP.h}
              fill="var(--color-page)"
              stroke={WHISKER}
              strokeWidth={1}
              rx={4}
            />
            <text x={tx + 10} y={ty + 25} fontSize={14} fill={TICK}>
              {shortDate(hovered.date)}
              {hoveredIsImputed && <tspan fill={AVG}>{" Market Rate"}</tspan>}
            </text>
            <text x={tx + 10} y={ty + 50} fontSize={14} fill="var(--color-ink)" className="tabular-nums">
              {singleValue
                ? `$${hovered.avg.toFixed(2)} avg`
                : `$${hovered.bottom.toFixed(2)} to $${hovered.top.toFixed(2)} ($${hovered.avg.toFixed(2)} avg)`}
            </text>
          </g>
        )}

        {/* Hit area last, so it sits above everything. */}
        <rect
          x={M.left}
          y={M.top}
          width={Math.max(0, width - M.left - M.right)}
          height={Math.max(0, height - M.top - M.bottom)}
          fill="transparent"
          onMouseMove={(e) => {
            const p = localPoint(e) ?? { x: 0, y: 0 };
            const date = xScale.invert(p.x);
            const i = bisectDate(imputed, date, 1);
            const d0 = imputed[i - 1];
            const d1 = imputed[i] ?? d0;
            setHovered(
              date.valueOf() - d0.date.valueOf() > d1.date.valueOf() - date.valueOf() ? d1 : d0,
            );
            setMouseX(p.x);
            setMouseY(p.y);
          }}
          onMouseLeave={() => {
            setHovered(null);
            setMouseX(null);
            setMouseY(null);
          }}
        />
      </Group>
    </svg>
  );
}

function Chart({ data }: { data: Datum[] }) {
  return (
    <ParentSize>
      {({ width, height }) => <Inner width={width} height={height} data={data} />}
    </ParentSize>
  );
}

/** Parses the stored ISO strings back into Dates at the component boundary. */
const toData = (rows: PricePoint[]): Datum[] =>
  rows.map((p) => ({ ...p, date: new Date(p.date) }));

export function PriceChart({
  pricesByHardwareType = PRICES_BY_HARDWARE,
}: {
  pricesByHardwareType?: Record<string, PricePoint[]>;
}) {
  const types = Object.keys(pricesByHardwareType);
  const [selected, setSelected] = useState(types[0] ?? "H100");

  // Sorted newest-first here; the chart re-sorts ascending internally.
  const rows = [...(pricesByHardwareType[selected] ?? [])].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const latest = rows.find((r) => r.avg !== 0)?.avg.toFixed(2) ?? "-.--";

  return (
    <>
      {types.length > 1 && (
        <div className="t-ps flex gap-3">
          {types.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setSelected(t)}
              className={cn(t === selected ? "text-ink underline" : "text-muted")}
            >
              {t}
            </button>
          ))}
        </div>
      )}
      <div className="mt-2 flex flex-col">
        <div className="t-pm flex items-center gap-2">
          <span className={cn("size-3 rounded-full bg-dark-300", latest === "-.--" && "bg-light-600")} />
          <span className="text-ink tabular-nums">${latest}</span>
          <span className="text-muted">average gpu/hr</span>
        </div>
        <div className="h-[300px] min-h-[250px] w-full">
          <Chart data={toData(rows)} />
        </div>
      </div>
    </>
  );
}
