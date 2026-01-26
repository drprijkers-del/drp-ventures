import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "DRP Ventures",
    "Dennis Rijkers",
    "transformatie consultant",
    "verandermanagement",
    "agile coach",
    "teamcoaching",
    "organisatieverandering",
    "leiderschapsontwikkeling",
    "SAFe",
    "Scrum",
    "interim management",
    "Nederland",
    "Amersfoort",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.svg",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.brandName,
      url: siteConfig.url,
      logo: `${siteConfig.url}/images/og-image.jpg`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        contactType: "customer service",
        areaServed: "NL",
        availableLanguage: "Dutch",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.address.city,
        addressCountry: siteConfig.address.country,
      },
      sameAs: [siteConfig.social.linkedin].filter(Boolean),
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.founder,
      jobTitle: "Transformatie Consultant",
      worksFor: {
        "@id": `${siteConfig.url}/#organization`,
      },
      url: siteConfig.url,
      sameAs: [siteConfig.social.linkedin].filter(Boolean),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#service`,
      name: siteConfig.brandName,
      description: siteConfig.description,
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "Nederland",
      },
      serviceType: [
        "Transformatie Consulting",
        "Verandermanagement",
        "Agile Coaching",
        "Teamcoaching",
        "Leiderschapsontwikkeling",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
      inLanguage: "nl-NL",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface-body text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
