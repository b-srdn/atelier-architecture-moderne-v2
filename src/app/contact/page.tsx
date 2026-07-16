import type { Metadata } from "next";
import { Apparition } from "@/components/Apparition";
import { Formulaire } from "@/components/Formulaire";
import { AGENCE } from "@/lib/donnees";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter l’Atelier d’Architecture Moderne à Dijon — rénovation, extension, construction neuve en Côte-d’Or.",
};

const CARTE = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${AGENCE.adresse}, ${AGENCE.codePostal} ${AGENCE.ville}`,
)}`;

export default function PageContact() {
  return (
    <section className="rail pt-14 pb-28 md:pt-24">
      <Apparition>
        <p className="etiquette text-ocre-fonce">Contact</p>
        <h1 className="affiche mt-6 max-w-4xl text-4xl md:text-7xl">
          Parlons de votre projet
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-brume">
          Un terrain, une envie d’agrandir, un bâtiment à réveiller :
          appelez-nous ou écrivez-nous, nous commencerons par vous écouter.
        </p>
      </Apparition>

      <div className="mt-16 grid gap-16 md:mt-20 md:grid-cols-12">
        <Apparition className="md:col-span-5 lg:col-span-4">
          <dl className="flex flex-col">
            <div className="border-t border-liseret py-6">
              <dt className="etiquette text-brume">Adresse</dt>
              <dd className="mt-3 font-mono text-sm leading-relaxed">
                <a
                  href={CARTE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lien-souligne"
                >
                  {AGENCE.adresse}
                  <br />
                  {AGENCE.codePostal} {AGENCE.ville}
                </a>
              </dd>
            </div>
            <div className="border-t border-liseret py-6">
              <dt className="etiquette text-brume">Téléphone</dt>
              <dd className="mt-3 font-mono text-sm">
                <a
                  href={`tel:${AGENCE.telephoneUri}`}
                  className="lien-souligne"
                >
                  {AGENCE.telephone}
                </a>
              </dd>
            </div>
            <div className="border-t border-liseret py-6">
              <dt className="etiquette text-brume">Email</dt>
              <dd className="mt-3 font-mono text-sm">
                <a
                  href={`mailto:${AGENCE.email}`}
                  className="lien-souligne break-all"
                >
                  {AGENCE.email}
                </a>
              </dd>
            </div>
            <div className="border-t border-liseret py-6">
              <dt className="etiquette text-brume">Horaires</dt>
              <dd className="mt-3 flex flex-col gap-1 font-mono text-sm">
                {AGENCE.horaires.map((h) => (
                  <span key={h.jour}>
                    {h.jour} — {h.heures}
                  </span>
                ))}
              </dd>
            </div>
            <div className="border-y border-liseret py-6">
              <dt className="etiquette text-brume">Réseau</dt>
              <dd className="mt-3 font-mono text-sm">
                <a
                  href={AGENCE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lien-souligne"
                >
                  LinkedIn ↗
                </a>
              </dd>
            </div>
          </dl>
        </Apparition>

        <Apparition delai={120} className="md:col-span-7 lg:col-span-7 lg:col-start-6">
          <Formulaire />
        </Apparition>
      </div>
    </section>
  );
}
