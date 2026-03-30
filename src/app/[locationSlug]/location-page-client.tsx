"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Star,
  ArrowRight,
  ChevronDown,
  Mountain,
  Bike,
  Route,
  Zap,
  Users,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { tours } from "@/data/tours";
import { trails } from "@/data/trails";
import { TourCard } from "@/components/tours/tour-card";
import type { Location } from "@/data/locations";
import type { Trail } from "@/types";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

interface LocationPageClientProps {
  location: Location;
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

function LocationHero({ location }: { location: Location }) {
  const isTours = location.type === "tours";

  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Decorative mountain silhouette */}
      <div className="absolute inset-0 opacity-10">
        <svg
          viewBox="0 0 1440 400"
          fill="none"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 400L120 350L240 380L360 300L480 340L600 280L720 320L840 260L960 310L1080 240L1200 290L1320 220L1440 270L1440 400Z"
            fill="currentColor"
            className="text-white"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            {isTours ? (
              <Link
                href="/tours"
                className="hover:text-white transition-colors"
              >
                Tours
              </Link>
            ) : (
              <Link
                href="/rentals"
                className="hover:text-white transition-colors"
              >
                Rentals
              </Link>
            )}
            <span>/</span>
            <span className="text-white/80">{location.city}</span>
          </nav>

          <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {location.heroHeading}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            {location.heroSubtext}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Book Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            {isTours && (
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-colors backdrop-blur-sm"
              >
                View All Tours
              </Link>
            )}
            {!isTours && (
              <Link
                href="/rentals"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-colors backdrop-blur-sm"
              >
                View Rental Options
              </Link>
            )}
          </div>

