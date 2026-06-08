import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Pinyon_Script } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const script = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

const siteUrl = "https://west-prime-hotel.vercel.app";

const metaDescription =
  "West Prime Hotel & Restaurant in Calbayog City, Samar — comfortable rooms from ₱2,200/night on the Pan-Philippine Highway, Brgy. Capoocan, in front of the Calbayog Convention Center. Beloved Filipino dining, 15 minutes from Calbayog Airport.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "West Prime Hotel & Restaurant — Calbayog City, Samar",
    template: "%s · West Prime Hotel",
  },
  description: metaDescription,
  keywords: [
    "West Prime Hotel",
    "Calbayog City hotel",
    "Samar hotel",
    "West Prime Restaurant",
    "Calbayog restaurant",
    "hotel near Calbayog Airport",
    "Pan-Philippine Highway hotel",
    "Maharlika Highway Calbayog",
    "Brgy. Capoocan hotel",
    "Calbayog Convention Center",
  ],
  authors: [{ name: "West Prime Hotel & Restaurant" }],
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: siteUrl,
    siteName: "West Prime Hotel & Restaurant",
    title: "West Prime Hotel & Restaurant — Calbayog City, Samar",
    description: metaDescription,
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "West Prime Hotel & Restaurant — Calbayog City, Samar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "West Prime Hotel & Restaurant — Calbayog City, Samar",
    description: metaDescription,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%231C1A17'/%3E%3Ctext x='16' y='22' font-family='Georgia,serif' font-size='16' fill='%23C0A05C' text-anchor='middle'%3EW%3C/text%3E%3C/svg%3E",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${script.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
