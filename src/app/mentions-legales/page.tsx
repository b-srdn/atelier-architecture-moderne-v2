import type { Metadata } from "next";
import { AGENCE } from "@/lib/donnees";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site de l’Atelier d’Architecture Moderne.",
};

export default function PageMentions() {
  return (
    <section className="rail pt-14 pb-28 md:pt-24">
      <p className="etiquette text-ocre-fonce">Le site</p>
      <h1 className="affiche mt-6 text-4xl md:text-6xl">Mentions légales</h1>

      <div className="mt-14 flex max-w-2xl flex-col gap-12 text-sm leading-relaxed text-brume">
        <div>
          <h2 className="etiquette text-encre">Éditeur du site</h2>
          <p className="mt-4">
            {AGENCE.nom} — {AGENCE.architecte}, architecte.
            <br />
            {AGENCE.adresse}, {AGENCE.codePostal} {AGENCE.ville}
            <br />
            Téléphone : {AGENCE.telephone} — Email : {AGENCE.email}
          </p>
        </div>

        <div>
          <h2 className="etiquette text-encre">Hébergement</h2>
          <p className="mt-4">
            Vercel Inc.
            <br />
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
            <br />
            vercel.com
          </p>
        </div>

        <div>
          <h2 className="etiquette text-encre">Propriété intellectuelle</h2>
          <p className="mt-4">
            Les textes, photographies et visuels des projets présentés sur ce
            site sont la propriété de l’{AGENCE.nom}. Toute reproduction ou
            utilisation sans accord préalable est interdite.
          </p>
        </div>

        <div>
          <h2 className="etiquette text-encre">Données personnelles</h2>
          <p className="mt-4">
            Ce site ne dépose aucun cookie et ne collecte aucune donnée de
            navigation. Le formulaire de contact ouvre votre propre
            messagerie : les informations saisies ne transitent par aucun
            serveur tiers et ne sont pas stockées en ligne. Pour toute
            question relative à vos données, écrivez à {AGENCE.email}.
          </p>
        </div>
      </div>
    </section>
  );
}
