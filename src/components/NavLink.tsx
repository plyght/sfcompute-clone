import Link from "next/link";
import type { NavLink as NavLinkData } from "@/data/nav";

/** Internal links route through next/link; external ones stay plain anchors. */
export function NavLink({
  link,
  className,
  current,
}: {
  link: NavLinkData;
  className?: string;
  current?: boolean;
}) {
  if (link.download) {
    return (
      <a href={link.href} download className={className}>
        {link.label}
      </a>
    );
  }
  if (link.external) {
    return (
      <a target="_blank" rel="noopener noreferrer" className={className} href={link.href}>
        {link.label}
      </a>
    );
  }
  return (
    <Link href={link.href} className={className} aria-current={current ? "page" : undefined}>
      {link.label}
    </Link>
  );
}
