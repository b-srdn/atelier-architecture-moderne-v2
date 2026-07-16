import Link from "next/link";
import { AGENCE } from "@/lib/donnees";
import { Losange } from "./Marque";

export function PiedDePage() {
  return (
    <footer className="relative z-10 bg-fusain text-givre">
      <div className="rail grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="flex flex-col items-start gap-5 md:col-span-5">
          <Losange className="h-9 w-9" />
          <p className="affiche text-xl text-chaux">
            Atelier
            <br />
            d’Architecture
            <br />
            Moderne
          </p>
          <p className="etiquette">{AGENCE.architecte} — Architecte</p>
        </div>

        <div className="md:col-span-3">
          <h2 className="etiquette text-ocre">Adresse</h2>
          <p className="mt-4 font-mono text-sm leading-relaxed">
            {AGENCE.adresse}
            <br />
            {AGENCE.codePostal} {AGENCE.ville}
          </p>
        </div>

        <div className="md:col-span-2">
          <h2 className="etiquette text-ocre">Contact</h2>
          <p className="mt-4 flex flex-col gap-1.5 font-mono text-sm">
            <a
              href={`tel:${AGENCE.telephoneUri}`}
              className="lien-souligne self-start text-chaux"
            >
              {AGENCE.telephone}
            </a>
            <a
              href={`mailto:${AGENCE.email}`}
              className="lien-souligne self-start break-all"
            >
              {AGENCE.email}
            </a>
          </p>
        </div>

        <div className="md:col-span-2">
          <h2 className="etiquette text-ocre">Horaires</h2>
          <dl className="mt-4 flex flex-col gap-1.5 font-mono text-sm">
            {AGENCE.horaires.map((h) => (
              <div key={h.jour}>
                <dt className="inline">{h.jour} — </dt>
                <dd className="inline">{h.heures}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="rail flex flex-wrap items-center justify-between gap-4 border-t border-chaux/10 py-6 text-xs">
        <p>© 2026 Atelier d’Architecture Moderne — Dijon</p>
        <p className="flex gap-6">
          <Link href="/mentions-legales" className="lien-souligne">
            Mentions légales
          </Link>
          <a
            href={AGENCE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="lien-souligne"
          >
            LinkedIn ↗
          </a>
        </p>
      </div>
    </footer>
  );
}
