"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Users,
  Zap,
  Mountain,
  Camera,
  Award,
  Clock,
  CheckCircle2,
  Bike,
  Coffee,
  Star,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const stagger = {
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true },
};

const benefits = [
  {
    icon: Users,
    title: "Real Team Bonding",
    description:
      "Nothing builds trust like navigating mountain trails together. Side-by-side riding creates natural conversations that never happen in meeting rooms.",
  },
  {
    icon: Zap,
    title: "No Fitness Barrier",
    description:
      "The pedal-assist motor levels the playing field. Your marathon runner and your desk warrior ride side by side, both having the time of their lives.",
  },
  {
    icon: Mountain,
    title: "Unforgettable Experience",
    description:
      "Your team will talk about this for years. Turquoise lakes, towering peaks, wildlife sightings -- this isn't another ropes course or escape room.",
  },
  {
    icon: Coffee,
    title: "Post-Ride Social",
    description:
      "Every ride ends back at the ski resort where the team can unwind at the restaurant, share stories, and keep the energy going.",
  },
];

const packages = [
  {
    name: "Half Day Team Ride",
    price: "$150",
    unit: "per person",
    minimum: "Minimum 8 riders",
    duration: "3-4 hours",
    description:
      "Perfect for a team afternoon out. An energizing ride to Lake Louise followed by brunch at the ski resort.",
    includes: [
      "Premium e-bike and helmet",
      "Dedicated group guide",
      "Safety briefing and bike fitting",
      "Branded group photos",
      "Group selfie station at viewpoint",
      "Certificate of completion",
      "Post-ride refreshments",
    ],
    popular: false,
  },
  {
    name: "Full Day Adventure",
    price: "$225",
    unit: "per person",
    minimum: "Minimum 8 riders",
    duration: "6-7 hours",
    description:
      "The full experience. A morning ride, trailside lunch with mountain views, and an afternoon exploring a second route.",
    includes: [
      "Everything in Half Day, plus:",
      "Extended multi-trail route",
      "Catered trailside lunch",
      "Two dedicated guides",
      "Professional photography package",
      "Custom team banner at start/finish",
      "Printed group photo for each rider",
      "Priority booking for return visits",
    ],
    popular: true,
  },
];

export function CorporateContent() {
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
            Corporate Experiences
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-4 font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            Team Building on Two Wheels
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
          >
            Ditch the boardroom. Build real bonds on guided e-bike rides through the Canadian Rockies -- where everyone can keep up and nobody watches the clock.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-block rounded-xl bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-28 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              Why E-Bikes for Team Building?
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              Traditional team activities feel forced. This one doesn&apos;t.
            </p>
          </motion.div>

          <motion.div {...stagger} className="grid gap-8 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                {...fadeUp}
                className="flex gap-5 rounded-2xl bg-white border border-cream-dark p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-foreground/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 sm:py-28 px-4 bg-white">
        <div className="mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              Team Packages
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              Two options. Both incredible. Pick the one that fits your schedule.
            </p>
          </motion.div>

          <motion.div {...stagger} className="grid gap-8 sm:grid-cols-2">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.name}
                {...fadeUp}
                className={cn(
                  "relative rounded-2xl p-8 sm:p-10",
                  pkg.popular
                    ? "bg-primary-dark text-white ring-2 ring-accent"
                    : "bg-cream text-slate"
                )}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wide">
                      <Star className="h-3.5 w-3.5" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-2">
                  <Clock
                    className={cn(
                      "h-5 w-5",
                      pkg.popular ? "text-white/70" : "text-foreground/50"
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm font-medium",
                      pkg.popular ? "text-white/70" : "text-foreground/50"
                    )}
                  >
                    {pkg.duration}
                  </span>
                </div>

                <h3
                  className={cn(
                    "font-[var(--font-heading)] text-2xl font-bold",
                    pkg.popular ? "text-white" : "text-slate"
                  )}
                >
                  {pkg.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-2">
                  <span
                    className={cn(
                      "font-[var(--font-heading)] text-4xl font-bold",
                      pkg.popular ? "text-accent-light" : "text-accent"
                    )}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      pkg.popular ? "text-white/60" : "text-foreground/50"
                    )}
                  >
                    {pkg.unit}
                  </span>
                </div>
                <p
                  className={cn(
                    "mt-1 text-sm font-medium",
                    pkg.popular ? "text-white/60" : "text-foreground/50"
                  )}
                >
                  {pkg.minimum}
                </p>

                <p
                  className={cn(
                    "mt-4 leading-relaxed",
                    pkg.popular ? "text-white/80" : "text-foreground/70"
                  )}
                >
                  {pkg.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        className={cn(
                          "h-5 w-5 shrink-0 mt-0.5",
                          pkg.popular ? "text-accent-light" : "text-primary"
                        )}
                      />
                      <span
                        className={cn(
                          "text-sm",
                          pkg.popular ? "text-white/85" : "text-foreground/70"
                        )}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={cn(
                    "mt-8 block w-full rounded-xl px-6 py-4 text-center font-semibold transition-all duration-200 shadow-lg hover:shadow-xl",
                    pkg.popular
                      ? "bg-accent hover:bg-accent-dark text-white"
                      : "bg-primary hover:bg-primary-dark text-white"
                  )}
                >
                  Request a Quote
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            {...fadeUp}
            className="mt-8 text-center text-foreground/50 text-sm"
          >
            Custom packages available for groups of 20+. Contact us for enterprise pricing.
          </motion.p>
        </div>
      </section>

      {/* What's Included Visual */}
      <section className="py-20 sm:py-28 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              Everything&apos;s Handled
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              Show up with your team. We take care of the rest.
            </p>
          </motion.div>

          <motion.div
            {...stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {[
              { icon: Bike, label: "Premium E-Bikes" },
              { icon: Users, label: "Expert Guides" },
              { icon: Camera, label: "Branded Photos" },
              { icon: Mountain, label: "Scenic Routes" },
              { icon: Coffee, label: "Post-Ride Social" },
              { icon: Award, label: "Certificates" },
            ].map((item) => (
              <motion.div
                key={item.label}
                {...fadeUp}
                className="flex flex-col items-center text-center rounded-2xl bg-cream p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial Placeholder */}
      <section className="py-20 sm:py-28 px-4 bg-cream">
        <div className="mx-auto max-w-3xl">
          <motion.div {...fadeUp} className="text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 text-accent fill-accent"
                />
              ))}
            </div>
            <blockquote className="font-[var(--font-heading)] text-2xl sm:text-3xl font-medium text-slate leading-relaxed italic">
              &ldquo;Best team activity we&apos;ve ever done. Everyone participated, everyone had fun, and we&apos;re still talking about it three months later. The e-bikes made it accessible for our entire team.&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="font-semibold text-slate">-- Corporate Team Lead</p>
              <p className="text-sm text-foreground/50">
                Calgary-based tech company, group of 14
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary" />
        <div className="absolute inset-0 opacity-10 bg-[url('/images/trails/mountains-pattern.jpg')] bg-cover bg-center" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.h2
            {...fadeUp}
            className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Let&apos;s Build Your Team Ride
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-6 text-lg text-white/80 leading-relaxed"
          >
            Tell us your team size, preferred dates, and any special requests. We&apos;ll send a custom proposal within 24 hours.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="rounded-xl bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 min-w-[200px]"
            >
              Get a Custom Quote
            </Link>
            <a
              href="tel:+14035551234"
              className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 min-w-[200px]"
            >
              Call (403) 555-1234
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
