import type { Metadata } from "next";
import { Libre_Caslon_Text, Hanken_Grotesk } from "next/font/google";
import "./concept.css";

const serif = Libre_Caslon_Text({
  subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"],
  variable: "--font-serif", display: "swap",
});
const sans = Hanken_Grotesk({
  subsets: ["latin"], weight: ["400", "500", "600", "700"],
  variable: "--font-sans", display: "swap",
});

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
  return <div className={`${serif.variable} ${sans.variable}`}>{children}</div>;
}
