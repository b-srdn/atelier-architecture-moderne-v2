"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

/** Révèle son contenu à l'entrée dans le viewport (une seule fois). */
export function Apparition({
  children,
  delai = 0,
  className,
}: {
  children: ReactNode;
  delai?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observateur = new IntersectionObserver(
      (entrees) => {
        if (entrees.some((e) => e.isIntersecting)) {
          el.classList.add("est-visible");
          observateur.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );
    observateur.observe(el);
    return () => observateur.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={{ "--delai": `${delai}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
