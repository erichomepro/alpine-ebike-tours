"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  MapPin,
  Clock,
  Users,
  Utensils,
  Mountain,
  Camera,
  Star,
  ArrowRight,
  Check,
  Bike,
  ChevronRight,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const tours = [
  {
    slug: "lake-louise-grand-loop",
    name: "Lake Louise Grand Loop",
    duration: "5-6 hours",
    price: 275,
    description:
      "The full experience — brunch, Lake Louise, Moraine Lake, Rockpile Trail, packed lunch, and a thrilling downhill return.",
    highlights: ["Brunch + lunch included", "Moraine Lake & Rockpile Trail", "~34 km loop"],
  },
  {
    slug: "lake-louise-morning-experience",
    name: "Lake Louise Morning Experience",
    duration: "3-4 hours",
    price: 175,
    description:
      "Brunch at the resort, e-bike to Lake Louise, lakeside walk, and ride back. The perfect half-day.",
    highlights: ["Brunch included", "Lakeside walk", "~8 km round trip"],
  },
  {
    slug: "moraine-lake-rockpile-adventure",
    name: "Moraine Lake & Rockpile Adventure",
    duration: "5-6 hours",
    price: 225,
    description:
      "Ride the car-free Moraine Lake Road, hike the Rockpile Trail, and lunch at the Twenty Dollar View.",
    highlights: ["Car-free road", "Twenty Dollar View", "Packed lunch included"],
  },
];

const partnershipBenefits = [
  {
    icon: Users,
    stat: "12",
    label: "Guests daily",
    description: "Two departures per day, 6 guests each — consistent foot traffic to the base area",
  },
  {
    icon: Utensils,
    stat: "24",
    label: "Meals purchased daily",
    description:
      "Every guest receives brunch before departure and a packed lunch — purchased from the resort restaurant",
  },
  {
    icon: Clock,
    stat: "150+",
    label: "Season days",
    description: "June through October operation — extending summer revenue beyond the ski season",
  },
  {
    icon: Star,
    stat: "100%",
    label: "Professional operation",
    description:
      "Fully insured, Parks Canada licensed, branded vehicles and equipment — elevates the resort experience",
  },
];

const routeSteps = [
  {
    number: "01",
    title: "Lake Louise Ski Resort",
    subtitle: "Starting point",
    description: "Guests arrive, enjoy brunch at the restaurant, receive bike fitting and safety briefing.",
    icon: Utensils,
  },
  {
    number: "02",
    title: "Lake Louise",
    subtitle: "7 km ride",
    description: "Scenic ride down Lake Louise Drive. Lakeside walk with Victoria Glacier and Chateau views.",
    icon: Mountain,
  },
  {
    number: "03",
    title: "Moraine Lake",
    subtitle: "14 km car-free road",
    description: "Ride the vehicle-free Moraine Lake Road. Hike the Rockpile Trail, picnic with the Twenty Dollar View.",
    icon: Camera,
  },
  {
    number: "04",
    title: "Return to Base",
    subtitle: "Downhill return",
    description: "Exhilarating downhill ride back to the ski resort. Bikes returned, guests depart happy.",
    icon: Bike,
  },
];

