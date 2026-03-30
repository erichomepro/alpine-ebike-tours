import { Metadata } from "next";
import { notFound } from "next/navigation";
import { bikes, getBikeBySlug, getRelatedBikes } from "@/data/bikes";
import { BikeDetailClient } from "./bike-detail-client";

interface BikePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return bikes.map((bike) => ({ slug: bike.slug }));
}

export async function generateMetadata({
  params,
}: BikePageProps): Promise<Metadata> {
  const { slug } = await params;
  const bike = getBikeBySlug(slug);
  if (!bike) return {};

  return {
    title: `${bike.name} — ${bike.type} E-Bike`,
    description: `${bike.description.slice(0, 155)}...`,
    openGraph: {
      title: `${bike.name} | Alpine E-Bike Tours Fleet`,
      description: `${bike.type} e-bike: ${bike.specs.range} range, ${bike.specs.weight}. Rental from $${bike.pricePerHalfDay}/half-day.`,
    },
  };
}

function getBikeJsonLd(bike: (typeof bikes)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: bike.name,
    description: bike.description,
    category: "E-Bike Rental",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: bike.pricePerHalfDay,
      highPrice: bike.pricePerFullDay,
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
    },
    brand: {
      "@type": "Brand",
      name: bike.name.split(" ")[0],
    },
  };
}

export default async function BikePage({ params }: BikePageProps) {
  const { slug } = await params;
  const bike = getBikeBySlug(slug);
  if (!bike) notFound();

  const relatedBikes = getRelatedBikes(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBikeJsonLd(bike)),
        }}
      />
      <BikeDetailClient bike={bike} relatedBikes={relatedBikes} />
    </>
  );
}
