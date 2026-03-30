"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  Star,
  Check,
  Mountain,
  Users,
  Calendar,
  ChevronDown,
  Minus,
  Plus,
  Sparkles,
  Shield,
  Sun,
  Coffee,
  Camera,
  Flag,
  Bike,
  UtensilsCrossed,
  TreePine,
  CircleDot,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TourCard } from "@/components/tours/tour-card";
import type { Tour, ItineraryStop } from "@/types";

const stopTypeIcons: Record<ItineraryStop["type"], React.ComponentType<{ className?: string }>> = {
  meeting: Coffee,
  ride: Bike,
  stop: CircleDot,
  meal: UtensilsCrossed,
  photo: Camera,
  activity: TreePine,
  return: Flag,
};

const stopTypeColors: Record<ItineraryStop["type"], string> = {
  meeting: "bg-slate",
  ride: "bg-primary",
  stop: "bg-foreground/30",
  meal: "bg-accent",
  photo: "bg-blue-500",
  activity: "bg-green-600",
  return: "bg-slate",
};

const difficultyStyles = {
  easy: "bg-green-100 text-green-800",
  moderate: "bg-blue-100 text-blue-800",
  challenging: "bg-gray-900 text-white",
};

const difficultyLabels = {
  easy: "Easy — All fitness levels",
  moderate: "Moderate — Some cycling experience",
  challenging: "Challenging — Experienced riders",
};

interface TourDetailClientProps {
  tour: Tour;
  relatedTours: Tour[];
}

/* ---------- FAQ data ---------- */
function getFaqs(tour: Tour) {
  return [
    {
      q: "Do I need cycling experience?",
      a:
        tour.difficulty === "easy"
          ? "Not at all! This tour is designed for beginners. The e-bike does the hard work — you just enjoy the scenery."
          : "Some cycling experience is helpful for this tour, but the e-bike motor makes even the hills manageable. We will brief you on everything before we start.",
    },
    {
      q: "What if it rains?",
      a: "We run rain or shine — mountain weather changes fast and some of the best photos happen after rain! We provide rain gear if needed. We only cancel for severe weather (full refund).",
    },
    {
      q: `How fit do I need to be for the ${tour.name}?`,
      a:
        tour.difficulty === "easy"
          ? "This tour is suitable for all fitness levels. The e-bike motor assists you the entire way, so you choose how much effort to put in."
          : "A moderate level of fitness is recommended. The e-bike assists significantly, but there are some sections that require a bit more effort. If you can walk for an hour comfortably, you will be fine.",
    },
    {
      q: "What is included in the price?",
      a: `Everything you need: ${tour.included.join(", ")}. Just bring comfortable clothing and a sense of adventure.`,
    },
    {
      q: "Can children join this tour?",
      a: `The minimum age for this tour is ${tour.minAge}. We have bikes suitable for younger riders. Children under 18 must be accompanied by a parent or guardian.`,
    },
    {
      q: "What is your cancellation policy?",
      a: "Free cancellation up to 48 hours before your tour. Within 48 hours, we offer a date change or 50% credit. No-shows are non-refundable.",
    },
  ];
}

/* ---------- What to bring ---------- */
const bringList = [
  "Comfortable clothing suitable for cycling",
  "Layers — mountain weather changes quickly",
  "Sunscreen and sunglasses",
  "Closed-toe shoes (no sandals)",
  "Small backpack (optional)",
  "Camera or phone for photos",
  "Water bottle (we provide water too)",
];

/* ---------- FAQ Accordion Item ---------- */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-cream-dark">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left min-h-[46px]"
      >
        <span className="font-semibold text-slate pr-4">{q}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-foreground/40 shrink-0 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-foreground/60 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

