import type { ReactNode, Ref } from "react";

/**
 * The homepage hero: a technical line drawing of a rack, copied verbatim from
 * the source site's inline SVG so it stays hand-editable.
 *
 * The groups are addressable by `data-part` ("server", "power", "dials",
 * "server-rows", "server-rails", "server-hatch", "server-cap"), which is how
 * HeroRack animates them — see HeroRack.tsx.
 *
 * Two seams are left for the client layers, matching the source: the dial plot
 * is passed in (the server ships an empty group) and the power group hands out
 * a ref so its packets can be driven.
 */
export function HeroArtwork({ dials, powerRef }: { dials?: ReactNode; powerRef?: Ref<SVGGElement> }) {
  return (
    <svg width={706} height={298} viewBox="0 0 706 298" fill="none" strokeWidth="0.6" overflow="visible" aria-hidden="true" className="block h-auto w-full">
      <defs>
        <pattern id="hm-hatch" patternUnits="userSpaceOnUse" width={3.5} height={8}>
          <path d="M1.75 0V8" stroke="var(--color-dark-800)" strokeWidth="0.75"></path>
        </pattern>
        <pattern id="hm-hatch-wide" patternUnits="userSpaceOnUse" width={8.75} height={8}>
          <path d="M4.4 0V8" stroke="var(--color-dark-800)" strokeWidth="1.25"></path>
        </pattern>
        <linearGradient id="hm-cap-fade" x1="144.9" y1="19.31" x2="144.9" y2="2.68" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0"></stop>
          <stop offset="1" stopColor="white"></stop>
        </linearGradient>
        <path id="hm-tray" d="M273.72 0C273.75 -0.39 274.24 -1.34 275.93 -2.04C277.61 -2.74 285.59 -2.83 287.36 -2.79A2 0.84 0 0 0 287.36 -4.47H2.5A2 0.84 0 0 0 2.5 -2.79C4.28 -2.83 12.25 -2.74 13.94 -2.04C15.62 -1.34 16.11 -0.39 16.14 0H273.72Z" fill="white" stroke="var(--color-dark-800)"></path>
      </defs>
      <g data-part="server" transform="translate(4 0)">
        <g data-part="power" data-ink="line" ref={powerRef}>
          <linearGradient id="hd-cable-fade" gradientUnits="userSpaceOnUse" x1="-1000" y1="0" x2="-18" y2="0">
            <stop offset="0" stopColor="var(--color-dark-100)" stopOpacity="0"></stop>
            <stop offset="1" stopColor="var(--color-dark-100)"></stop>
          </linearGradient>
          <path data-part="cable" d="M-18.0 291.0C-48.0 222.7 -500.0 193.8 -1000.0 193.8" fill="none" stroke="url(#hd-cable-fade)" strokeWidth="1"></path>
          <path data-part="cable" d="M-18.0 291.0C-48.0 240.5 -500.0 223.5 -1000.0 223.5" fill="none" stroke="url(#hd-cable-fade)" strokeWidth="1"></path>
          <path data-part="cable" d="M-18.0 291.0C-48.0 258.4 -500.0 253.3 -1000.0 253.3" fill="none" stroke="url(#hd-cable-fade)" strokeWidth="1"></path>
          <path data-part="cable" d="M-18.0 291.0C-48.0 276.2 -500.0 283.0 -1000.0 283.0" fill="none" stroke="url(#hd-cable-fade)" strokeWidth="1"></path>
          <path data-part="plug-lead" d="M-18.0 291.0C-14.0 289.8 0.6 289.8 2.6 283.0L11.5 283.0" fill="none" stroke="var(--color-dark-100)" strokeWidth="1"></path>
          <circle data-part="packet" r="1.3" fill="#C6C6C6" opacity="0"></circle>
          <circle data-part="packet" r="1.3" fill="#4C78F5" opacity="0"></circle>
          <circle data-part="packet" r="1.3" fill="#4C78F5" opacity="0"></circle>
          <circle data-part="packet" r="1.3" fill="#4C78F5" opacity="0"></circle>
          <circle data-part="packet" r="1.3" fill="#4C78F5" opacity="0"></circle>
          <circle data-part="packet" r="1.3" fill="#4C78F5" opacity="0"></circle>
          <circle data-part="packet" r="1.3" fill="#4C78F5" opacity="0"></circle>
          <circle data-part="packet" r="1.3" fill="#C6C6C6" opacity="0"></circle>
          <circle data-part="packet" r="1.3" fill="#C6C6C6" opacity="0"></circle>
          <circle data-part="packet" r="1.3" fill="#4C78F5" opacity="0"></circle>
          <circle data-part="packet" r="1.3" fill="#4C78F5" opacity="0"></circle>
          <circle data-part="packet" r="1.3" fill="#C6C6C6" opacity="0"></circle>
          <circle data-part="packet" r="1.3" fill="#C6C6C6" opacity="0"></circle>
          <circle data-part="packet" r="1.3" fill="#C6C6C6" opacity="0"></circle>
          <circle data-part="packet" r="1.3" fill="#C6C6C6" opacity="0"></circle>
          <circle data-part="packet" r="1.3" fill="#4C78F5" opacity="0"></circle>
          <line x1="-27" y1="296.2" x2="-9" y2="296.2" stroke="var(--color-dark-200)" strokeWidth="1.5"></line>
          <line x1="-18" y1="295.7" x2="-18" y2="291" stroke="var(--color-dark-200)" strokeWidth="1.5"></line>
          <circle cx="-18" cy="291" r="5.2" fill="white" stroke="var(--color-dark-200)" strokeWidth="1.2"></circle>
          <path d="M-20.6 291Q-19.3 288.6 -18 291T-15.4 291" fill="none" stroke="var(--color-dark-500)" strokeWidth="1"></path>
        </g>
        <g data-part="server-hatch">
          <rect opacity="0.25" x="17" y="19.31" width={84.25} height={162.4} fill="url(#hm-hatch)"></rect>
          <rect opacity="0.25" x="188.56" y="19.31" width={84.25} height={162.4} fill="url(#hm-hatch)"></rect>
          <rect opacity="0.35" x="99.72" y="19.31" width={90.38} height={162.4} fill="url(#hm-hatch-wide)"></rect>
          <rect opacity="0.25" x="15.46" y="186.6" width={257.36} height={109.57} fill="url(#hm-hatch)"></rect>
        </g>
        <g data-part="server-cap" opacity="0.5">
          <path d="M6.27 19.31C6.27 10.13 13.71 2.68 22.9 2.68H266.91C276.09 2.68 283.54 10.13 283.54 19.31H6.27Z" fill="url(#hm-hatch)"></path>
          <path d="M6.27 19.31C6.27 10.13 13.71 2.68 22.9 2.68H266.91C276.09 2.68 283.54 10.13 283.54 19.31H6.27Z" fill="url(#hm-cap-fade)" fillOpacity="0.5"></path>
        </g>
        <line x1="16.43" y1="18.96" x2="273.44" y2="18.96" stroke="var(--color-dark-800)"></line>
        <g data-part="server-rails">
          <path d="M16.42 296.66V15.86C16.42 15.86 13.59 15.15 11.68 15.14C9.64 15.11 6.59 15.86 6.59 15.86V296.66H16.42Z" fill="white" stroke="var(--color-dark-800)"></path>
          <path d="M283.28 296.66V15.86C283.28 15.86 280.44 15.15 278.54 15.14C276.5 15.11 273.44 15.86 273.44 15.86V296.66H283.28Z" fill="white" stroke="var(--color-dark-800)"></path>
        </g>
        <g data-part="server-rows">
          <g data-row="0">
            <rect x="30.2" y="23.340000000000003" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="30.5" y="23.640000000000004" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "115.3s", "--tw-delay": "-79.73s" }}></rect>
            <rect x="57.2" y="23.340000000000003" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="57.5" y="23.640000000000004" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "70.01s", "--tw-delay": "-72.8s" }}></rect>
            <rect x="77.3" y="23.340000000000003" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="77.6" y="23.640000000000004" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "73.79s", "--tw-delay": "-14.1s" }}></rect>
            <rect x="202.8" y="23.340000000000003" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="203.10000000000002" y="23.640000000000004" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "84.04s", "--tw-delay": "-101.86s" }}></rect>
            <rect x="222.9" y="23.340000000000003" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="223.20000000000002" y="23.640000000000004" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "70.86s", "--tw-delay": "-52.09s" }}></rect>
            <rect x="249.9" y="23.340000000000003" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="250.20000000000002" y="23.640000000000004" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "74.48s", "--tw-delay": "-93.66s" }}></rect>
            <use href="#hm-tray" y="34.74"></use>
          </g>
          <g data-row="1">
            <rect x="30.2" y="40.205000000000005" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="30.5" y="40.505" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "119.16s", "--tw-delay": "-54.95s" }}></rect>
            <rect x="57.2" y="40.205000000000005" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="57.5" y="40.505" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "75.44s", "--tw-delay": "-110.56s" }}></rect>
            <rect x="77.3" y="40.205000000000005" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="77.6" y="40.505" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "103.13s", "--tw-delay": "-14.93s" }}></rect>
            <rect x="202.8" y="40.205000000000005" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="203.10000000000002" y="40.505" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "107.72s", "--tw-delay": "-89.67s" }}></rect>
            <rect x="222.9" y="40.205000000000005" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="223.20000000000002" y="40.505" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "115.03s", "--tw-delay": "-61.3s" }}></rect>
            <rect x="249.9" y="40.205000000000005" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="250.20000000000002" y="40.505" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "73.97s", "--tw-delay": "-107.08s" }}></rect>
            <use href="#hm-tray" y="51.605000000000004"></use>
          </g>
          <g data-row="2">
            <rect x="30.2" y="57.07" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="30.5" y="57.37" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "116.09s", "--tw-delay": "-90.5s" }}></rect>
            <rect x="57.2" y="57.07" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="57.5" y="57.37" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "98.23s", "--tw-delay": "-41.14s" }}></rect>
            <rect x="77.3" y="57.07" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="77.6" y="57.37" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "77.34s", "--tw-delay": "-3.93s" }}></rect>
            <rect x="202.8" y="57.07" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="203.10000000000002" y="57.37" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "71.15s", "--tw-delay": "-49.26s" }}></rect>
            <rect x="222.9" y="57.07" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="223.20000000000002" y="57.37" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "116.98s", "--tw-delay": "-108.01s" }}></rect>
            <rect x="249.9" y="57.07" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="250.20000000000002" y="57.37" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "94.14s", "--tw-delay": "-119.71s" }}></rect>
            <use href="#hm-tray" y="68.47"></use>
          </g>
          <g data-row="3">
            <rect x="30.2" y="73.935" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="30.5" y="74.235" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "64.33s", "--tw-delay": "-20.14s" }}></rect>
            <rect x="57.2" y="73.935" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="57.5" y="74.235" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "97.16s", "--tw-delay": "-116.79s" }}></rect>
            <rect x="77.3" y="73.935" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="77.6" y="74.235" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "76.35s", "--tw-delay": "-40.99s" }}></rect>
            <rect x="202.8" y="73.935" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="203.10000000000002" y="74.235" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "64.17s", "--tw-delay": "-119.01s" }}></rect>
            <rect x="222.9" y="73.935" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="223.20000000000002" y="74.235" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "85.85s", "--tw-delay": "-38.97s" }}></rect>
            <rect x="249.9" y="73.935" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="250.20000000000002" y="74.235" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "84.37s", "--tw-delay": "-87.96s" }}></rect>
            <use href="#hm-tray" y="85.33500000000001"></use>
          </g>
          <g data-row="4">
            <rect x="30.2" y="90.79999999999998" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="30.5" y="91.09999999999998" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "90.57s", "--tw-delay": "-73.96s" }}></rect>
            <rect x="57.2" y="90.79999999999998" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="57.5" y="91.09999999999998" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "70.99s", "--tw-delay": "-33.48s" }}></rect>
            <rect x="77.3" y="90.79999999999998" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="77.6" y="91.09999999999998" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "104.89s", "--tw-delay": "-81.22s" }}></rect>
            <rect x="202.8" y="90.79999999999998" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="203.10000000000002" y="91.09999999999998" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "103.99s", "--tw-delay": "-8.79s" }}></rect>
            <rect x="222.9" y="90.79999999999998" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="223.20000000000002" y="91.09999999999998" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "101.7s", "--tw-delay": "-90.95s" }}></rect>
            <rect x="249.9" y="90.79999999999998" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="250.20000000000002" y="91.09999999999998" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "86.63s", "--tw-delay": "-15.54s" }}></rect>
            <use href="#hm-tray" y="102.19999999999999"></use>
          </g>
          <g data-row="5">
            <rect x="30.2" y="107.66499999999999" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="30.5" y="107.96499999999999" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "108.1s", "--tw-delay": "-76.97s" }}></rect>
            <rect x="57.2" y="107.66499999999999" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="57.5" y="107.96499999999999" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "65.93s", "--tw-delay": "-2.53s" }}></rect>
            <rect x="77.3" y="107.66499999999999" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="77.6" y="107.96499999999999" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "116.49s", "--tw-delay": "-48.44s" }}></rect>
            <rect x="202.8" y="107.66499999999999" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="203.10000000000002" y="107.96499999999999" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "99.14s", "--tw-delay": "-55.3s" }}></rect>
            <rect x="222.9" y="107.66499999999999" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="223.20000000000002" y="107.96499999999999" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "74.51s", "--tw-delay": "-48.66s" }}></rect>
            <rect x="249.9" y="107.66499999999999" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="250.20000000000002" y="107.96499999999999" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "105.54s", "--tw-delay": "-51.35s" }}></rect>
            <use href="#hm-tray" y="119.065"></use>
          </g>
          <g data-row="6">
            <rect x="30.2" y="124.53" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="30.5" y="124.83" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "98.84s", "--tw-delay": "-13.18s" }}></rect>
            <rect x="57.2" y="124.53" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="57.5" y="124.83" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "74.52s", "--tw-delay": "-111.64s" }}></rect>
            <rect x="77.3" y="124.53" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="77.6" y="124.83" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "78.12s", "--tw-delay": "-111s" }}></rect>
            <rect x="202.8" y="124.53" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="203.10000000000002" y="124.83" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "98.41s", "--tw-delay": "-119.08s" }}></rect>
            <rect x="222.9" y="124.53" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="223.20000000000002" y="124.83" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "64.72s", "--tw-delay": "-77.5s" }}></rect>
            <rect x="249.9" y="124.53" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="250.20000000000002" y="124.83" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "64.78s", "--tw-delay": "-103.07s" }}></rect>
            <use href="#hm-tray" y="135.93"></use>
          </g>
          <g data-row="7">
            <rect x="30.2" y="141.39499999999998" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="30.5" y="141.695" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "69.32s", "--tw-delay": "-6.88s" }}></rect>
            <rect x="57.2" y="141.39499999999998" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="57.5" y="141.695" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "88.18s", "--tw-delay": "-7.09s" }}></rect>
            <rect x="77.3" y="141.39499999999998" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="77.6" y="141.695" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "73.25s", "--tw-delay": "-2.14s" }}></rect>
            <rect x="202.8" y="141.39499999999998" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="203.10000000000002" y="141.695" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "114.58s", "--tw-delay": "-97.43s" }}></rect>
            <rect x="222.9" y="141.39499999999998" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="223.20000000000002" y="141.695" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "88.63s", "--tw-delay": "-91.38s" }}></rect>
            <rect x="249.9" y="141.39499999999998" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="250.20000000000002" y="141.695" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "98.16s", "--tw-delay": "-0.46s" }}></rect>
            <use href="#hm-tray" y="152.795"></use>
          </g>
          <g data-row="8">
            <rect x="30.2" y="158.26" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="30.5" y="158.56" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "94.27s", "--tw-delay": "-5.27s" }}></rect>
            <rect x="57.2" y="158.26" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="57.5" y="158.56" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "84.22s", "--tw-delay": "-23.75s" }}></rect>
            <rect x="77.3" y="158.26" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="77.6" y="158.56" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "111.72s", "--tw-delay": "-116.56s" }}></rect>
            <rect x="202.8" y="158.26" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="203.10000000000002" y="158.56" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "80.99s", "--tw-delay": "-31.45s" }}></rect>
            <rect x="222.9" y="158.26" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="223.20000000000002" y="158.56" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "96.04s", "--tw-delay": "-64.75s" }}></rect>
            <rect x="249.9" y="158.26" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="250.20000000000002" y="158.56" rx="0.7" width={9.1} height={3.4899999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "74.33s", "--tw-delay": "-39.93s" }}></rect>
            <use href="#hm-tray" y="169.66"></use>
          </g>
          <g data-row="9">
            <rect x="30.2" y="175.125" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="30.5" y="175.425" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "95.31s", "--tw-delay": "-109.7s" }}></rect>
            <rect x="57.2" y="175.125" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="57.5" y="175.425" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "82.55s", "--tw-delay": "-110.36s" }}></rect>
            <rect x="77.3" y="175.125" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="77.6" y="175.425" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "111.03s", "--tw-delay": "-37.98s" }}></rect>
            <rect x="202.8" y="175.125" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="203.10000000000002" y="175.425" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "113.01s", "--tw-delay": "-29.76s" }}></rect>
            <rect x="222.9" y="175.125" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="223.20000000000002" y="175.425" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "78.06s", "--tw-delay": "-19.84s" }}></rect>
            <rect x="249.9" y="175.125" rx="1" width={9.7} height={4.09} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="250.20000000000002" y="175.425" rx="0.7" width={9.1} height={3.4899999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "113.18s", "--tw-delay": "-93.67s" }}></rect>
            <use href="#hm-tray" y="186.525"></use>
          </g>
          <g data-row="10">
            <rect x="35" y="191.79" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="35.3" y="192.09" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "26.66s", "--tw-delay": "-5.96s" }}></rect>
            <rect x="48.8" y="191.79" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="49.099999999999994" y="192.09" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "26.55s", "--tw-delay": "-4.38s" }}></rect>
            <rect x="62.6" y="191.79" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="62.9" y="192.09" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "23.04s", "--tw-delay": "-20.45s" }}></rect>
            <rect x="76.4" y="191.79" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="76.7" y="192.09" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "23.99s", "--tw-delay": "-22.69s" }}></rect>
            <rect x="90.2" y="191.79" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="90.5" y="192.09" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "29.94s", "--tw-delay": "-14.08s" }}></rect>
            <rect x="103.9" y="191.79" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="104.2" y="192.09" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "28.35s", "--tw-delay": "-17.71s" }}></rect>
            <rect x="167.1" y="193.98999999999998" rx="1" width={4.9} height={2.07} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="167.4" y="194.29" rx="0.7" width={4.300000000000001} height={1.4699999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "16.59s", "--tw-delay": "-20.57s" }}></rect>
            <rect x="225.3" y="193.98999999999998" rx="1" width={4.9} height={2.07} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="225.60000000000002" y="194.29" rx="0.7" width={4.300000000000001} height={1.4699999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "22.58s", "--tw-delay": "-6.59s" }}></rect>
            <use href="#hm-tray" y="203.39"></use>
          </g>
          <g data-row="11">
            <rect x="35" y="208.655" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="35.3" y="208.955" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "26.98s", "--tw-delay": "-2.25s" }}></rect>
            <rect x="48.8" y="208.655" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="49.099999999999994" y="208.955" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "19.86s", "--tw-delay": "-1.72s" }}></rect>
            <rect x="62.6" y="208.655" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="62.9" y="208.955" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "18.63s", "--tw-delay": "-4.55s" }}></rect>
            <rect x="76.4" y="208.655" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="76.7" y="208.955" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "23.34s", "--tw-delay": "-23.72s" }}></rect>
            <rect x="90.2" y="208.655" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="90.5" y="208.955" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "21.8s", "--tw-delay": "-17.03s" }}></rect>
            <rect x="103.9" y="208.655" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="104.2" y="208.955" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "24.41s", "--tw-delay": "-0.3s" }}></rect>
            <rect x="167.1" y="210.855" rx="1" width={4.9} height={2.07} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="167.4" y="211.155" rx="0.7" width={4.300000000000001} height={1.4699999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "24.16s", "--tw-delay": "-12.83s" }}></rect>
            <rect x="225.3" y="210.855" rx="1" width={4.9} height={2.07} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="225.60000000000002" y="211.155" rx="0.7" width={4.300000000000001} height={1.4699999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "23.94s", "--tw-delay": "-22.1s" }}></rect>
            <use href="#hm-tray" y="220.255"></use>
          </g>
          <g data-row="12">
            <rect x="35" y="225.52" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="35.3" y="225.82000000000002" rx="0.7" width={10.1} height={3.9099999999999997} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "28.55s", "--tw-delay": "-3.19s" }}></rect>
            <rect x="48.8" y="225.52" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="49.099999999999994" y="225.82000000000002" rx="0.7" width={10.1} height={3.9099999999999997} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "21.44s", "--tw-delay": "-27.57s" }}></rect>
            <rect x="62.6" y="225.52" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="62.9" y="225.82000000000002" rx="0.7" width={10.1} height={3.9099999999999997} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "24.73s", "--tw-delay": "-2.21s" }}></rect>
            <rect x="76.4" y="225.52" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="76.7" y="225.82000000000002" rx="0.7" width={10.1} height={3.9099999999999997} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "27.58s", "--tw-delay": "-15.4s" }}></rect>
            <rect x="90.2" y="225.52" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="90.5" y="225.82000000000002" rx="0.7" width={10.1} height={3.9099999999999997} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "20.04s", "--tw-delay": "-16.44s" }}></rect>
            <rect x="103.9" y="225.52" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="104.2" y="225.82000000000002" rx="0.7" width={10.1} height={3.9099999999999997} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "17.9s", "--tw-delay": "-13.44s" }}></rect>
            <rect x="167.1" y="227.72" rx="1" width={4.9} height={2.07} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="167.4" y="228.02" rx="0.7" width={4.300000000000001} height={1.4699999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "20.35s", "--tw-delay": "-26.26s" }}></rect>
            <rect x="225.3" y="227.72" rx="1" width={4.9} height={2.07} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="225.60000000000002" y="228.02" rx="0.7" width={4.300000000000001} height={1.4699999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "29.12s", "--tw-delay": "-8.73s" }}></rect>
            <use href="#hm-tray" y="237.12"></use>
          </g>
          <g data-row="13">
            <rect x="35" y="242.385" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="35.3" y="242.685" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "20.85s", "--tw-delay": "-13.4s" }}></rect>
            <rect x="48.8" y="242.385" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="49.099999999999994" y="242.685" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "22.55s", "--tw-delay": "-25.86s" }}></rect>
            <rect x="62.6" y="242.385" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="62.9" y="242.685" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "24.57s", "--tw-delay": "-18.37s" }}></rect>
            <rect x="76.4" y="242.385" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="76.7" y="242.685" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "22.81s", "--tw-delay": "-26.86s" }}></rect>
            <rect x="90.2" y="242.385" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="90.5" y="242.685" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "25.71s", "--tw-delay": "-27.93s" }}></rect>
            <rect x="103.9" y="242.385" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="104.2" y="242.685" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "21.63s", "--tw-delay": "-1.03s" }}></rect>
            <rect x="167.1" y="244.58499999999998" rx="1" width={4.9} height={2.07} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="167.4" y="244.885" rx="0.7" width={4.300000000000001} height={1.4699999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "19.83s", "--tw-delay": "-11.11s" }}></rect>
            <rect x="225.3" y="244.58499999999998" rx="1" width={4.9} height={2.07} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="225.60000000000002" y="244.885" rx="0.7" width={4.300000000000001} height={1.4699999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "20.27s", "--tw-delay": "-15.29s" }}></rect>
            <use href="#hm-tray" y="253.98499999999999"></use>
          </g>
          <g data-row="14">
            <rect x="35" y="259.24999999999994" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="35.3" y="259.54999999999995" rx="0.7" width={10.1} height={3.9099999999999997} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "29.31s", "--tw-delay": "-14.47s" }}></rect>
            <rect x="48.8" y="259.24999999999994" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="49.099999999999994" y="259.54999999999995" rx="0.7" width={10.1} height={3.9099999999999997} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "22.65s", "--tw-delay": "-26.03s" }}></rect>
            <rect x="62.6" y="259.24999999999994" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="62.9" y="259.54999999999995" rx="0.7" width={10.1} height={3.9099999999999997} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "24.56s", "--tw-delay": "-10.86s" }}></rect>
            <rect x="76.4" y="259.24999999999994" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="76.7" y="259.54999999999995" rx="0.7" width={10.1} height={3.9099999999999997} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "26.01s", "--tw-delay": "-12.5s" }}></rect>
            <rect x="90.2" y="259.24999999999994" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="90.5" y="259.54999999999995" rx="0.7" width={10.1} height={3.9099999999999997} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "18.73s", "--tw-delay": "-1.15s" }}></rect>
            <rect x="103.9" y="259.24999999999994" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="104.2" y="259.54999999999995" rx="0.7" width={10.1} height={3.9099999999999997} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "18.77s", "--tw-delay": "-6.41s" }}></rect>
            <rect x="167.1" y="261.44999999999993" rx="1" width={4.9} height={2.07} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="167.4" y="261.74999999999994" rx="0.7" width={4.300000000000001} height={1.4699999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "17.43s", "--tw-delay": "-3.96s" }}></rect>
            <rect x="225.3" y="261.44999999999993" rx="1" width={4.9} height={2.07} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="225.60000000000002" y="261.74999999999994" rx="0.7" width={4.300000000000001} height={1.4699999999999998} fill="#4C78F5" className="hd-twinkle" style={{ "--tw-dur": "16.7s", "--tw-delay": "-15.3s" }}></rect>
            <use href="#hm-tray" y="270.84999999999997"></use>
          </g>
          <g data-row="15">
            <rect x="35" y="276.11499999999995" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="35.3" y="276.41499999999996" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "18.28s", "--tw-delay": "-6.09s" }}></rect>
            <rect x="48.8" y="276.11499999999995" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="49.099999999999994" y="276.41499999999996" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "21.96s", "--tw-delay": "-6.67s" }}></rect>
            <rect x="62.6" y="276.11499999999995" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="62.9" y="276.41499999999996" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "25.74s", "--tw-delay": "-15.37s" }}></rect>
            <rect x="76.4" y="276.11499999999995" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="76.7" y="276.41499999999996" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "16.53s", "--tw-delay": "-21.16s" }}></rect>
            <rect x="90.2" y="276.11499999999995" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="90.5" y="276.41499999999996" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "21.39s", "--tw-delay": "-29.85s" }}></rect>
            <rect x="103.9" y="276.11499999999995" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="104.2" y="276.41499999999996" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "21.84s", "--tw-delay": "-10.28s" }}></rect>
            <rect x="167.1" y="278.31499999999994" rx="1" width={4.9} height={2.07} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="167.4" y="278.61499999999995" rx="0.7" width={4.300000000000001} height={1.4699999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "23.09s", "--tw-delay": "-9.69s" }}></rect>
            <rect x="225.3" y="278.31499999999994" rx="1" width={4.9} height={2.07} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="225.60000000000002" y="278.61499999999995" rx="0.7" width={4.300000000000001} height={1.4699999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "22.8s", "--tw-delay": "-19.83s" }}></rect>
            <use href="#hm-tray" y="287.715"></use>
          </g>
          <g data-row="base">
            <rect x="35" y="290.1" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="35.3" y="290.40000000000003" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "19.42s", "--tw-delay": "-11.5s" }}></rect>
            <rect x="48.8" y="290.1" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="49.099999999999994" y="290.40000000000003" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "17.95s", "--tw-delay": "-17.18s" }}></rect>
            <rect x="62.6" y="290.1" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="62.9" y="290.40000000000003" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "24.04s", "--tw-delay": "-15.89s" }}></rect>
            <rect x="76.4" y="290.1" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="76.7" y="290.40000000000003" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "20.07s", "--tw-delay": "-29.62s" }}></rect>
            <rect x="90.2" y="290.1" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="90.5" y="290.40000000000003" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "24.52s", "--tw-delay": "-18.5s" }}></rect>
            <rect x="103.9" y="290.1" rx="1" width={10.7} height={4.51} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="104.2" y="290.40000000000003" rx="0.7" width={10.1} height={3.9099999999999997} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "21.96s", "--tw-delay": "-11.23s" }}></rect>
            <rect x="167.1" y="292.3" rx="1" width={4.9} height={2.07} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="167.4" y="292.6" rx="0.7" width={4.300000000000001} height={1.4699999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "16.79s", "--tw-delay": "-11.58s" }}></rect>
            <rect x="225.3" y="292.3" rx="1" width={4.9} height={2.07} fill="white" stroke="var(--color-dark-800)"></rect>
            <rect x="225.60000000000002" y="292.6" rx="0.7" width={4.300000000000001} height={1.4699999999999998} fill="var(--color-dark-100)" className="hd-twinkle" style={{ "--tw-dur": "26.02s", "--tw-delay": "-9.3s" }}></rect>
          </g>
        </g>
      </g>
      {dials ?? <g data-part="dials"></g>}
    </svg>
  );
}
