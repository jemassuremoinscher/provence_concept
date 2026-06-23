"use client";

import { useState } from "react";

// ▼ À BRANCHER : collez ici l'URL de votre formulaire (Brevo, Mailchimp, Formspree…).
//   Tant que c'est vide, le formulaire confirme visuellement sans envoyer de requête.
const ENDPOINT = "";

type Props = {
  /** Style "sombre" pour fond bleu (footer), sinon clair. */
  tone?: "light" | "dark";
  label?: string;
};

export function NewsletterForm({ tone = "light", label = "Votre e-mail" }: Props) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  const dark = tone === "dark";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setState("error");
      return;
    }
    setState("loading");
    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        if (!res.ok) throw new Error("bad status");
      }
      setState("done");
      setEmail("");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <p className={`text-sm ${dark ? "text-white/90" : "text-on-surface"}`} role="status">
        Merci — on vous prévient dès la sortie. 🌿
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-sm flex-col gap-2 sm:flex-row" noValidate>
      <label className="sr-only" htmlFor="newsletter-email">{label}</label>
      <input
        id="newsletter-email"
        type="email"
        autoComplete="email"
        placeholder={label}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (state === "error") setState("idle");
        }}
        className={`h-11 flex-1 rounded-full border px-4 text-sm outline-none transition-colors ${
          dark
            ? "border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:border-white"
            : "border-outline-variant bg-surface-lowest text-on-surface placeholder:text-on-surface-variant focus:border-primary"
        }`}
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className={`state h-11 shrink-0 rounded-full px-5 text-sm font-semibold disabled:opacity-50 ${
          dark ? "bg-white text-primary" : "bg-primary text-on-primary"
        }`}
      >
        {state === "loading" ? "…" : "Être prévenu"}
      </button>
      {state === "error" && (
        <span className={`text-xs ${dark ? "text-white/80" : "text-error"} sm:hidden`}>
          Adresse e-mail invalide.
        </span>
      )}
    </form>
  );
}
