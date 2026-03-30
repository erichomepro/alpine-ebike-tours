"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Mountain,
  Clock,
  Gauge,
  Battery,
  Footprints,
  Eye,
  PawPrint,
  Calendar,
  Backpack,
  Zap,
  ArrowRight,
  Map,
  Sun,
  Leaf,
  Snowflake,
  Flower2,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Trail, Tour } from "@/types";
import { TrailCard } from "@/components/trails/trail-card";

const difficultyBadge = {
  easy: "bg-green-100 text-green-800 border-green-200",
  moderate: "bg-blue-100 text-blue-800 border-blue-200",
  challenging: "bg-gray-900 text-white border-gray-700",
};

const seasonalInfo = [
  {
    icon: Flower2,
    season: "Spring (May-Jun)",
    note: "Trails opening, some muddy sections. Wildflowers starting.",
    color: "text-green-600",
  },
  {
    icon: Sun,
    season: "Summer (Jul-Aug)",
    note: "Peak conditions. All trails open, long days, warm.",
    color: "text-amber-600",
  },
  {
    icon: Leaf,
    season: "Fall (Sep-Oct)",
    note: "Golden larches, fewer crowds, crisp riding weather.",
    color: "text-orange-600",
  },
  {
    icon: Snowflake,
    season: "Winter (Nov-Apr)",
    note: "Snow-covered. Fat biking only on select routes.",
    color: "text-blue-500",
  },
];

const gearChecklist = [
  "Helmet (provided on guided tours)",
  "Water bottle (1L minimum)",
  "Sunscreen and sunglasses",
  "Layers — mountain weather changes fast",
  "Rain jacket (even on sunny days)",
  "Bear spray (seasonal — provided on tours)",
  "Snacks or energy bars",
  "Phone with offline map downloaded",
  "Small first-aid kit",
];

interface TrailDetailContentProps {
  trail: Trail;
  relatedTrails: Trail[];
  linkedTour?: Tour;
}

