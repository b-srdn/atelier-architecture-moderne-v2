import type { Metadata, Viewport } from "next";
import { Archivo, Fragment_Mono } from "next/font/google";
import "./globals.css";
import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { Trame } from "@/components/Trame";
import { AGENCE, SITE } from "@/lib/donnees";

/*
 * Une seule famille, plusieurs chasses : Archivo (axe wdth 62–125 %)
 * fait tout — display étendu, texte courant, repères étroits.
 * Les variables doivent rester sur <html> pour que les alias @theme
 * se résolvent au scope :root.
 */
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
  display: "swap",
});

const fragment = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fragment",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.titre,
    template: "%s — Atelier d’Architecture Moderne",
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE.url,
    siteName: "Atelier d’Architecture Moderne",
    title: SITE.titre,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#17191d",
};

const donneesStructurees = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Atelier d’Architecture Moderne",
  description: SITE.description,
  url: SITE.url,
  telephone: AGENCE.telephoneUri,
  email: AGENCE.email,
  founder: {
    "@type": "Person",
    name: AGENCE.architecte,
    jobTitle: "Architecte",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: AGENCE.adresse,
    postalCode: AGENCE.codePostal,
    addressLocality: AGENCE.ville,
    addressCountry: "FR",
  },
  areaServed: "Dijon et Côte-d’Or",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:30",
    closes: "18:00",
  },
  sameAs: [AGENCE.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${archivo.variable} ${fragment.variable}`}>
      <body>
        <a
          href="#contenu"
          className="etiquette sr-only z-50 bg-encre px-4 py-3 text-chaux focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
        >
          Aller au contenu
        </a>
        <Trame />
        <Entete />
        <main id="contenu" className="relative z-10">
          {children}
        </main>
        <PiedDePage />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(donneesStructurees) }}
        />
      </body>
    </html>
  );
}
