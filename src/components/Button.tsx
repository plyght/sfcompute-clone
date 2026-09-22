import Link from "next/link";
import { cn } from "@/lib/cn";

const BASE =
  "t-pm inline-flex items-center justify-center rounded-xs border px-2 py-0.5 whitespace-nowrap outline-none transition-[transform,box-shadow,filter] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] active:brightness-95 focus-visible:shadow-[0_0_0_1px_#fff,0_0_0_3px_#3b82f6] focus-visible:forced-colors:[outline:2px_solid] focus-visible:forced-colors:[outline-offset:2px]";

const VARIANTS = {
  primary:
    "border-[rgba(0,65,255,0.68)] bg-[linear-gradient(180deg,#6B91FF_0%,#386BFF_36.79%,#386BFF_60.86%,#5581FF_100%)] text-white hover:brightness-[1.04]",
  neutral:
    "border-[#E3E3E3] bg-[linear-gradient(180deg,#F6F6F6_0%,#EEE_36.79%,#EEE_60.86%,#F6F6F6_100%)] text-ink hover:brightness-[1.012]",
} as const;

export function Button({
  href,
  variant = "neutral",
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof VARIANTS;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={cn(BASE, VARIANTS[variant], className)}>
      {children}
    </Link>
  );
}
