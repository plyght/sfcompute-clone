/**
 * The tide/wind readouts in the footer are server-rendered upstream from
 * NOAA Tides & Currents (SF station 9414290) and Open-Meteo. The fetch lives in
 * a server component that isn't in the shipped bundle, so these are the values
 * the dump was captured with — wire them to a live fetch to make them real.
 */
export const GEO = {
  tide: {
    label: "0.2-1.6m",
    href: "https://tidesandcurrents.noaa.gov/stationhome.html?id=9414290",
    title: "San Francisco tide range today (NOAA Tides & Currents)",
    icon: "/home/geo-tide.svg",
  },
  wind: {
    label: "11kts ↑",
    href: "https://open-meteo.com/",
    title: "San Francisco wind now (Open-Meteo)",
    icon: "/home/geo-wind.svg",
  },
} as const;
