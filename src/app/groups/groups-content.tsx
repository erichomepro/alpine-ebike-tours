"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Users,
  Briefcase,
  PartyPopper,
  CalendarHeart,
  MapPinned,
  Percent,
  UserCheck,
  ArrowRight,
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

const groupTypes = [
  {
    icon: Briefcase,
    title: "Corporate Team Building",
    description:
      "Ditch the boardroom. Build real bonds on two wheels with guided e-bike rides designed for team cohesion, zero fitness barriers, and unforgettable post-ride socials.",
    href: "/groups/corporate-team-building",
    accent: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: PartyPopper,
    title: "Bachelorette Parties",
    description:
      "Champagne toasts at mountain viewpoints, Instagram-worthy moments on every turn, and a ride the whole crew can handle. This is how you celebrate in the Rockies.",
    href: "/groups/bachelorette-parties",
    accent: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: CalendarHeart,
    title: "Private Events",
    description:
      "Birthdays, anniversaries, family reunions, or just because. We build fully custom e-bike experiences around your group, your pace, and your perfect day.",
    href: "/groups/private-events",
    accent: "bg-primary/10",
    iconColor: "text-primary",
  },
];

const sellingPoints = [
  {
    icon: MapPinned,
    title: "Custom Itinerary",
    description:
      "Every group is different. We design routes, timing, and stops around your goals -- whether that's team bonding, celebration, or simply soaking in the Rockies.",
  },
  {
    icon: Percent,
    title: "Group Discounts",
    description:
      "The more the merrier -- and the more affordable. Groups of 8+ receive automatic discounts, and we offer flexible packages for larger parties.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Guide",
    description:
      "Your group gets a guide who's 100% yours. No sharing with strangers, no compromises. Just personal attention and local expertise from start to finish.",
  },
];

export function GroupsContent() {
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
            Ride Together
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-4 font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            Group Adventures in the Rockies
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
          >
            Corporate retreats, celebrations, and private events -- all on premium e-bikes through the most stunning mountain scenery in Canada.
          </motion.p>
        </div>
      </section>

      {/* Group Type Cards */}
      <section className="py-20 sm:py-28 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              Choose Your Adventure
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              Whether it&apos;s work, celebration, or something in between -- we have a ride for your crew.
            </p>
          </motion.div>

          <motion.div {...stagger} className="grid gap-8 sm:grid-cols-3">
            {groupTypes.map((group) => (
              <motion.div key={group.title} {...fadeUp}>
                <Link
                  href={group.href}
                  className="group block rounded-2xl bg-white border border-cream-dark p-8 hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-xl",
                      group.accent
                    )}
                  >
                    <group.icon className={cn("h-7 w-7", group.iconColor)} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate group-hover:text-primary transition-colors">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-foreground/70 leading-relaxed">
                    {group.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Selling Points */}
      <section className="py-20 sm:py-28 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              Why Groups Choose Us
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              Every detail is handled so you can focus on what matters -- having an incredible time together.
            </p>
          </motion.div>

          <motion.div {...stagger} className="grid gap-8 sm:grid-cols-3">
            {sellingPoints.map((point) => (
              <motion.div
                key={point.title}
                {...fadeUp}
                className="rounded-2xl bg-cream p-8 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <point.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate">
                  {point.title}
                </h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 px-4 bg-primary-dark">
        <div className="mx-auto max-w-5xl">
          <motion.div
            {...stagger}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
          >
            {[
              { stat: "500+", label: "Group Riders" },
              { stat: "50+", label: "Corporate Events" },
              { stat: "100%", label: "Fun Guaranteed" },
              { stat: "4.9/5", label: "Average Rating" },
            ].map((item) => (
              <motion.div key={item.label} {...fadeUp}>
                <p className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white">
                  {item.stat}
                </p>
                <p className="mt-2 text-sm text-white/70 font-medium uppercase tracking-wide">
                  {item.label}
                </p>
              </motion.div>
            ))}
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
            Ready to Plan Your Group Ride?
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-6 text-lg text-white/80 leading-relaxed"
          >
            Tell us about your group -- size, dates, vibe -- and we&apos;ll put together a custom quote within 24 hours.
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
              Call Us Directly
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
