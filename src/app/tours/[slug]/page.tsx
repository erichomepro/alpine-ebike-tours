import { Metadata } from "next";
import { notFound } from "next/navigation";
import { tours } from "@/data/tours";
import { TourDetailClient } from "./tour-detail-client";

interface TourPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({
  params,
}: TourPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug);
  if (!tour) return {};

  return {
    title: `${tour.name} — Guided E-Bike Tour`,
    description: `${tour.tagline}. ${tour.duration}, ${tour.distance}. From $${tour.price}/person. Includes e-bike, helmet, guide, and all gear. Book online today.`,
    openGraph: {
      title: `${tour.name} | Alpine E-Bike Tours`,
      description: tour.tagline,
      images: [
        {
          url: tour.heroImage,
          width: 1200,
          height: 630,
          alt: `${tour.name} — ${tour.tagline}`,
        },
      ],
      type: "website",
    },
  };
}

function getTourJsonLd(tour: (typeof tours)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name,
    description: tour.description,
    touristType: "Cyclists",
    offers: {
      "@type": "Offer",
      price: tour.price,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "TouristInformationCenter",
      name: "Alpine E-Bike Tours",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lake Louise",
        addressRegion: "AB",
        addressCountry: "CA",
      },
    },
    itinerary: {
      "@type": "ItemList",
      itemListElement: tour.highlights.map((h, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: h,
      })),
    },
  };
}

export default async function TourPage({ params }: TourPageProps) {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug);
  if (!tour) notFound();

  const relatedTours = tours.filter((t) => t.slug !== slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getTourJsonLd(tour)),
        }}
      />
      <TourDetailClient tour={tour} relatedTours={relatedTours} />
    </>
  );
}
