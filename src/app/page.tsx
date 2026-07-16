import Link from "next/link";
import type { CSSProperties } from "react";
import { Apparition } from "@/components/Apparition";
import { Cliche } from "@/components/Cliche";
import { Losange } from "@/components/Marque";
import {
  AGENCE,
  INTERVENTIONS,
  MANIFESTE,
  PORTRAIT,
  PROJETS,
  getProjet,
  type Intervention,
  type Projet,
} from "@/lib/donnees";

export default function Accueil() {
  return (
    <>
      <Heros />
      <Manifeste />
      <Nomenclature />
      <Realisations />
      <Agence />
      <Appel />
    </>
  );
}

/* ————— Héros ————— */

function Heros() {
  const lantenay = getProjet("lantenay")!;

  return (
    <section className="rail pt-14 pb-24 md:pt-20 md:pb-32">
      <div className="overflow-hidden">
        <p
          className="leve etiquette text-ocre-fonce"
          style={{ "--delai": "80ms" } as CSSProperties}
        >
          Atelier d’architecture — Dijon, Côte-d’Or
        </p>
      </div>

      <h1 className="affiche mt-8 text-[clamp(2.7rem,9.4vw,8.75rem)]">
        <span className="block overflow-hidden">
          <span
            className="leve block"
            style={{ "--delai": "180ms" } as CSSProperties}
          >
            Bâtir avec
          </span>
        </span>
        <span className="block overflow-hidden">
          <span
            className="leve block"
            style={{ "--delai": "300ms" } as CSSProperties}
          >
            l’existant
            <Losange className="ml-[0.12em] inline-block h-[0.42em] w-[0.42em] align-baseline" />
          </span>
        </span>
      </h1>

      <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-0">
        <div
          className="parait flex flex-col justify-between gap-10 lg:col-span-4 lg:pr-12"
          style={{ "--delai": "620ms" } as CSSProperties}
        >
          <p className="max-w-sm text-base leading-relaxed text-brume">
            {MANIFESTE.presentation}
          </p>
          <div className="flex flex-wrap items-center gap-7">
            <Link
              href="/projets"
              className="etiquette border border-encre bg-encre px-6 py-4 text-chaux transition-colors duration-300 hover:bg-transparent hover:text-encre"
            >
              Voir les réalisations
            </Link>
            <Link href="/contact" className="etiquette lien-souligne pb-1">
              Nous écrire
            </Link>
          </div>
        </div>

        <div
          className="parait lg:col-span-8 lg:col-start-5"
          style={{ "--delai": "460ms" } as CSSProperties}
        >
          <Cliche
            photo={lantenay.couverture}
            ratioClasse="aspect-[16/10]"
            sizes="(min-width: 1350px) 840px, (min-width: 1024px) 66vw, 100vw"
            priorite
          />
          <p className="etiquette mt-3 text-brume">
            PL. 05 — Maison à Lantenay (21) · bardage bois, zinc à joint debout
          </p>
        </div>
      </div>
    </section>
  );
}

/* ————— Manifeste ————— */

function Manifeste() {
  return (
    <section className="bg-pierre">
      <div className="rail py-24 md:py-32">
        <Apparition>
          <p className="etiquette text-ocre-fonce">Le parti pris</p>
          <blockquote className="mt-8 max-w-4xl text-[1.55rem] leading-[1.2] font-medium md:text-[2.5rem]">
            « Une vision contemporaine de l’architecture, attentive aux modes
            de vie actuels tout en respectant l’identité et le{" "}
            <em className="not-italic text-ocre-fonce">
              patrimoine de nos villes
            </em>
            .{" "}»
          </blockquote>
          <p className="etiquette mt-9 text-brume">
            — {AGENCE.architecte}, architecte
          </p>
        </Apparition>
      </div>
    </section>
  );
}

/* ————— Nomenclature (légende de plan) ————— */

function Symbole({ type }: { type: Intervention["symbole"] }) {
  const base = "h-11 w-11 shrink-0 border border-encre/70";
  if (type === "hachures") {
    return <div className={`${base} motif-hachures text-encre/70`} aria-hidden="true" />;
  }
  if (type === "mixte") {
    return (
      <div className={`${base} grid grid-cols-2`} aria-hidden="true">
        <div className="motif-hachures text-encre/70" />
        <div className="bg-encre" />
      </div>
    );
  }
  if (type === "poche") {
    return <div className={`${base} bg-encre`} aria-hidden="true" />;
  }
  return (
    <div
      className="h-11 w-11 shrink-0 border border-dashed border-encre/80"
      aria-hidden="true"
    />
  );
}

