"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Battery, Weight, Ruler, ArrowRight } from "lucide-react";
import { bikes } from "@/data/bikes";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function BikesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary to-primary-light" />
        <div className="absolute inset-0 bg-[url('/images/tours/legacy-trail-hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <motion.p
            {...fadeUp}
            className="text-accent-light font-semibold tracking-wide uppercase text-sm"
          >
            Our Fleet
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-4 font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            Meet Your Ride
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
          >
            Premium e-bikes for every rider and every trail. From lightweight
            all-rounders to full-suspension trail machines.
          </motion.p>
        </div>
      </section>

      {/* Bikes Grid */}
      <section className="py-20 sm:py-28 px-4">
        <div className="mx-auto max-w-6xl space-y-16">
          {bikes.map((bike, i) => (
            <motion.div
              key={bike.slug}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className={cn(
                "grid gap-8 lg:gap-12 items-center",
                i % 2 === 0
                  ? "lg:grid-cols-[1fr_1.2fr]"
                  : "lg:grid-cols-[1.2fr_1fr]"
              )}
            >
              {/* Image placeholder */}
              <div
                className={cn(
                  "relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10",
                  i % 2 === 1 && "lg:order-2"
                )}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Zap className="h-12 w-12 text-primary/30" />
                    </div>
                    <p className="text-sm text-foreground/40 font-medium">
                      360° view coming soon
                    </p>
                  </div>
                </div>
                <span className="absolute top-4 left-4 rounded-full bg-accent text-white px-4 py-1.5 text-sm font-semibold">
                  {bike.type}
                </span>
              </div>

              {/* Content */}
              <div className={cn(i % 2 === 1 && "lg:order-1")}>
                <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-slate">
                  {bike.name}
                </h2>
                <p className="mt-4 text-foreground/70 leading-relaxed">
                  {bike.description}
                </p>

                {/* Key Specs */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-foreground/60">{bike.specs.motor.split("(")[0].trim()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Battery className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-foreground/60">{bike.specs.range}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Weight className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-foreground/60">{bike.specs.weight}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Ruler className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-foreground/60">{bike.specs.frameSize}</span>
                  </div>
                </div>

                {/* Best For */}
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground/40 mb-2">
                    Best for
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {bike.bestFor.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing + CTA */}
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <div>
                    <div className="text-sm text-foreground/50">Rental from</div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-primary">
                        ${bike.pricePerHalfDay}
                      </span>
                      <span className="text-foreground/50">/half-day</span>
                    </div>
                  </div>
                  <Link
                    href={`/bikes/${bike.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-accent hover:bg-accent-dark text-white px-6 py-3 font-semibold transition-colors"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Find Your Ride CTA */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.h2
            {...fadeUp}
            className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Not Sure Which Bike Is Right?
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-6 text-lg text-white/80 leading-relaxed"
          >
            Take our 60-second quiz and we&apos;ll match you with the perfect
            ride based on your experience, fitness level, and riding style.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-10"
          >
            <Link
              href="/bikes/find-your-ride"
              className="inline-block rounded-xl bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Find Your Ride
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