export function TrailDetailContent({
  trail,
  relatedTrails,
  linkedTour,
}: TrailDetailContentProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={trail.heroImage}
          alt={`${trail.name} trail in the Canadian Rockies`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className={cn(
                  "inline-block rounded-full px-4 py-1.5 text-sm font-semibold border mb-4",
                  difficultyBadge[trail.difficulty]
                )}
              >
                {trail.difficulty.charAt(0).toUpperCase() +
                  trail.difficulty.slice(1)}
              </span>
              <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                {trail.name}
              </h1>
              <p className="mt-2 text-lg text-white/80">{trail.season}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-white border-b border-cream-dark sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-4 text-sm">
            <StatItem icon={MapPin} label="Distance" value={trail.distance} />
            <StatItem
              icon={Mountain}
              label="Elevation"
              value={trail.elevationGain}
            />
            <StatItem
              icon={Gauge}
              label="Difficulty"
              value={
                trail.difficulty.charAt(0).toUpperCase() +
                trail.difficulty.slice(1)
              }
              valueClassName={
                trail.difficulty === "easy"
                  ? "text-green-700"
                  : trail.difficulty === "moderate"
                    ? "text-blue-700"
                    : "text-gray-900"
              }
            />
            <StatItem icon={Clock} label="Duration" value={trail.duration} />
            <StatItem
              icon={Battery}
              label="Battery"
              value={trail.batteryUsage}
            />
            <StatItem
              icon={Footprints}
              label="Surface"
              value={trail.surface}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Column — Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-slate mb-4">
                About This Trail
              </h2>
              <p className="text-foreground/70 leading-relaxed text-lg">
                {trail.description}
              </p>
            </motion.section>

            {/* Highlights */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-slate mb-4 flex items-center gap-2">
                <Eye className="h-6 w-6 text-accent" />
                What You Will See
              </h2>
              <ul className="space-y-3">
                {trail.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/70">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Wildlife */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-slate mb-4 flex items-center gap-2">
                <PawPrint className="h-6 w-6 text-accent" />
                Wildlife Notes
              </h2>
              <ul className="space-y-3">
                {trail.wildlife.map((note, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary font-bold shrink-0">
                      {i + 1}.
                    </span>
                    <span className="text-foreground/70">{note}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Seasonal Guide */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-slate mb-4 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-accent" />
                Seasonal Guide
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {seasonalInfo.map((s) => (
                  <div
                    key={s.season}
                    className="rounded-xl border border-cream-dark p-4 bg-white"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <s.icon className={cn("h-5 w-5", s.color)} />
                      <span className="font-semibold text-slate text-sm">
                        {s.season}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/60">{s.note}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Battery Info */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-[var(--font-heading)] text-2xl font-bold text-slate mb-4 flex items-center gap-2">
                <Zap className="h-6 w-6 text-accent" />
                Battery Information
              </h2>
              <div className="rounded-xl border border-cream-dark bg-white p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Battery className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold text-slate">
                      Estimated Battery Usage
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {trail.batteryUsage}
                    </p>
                  </div>
                </div>
                <div className="border-t border-cream-dark pt-4 space-y-2 text-sm text-foreground/70">
                  <p>
                    Battery estimates are based on Eco mode with moderate pedal
                    assist on our Specialized Turbo Vado SL fleet.
                  </p>
                  <p>
                    <strong>Tips:</strong> Use Eco mode on flat sections and save
                    Turbo for climbs. Headwinds and cold weather reduce range by
                    10-20%. Our guides carry a spare battery on longer tours.
                  </p>
                  <p>
                    <strong>Range anxiety?</strong> Our e-bikes have 120+ km
                    range in Eco mode. Even the longest trails leave plenty of
                    charge.
                  </p>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Right Column — Sidebar */}
          <div className="space-y-8">
            {/* Book CTA */}
            {linkedTour && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-primary p-6 text-white"
              >
                <h3 className="font-[var(--font-heading)] text-xl font-bold mb-2">
                  Book a Tour on This Trail
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {linkedTour.tagline}
                </p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold">
                    ${linkedTour.price}
                  </span>
                  <span className="text-white/60">/person</span>
                </div>
                <Link
                  href={`/tours/${linkedTour.slug}`}
                  className={cn(
                    "block w-full text-center rounded-full px-6 py-3",
                    "bg-accent text-white font-semibold",
                    "hover:bg-accent-dark transition-colors",
                    "min-h-[46px]"
                  )}
                >
                  View Tour Details
                  <ArrowRight className="inline-block ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            )}

            {/* No linked tour fallback */}
            {!linkedTour && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-primary p-6 text-white"
              >
                <h3 className="font-[var(--font-heading)] text-xl font-bold mb-2">
                  Ride This Trail
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Browse our guided tours or rent an e-bike to explore this trail
                  on your own.
                </p>
                <Link
                  href="/tours"
                  className={cn(
                    "block w-full text-center rounded-full px-6 py-3 mb-3",
                    "bg-accent text-white font-semibold",
                    "hover:bg-accent-dark transition-colors",
                    "min-h-[46px]"
                  )}
                >
                  Browse Tours
                </Link>
                <Link
                  href="/rentals"
                  className={cn(
                    "block w-full text-center rounded-full px-6 py-3",
                    "border-2 border-white/30 text-white font-semibold",
                    "hover:bg-white/10 transition-colors",
                    "min-h-[46px]"
                  )}
                >
                  Rent an E-Bike
                </Link>
              </motion.div>
            )}

            {/* Trail Map Link */}
            <div className="rounded-2xl border border-cream-dark bg-white p-6">
              <h3 className="font-[var(--font-heading)] text-lg font-bold text-slate mb-3 flex items-center gap-2">
                <Map className="h-5 w-5 text-primary" />
                Trail Map
              </h3>
              <p className="text-sm text-foreground/60 mb-4">
                View this trail and all others on our interactive map.
              </p>
              <Link
                href="/trails/map"
                className={cn(
                  "block w-full text-center rounded-full px-6 py-3",
                  "border-2 border-primary text-primary font-semibold",
                  "hover:bg-primary hover:text-white transition-colors",
                  "min-h-[46px]"
                )}
              >
                Open Trail Map
              </Link>
            </div>

            {/* Gear Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-cream-dark bg-white p-6"
            >
              <h3 className="font-[var(--font-heading)] text-lg font-bold text-slate mb-3 flex items-center gap-2">
                <Backpack className="h-5 w-5 text-primary" />
                What to Bring
              </h3>
              <ul className="space-y-2">
                {gearChecklist.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-foreground/70"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary/60 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Related Trails */}
      {relatedTrails.length > 0 && (
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-[var(--font-heading)] text-3xl font-bold text-slate mb-8 text-center">
              Related Trails
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
              {relatedTrails.map((t, i) => (
                <TrailCard key={t.slug} trail={t} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function StatItem({
  icon: Icon,
  label,
  value,
  valueClassName,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <Icon className="h-4 w-4 text-primary/60 shrink-0" />
      <span className="text-foreground/50">{label}:</span>
      <span className={cn("font-semibold text-slate", valueClassName)}>
        {value}
      </span>
    </div>
  );
}