/* ---------- Main Component ---------- */
export function TourDetailClient({ tour, relatedTours }: TourDetailClientProps) {
  const [guests, setGuests] = useState(2);
  const faqs = getFaqs(tour);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <Image
          src={tour.heroImage}
          alt={tour.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 pb-10 px-4">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className={cn(
                  "inline-block rounded-full px-3 py-1 text-xs font-semibold mb-4",
                  difficultyStyles[tour.difficulty]
                )}
              >
                {difficultyLabels[tour.difficulty]}
              </span>
              <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {tour.name}
              </h1>
              <p className="mt-2 text-lg text-white/85 max-w-2xl">
                {tour.tagline}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-white border-b border-cream-dark">
        <div className="mx-auto max-w-5xl px-4 py-5">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <div className="flex items-center gap-2 text-foreground/70">
              <Clock className="h-5 w-5 text-primary" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{tour.distance}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <Users className="h-5 w-5 text-primary" />
              <span>Max {tour.maxGroupSize} riders</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <Calendar className="h-5 w-5 text-primary" />
              <span>{tour.season}</span>
            </div>
            <div className="flex items-center gap-1 ml-auto">
              <Star className="h-5 w-5 fill-accent text-accent" />
              <span className="font-semibold text-slate">{tour.rating}</span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-primary">
                ${tour.price}
              </span>
              <span className="text-foreground/50 ml-1">/person</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-cream">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column — Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Description */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-[var(--font-heading)] text-2xl font-bold text-slate mb-4">
                  About This Tour
                </h2>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  {tour.description}
                </p>
                <div className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <Shield className="h-5 w-5 text-primary shrink-0" />
                  <p className="text-sm text-foreground/60">
                    <span className="font-semibold text-primary">Free cancellation</span> up to 48 hours before your tour.
                    Book with confidence.
                  </p>
                </div>
              </motion.section>

              {/* What's Included */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-[var(--font-heading)] text-2xl font-bold text-slate mb-6">
                  What&apos;s Included
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.included.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 p-3 rounded-lg bg-white"
                    >
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-foreground/70">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Tour Highlights */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-[var(--font-heading)] text-2xl font-bold text-slate mb-6">
                  Tour Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tour.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white border border-cream-dark"
                    >
                      <Mountain className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Detailed Itinerary Schedules */}
              {tour.schedules && tour.schedules.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="font-[var(--font-heading)] text-2xl font-bold text-slate mb-2">
                    Your Day, Step by Step
                  </h2>
                  <p className="text-foreground/60 mb-8">
                    {tour.schedules.length > 1
                      ? `Choose from ${tour.schedules.length} departure times — same incredible experience, different time of day.`
                      : "Here's exactly what your experience looks like, from first pedal to last photo."}
                  </p>

                  <div className="space-y-10">
                    {tour.schedules.map((schedule, schedIdx) => (
                      <div key={schedIdx} className="rounded-2xl bg-white border border-cream-dark overflow-hidden">
                        {/* Schedule Header */}
                        <div className="bg-primary px-6 py-4 flex items-center justify-between">
                          <div>
                            <h3 className="font-[var(--font-heading)] text-lg font-bold text-white">
                              {schedule.name}
                            </h3>
                            <p className="text-sm text-white/70">
                              {schedule.startTime} — {schedule.endTime}
                            </p>
                          </div>
                          <Clock className="h-6 w-6 text-white/40" />
                        </div>

                        {/* Timeline */}
                        <div className="p-6">
                          <div className="relative">
                            <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-cream-dark" />
                            <div className="space-y-6">
                              {schedule.stops.map((stop, stopIdx) => {
                                const StopIcon = stopTypeIcons[stop.type];
                                const iconColor = stopTypeColors[stop.type];
                                return (
                                  <div key={stopIdx} className="flex gap-4 relative">
                                    <div className={cn("shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10", iconColor)}>
                                      <StopIcon className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex-1 pt-0.5">
                                      <div className="flex items-center gap-3 mb-1">
                                        <span className="font-mono text-xs font-bold text-primary bg-primary/5 rounded px-2 py-0.5">
                                          {stop.time}
                                        </span>
                                      </div>
                                      <h4 className="font-semibold text-slate">
                                        {stop.title}
                                      </h4>
                                      <p className="text-sm text-foreground/60 mt-1 leading-relaxed">
                                        {stop.description}
                                      </p>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* What to Bring */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-[var(--font-heading)] text-2xl font-bold text-slate mb-6">
                  What to Bring
                </h2>
                <div className="bg-white rounded-xl p-6 border border-cream-dark">
                  <ul className="space-y-3">
                    {bringList.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-foreground/70"
                      >
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              {/* FAQ */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-[var(--font-heading)] text-2xl font-bold text-slate mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="bg-white rounded-xl p-6 border border-cream-dark">
                  {faqs.map((faq, i) => (
                    <FaqItem key={i} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Right Column — Booking Widget (sticky) */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-cream-dark"
                >
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-primary">
                      ${tour.price}
                    </span>
                    <span className="text-foreground/50 ml-1">/person</span>
                  </div>

                  {/* Date Picker Placeholder */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-slate mb-2">
                      Select Date
                    </label>
                    <div className="flex items-center gap-2 p-3 rounded-lg border border-cream-dark bg-cream text-foreground/50 cursor-pointer hover:border-primary/30 transition-colors">
                      <Calendar className="h-5 w-5" />
                      <span>Choose your date</span>
                    </div>
                  </div>

                  {/* Guest Count */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate mb-2">
                      Number of Riders
                    </label>
                    <div className="flex items-center justify-between p-3 rounded-lg border border-cream-dark">
                      <button
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-10 h-10 rounded-full bg-cream hover:bg-cream-dark flex items-center justify-center transition-colors"
                        aria-label="Decrease guest count"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="text-lg font-semibold text-slate">
                        {guests} {guests === 1 ? "rider" : "riders"}
                      </span>
                      <button
                        onClick={() =>
                          setGuests(Math.min(tour.maxGroupSize, guests + 1))
                        }
                        className="w-10 h-10 rounded-full bg-cream hover:bg-cream-dark flex items-center justify-center transition-colors"
                        aria-label="Increase guest count"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-xs text-foreground/40 mt-1">
                      Max {tour.maxGroupSize} per group
                    </p>
                  </div>

                  {/* Price Calculator */}
                  <div className="mb-6 p-4 rounded-lg bg-cream">
                    <div className="flex justify-between text-sm text-foreground/60 mb-2">
                      <span>
                        ${tour.price} x {guests}{" "}
                        {guests === 1 ? "rider" : "riders"}
                      </span>
                      <span>${tour.price * guests}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-slate pt-2 border-t border-cream-dark">
                      <span>Total</span>
                      <span className="text-primary text-lg">
                        ${tour.price * guests} CAD
                      </span>
                    </div>
                  </div>

                  {/* Book CTA */}
                  <Link
                    href={`/book?tour=${tour.slug}&guests=${guests}`}
                    className="block w-full text-center rounded-xl bg-accent hover:bg-accent-dark text-white px-6 py-4 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Book This Tour
                  </Link>

                  <p className="text-xs text-foreground/40 text-center mt-3">
                    Free cancellation up to 48 hours before
                  </p>

                  {/* Social Proof */}
                  <div className="mt-6 pt-4 border-t border-cream-dark flex items-center justify-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-accent text-accent"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-foreground/60">
                      {tour.rating} rating
                    </span>
                  </div>
                </motion.div>

                {/* Meeting Point */}
                <div className="mt-4 p-4 rounded-xl bg-white border border-cream-dark">
                  <h3 className="text-sm font-semibold text-slate mb-2">
                    Meeting Point
                  </h3>
                  <div className="flex items-start gap-2 text-sm text-foreground/60">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                    <span>{tour.meetingPoint}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Tours */}
      {relatedTours.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-slate text-center mb-10">
                You Might Also Like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedTours.map((t, i) => (
                  <TourCard key={t.slug} tour={t} index={i} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Sticky Mobile Book CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-sm border-t border-cream-dark p-4 safe-area-inset-bottom">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-xl font-bold text-primary">
              ${tour.price}
            </span>
            <span className="text-sm text-foreground/50 ml-1">/person</span>
          </div>
          <Link
            href={`/book?tour=${tour.slug}`}
            className="rounded-xl bg-accent hover:bg-accent-dark text-white px-8 py-3 text-base font-semibold shadow-md transition-all duration-200 min-h-[46px] flex items-center"
          >
            Book This Tour
          </Link>
        </div>
      </div>

      {/* Bottom spacer for mobile sticky bar */}
      <div className="h-20 lg:hidden" />
    </>
  );
}
