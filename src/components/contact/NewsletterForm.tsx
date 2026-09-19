"use client";

import { FormEvent, useState } from "react";

const inputClass =
  "w-full rounded-xl border border-olive/30 bg-cream px-4 py-3 text-text outline-none focus:border-accent/50 focus:ring-2 focus:ring-soft-pink";

export function NewsletterForm() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <div className="rounded-[2rem] border border-olive/25 bg-gradient-to-br from-surface to-soft/60 p-8">
      <h3 className="font-display text-xl font-medium text-dark">
        Newsletter Aliplus
      </h3>
      <p className="mt-2 text-sm text-muted">
        Actualités, études de cas et invitations salons.
      </p>
      {done ? (
        <p className="mt-6 text-sm font-medium text-forest">
          Votre abonnement a été pris en compte. Merci !
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 space-y-3">
          <input className={inputClass} placeholder="Prénom" required />
          <input className={inputClass} placeholder="Nom" required />
          <input
            type="email"
            className={inputClass}
            placeholder="E-mail"
            required
          />
          <button
            type="submit"
            className="w-full rounded-full bg-accent py-3 text-sm font-medium text-white transition hover:bg-accent-deep"
          >
            Je m&apos;inscris
          </button>
        </form>
      )}
    </div>
  );
}
