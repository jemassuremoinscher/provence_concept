type Variant = "accent" | "soon";

const variants: Record<Variant, string> = {
  accent: "bg-tertiary-container text-on-tertiary-container",
  soon: "bg-on-surface text-surface-lowest",
};

// La forme, la couleur et la typo sont fixes ; le positionnement reste au
// site d'appel via `className` — un badge superposé sur une image (coin
// absolu) et un badge en flux normal (au-dessus d'un titre) n'ont pas le
// même besoin de layout, seulement la même apparence.
export function Badge({
  children,
  variant = "accent",
  className = "",
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={`rounded-full px-3 py-1 label-lg font-bold uppercase tracking-wide shadow-e2 ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
