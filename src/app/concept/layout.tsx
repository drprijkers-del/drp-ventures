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
  title: "Dennis Rijkers · Agile Coach & Interim Lead Engineering",
  description: "Doet het werk, en begeleidt wie het doet.",
  robots: { index: false, follow: false },
};

export default function ConceptLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${serif.variable} ${sans.variable}`}>{children}</div>;
}
