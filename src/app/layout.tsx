import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const heading = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alpine E-Bike Tours — Guided E-Bike Tours in the Canadian Rockies",
    template: "%s | Alpine E-Bike Tours",
  },
  description:
    "Experience the Canadian Rockies on premium guided e-bike tours. No experience needed. Explore Banff, Canmore, and the Legacy Trail with expert local guides. Book online today.",
  keywords: [
    "e-bike tours Banff",
    "e-bike tours Canmore",
    "guided e-bike tours Canadian Rockies",
    "e-bike rental Banff",
    "e-bike rental Canmore",
    "Legacy Trail e-bike",
    "electric bike tours Alberta",
  ],
  authors: [{ name: "Alpine E-Bike Tours" }],
  creator: "Alpine E-Bike Tours",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.alpineebiketours.com",
    siteName: "Alpine E-Bike Tours",
    title: "Alpine E-Bike Tours — Ride the Canadian Rockies",
    description:
      "Guided e-bike tours through Banff and Canmore. No fitness required. Stunning mountain scenery, expert guides, all gear included.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "E-bike riders on the Legacy Trail with Canadian Rocky Mountains in the background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpine E-Bike Tours — Ride the Canadian Rockies",
    description:
      "Guided e-bike tours through Banff and Canmore. No fitness required.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.alpineebiketours.com/#organization",
  name: "Alpine E-Bike Tours",
  description:
    "Guided e-bike tours through the Canadian Rockies. Experience Banff, Canmore, and the Legacy Trail with expert local guides. No experience needed.",
  url: "https://www.alpineebiketours.com",
  telephone: "+14035551234",
  email: "info@alpineebiketours.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Canmore",
    addressRegion: "AB",
    postalCode: "T1W",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.089,
    longitude: -115.358,
  },
  areaServed: [
    { "@type": "City", name: "Canmore" },
    { "@type": "City", name: "Banff" },
    { "@type": "City", name: "Lake Louise" },
    { "@type": "City", name: "Calgary" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "19:00",
      validFrom: "2026-05-01",
      validThrough: "2026-10-31",
    },
  ],
  priceRange: "$175-$249",
  additionalType: [
    "https://schema.org/TouristAttraction",
    "https://schema.org/SportsActivityLocation",
  ],
  sameAs: [
    "https://facebook.com/alpineebiketours",
    "https://instagram.com/alpineebiketours",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${heading.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
