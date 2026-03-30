"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  Battery,
  Gauge,
  Weight,
  Ruler,
  ArrowRight,
  Check,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Bike } from "@/types";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

interface BikeDetailClientProps {
  bike: Bike;
  relatedBikes: Bike[];
}

export function BikeDetailClient({ bike, relatedBikes }: BikeDetailClientProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary to-primary-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            {/* Left — Info */}
            <motion.div {...fadeUp}>
              <span className="inline-block rounded-full bg-accent text-white px-4 py-1.5 text-sm font-semibold mb-4">
                {bike.type}
              </span>
              <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold text-white leading-tight">
                {bike.name}
              </h1>
              <p className="mt-4 text-lg text-white/80 leading-relaxed">
                {bike.description}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div>
                  <div className="text-sm text-white/50">Rental from</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">
                      ${bike.pricePerHalfDay}
                    </span>
                    <span className="text-white/60">/half-day</span>
                  </div>
                </div>
                <Link
                  href={`/book?bike=${bike.slug}`}
                  className="rounded-xl bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Book This Bike
                </Link>
              </div>
            </motion.div>

            {/* Right — Image placeholder / 360 viewer area */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <Zap className="h-10 w-10 text-white/30" />
                  </div>
                  <p className="text-sm text-white/40 font-medium">
                    360° interactive viewer
                  </p>
                  <p className="text-xs text-white/30 mt-1">Coming soon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specs Table */}
      <section className="py-16 sm:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            {...fadeUp}
            className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-slate mb-8 text-center"
          >
            Specifications
          </motion.h2>
          <motion.div
            {...fadeUp}
            className="rounded-2xl bg-white border border-cream-dark overflow-hidden"
          >
            {[
              { icon: Zap, label: "Motor", value: bike.specs.motor },
              { icon: Battery, label: "Battery", value: bike.specs.battery },
              { icon: Star, label: "Range", value: bike.specs.range },
              { icon: Gauge, label: "Max Speed", value: bike.specs.maxSpeed },
              { icon: Weight, label: "Weight", value: bike.specs.weight },
              { icon: Ruler, label: "Frame Sizes", value: bike.specs.frameSize },
            ].map((spec, i) => (
              <div
                key={spec.label}
                className={cn(
                  "flex items-center gap-4 px-6 py-4",
                  i < 5 && "border-b border-cream-dark"
                )}
              >
                <spec.icon className="h-5 w-5 text-primary shrink-0" />
                <span className="w-32 text-sm font-semibold text-slate shrink-0">
                  {spec.label}
                </span>
                <span className="text-foreground/70">{spec.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Best For */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            {...fadeUp}
            className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-slate mb-8 text-center"
          >
            Best For
          </motion.h2>
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {bike.bestFor.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 rounded-xl bg-cream border border-cream-dark"
              >
                <Check className="h-5 w-5 text-primary shrink-0" />
                <span className="font-medium text-slate">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-20 px-4">
        <div className="mx-auto max-w-2xl">
          <motion.h2
            {...fadeUp}
            className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-slate mb-8 text-center"
          >
            Rental Pricing
          </motion.h2>
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="rounded-2xl bg-white border border-cream-dark p-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-foreground/40">
                Half Day
              </p>
              <p className="mt-2 text-4xl font-bold text-primary">
                ${bike.pricePerHalfDay}
              </p>
              <p className="mt-1 text-sm text-foreground/50">4 hours</p>
              <Link
                href={`/book?bike=${bike.slug}&duration=half-day`}
                className="mt-6 block w-full rounded-xl bg-accent hover:bg-accent-dark text-white py-3 font-semibold transition-colors"
              >
                Book Half Day
              </Link>
            </div>
            <div className="rounded-2xl bg-primary text-white p-8 text-center relative overflow-hidden">
              <span className="absolute top-3 right-3 rounded-full bg-accent px-3 py-1 text-xs font-bold">
                Best Value
              </span>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
                Full Day
              </p>
              <p className="mt-2 text-4xl font-bold text-white">
                ${bike.pricePerFullDay}
              </p>
              <p className="mt-1 text-sm text-white/60">8 hours</p>
              <Link
                href={`/book?bike=${bike.slug}&duration=full-day`}
                className="mt-6 block w-full rounded-xl bg-accent hover:bg-accent-dark text-white py-3 font-semibold transition-colors"
              >
                Book Full Day
              </Link>
            </div>
          </motion.div>
          <p className="text-center text-xs text-foreground/40 mt-4">
            All rentals include helmet, lock, trail map, and safety briefing.
          </p>
        </div>
      </section>

      {/* Related Bikes */}
      {relatedBikes.length > 0 && (
        <section className="py-16 sm:py-20 px-4 bg-white">
          <div className="mx-auto max-w-4xl">
            <motion.h2
              {...fadeUp}
              className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-slate mb-8 text-center"
            >
              Other Bikes in Our Fleet
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {relatedBikes.map((b, i) => (
                <motion.div
                  key={b.slug}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                >
                  <Link
                    href={`/bikes/${b.slug}`}
                    className="group block rounded-2xl bg-cream border border-cream-dark overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative aspect-[16/10] bg-gradient-to-br from-primary/10 to-accent/10">
                      <span className="absolute top-4 left-4 rounded-full bg-accent text-white px-3 py-1 text-xs font-semibold">
                        {b.type}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-[var(--font-heading)] text-lg font-bold text-slate group-hover:text-primary transition-colors">
                        {b.name}
                      </h3>
                      <p className="mt-2 text-sm text-foreground/60 line-clamp-2">
                        {b.description.slice(0, 120)}...
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">
                          From ${b.pricePerHalfDay}/half-day
                        </span>
                        <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.h2
            {...fadeUp}
            className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white leading-tight"
          >
            Ready to Ride the {bike.name}?
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-6 text-lg text-white/80 leading-relaxed"
          >
            Book a guided tour or rent this bike for a self-guided adventure
            through the Canadian Rockies.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/tours"
              className="rounded-xl bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 min-w-[200px]"
            >
              Browse Tours
            </Link>
            <Link
              href={`/book?bike=${bike.slug}`}
              className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 min-w-[200px]"
            >
              Rent This Bike
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
