import { AVEC_2000, type Photo } from "@/lib/donnees";

const RATIOS = {
  paysage: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  carre: "aspect-square",
} as const;

/**
 * Photo du site, servie en WebP pré-généré (640 / 1200 / 2000 px selon
 * les variantes disponibles).
 */
export function Cliche({
  photo,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priorite = false,
  className = "",
  imgClassName = "",
  ratioClasse,
}: {
  photo: Photo;
  sizes?: string;
  priorite?: boolean;
  className?: string;
  imgClassName?: string;
  ratioClasse?: string;
}) {
  const srcSet = [
    `/projets/${photo.nom}-640.webp 640w`,
    `/projets/${photo.nom}-1200.webp 1200w`,
    ...(AVEC_2000.has(photo.nom)
      ? [`/projets/${photo.nom}-2000.webp 2000w`]
      : []),
  ].join(", ");

  return (
    <div
      className={`overflow-hidden bg-pierre ${ratioClasse ?? RATIOS[photo.ratio]} ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- WebP pré-générés, pas d'optimisation à la volée */}
      <img
        src={`/projets/${photo.nom}-1200.webp`}
        srcSet={srcSet}
        sizes={sizes}
        alt={photo.alt}
        loading={priorite ? "eager" : "lazy"}
        fetchPriority={priorite ? "high" : "auto"}
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
