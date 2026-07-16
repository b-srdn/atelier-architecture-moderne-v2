/**
 * Le losange : tuile vernissée des toits bourguignons, traversée d'un
 * pignon — à la fois « A » d'Atelier et silhouette de toit.
 */
export function Losange({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect
        x="14.5"
        y="14.5"
        width="35"
        height="35"
        rx="2"
        transform="rotate(45 32 32)"
        fill="var(--color-ocre)"
      />
      <path
        d="M23 41.5 32 21.5 41 41.5"
        fill="none"
        stroke="var(--color-fusain)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Marque({ clair = false }: { clair?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Losange className="h-8 w-8 shrink-0" />
      <span className="flex flex-col gap-[0.2rem] leading-none">
        <span
          className={`etroit text-[0.66rem] font-bold uppercase [letter-spacing:0.16em] ${
            clair ? "text-givre" : "text-brume"
          }`}
        >
          Atelier d’architecture
        </span>
        <span className="affiche text-[1.02rem] leading-none">
          Moderne
        </span>
      </span>
    </span>
  );
}
