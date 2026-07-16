"use client";

import { useState } from "react";
import { AVEC_2000, type Photo } from "@/lib/donnees";

function srcSetPour(photo: Photo) {
  return [
    `/projets/${photo.nom}-640.webp 640w`,
    `/projets/${photo.nom}-1200.webp 1200w`,
    ...(AVEC_2000.has(photo.nom)
      ? [`/projets/${photo.nom}-2000.webp 2000w`]
      : []),
  ].join(", ");
}

/**
 * Comparateur avant / après : un curseur natif (souris, doigt, clavier)
 * pilote la ligne de partage entre les deux états.
 */
export function AvantApres({ avant, apres }: { avant: Photo; apres: Photo }) {
  const [pct, setPct] = useState(58);

  return (
    <div className="relative aspect-[4/3] touch-pan-y overflow-hidden bg-fusain select-none">
      {/* eslint-disable-next-line @next/next/no-img-element -- WebP pré-générés */}
      <img
        src={`/projets/${apres.nom}-1200.webp`}
        srcSet={srcSetPour(apres)}
        sizes="(min-width: 1350px) 1264px, 100vw"
        alt={apres.alt}
        className="absolute inset-0 h-full w-full object-cover"
        decoding="async"
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- WebP pré-générés */}
        <img
          src={`/projets/${avant.nom}-1200.webp`}
          srcSet={srcSetPour(avant)}
          sizes="(min-width: 1350px) 1264px, 100vw"
          alt={avant.alt}
          className="absolute inset-0 h-full w-full object-cover"
          decoding="async"
        />
      </div>

      <span className="etiquette pointer-events-none absolute top-4 left-4 bg-fusain/75 px-2.5 py-1.5 text-chaux">
        Avant
      </span>
      <span className="etiquette pointer-events-none absolute top-4 right-4 bg-fusain/75 px-2.5 py-1.5 text-ocre">
        Après
      </span>

      {/* Ligne de partage et poignée */}
      <div
        className="pointer-events-none absolute inset-y-0 w-px -translate-x-1/2 bg-chaux"
        style={{ left: `${pct}%` }}
      >
        <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-chaux/60 bg-fusain/80 text-chaux backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              d="M8 7 3 12l5 5M16 7l5 5-5 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pct}
        onChange={(e) => setPct(Number(e.target.value))}
        aria-label="Comparer l’avant et l’après de la reconstruction"
        className="absolute inset-0 h-full w-full cursor-ew-resize touch-pan-y appearance-none bg-transparent opacity-0"
      />
    </div>
  );
}
