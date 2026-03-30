"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Map,
  Sun,
  Leaf,
  Snowflake,
  Flower2,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { trails } from "@/data/trails";
import { TrailCard } from "@/components/trails/trail-card";

const seasonCards = [
  {
    icon: Flower2,
    season: "Spring",
    months: "May — June",
    description:
      "Trails open as snow melts. Wildflowers begin, rivers run high. Cooler temps ideal for e-biking.",
    conditions: "Some muddy sections early season. Bring layers.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Sun,
    season: "Summer",
    months: "July — August",
    description:
      "Peak season. Long days, warm temps, all trails fully open. Wildflowers in full bloom.",
    conditions: "Best riding conditions. Book tours early — high demand.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Leaf,
    season: "Fall",
    months: "September — October",
    description:
      "Golden larch season. Fewer crowds, crisp air, stunning autumn colours across the valley.",
    conditions: "Cooler mornings. Some trails close late October.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Snowflake,
    season: "Winter",
    months: "November — April",
    description:
      "Most trails are snow-covered and closed to cycling. Fat biking available on select routes.",
    conditions: "Limited options. Contact us for winter fat bike tours.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
];

export default function TrailsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/trails/trails-hero-bg.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
          >
            Explore Our Trails
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-white/80"
          >
            From the iconic Legacy Trail to hidden singletrack through montane
            forest — discover the best e-bike trails in the Canadian Rockies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              href="/trails/map"
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-6 py-3",
                "bg-accent text-white font-semibold",
                "hover:bg-accent-dark transition-colors",
                "min-h-[46px]"
              )}
            >
              <Map className="h-5 w-5" />
              View All Trails on Map
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trail Cards Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
            Trail Guide
          </h2>
          <p className="mt-4 text-foreground/60 max-w-xl mx-auto">
            Every trail has been tested and rated for e-bikes. Tap any trail to
            see the full guide with maps, wildlife info, and battery tips.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trails.map((trail, i) => (
            <TrailCard key={trail.slug} trail={trail} index={i} />
          ))}
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              When to Ride
            </h2>
            <p className="mt-4 text-foreground/60 max-w-xl mx-auto">
              The Canadian Rockies are a four-season destination, but e-biking
              peaks from May to October. Here is what to expect.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {seasonCards.map((card, i) => (
              <motion.div
                key={card.season}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={cn(
                  "rounded-2xl p-6 border border-cream-dark",
                  card.bg
                )}
              >
                <card.icon className={cn("h-8 w-8 mb-4", card.color)} />
                <h3 className="font-[var(--font-heading)] text-xl font-semibold text-slate">
                  {card.season}
                </h3>
                <p className="text-sm font-medium text-foreground/50 mt-1">
                  {card.months}
                </p>
                <p className="mt-3 text-sm text-foreground/70">
                  {card.description}
                </p>
                <p className="mt-3 text-xs text-foreground/50 italic">
                  {card.conditions}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
          Ready to Ride?
        </h2>
        <p className="mt-4 text-foreground/60 max-w-lg mx-auto">
          Our guided tours include e-bike, helmet, snacks, and an expert local
          guide. No experience needed.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/tours"
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-8 py-3",
              "bg-primary text-white font-semibold",
              "hover:bg-primary-dark transition-colors",
              "min-h-[46px]"
            )}
          >
            Browse Guided Tours
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/trails/map"
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-8 py-3",
              "border-2 border-primary text-primary font-semibold",
              "hover:bg-primary hover:text-white transition-colors",
              "min-h-[46px]"
            )}
          >
            <Map className="h-4 w-4" />
            View Trail Map
          </Link>
        </div>
      </section>
    </>
  );
}
