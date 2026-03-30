import { Metadata } from "next";
import { notFound } from "next/navigation";
import { trails, getTrailBySlug, getRelatedTrails } from "@/data/trails";
import { tours } from "@/data/tours";
import { TrailDetailContent } from "./trail-detail-content";

interface TrailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return trails.map((trail) => ({ slug: trail.slug }));
}

export async function generateMetadata({
  params,
}: TrailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const trail = getTrailBySlug(slug);

  if (!trail) {
    return { title: "Trail Not Found" };
  }

  return {
    title: `${trail.name} — E-Bike Trail Guide`,
    description: `${trail.name}: ${trail.distance}, ${trail.elevationGain} elevation, ${trail.difficulty} difficulty. ${trail.description.slice(0, 155)}...`,
    openGraph: {
      title: `${trail.name} — E-Bike Trail Guide | Alpine E-Bike Tours`,
      description: `Ride ${trail.name} on a premium e-bike. ${trail.distance}, ${trail.difficulty} difficulty, ${trail.duration}. Full trail guide with wildlife info, battery tips, and seasonal advice.`,
      images: [{ url: trail.heroImage, width: 1200, height: 630, alt: trail.name }],
    },
  };
}

export default async function TrailPage({ params }: TrailPageProps) {
  const { slug } = await params;
  const trail = getTrailBySlug(slug);

  if (!trail) {
    notFound();
  }

  const relatedTrails = getRelatedTrails(slug, 2);
  const linkedTour = tours.find((t) => t.trail === slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: trail.name,
    description: trail.description,
    touristType: "E-bike riders",
    itinerary: {
      "@type": "ItemList",
      itemListElement: trail.highlights.map((h, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: h,
      })),
    },
    offers: linkedTour
      ? {
          "@type": "Offer",
          price: linkedTour.price,
          priceCurrency: "CAD",
          url: `https://www.alpineebiketours.com/tours/${linkedTour.slug}`,
        }
      : undefined,
    provider: {
      "@type": "TouristInformationCenter",
      name: "Alpine E-Bike Tours",
      url: "https://www.alpineebiketours.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TrailDetailContent
        trail={trail}
        relatedTrails={relatedTrails}
        linkedTour={linkedTour}
      />
    </>
  );
}