          {/* Quick stats */}
          <div className="mt-10 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="h-5 w-5 text-accent" />
              <span>{location.region}</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Calendar className="h-5 w-5 text-accent" />
              <span>May — October</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Users className="h-5 w-5 text-accent" />
              <span>Small groups (max 8)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Unique Content                                                            */
/* -------------------------------------------------------------------------- */

function UniqueContent({ location }: { location: Location }) {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Mountain className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-slate">
              {location.type === "tours"
                ? `E-Biking in ${location.city}`
                : `E-Bike Rental in ${location.city}`}
            </h2>
          </div>
        </motion.div>

        <div className="space-y-6">
          {location.uniqueContent.map((paragraph, i) => (
            <motion.p
              key={i}
              className="text-foreground/70 leading-relaxed text-lg"
              {...stagger}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Related Tours                                                             */
/* -------------------------------------------------------------------------- */

function RelatedTours({ location }: { location: Location }) {
  const relatedTours = tours.filter((t) =>
    location.nearbyTours.includes(t.slug)
  );

  if (relatedTours.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Bike className="h-4 w-4" />
            {location.type === "tours"
              ? `Tours in ${location.city}`
              : `Recommended Tours`}
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-slate">
            {location.type === "tours"
              ? `Guided E-Bike Tours Near ${location.city}`
              : `Pair Your Rental With a Guided Tour`}
          </h2>
          <p className="mt-4 text-foreground/60 max-w-2xl mx-auto">
            {location.type === "tours"
              ? `Expert-led rides through the best trails around ${location.city}. All gear included, no experience needed.`
              : `Want a guide to show you the best routes? These tours depart from our Canmore shop.`}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedTours.map((tour, i) => (
            <TourCard key={tour.slug} tour={tour} index={i} />
          ))}
        </div>

        <motion.div {...fadeUp} className="text-center mt-10">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View all tours
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Related Trails                                                            */
/* -------------------------------------------------------------------------- */

function TrailCard({ trail, index }: { trail: Trail; index: number }) {
  const difficultyColors = {
    easy: "bg-green-100 text-green-800",
    moderate: "bg-blue-100 text-blue-800",
    challenging: "bg-gray-900 text-white",
  };

  return (
    <motion.div
      {...stagger}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/trails/${trail.slug}`}
        className="group block bg-cream rounded-2xl p-6 hover:shadow-lg transition-all duration-300 h-full"
      >
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-[var(--font-heading)] text-xl font-semibold text-slate group-hover:text-primary transition-colors">
            {trail.name}
          </h3>
          <span
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold shrink-0 ml-3",
              difficultyColors[trail.difficulty]
            )}
          >
            {trail.difficulty.charAt(0).toUpperCase() +
              trail.difficulty.slice(1)}
          </span>
        </div>

        <p className="text-foreground/60 text-sm line-clamp-2 mb-4">
          {trail.description.split(".").slice(0, 2).join(".") + "."}
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-foreground/50">
          <span className="flex items-center gap-1">
            <Route className="h-4 w-4" />
            {trail.distance}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {trail.duration}
          </span>
          <span className="flex items-center gap-1">
            <Zap className="h-4 w-4" />
            {trail.batteryUsage} battery
          </span>
        </div>

        <div className="mt-4 flex items-center gap-1 text-primary text-sm font-semibold opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          View trail details
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </Link>
    </motion.div>
  );
}

function RelatedTrails({ location }: { location: Location }) {
  const relatedTrails = trails.filter((t) =>
    location.nearbyTrails.includes(t.slug)
  );

  if (relatedTrails.length === 0) return null;

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Route className="h-4 w-4" />
            Nearby Trails
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-slate">
            Trails Near {location.city}
          </h2>
          <p className="mt-4 text-foreground/60 max-w-2xl mx-auto">
            Explore the best e-bike trails accessible from {location.city}. All
            trails are e-bike friendly and approved for pedal-assist bikes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {relatedTrails.map((trail, i) => (
            <TrailCard key={trail.slug} trail={trail} index={i} />
          ))}
        </div>

        <motion.div {...fadeUp} className="text-center mt-10">
          <Link
            href="/trails"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View all trails
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FAQs                                                                      */
/* -------------------------------------------------------------------------- */

function FAQItem({
  faq,
  index,
}: {
  faq: { question: string; answer: string };
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      {...stagger}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-b border-cream-dark last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <h3 className="font-semibold text-slate group-hover:text-primary transition-colors text-lg">
          {faq.question}
        </h3>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-foreground/40 shrink-0 mt-1 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-foreground/60 leading-relaxed">{faq.answer}</p>
      </div>
    </motion.div>
  );
}

function LocationFAQs({ location }: { location: Location }) {
  if (location.faqs.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-12">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-slate">
            {location.city} E-Bike FAQ
          </h2>
          <p className="mt-4 text-foreground/60">
            Common questions about{" "}
            {location.type === "tours"
              ? `e-bike tours in ${location.city}`
              : `e-bike rentals in ${location.city}`}
          </p>
        </motion.div>

        <div className="bg-cream rounded-2xl px-6 md:px-8">
          {location.faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CTA                                                                       */
/* -------------------------------------------------------------------------- */

function LocationCTA({ location }: { location: Location }) {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeUp}>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-white">
            {location.type === "tours"
              ? `Ready to Ride in ${location.city}?`
              : `Rent Your E-Bike for ${location.city}`}
          </h2>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            {location.type === "tours"
              ? `Book your guided e-bike tour and experience the Canadian Rockies like never before. All equipment included, no experience needed.`
              : `Pick up a premium e-bike from our Canmore shop and explore ${location.city} at your own pace. Helmets, locks, and trail maps included.`}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              {location.type === "tours" ? "Book a Tour" : "Reserve a Bike"}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors backdrop-blur-sm"
            >
              Ask a Question
            </Link>
          </div>

          <p className="mt-6 text-white/50 text-sm">
            Free cancellation up to 48 hours before your tour
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main Component                                                            */
/* -------------------------------------------------------------------------- */

export function LocationPageClient({ location }: LocationPageClientProps) {
  return (
    <>
      <LocationHero location={location} />
      <UniqueContent location={location} />
      <RelatedTours location={location} />
      <RelatedTrails location={location} />
      <LocationFAQs location={location} />
      <LocationCTA location={location} />
    </>
  );
}
