import type { CSSProperties } from "react";

const AXES = ["A", "B", "C", "D", "E"];

/**
 * La trame : cinq axes verticaux repérés A–E, comme les files de structure
 * d'un plan. Tout le contenu du site vient se caler dessus.
 */
export function Trame() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden sm:block"
    >
      <div className="rail relative h-full">
        <div className="relative h-full">
          {AXES.map((lettre, i) => (
            <div
              key={lettre}
              className="absolute inset-y-0 w-0"
              style={{ left: `${i * 25}%` }}
            >
              <div
                className="axe-anime h-full w-px bg-[rgba(199,193,177,0.36)]"
                style={{ "--delai": `${100 + i * 90}ms` } as CSSProperties}
              />
              <span
                className="parait etiquette absolute top-[4.6rem] hidden h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-[rgba(140,136,124,0.45)] text-[0.55rem] text-brume/70 lg:flex"
                style={{ "--delai": `${700 + i * 90}ms` } as CSSProperties}
              >
                {lettre}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
