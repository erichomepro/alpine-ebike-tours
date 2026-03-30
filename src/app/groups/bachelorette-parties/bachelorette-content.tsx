"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Sparkles,
  Camera,
  Wine,
  Sunset,
  MapPin,
  Heart,
  CheckCircle2,
  Star,
  Users,
  Music,
  PartyPopper,
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

const highlights = [
  {
    icon: Sunset,
    title: "Golden Hour Timing",
    description:
      "We time the ride so you arrive at the most stunning viewpoint right as the sun paints the mountains gold. The photos practically take themselves.",
  },
  {
    icon: Wine,
    title: "Champagne Toast",
    description:
      "What's a celebration without bubbles? We set up a curated toast station at a scenic overlook -- sparkling wine, charcuterie, and mountain views.",
  },
  {
    icon: Camera,
    title: "Pro Photographer",
    description:
      "A professional photographer rides along capturing candid moments, group shots, and those I-can't-believe-this-is-real landscape portraits.",
  },
  {
    icon: MapPin,
    title: "Custom Route",
    description:
      "We design the route around your group's vibe -- chill and scenic, adventurous and off-the-beaten-path, or a mix of both. Your call.",
  },
];

const instagramMoments = [
  {
    icon: Sparkles,
    title: "Mountain Viewpoint Toast",
    description: "Champagne glasses raised with the Three Sisters in the background.",
  },
  {
    icon: Heart,
    title: "Matching Helmet Moment",
    description: "The whole crew riding in formation on a gorgeous mountain trail.",
  },
  {
    icon: PartyPopper,
    title: "Celebration Station",
    description: "The setup we create at the scenic stop -- decorations, bubbly, the works.",
  },
  {
    icon: Music,
    title: "Golden Hour Glow",
    description: "The light at sunset on these trails is genuinely unreal. Every photo is a keeper.",
  },
];

const packageIncludes = [
  "Premium e-bike and helmet for each rider",
  "Dedicated guide who knows the best photo spots",
  "Professional photography package (digital gallery)",
  "Champagne toast setup at scenic viewpoint",
  "Charcuterie and refreshments",
  "Custom route designed for your group",
  "Bride-to-be surprise (ask us about it)",
  "Digital photo gallery delivered within 48 hours",
];

export function BacheloretteContent() {
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
            Celebrate in the Rockies
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-4 font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            Pedal, Pop Champagne, Repeat
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
          >
            Forget the bar crawl. Give the bride-to-be a sunset e-bike ride through the Canadian Rockies with champagne toasts and mountain views she&apos;ll never forget.
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
              Book the Party
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 sm:py-28 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              Not Your Average Bachelorette
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              Skip the matching t-shirts and generic bar crawl. This is a celebration the whole crew will actually love.
            </p>
          </motion.div>

          <motion.div {...stagger} className="grid gap-8 sm:grid-cols-2">
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                className="flex gap-5 rounded-2xl bg-white border border-cream-dark p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Package */}
      <section className="py-20 sm:py-28 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <motion.div
            {...fadeUp}
            className="rounded-2xl bg-gradient-to-br from-primary-dark to-primary p-10 sm:p-14 text-white text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-xs font-bold text-accent-light uppercase tracking-wide mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Signature Package
            </span>

            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold leading-tight">
              E-Bike &amp; Bubbly Tour
            </h2>

            <div className="mt-6 flex items-baseline justify-center gap-2">
              <span className="font-[var(--font-heading)] text-5xl sm:text-6xl font-bold text-accent-light">
                $199
              </span>
              <span className="text-white/60">per person</span>
            </div>
            <p className="mt-2 text-white/60 font-medium">
              Minimum 4 riders &middot; 3-4 hours
            </p>

            <div className="mt-10 max-w-md mx-auto text-left">
              <ul className="space-y-3">
                {packageIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-accent-light" />
                    <span className="text-sm text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="mt-10 inline-block rounded-xl bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Book for Your Crew
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Instagram-Worthy Moments */}
      <section className="py-20 sm:py-28 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              Instagram-Worthy Moments
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              Your feed is about to have its best day ever. Here&apos;s what you&apos;ll be posting.
            </p>
          </motion.div>

          <motion.div {...stagger} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {instagramMoments.map((moment) => (
              <motion.div
                key={moment.title}
                {...fadeUp}
                className="rounded-2xl bg-cream p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <moment.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate">
                  {moment.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  {moment.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
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
              &ldquo;We&apos;ve done spa days, wine tours, and the usual stuff. This was on a completely different level. The champagne toast with the mountains behind us? Everyone was tearing up. Best bachelorette ever.&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="font-semibold text-slate">-- Maid of Honour</p>
              <p className="text-sm text-foreground/50">
                Bachelorette group of 8, summer tour
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ-style quick answers */}
      <section className="py-20 sm:py-28 px-4">
        <div className="mx-auto max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              Quick Answers
            </h2>
          </motion.div>

          <motion.div {...stagger} className="space-y-6">
            {[
              {
                q: "Do we need cycling experience?",
                a: "Not even a little. E-bikes do the hard work -- if you can balance on a bike, you're golden. We've had groups where nobody had ridden in 10+ years.",
              },
              {
                q: "Can we bring our own champagne?",
                a: "We provide premium sparkling wine, but you're welcome to bring a special bottle if the bride has a favourite. Just let us know in advance.",
              },
              {
                q: "What do we wear?",
                a: "Whatever makes you feel good! Most groups go casual-cute. We recommend closed-toe shoes and layers. Matching outfits? We're here for it.",
              },
              {
                q: "Can we add extra time or stops?",
                a: "Absolutely. Want to extend to a full day? Add a picnic lunch? Stop at a specific spot? We'll build it into your custom route.",
              },
            ].map((faq) => (
              <motion.div
                key={faq.q}
                {...fadeUp}
                className="rounded-2xl bg-white border border-cream-dark p-6"
              >
                <h3 className="font-bold text-slate">{faq.q}</h3>
                <p className="mt-2 text-foreground/70 leading-relaxed">
                  {faq.a}
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
            Ready to Plan the Best Bachelorette Ever?
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-6 text-lg text-white/80 leading-relaxed"
          >
            Tell us about the bride, the crew, and the dates. We&apos;ll handle the rest -- down to the last champagne flute.
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
              Book the Party
            </Link>
            <a
              href="tel:+14035551234"
              className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 min-w-[200px]"
            >
              Call to Chat
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
