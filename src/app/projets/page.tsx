import type { Metadata } from "next";
import Link from "next/link";
import { Apparition } from "@/components/Apparition";
import { Cliche } from "@/components/Cliche";
import { PROJETS } from "@/lib/donnees";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Rénovations, extensions et constructions neuves réalisées par l’Atelier d’Architecture Moderne à Dijon et en Côte-d’Or.",
};

export default function PageProjets() {
  return (
    <>
      <section className="rail pt-14 pb-6 md:pt-24">
        <Apparition>
          <p className="etiquette text-ocre-fonce">Le classeur</p>
          <h1 className="affiche mt-6 text-[clamp(1.7rem,8.8vw,6rem)]">
            Réalisations
          </h1>
          <p className="etiquette mt-7 text-brume">
            {PROJETS.length} planches — Dijon & Côte-d’Or
          </p>
        </Apparition>
      </section>

      <section className="rail flex flex-col pt-10 pb-28">
        {PROJETS.map((projet, i) => {
          const inverse = i % 2 === 1;
          return (
            <Apparition key={projet.slug}>
              <Link
                href={`/projets/${projet.slug}`}
                className="group grid gap-8 border-t border-liseret py-12 md:grid-cols-12 md:items-center md:py-16"
              >
                <div
                  className={`md:col-span-5 ${inverse ? "md:order-last md:col-start-8" : ""}`}
                >
                  <Cliche
                    photo={projet.couverture}
                    sizes="(min-width: 768px) 42vw, 100vw"
                    imgClassName="transition-transform duration-700 ease-plan group-hover:scale-[1.045]"
                  />
                </div>
                <div
                  className={`md:col-span-6 ${inverse ? "md:col-start-1" : "md:col-start-7"}`}
                >
                  <p className="etiquette text-ocre-fonce">
                    PL. {projet.numero} — {projet.nature}
                  </p>
                  <h2 className="affiche mt-4 text-2xl transition-colors duration-300 group-hover:text-ocre-fonce md:text-4xl">
                    {projet.titre}
                  </h2>
                  <p className="etiquette mt-3 text-brume">{projet.lieu}</p>
                  <p className="mt-6 max-w-md text-sm leading-relaxed text-brume">
                    {projet.accroche}
                  </p>
                  <span className="etiquette lien-souligne mt-7 inline-block pb-1">
                    Voir la planche
                  </span>
                </div>
              </Link>
            </Apparition>
          );
        })}
      </section>
    </>
  );
}
