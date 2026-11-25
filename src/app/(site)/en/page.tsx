import type { Metadata } from "next";
import ConceptPage from "../ConceptPage";
import { en } from "@/content/concept";

export const metadata: Metadata = {
  title: { absolute: "Dennis Rijkers · Agile Coach & Interim Lead Engineering" },
  description:
    "Does the work, and coaches the people doing it. Agile coaching, change and interim leadership, independent since 2008.",
  alternates: { canonical: "/en", languages: { "nl-NL": "/", "en-GB": "/en" } },
  openGraph: { type: "website", locale: "en_GB" },
};

export default function Page() {
  return <ConceptPage c={en} />;
}
