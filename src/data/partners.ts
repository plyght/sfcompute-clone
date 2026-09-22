/** Partner logo row. Rendered widths are inline on the source site, so they're kept per-logo. */
export type Partner = {
  name: string;
  href: string;
  src: string;
  /** Intrinsic size of the SVG. */
  width: number;
  height: number;
  /** Rendered size, optically balanced per logo. */
  style: { width: string; height: string };
};

export const PARTNERS: Partner[] = [
  { name: "Brev", href: "https://brev.nvidia.com/", src: "/home/logos/logo-1.svg", width: 87, height: 16, style: { width: "96.01px", height: "17.6px" } },
  { name: "Modal", href: "https://modal.com/", src: "/home/logos/logo-2.svg", width: 1701, height: 317, style: { width: "94.44px", height: "17.6px" } },
  { name: "si.inc", href: "https://si.inc/", src: "/home/logos/logo-3.svg", width: 349, height: 78, style: { width: "88.59px", height: "19.8px" } },
  { name: "HeyGen", href: "https://www.heygen.com/", src: "/home/logos/logo-4.svg", width: 294, height: 67, style: { width: "82.6px", height: "18.82px" } },
  { name: "MIT", href: "https://www.mit.edu/", src: "/home/logos/logo-5.svg", width: 37, height: 18, style: { width: "35.13px", height: "17.6px" } },
];
