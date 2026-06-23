import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "@/components/cart/cart-context";
import { AppBar } from "@/components/app-bar";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart/cart-drawer";

// Polices auto-hébergées (variable, sous-ensemble latin) — aucune requête externe.
const display = localFont({
  src: "../fonts/HankenGrotesk.woff2",
  weight: "400 800",
  variable: "--font-display",
  display: "swap",
});

const sans = localFont({
  src: "../fonts/Inter.woff2",
  weight: "400 700",
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://provence-concept.vercel.app"; // ← remplacez par votre domaine final

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Provence Concept — Le Sud, à porter",
    template: "%s · Provence Concept",
  },
  description:
    "Vêtements imaginés en Provence : t-shirts, sweatshirts et bientôt polos. Coupe nette, matières qui durent, esprit méditerranéen.",
  keywords: ["Provence", "t-shirt", "sweatshirt", "polo", "vêtements", "mode", "méditerranée", "made in France"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Provence Concept",
    title: "Provence Concept — Le Sud, à porter",
    description: "T-shirts, sweatshirts et bientôt polos, imaginés en Provence.",
    images: ["/picto-blue.png"],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [{ url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/favicon-180.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#3c8dcc",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Brand",
  name: "Provence Concept",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-blue.png`,
  slogan: "Le Sud, à porter.",
  description:
    "Marque de vêtements imaginée en Provence : t-shirts, sweatshirts et bientôt polos.",
  // ▼ Renseignez vos profils réels (Instagram, TikTok…) pour la clarté d'entité (SEO/GEO).
  sameAs: [] as string[],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body>
        {/* Set .js before first paint so the CSS entrance reveal only arms when
            JS is present. No-JS / crawlers keep content fully visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <CartProvider>
          <a
            href="#contenu"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-on-primary"
          >
            Aller au contenu
          </a>
          <AppBar />
          <main id="contenu">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
