import { LinkButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="shell grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="display-lg text-primary">404</p>
        <h1 className="headline mt-2 text-on-surface">Cette page a pris le large.</h1>
        <p className="mx-auto mt-3 max-w-md text-on-surface-variant">
          La pièce que vous cherchez n&apos;existe pas (ou plus). Revenez à la collection.
        </p>
        <div className="mt-8">
          <LinkButton href="/boutique" size="lg">Retour à la boutique</LinkButton>
        </div>
      </div>
    </div>
  );
}
