import type { Metadata } from "next";
import "./concept.css";

export const metadata: Metadata = {
  title: { absolute: "Dennis Rijkers · Agile Coach & Interim Lead Engineering" },
  description:
    "Doet het werk, en begeleidt wie het doet. Agile coaching, verandering en interim leiderschap, zelfstandig sinds 2008.",
  alternates: { canonical: "/", languages: { "nl-NL": "/", "en-GB": "/en" } },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    title: "Dennis Rijkers · Agile Coach & Interim Lead Engineering",
    description: "Doet het werk, en begeleidt wie het doet.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Dennis Rijkers" }],
  },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link
        rel="preload"
        href="/fonts/libre-caslon-text-latin.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/hanken-grotesk-latin.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      {children}
    </>
  );
}