export function LakeLouiseContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary to-slate" />
        <div className="absolute inset-0 bg-[url('/images/stock/lake-louise-ski-resort-summer.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <motion.p
            {...fadeUp}
            className="text-accent-light font-semibold tracking-wide uppercase text-sm"
          >
            Summer 2027 — Now accepting pre-bookings
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-4 font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            E-Bike Tours from
            <br />
            Lake Louise Ski Resort
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed"
          >
            Premium guided e-bike tours to Lake Louise and Moraine Lake — departing
            twice daily from the ski resort base area. Brunch and lunch included at
            the resort restaurant.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.35 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/book"
              className="rounded-xl bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Pre-Book for 2027
            </Link>
            <a
              href="#tours"
              className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 text-lg font-semibold transition-all duration-200"
            >
              View Tour Options
            </a>
          </motion.div>
        </div>
      </section>

      {/* The Route — Visual Steps */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              The Route
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              A complete loop through the most iconic scenery in the Canadian Rockies —
              starting and ending at the ski resort base area.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {routeSteps.map((step, i) => (
              <motion.div
                key={step.number}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="relative"
              >
                {i < routeSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 z-10">
                    <ChevronRight className="h-6 w-6 text-accent/50" />
                  </div>
                )}
                <div className="rounded-2xl bg-cream p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-[var(--font-mono-code)] text-2xl font-bold text-accent">
                      {step.number}
                    </span>
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-lg font-semibold text-slate">
                    {step.title}
                  </h3>
                  <p className="text-sm text-accent font-medium mt-1">{step.subtitle}</p>
                  <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lake Louise Ski Resort */}
      <section className="py-20 px-4 bg-cream">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div {...fadeUp}>
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
                Why the Ski Resort?
              </h2>
              <p className="mt-6 text-foreground/70 leading-relaxed">
                Lake Louise Ski Resort is the ideal staging point for e-bike tours.
                The base area offers ample parking, a full-service restaurant for
                brunch and lunch, and direct access to Lake Louise Drive — putting
                guests just 7 km from the famous lake and 21 km from Moraine Lake.
              </p>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                By staging from the resort, our guests start their day with a hot
                brunch, receive a full bike fitting and safety orientation in the
                base area, and ride directly to some of the most iconic destinations
                in the Canadian Rockies. The return ride is mostly downhill — meaning
                guests arrive back at base energized, not exhausted.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Ample free parking at the base area",
                  "Full-service restaurant — brunch and packed lunch for every guest",
                  "Professional staging area for bike fitting and safety briefing",
                  "Direct paved access to Lake Louise and Moraine Lake",
                  "Summer sightseeing gondola available as an add-on",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-success mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="rounded-2xl overflow-hidden bg-white shadow-lg aspect-[4/3]"
            >
              {/* Placeholder for summer ski resort photo */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Mountain className="h-16 w-16 text-primary/40 mx-auto" />
                  <p className="mt-4 text-foreground/50 text-sm">
                    Summer photo of Lake Louise Ski Resort base area
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Value — This section serves as the pitch to management */}
      <section className="py-20 px-4 bg-white" id="partnership">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              A Partnership That Drives Revenue
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
              Our e-bike tours bring consistent daily traffic to the ski resort base
              area — 12 guests per day purchasing meals at the restaurant and
              experiencing the resort during summer months.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, i) => (
              <motion.div
                key={benefit.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="rounded-2xl bg-cream p-6 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="mt-4 font-[var(--font-mono-code)] text-4xl font-bold text-primary">
                  {benefit.stat}
                </div>
                <p className="mt-1 font-semibold text-slate">{benefit.label}</p>
                <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            className="mt-12 rounded-2xl bg-primary/5 border border-primary/10 p-8 text-center"
          >
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-primary">Daily restaurant revenue:</strong> With
              12 guests purchasing brunch before tours and packed lunches for the
              trail, our operation generates consistent meal purchases through the
              resort restaurant every operating day — June through October.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Moraine Lake Advantage */}
      <section className="py-20 px-4 bg-cream">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              {...fadeUp}
              className="order-2 lg:order-1 rounded-2xl overflow-hidden bg-white shadow-lg aspect-[4/3]"
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-200/40 to-teal-200/40 flex items-center justify-center">
                <div className="text-center p-8">
                  <Camera className="h-16 w-16 text-primary/40 mx-auto" />
                  <p className="mt-4 text-foreground/50 text-sm">
                    Moraine Lake — the Twenty Dollar View
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="order-1 lg:order-2">
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">
                The E-Bike Advantage
              </p>
              <h2 className="mt-3 font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
                Arrive Where Cars Can&apos;t
              </h2>
              <p className="mt-6 text-foreground/70 leading-relaxed">
                Moraine Lake Road is <strong>closed to private vehicles</strong>.
                Most visitors reach Moraine Lake via Parks Canada shuttle buses,
                competing for limited seats and fixed schedules. Our guests ride in
                on e-bikes — arriving on their own schedule, at their own pace, on a
                peaceful, car-free mountain road.
              </p>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                The 14 km road climbs steadily through subalpine forest — a
                serious challenge on a regular bike, but effortless on an e-bike.
                Our guests arrive at Moraine Lake fresh and energized, ready to hike
                the Rockpile Trail and enjoy a lakeside picnic. No parking stress, no
                shuttle schedules, no crowds at the bus stop.
              </p>
              <Link
                href="/tours/moraine-lake-rockpile-adventure"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent hover:bg-accent-dark text-white px-6 py-3 font-semibold transition-all duration-200"
              >
                View Moraine Lake Tour
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tour Options */}
      <section className="py-20 px-4 bg-white" id="tours">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              Tour Options
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              All tours depart from Lake Louise Ski Resort base area.
              Brunch or lunch included with every tour.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tours.map((tour, i) => (
              <motion.div
                key={tour.slug}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="rounded-2xl bg-cream border border-cream-dark overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="font-[var(--font-heading)] text-xl font-semibold text-slate">
                    {tour.name}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                    {tour.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {tour.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-foreground/70">
                        <Check className="h-4 w-4 text-success shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-cream-dark">
                    <div>
                      <span className="text-2xl font-bold text-primary">${tour.price}</span>
                      <span className="text-sm text-foreground/50 ml-1">/person</span>
                    </div>
                    <span className="text-sm text-foreground/50">{tour.duration}</span>
                  </div>
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="mt-4 block w-full text-center rounded-xl bg-primary hover:bg-primary-dark text-white px-4 py-3 font-semibold transition-colors min-h-[46px]"
                  >
                    View Tour Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Booking CTA */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary" />
        <div className="absolute inset-0 bg-[url('/images/stock/moraine-lake-panorama.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.h2
            {...fadeUp}
            className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Summer 2027 Pre-Bookings Open
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-6 text-lg text-white/80 leading-relaxed"
          >
            Be among the first to experience e-bike tours from Lake Louise Ski
            Resort. Early bird pricing available for pre-bookings.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/book"
              className="rounded-xl bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Pre-Book Now
            </Link>
            <Link
              href="/contact"
              className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 text-lg font-semibold transition-all duration-200"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
