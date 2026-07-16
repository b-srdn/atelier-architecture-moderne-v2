"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";
import { AGENCE } from "@/lib/donnees";
import { Marque } from "./Marque";

const LIENS = [
  { href: "/projets", label: "Réalisations" },
  { href: "/#agence", label: "L’agence" },
  { href: "/contact", label: "Contact" },
];

export function Entete() {
  const [ouvert, setOuvert] = useState(false);
  const chemin = usePathname();

  useEffect(() => setOuvert(false), [chemin]);

  useEffect(() => {
    document.documentElement.style.overflow = ouvert ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [ouvert]);

  return (
    <header className="sticky top-0 z-40 border-b border-liseret/70 bg-chaux/85 backdrop-blur-md">
      <div className="rail flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="Atelier d’Architecture Moderne — accueil"
          className={`relative z-50 transition-colors ${ouvert ? "text-chaux" : "text-encre"}`}
        >
          <Marque clair={ouvert} />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navigation principale"
        >
          {LIENS.map((lien) => (
            <Link
              key={lien.href}
              href={lien.href}
              className="etiquette lien-souligne pb-0.5 text-encre"
            >
              {lien.label}
            </Link>
          ))}
          <a
            href={`tel:${AGENCE.telephoneUri}`}
            className="etiquette border border-encre/60 px-3.5 py-2.5 transition-colors duration-300 hover:bg-encre hover:text-chaux"
          >
            {AGENCE.telephone}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOuvert((v) => !v)}
          aria-expanded={ouvert}
          aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
          className={`relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden ${ouvert ? "text-chaux" : "text-encre"}`}
        >
          <span
            className={`h-px w-6 bg-current transition-transform duration-300 ${ouvert ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-current transition-transform duration-300 ${ouvert ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Menu mobile plein écran */}
      <div
        className={`fixed inset-0 z-40 bg-fusain text-chaux transition-opacity duration-300 md:hidden ${
          ouvert ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="rail flex h-full flex-col justify-between pt-32 pb-10">
          <nav className="flex flex-col gap-7" aria-label="Navigation mobile">
            {LIENS.map((lien, i) => (
              <div key={lien.href} className="overflow-hidden">
                <Link
                  href={lien.href}
                  onClick={() => setOuvert(false)}
                  className={`affiche block text-[2.6rem] ${ouvert ? "leve" : "opacity-0"}`}
                  style={{ "--delai": `${140 + i * 90}ms` } as CSSProperties}
                >
                  {lien.label}
                </Link>
              </div>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <a
              href={`tel:${AGENCE.telephoneUri}`}
              className="font-mono text-xl text-ocre"
            >
              {AGENCE.telephone}
            </a>
            <a href={`mailto:${AGENCE.email}`} className="etiquette text-givre">
              {AGENCE.email}
            </a>
            <p className="etiquette text-givre">
              {AGENCE.adresse}, {AGENCE.codePostal} {AGENCE.ville}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
