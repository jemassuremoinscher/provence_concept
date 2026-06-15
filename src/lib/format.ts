export function formatPrice(price: number | null, currency: "EUR" = "EUR"): string {
  if (price === null) return "Prix à venir";
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
  }).format(price);
}

export function categoryLabel(cat: string): string {
  switch (cat) {
    case "t-shirts":
      return "T-shirt";
    case "sweatshirts":
      return "Sweatshirt";
    case "polos":
      return "Polo";
    default:
      return cat;
  }
}
