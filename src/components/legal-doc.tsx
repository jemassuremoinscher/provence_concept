import type { ReactNode } from "react";

export function LegalDoc({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <article className="shell pt-10 pb-6">
      <div className="max-w-3xl">
        <span className="eyebrow text-primary">Informations légales</span>
        <h1 className="display-md mt-2 text-on-surface">{title}</h1>
        <p className="mt-3 text-sm text-on-surface-variant">Dernière mise à jour : {updated}</p>

        <div
          className="mt-10 leading-relaxed text-on-surface-variant
            [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-on-surface [&_h2]:mt-10 [&_h2]:mb-1
            [&_p]:mt-3 [&_a]:text-primary [&_a]:underline [&_strong]:font-semibold [&_strong]:text-on-surface
            [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5"
        >
          {children}
        </div>

        <p className="mt-12 rounded-lg bg-surface-low p-4 text-sm text-on-surface-variant">
          Les champs entre crochets <strong className="text-on-surface">[…]</strong> sont à compléter
          avec vos informations société avant la mise en ligne commerciale. Ce modèle ne remplace pas
          la validation d’un juriste.
        </p>
      </div>
    </article>
  );
}
