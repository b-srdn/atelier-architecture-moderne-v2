import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Apparition } from "@/components/Apparition";
import { AvantApres } from "@/components/AvantApres";
import { Cliche } from "@/components/Cliche";
import { PROJETS, getProjet } from "@/lib/donnees";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJETS.map((projet) => ({ slug: projet.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const projet = getProjet(slug);
  if (!projet) return {};
  return {
    title: `${projet.titre} — ${projet.lieu}`,
    description: projet.accroche,
    openGraph: {
      images: [`/projets/${projet.couverture.nom}-1200.webp`],
    },
  };
}

/** Disposition de la galerie selon le format de chaque cliché. */
function classesGalerie(ratio: "paysage" | "portrait" | "carre", i: number) {
  const decalage = i % 2 === 1 ? "md:mt-20" : "";
  if (ratio === "portrait") return `md:col-span-5 ${decalage}`;
  if (ratio === "carre") return `md:col-span-6 ${decalage}`;
  return `md:col-span-7 ${decalage}`;
}

export default async function PageProjet({ params }: Props) {
  const { slug } = await params;
  const projet = getProjet(slug);
  if (!projet) notFound();

  const index = PROJETS.indexOf(projet);
  const precedent = PROJETS[(index - 1 + PROJETS.length) % PROJETS.length];
  const suivant = PROJETS[(index + 1) % PROJETS.length];
  const galerie = projet.avantApres
    ? projet.photos
    : projet.photos.filter((photo) => photo.nom !== projet.couverture.nom);

  return (
    <article className="pb-24">
      <header className="rail pt-14 md:pt-20">
        <Apparition>
          <p className="etiquette text-ocre-fonce">
            <Link href="/projets" className="lien-souligne">
              Réalisations
            </Link>{" "}
            / PL. {projet.numero}
          </p>
          <h1 className="affiche mt-7 max-w-5xl text-[clamp(1.5rem,7.3vw,3.75rem)] lg:text-6xl">
            {projet.titre}
          </h1>

          {/* Cartouche, comme sur une planche de plan */}
          <dl className="mt-12 grid border border-encre/70 font-mono text-sm sm:grid-cols-3">
            <div className="border-b border-encre/70 px-5 py-4 sm:border-r sm:border-b-0">
              <dt className="etiquette text-brume">Lieu</dt>
              <dd className="mt-1.5">{projet.lieu}</dd>
            </div>
            <div className="border-b border-encre/70 px-5 py-4 sm:border-r sm:border-b-0">
              <dt className="etiquette text-brume">Nature</dt>
              <dd className="mt-1.5">{projet.nature}</dd>
            </div>
            <div className="px-5 py-4">
              <dt className="etiquette text-brume">Planche</dt>
              <dd className="mt-1.5">
                {projet.numero} / {String(PROJETS.length).padStart(2, "0")}
              </dd>
            </div>
          </dl>
        </Apparition>
      </header>

      <section className="rail mt-12 md:mt-16">
        {projet.avantApres ? (
          <Apparition>
            <AvantApres
              avant={projet.avantApres.avant}
              apres={projet.avantApres.apres}
            />
            <p className="etiquette mt-3.5 text-brume">
              Faites glisser — au lendemain du sinistre / la maison
              reconstruite
            </p>
          </Apparition>
        ) : (
          <Apparition>
            <Cliche
              photo={projet.couverture}
              priorite
              sizes="(min-width: 1350px) 1264px, 100vw"
              ratioClasse={
                projet.couverture.ratio === "carre"
                  ? "aspect-square md:aspect-[16/10]"
                  : "aspect-[4/3] md:aspect-[16/10]"
              }
            />
          </Apparition>
        )}
      </section>

      <section className="rail mt-16 grid gap-10 md:mt-20 md:grid-cols-12">
        <Apparition className="md:col-span-4">
          <p className="etiquette text-ocre-fonce">Le projet</p>
        </Apparition>
        <Apparition delai={100} className="md:col-span-8">
          <p className="max-w-3xl text-base leading-relaxed md:text-lg">
            {projet.description}
          </p>
        </Apparition>
      </section>

      {galerie.length > 0 && (
        <section className="rail mt-20 grid gap-x-10 gap-y-14 md:grid-cols-12">
          {galerie.map((photo, i) => (
            <Apparition
              key={photo.nom}
              delai={(i % 2) * 100}
              className={classesGalerie(photo.ratio, i)}
            >
              <figure>
                <Cliche
                  photo={photo}
                  sizes="(min-width: 768px) 55vw, 100vw"
                />
                {photo.legende && (
                  <figcaption className="etiquette mt-3 text-brume">
                    {photo.legende}
                  </figcaption>
                )}
              </figure>
            </Apparition>
          ))}
        </section>
      )}

      <nav
        aria-label="Autres réalisations"
        className="rail mt-24 grid gap-8 border-t border-liseret pt-10 sm:grid-cols-2"
      >
        <Link href={`/projets/${precedent.slug}`} className="group">
          <p className="etiquette text-brume">← Planche précédente</p>
          <p className="affiche mt-3 text-xl transition-colors duration-300 group-hover:text-ocre-fonce">
            {precedent.titre}
          </p>
        </Link>
        <Link
          href={`/projets/${suivant.slug}`}
          className="group sm:text-right"
        >
          <p className="etiquette text-brume">Planche suivante →</p>
          <p className="affiche mt-3 text-xl transition-colors duration-300 group-hover:text-ocre-fonce">
            {suivant.titre}
          </p>
        </Link>
      </nav>
    </article>
  );
}
