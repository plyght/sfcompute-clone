import type { Metadata } from "next";
import "./globals.css";
import { MobileHeader } from "@/components/MobileHeader";
import { SideNav } from "@/components/SideNav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sfcompute.com"),
  title: "SF Compute",
  description:
    "The San Francisco Compute Company. Buy and resell large-scale, vetted GPU clusters from the terminal.",
  openGraph: {
    title: "SF Compute",
    description:
      "The San Francisco Compute Company. Buy and resell large-scale, vetted GPU clusters from the terminal.",
    siteName: "SF Compute",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sfcompute",
  },
};

export const viewport = {
  themeColor: "#fff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div>
          <div className="overflow-x-clip bg-page">
            <MobileHeader />
            <div className="mx-auto flex w-full max-w-[1248px] justify-center">
              <SideNav />
              <main className="relative isolate min-w-0 flex-1 pt-6 pb-20 lg:max-w-[800px] lg:pt-32 lg:pb-28">
                {/* Hairline rules bracketing the reading column, faded at both ends. */}
                {(["left-0", "right-0"] as const).map((side) => (
                  <div
                    key={side}
                    aria-hidden="true"
                    className={`-z-30 pointer-events-none absolute top-0 bottom-0 hidden w-px lg:block ${side}`}
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 0, var(--color-line) 400px, var(--color-line) calc(100% - 80px), transparent 100%)",
                    }}
                  />
                ))}
                {children}
              </main>
              {/* Right rail: reserved for the section index, empty as on the source site. */}
              <aside className="pointer-events-none relative z-10 hidden shrink-0 lg:block lg:w-[224px]">
                <div className="sticky top-0 h-svh">
                  <nav className="pointer-events-none flex h-full flex-col justify-between px-7 pt-32 pb-11">
                    <ul className="flex flex-col" />
                  </nav>
                </div>
              </aside>
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
