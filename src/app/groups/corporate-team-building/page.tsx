import { type Metadata } from "next";
import { CorporateContent } from "./corporate-content";

export const metadata: Metadata = {
  title: "Corporate Team Building E-Bike Tours",
  description:
    "Build stronger teams on two wheels. Guided e-bike team building experiences in Banff and Canmore with zero fitness barriers, branded photos, and post-ride socials. Groups of 8+.",
  keywords: [
    "corporate team building Banff",
    "team building activities Canmore",
    "corporate retreat Canadian Rockies",
    "team building e-bike tours",
    "corporate events Banff",
    "outdoor team building Alberta",
  ],
  openGraph: {
    title: "Corporate Team Building on E-Bikes | Alpine E-Bike Tours",
    description:
      "Ditch the boardroom. Build real team bonds on guided e-bike rides through the Canadian Rockies. Half-day and full-day packages for groups of 8+.",
    url: "https://www.alpineebiketours.com/groups/corporate-team-building",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Alpine E-Bike Tours — Corporate Team Building",
  description:
    "Guided e-bike team building experiences in the Canadian Rockies. Half-day and full-day packages for corporate groups of 8+.",
  url: "https://www.alpineebiketours.com/groups/corporate-team-building",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Canmore",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.089,
    longitude: -115.38,
  },
  priceRange: "$150-$225 per person",
  areaServed: ["Canmore", "Banff", "Canadian Rockies"],
  openingHours: "Mo-Su 08:00-19:00",
  telephone: "+14035551234",
  image: "https://www.alpineebiketours.com/images/tours/legacy-trail-hero.jpg",
};

export default function CorporateTeamBuildingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CorporateContent />
    </>
  );
}
