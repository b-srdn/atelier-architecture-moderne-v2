"use client";

import { useState, type FormEvent } from "react";
import { AGENCE, INTERVENTIONS } from "@/lib/donnees";

/* 16 px minimum : en dessous, iOS Safari zoome automatiquement sur le champ. */
const CHAMP =
  "w-full rounded-none border border-liseret bg-transparent px-4 py-3 text-base text-encre placeholder:text-brume/50 transition-colors focus:border-encre focus:outline-none";

/**
 * Formulaire sans back-end : il compose un e-mail prérempli dans la
 * messagerie du visiteur (mailto), rien n'est stocké en ligne.
 */
export function Formulaire() {
  const [prepare, setPrepare] = useState(false);

  function envoyer(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const donnees = new FormData(e.currentTarget);
    const nom = String(donnees.get("nom") ?? "");
    const nature = String(donnees.get("nature") ?? "Projet");
    const sujet = `${nature} — demande de ${nom}`;
    const corps = [
      `Nom : ${nom}`,
      `Email : ${donnees.get("email")}`,
      donnees.get("telephone") ? `Téléphone : ${donnees.get("telephone")}` : "",
      donnees.get("commune") ? `Commune du projet : ${donnees.get("commune")}` : "",
      `Nature du projet : ${nature}`,
      "",
      String(donnees.get("message") ?? ""),
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${AGENCE.email}?subject=${encodeURIComponent(
      sujet,
    )}&body=${encodeURIComponent(corps)}`;
    setPrepare(true);
  }

  return (
    <form onSubmit={envoyer} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="etiquette text-brume">Nom *</span>
          <input name="nom" required autoComplete="name" className={CHAMP} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="etiquette text-brume">Email *</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={CHAMP}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="etiquette text-brume">Téléphone</span>
          <input
            name="telephone"
            type="tel"
            autoComplete="tel"
            className={CHAMP}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="etiquette text-brume">Commune du projet</span>
          <input name="commune" className={CHAMP} placeholder="Dijon, Côte-d’Or…" />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="etiquette text-brume">Nature du projet *</span>
        <select name="nature" required className={`${CHAMP} h-[3.05rem]`}>
          {INTERVENTIONS.map((it) => (
            <option key={it.nom} value={it.nom}>
              {it.nom}
            </option>
          ))}
          <option value="Autre">Autre</option>
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="etiquette text-brume">Votre projet *</span>
        <textarea
          name="message"
          required
          rows={6}
          className={`${CHAMP} resize-y`}
          placeholder="Le lieu, l’existant, ce que vous imaginez…"
        />
      </label>

      <button
        type="submit"
        className="etiquette mt-2 self-start border border-encre bg-encre px-7 py-4 text-chaux transition-colors duration-300 hover:bg-transparent hover:text-encre"
      >
        Préparer l’e-mail
      </button>

      <p aria-live="polite" className="text-xs text-brume">
        {prepare
          ? "Votre messagerie s’est ouverte avec le message prérempli. Il ne reste qu’à l’envoyer."
          : "Le bouton ouvre votre messagerie avec le message prérempli — rien n’est stocké en ligne."}
      </p>
    </form>
  );
}
