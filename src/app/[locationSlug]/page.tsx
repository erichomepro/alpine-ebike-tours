import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { locations, getLocationBySlug } from "@/data/locations";
import { LocationPageClient } from "./location-page-client";

interface LocationPageProps {
  params: Promise<{ locationSlug: string }>;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({ locationSlug: loc.slug }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);
  if (!location) return {};

  return {
    title: location.title,
    description: location.description,
    openGraph: {
      title: location.title,
      description: location.description,
      type: "website",
      locale: "en_CA",
      url: `https://www.alpineebiketours.com/${location.slug}`,
      siteName: "Alpine E-Bike Tours",
    },
    alternates: {
      canonical: `https://www.alpineebiketours.com/${location.slug}`,
    },
  };
}

function getLocalBusinessSchema(location: ReturnType<typeof getLocationBySlug>) {
  if (!location) return null;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.alpineebiketours.com/#${location.slug}`,
    name: "Alpine E-Bike Tours",
    description: location.description,
    url: `https://www.alpineebiketours.com/${location.slug}`,
    telephone: "+1-403-000-0000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Canmore",
      addressRegion: "AB",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    areaServed: {
      "@type": "City",
      name: location.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: location.region,
      },
    },
    priceRange: "$69 - $249",
    openingHoursSpecification: {
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
      closes: "18:00",
    },
  };
}

function getFAQSchema(location: ReturnType<typeof getLocationBySlug>) {
  if (!location) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { locationSlug } = await params;

  // Only render for known location slugs (avoids catching other routes)
  const location = getLocationBySlug(locationSlug);
  if (!location) notFound();

  const localBusinessSchema = getLocalBusinessSchema(location);
  const faqSchema = getFAQSchema(location);

  return (
    <>
      {localBusinessSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}
      <LocationPageClient location={location} />
    </>
  );
}
