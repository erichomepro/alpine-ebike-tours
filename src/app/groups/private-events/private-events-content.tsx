"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Gift,
  Users,
  Heart,
  Cake,
  TreePine,
  Calendar,
  CheckCircle2,
  Star,
  Palette,
  Clock,
  MapPin,
  Bike,
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

const occasions = [
  {
    icon: Cake,
    title: "Birthday Celebrations",
    description:
      "A milestone birthday deserves more than dinner. Picture blowing out candles at a mountain viewpoint with your closest people around you.",
  },
  {
    icon: Users,
    title: "Family Reunions",
    description:
      "Three generations riding side by side? E-bikes make it possible. Grandparents keep up with grandkids, and everyone shares the same incredible views.",
  },
  {
    icon: Heart,
    title: "Anniversaries",
    description:
      "Celebrate your love with a private ride through the most romantic landscape in Canada. We can add champagne, photography, or a trailside picnic.",
  },
  {
    icon: Gift,
    title: "Special Occasions",
    description:
      "Retirements, graduations, friendversaries, or just-because adventures. If there's something to celebrate, there's a ride for it.",
  },
];

const customizableOptions = [
  {
    icon: MapPin,
    title: "Route",
    description: "Easy scenic cruise, challenging mountain trail, or a mix. We match the route to your group.",
  },
  {
    icon: Clock,
    title: "Duration",
    description: "Two hours or a full day. Morning ride or sunset session. We build around your schedule.",
  },
  {
    icon: Palette,
    title: "Experience",
    description: "Add photography, champagne, trailside meals, decorations, or custom stops along the way.",
  },
  {
    icon: Users,
    title: "Group Size",
    description: "Intimate ride for 2 or a big crew of 30+. We scale the guides and logistics to match.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Tell Us Your Vision",
    description:
      "Fill out the form or give us a call. Tell us about the occasion, the people, the vibe you want. No detail is too small.",
  },
  {
    step: "02",
    title: "We Design Your Ride",
    description:
      "Within 24 hours, we send a custom proposal with route options, timing, add-ons, and pricing. We'll refine it until it's perfect.",
  },
  {
    step: "03",
    title: "Show Up and Ride",
    description:
      "On the day, everything is set up and ready. Your only job is to enjoy the ride and make memories. We handle every detail.",
  },
];

export function PrivateEventsContent() {
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
            Your Event, Your Way
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-4 font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            Private Events in the Rockies
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
          >
            Birthdays, reunions, anniversaries, or any excuse to gather your favourite people for an unforgettable e-bike adventure through the mountains.
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
              Plan Your Event
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-20 sm:py-28 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              Every Occasion Deserves a Great Ride
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              Whatever you&apos;re celebrating, the Canadian Rockies make it unforgettable. Here&apos;s what our private rides look like.
            </p>
          </motion.div>

          <motion.div {...stagger} className="grid gap-8 sm:grid-cols-2">
            {occasions.map((occasion) => (
              <motion.div
                key={occasion.title}
                {...fadeUp}
                className="flex gap-5 rounded-2xl bg-white border border-cream-dark p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <occasion.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate">
                    {occasion.title}
                  </h3>
                  <p className="mt-2 text-foreground/70 leading-relaxed">
                    {occasion.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fully Customizable */}
      <section className="py-20 sm:py-28 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              Fully Customizable
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              No two events are the same, and neither are our rides. Every detail bends to your vision.
            </p>
          </motion.div>

          <motion.div {...stagger} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {customizableOptions.map((option) => (
              <motion.div
                key={option.title}
                {...fadeUp}
                className="rounded-2xl bg-cream p-8 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <option.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate">
                  {option.title}
                </h3>
                <p className="mt-3 text-foreground/70 leading-relaxed text-sm">
                  {option.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              Three simple steps from idea to ride.
            </p>
          </motion.div>

          <motion.div {...stagger} className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                {...fadeUp}
                className="flex gap-6 items-start"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-white font-[var(--font-heading)] text-xl font-bold">
                  {step.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-slate">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Every Private Event Includes */}
      <section className="py-20 sm:py-28 px-4 bg-cream">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              Every Private Event Includes
            </h2>
          </motion.div>

          <motion.div
            {...stagger}
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              "Premium e-bike and helmet for each rider",
              "Dedicated guide(s) exclusive to your group",
              "Safety briefing and bike fitting",
              "Custom route designed for your occasion",
              "Group photos at key viewpoints",
              "Flexible start time and duration",
              "Trailside support and bike maintenance",
              "Free cancellation up to 48 hours before",
            ].map((item) => (
              <motion.div
                key={item}
                {...fadeUp}
                className="flex items-center gap-3 bg-white rounded-xl p-4"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground/80">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            {...fadeUp}
            className="mt-8 text-center text-foreground/50 text-sm"
          >
            Add-ons available: professional photography, champagne/wine setup, trailside meals, custom decorations, and more.
          </motion.p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 sm:py-28 px-4">
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
              &ldquo;We booked a private ride for my mom&apos;s 60th birthday. She hadn&apos;t been on a bike in 20 years and was nervous, but five minutes in she was grinning ear to ear. The whole family rode together -- ages 12 to 72. Absolutely magical.&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="font-semibold text-slate">-- Birthday Celebration Organizer</p>
              <p className="text-sm text-foreground/50">
                Family group of 12, summer tour
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-3xl">
          <motion.div
            {...fadeUp}
            className="rounded-2xl border border-cream-dark p-8 sm:p-10 text-center"
          >
            <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-slate">
              Custom Pricing for Custom Rides
            </h2>
            <p className="mt-4 text-foreground/70 leading-relaxed max-w-xl mx-auto">
              Every private event is unique, so we quote each one individually. Pricing depends on group size, duration, route, and any add-ons. Most private events start around <span className="font-semibold text-accent">$125 per person</span>.
            </p>
            <p className="mt-3 text-sm text-foreground/50">
              We&apos;ll send a detailed proposal within 24 hours of your inquiry. No obligation, no pressure.
            </p>
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
            Let&apos;s Create Something Special
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-6 text-lg text-white/80 leading-relaxed"
          >
            Tell us about your occasion, your people, and your dream ride. We&apos;ll make it real.
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
              Contact Us
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
