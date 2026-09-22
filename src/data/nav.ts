export type NavLink = {
  label: string;
  href: string;
  /** Off-site links render as plain anchors with rel=noopener. */
  external?: boolean;
};

export const PRIMARY_NAV: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Autoresearch", href: "https://autoresearch.sfcompute.com", external: true },
  { label: "Specs", href: "/specs" },
  { label: "Docs", href: "https://docs.sfcompute.com", external: true },
  { label: "Contact", href: "/contact" },
];

export const ACCOUNT_NAV: NavLink[] = [
  { label: "Login", href: "/auth/sign-in" },
  { label: "Sign up", href: "/dashboard" },
];

export type FooterColumn = { title: string; links: NavLink[] };

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Careers", href: "/#careers" },
      { label: "FAQ", href: "/specs#faq" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "https://docs.sfcompute.com", external: true },
      { label: "Specs", href: "/specs" },
      { label: "News", href: "/news" },
      { label: "Changelog", href: "/changelog" },
      { label: "RSS", href: "/rss.xml" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "X", href: "https://x.com/sfcompute", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/sfcompute", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/legal/terms-of-service" },
      { label: "SLA", href: "/legal/sla" },
      { label: "Acceptable Use", href: "/legal/acceptable-use-policy" },
      { label: "Privacy", href: "/legal/privacy-policy" },
      { label: "DPA", href: "/legal/dpa" },
    ],
  },
  {
    title: "Media",
    links: [{ label: "Press Kit (13.5MB)", href: "/press-kit.zip" }],
  },
];
