"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  Check,
  MapPin,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { bikes } from "@/data/bikes";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const rentalOptions = [
  {
    name: "Half Day",
    duration: "4 hours",
    description:
      "Perfect for a morning or afternoon ride. Enough time to ride to Lake Louise and back, or explore the trails around the ski resort area.",
    prices: bikes.map((b) => ({ bike: b.name, price: b.pricePerHalfDay })),
    popular: false,
  },
  {
    name: "Full Day",
    duration: "8 hours",
    description:
      "The sweet spot. Ride to Lake Louise and Moraine Lake, explore the car-free roads, and still have time for the Rockpile Trail and a lakeside lunch. Most riders choose this.",
    prices: bikes.map((b) => ({ bike: b.name, price: b.pricePerFullDay })),
    popular: true,
  },
  {
    name: "Multi-Day",
    duration: "2+ days",
    description:
      "For riders who want to explore everything. Ride a different trail each day, combine trails, or take a full day just for photography. 15% discount on daily rate.",
    prices: bikes.map((b) => ({
      bike: b.name,
      price: Math.round(b.pricePerFullDay * 0.85),
    })),
    popular: false,
  },
];

const includedItems = [
  "Premium e-bike (your choice of model)",
  "Helmet (mandatory in Alberta)",
  "Bike lock",
  "Trail map with route recommendations",
  "Safety briefing and bike orientation",
  "Phone mount",
  "Repair kit (pump, tube, multi-tool)",
  "Emergency contact number",
];

export default function RentalsPage() {
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
            Self-Guided Adventures
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-4 font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            E-Bike Rentals
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
          >
            Grab a premium e-bike and explore the Canadian Rockies at your own
            pace. All gear included — just pick a bike and ride.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 sm:py-28 px-4">
        <div className="mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              Every rental includes helmet, lock, trail map, safety briefing,
              and repair kit. No hidden fees.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {rentalOptions.map((option, i) => (
              <motion.div
                key={option.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className={cn(
                  "rounded-2xl p-8 relative overflow-hidden",
                  option.popular
                    ? "bg-primary text-white shadow-xl scale-[1.02]"
                    : "bg-white border border-cream-dark"
                )}
              >
                {option.popular && (
                  <span className="absolute top-4 right-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                    Most Popular
                  </span>
                )}
                <div className="flex items-center gap-2 mb-2">
                  <Clock
                    className={cn(
                      "h-5 w-5",
                      option.popular ? "text-white/60" : "text-primary"
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm font-medium",
                      option.popular ? "text-white/60" : "text-foreground/50"
                    )}
                  >
                    {option.duration}
                  </span>
                </div>
                <h3
                  className={cn(
                    "font-[var(--font-heading)] text-2xl font-bold",
                    option.popular ? "text-white" : "text-slate"
                  )}
                >
                  {option.name}
                </h3>
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    option.popular ? "text-white/70" : "text-foreground/60"
                  )}
                >
                  {option.description}
                </p>

                {/* Prices by bike */}
                <div className="mt-6 space-y-3">
                  {option.prices.map((p) => (
                    <div
                      key={p.bike}
                      className={cn(
                        "flex items-center justify-between py-2 border-b",
                        option.popular
                          ? "border-white/10"
                          : "border-cream-dark"
                      )}
                    >
                      <span
                        className={cn(
                          "text-sm",
                          option.popular ? "text-white/80" : "text-foreground/70"
                        )}
                      >
                        {p.bike.split(" ").slice(-2).join(" ")}
                      </span>
                      <span
                        className={cn(
                          "font-bold",
                          option.popular ? "text-white" : "text-primary"
                        )}
                      >
                        ${p.price}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/book?type=rental"
                  className={cn(
                    "mt-8 block w-full text-center rounded-xl py-3 font-semibold transition-colors min-h-[46px]",
                    option.popular
                      ? "bg-accent hover:bg-accent-dark text-white"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  )}
                >
                  Book {option.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            {...fadeUp}
            className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-slate mb-8 text-center"
          >
            Every Rental Includes
          </motion.h2>
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {includedItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-xl bg-cream"
              >
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/70">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Bikes Preview */}
      <section className="py-16 sm:py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-slate">
              Choose Your Ride
            </h2>
            <p className="mt-3 text-foreground/60">
              Three premium e-bikes, each built for different riding styles.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-3">
            {bikes.map((bike, i) => (
              <motion.div
                key={bike.slug}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              >
                <Link
                  href={`/bikes/${bike.slug}`}
                  className="group block rounded-2xl bg-white border border-cream-dark overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Zap className="h-12 w-12 text-primary/20" />
                    <span className="absolute top-3 left-3 rounded-full bg-accent text-white px-3 py-1 text-xs font-semibold">
                      {bike.type}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-[var(--font-heading)] text-lg font-bold text-slate group-hover:text-primary transition-colors">
                      {bike.name}
                    </h3>
                    <p className="mt-1 text-sm text-foreground/50">
                      {bike.specs.range} range &middot; {bike.specs.weight}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-bold text-primary">
                        From ${bike.pricePerHalfDay}
                      </span>
                      <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            {...fadeUp}
            className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-slate mb-10 text-center"
          >
            How It Works
          </motion.h2>
          <motion.div {...fadeUp} className="grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Book Online",
                desc: "Pick your bike, date, and rental duration. Instant confirmation.",
                icon: Clock,
              },
              {
                step: "2",
                title: "Show Up & Ride",
                desc: "Quick bike fitting and safety briefing. You'll be riding in 10 minutes.",
                icon: MapPin,
              },
              {
                step: "3",
                title: "Explore Freely",
                desc: "Hit any trail you want. We'll give you our best route recommendations.",
                icon: Shield,
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate">{item.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.h2
            {...fadeUp}
            className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white leading-tight"
          >
            Prefer a Guided Experience?
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-6 text-lg text-white/80 leading-relaxed"
          >
            Our guided tours include everything — bike, guide, snacks, route
            planning, and local stories you won&apos;t find on any map.
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
              href="/bikes/find-your-ride"
              className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 min-w-[200px]"
            >
              Find Your Ride
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
