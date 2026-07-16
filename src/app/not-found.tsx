import Link from "next/link";
import { Losange } from "@/components/Marque";

export default function PageIntrouvable() {
  return (
    <section className="rail flex min-h-[62vh] flex-col items-center justify-center gap-7 py-24 text-center">
      <Losange className="h-12 w-12" />
      <p className="etiquette text-ocre-fonce">Erreur 404</p>
      <h1 className="affiche text-4xl md:text-6xl">Planche introuvable</h1>
      <p className="text-sm text-brume">
        Cette feuille n’est pas dans le classeur.
      </p>
      <Link
        href="/"
        className="etiquette mt-2 border border-encre px-7 py-4 transition-colors duration-300 hover:bg-encre hover:text-chaux"
      >
        Retour à l’accueil
      </Link>
    </section>
  );
}