function Nomenclature() {
  return (
    <section className="rail py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-12">
        <Apparition className="lg:col-span-4">
          <p className="etiquette text-ocre-fonce">Nomenclature</p>
          <h2 className="affiche mt-5 text-3xl md:text-[2.6rem]">
            Quatre manières d’intervenir
          </h2>
          <p className="mt-7 max-w-xs text-sm leading-relaxed text-brume">
            Comme sur un plan : l’existant se hachure, le neuf se poche en
            noir. Chaque projet compose entre les deux.
          </p>
        </Apparition>

        <ul className="grid content-start gap-x-12 sm:grid-cols-2 lg:col-span-8">
          {INTERVENTIONS.map((intervention, i) => (
            <li key={intervention.nom}>
              <Apparition
                delai={i * 90}
                className="flex gap-6 border-t border-liseret py-8"
              >
                <Symbole type={intervention.symbole} />
                <div>
                  <h3 className="text-sm font-semibold tracking-wide uppercase">
                    {intervention.nom}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-brume">
                    {intervention.detail}
                  </p>
                </div>
              </Apparition>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ————— Réalisations ————— */

const DISPOSITION: Record<string, string> = {
  chaux: "md:col-span-7",
  lantenay: "md:col-span-5 md:pt-28",
  "fontaine-les-dijon": "md:col-span-5 md:col-start-2",
  bretigny: "md:col-span-5 md:col-start-8 md:pt-24",
  longvic: "md:col-span-4 md:col-start-5",
};

function Carte({ projet, delai = 0 }: { projet: Projet; delai?: number }) {
  return (
    <Apparition delai={delai} className={DISPOSITION[projet.slug]}>
      <Link href={`/projets/${projet.slug}`} className="group block">
        <div className="relative overflow-hidden">
          <Cliche
            photo={projet.couverture}
            sizes="(min-width: 768px) 45vw, 100vw"
            imgClassName="transition-transform duration-700 ease-plan group-hover:scale-[1.045]"
          />
          <span className="etiquette absolute top-4 left-4 bg-fusain/75 px-2.5 py-1.5 text-ocre">
            PL. {projet.numero}
          </span>
        </div>
        <h3 className="mt-5 text-lg leading-tight font-semibold text-chaux transition-colors duration-300 group-hover:text-ocre">
          {projet.titre}
        </h3>
        <p className="etiquette mt-2 text-givre">
          {projet.lieu} · {projet.nature}
        </p>
      </Link>
    </Apparition>
  );
}

function Realisations() {
  return (
    <section className="bg-fusain text-chaux">
      <div className="rail py-24 md:py-32">
        <Apparition className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="etiquette text-ocre">Réalisations</p>
            <h2 className="affiche mt-5 text-4xl md:text-6xl">
              Cinq planches,
              <br />
              cinq réponses au déjà-là
            </h2>
          </div>
          <Link
            href="/projets"
            className="etiquette lien-souligne pb-1 text-givre"
          >
            Ouvrir le classeur
          </Link>
        </Apparition>

        <div className="mt-16 grid gap-x-10 gap-y-16 md:mt-20 md:grid-cols-12">
          {PROJETS.map((projet, i) => (
            <Carte key={projet.slug} projet={projet} delai={(i % 2) * 110} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————— L’agence ————— */

function Agence() {
  return (
    <section id="agence" className="rail scroll-mt-24 py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-12">
        <Apparition className="relative lg:col-span-5">
          <div
            aria-hidden="true"
            className="absolute top-6 -left-5 hidden h-full w-full border border-liseret lg:block"
          />
          <Cliche
            photo={PORTRAIT}
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="relative"
          />
          <p className="etiquette mt-4 text-brume">
            Pauline Garnier — architecte, fondatrice
          </p>
        </Apparition>

        <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
          <Apparition delai={120}>
            <p className="etiquette text-ocre-fonce">L’agence</p>
            <h2 className="affiche mt-5 text-3xl md:text-5xl">
              L’écoute d’abord,
              <br />
              le projet ensuite
            </h2>
            <p className="mt-9 max-w-lg text-base leading-relaxed text-brume md:text-lg">
              {MANIFESTE.demarche}
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-brume md:text-lg">
              Rénovation, extension, construction neuve ou mise en valeur du
              bâti : l’agence intervient à Dijon et dans toute la Côte-d’Or.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-7">
              <a
                href={AGENCE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="etiquette border border-encre/60 px-5 py-3.5 transition-colors duration-300 hover:bg-encre hover:text-chaux"
              >
                LinkedIn ↗
              </a>
              <a
                href={`mailto:${AGENCE.email}`}
                className="etiquette lien-souligne pb-1 text-ocre-fonce"
              >
                {AGENCE.email}
              </a>
            </div>
          </Apparition>
        </div>
      </div>
    </section>
  );
}

/* ————— Appel ————— */

function Appel() {
  return (
    <section className="bg-ocre text-fusain">
      <div className="rail py-20 md:py-28">
        <Apparition className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="etiquette">Nouveau projet</p>
            <h2 className="affiche mt-5 text-4xl md:text-6xl">
              Un projet ?<br />
              Parlons-en.
            </h2>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href={`tel:${AGENCE.telephoneUri}`}
              className="font-mono text-2xl transition-opacity hover:opacity-60 md:text-3xl"
            >
              {AGENCE.telephone}
            </a>
            <a
              href={`mailto:${AGENCE.email}`}
              className="lien-souligne self-start font-mono text-sm md:self-end"
            >
              {AGENCE.email}
            </a>
            <Link
              href="/contact"
              className="etiquette mt-5 inline-block border border-fusain px-7 py-4 transition-colors duration-300 hover:bg-fusain hover:text-ocre"
            >
              Écrire à l’agence
            </Link>
          </div>
        </Apparition>
      </div>
    </section>
  );
}
