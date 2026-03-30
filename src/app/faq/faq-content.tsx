"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion } from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

interface FAQCategory {
  category: string;
  items: { question: string; answer: string }[];
}

export function FAQContent({ categories }: { categories: FAQCategory[] }) {
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
            We&apos;ve got answers
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-4 font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to know before your ride. Can&apos;t find your answer?{" "}
            <Link href="/contact" className="underline text-accent-light hover:text-accent">
              Just ask us
            </Link>
            .
          </motion.p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 sm:py-28 px-4">
        <div className="mx-auto max-w-3xl space-y-16">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: catIndex * 0.08 }}
            >
              <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-slate mb-6">
                {category.category}
              </h2>
              <Accordion items={category.items} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.div
            {...fadeUp}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 mb-6"
          >
            <MessageCircle className="h-8 w-8 text-white" />
          </motion.div>
          <motion.h2
            {...fadeUp}
            className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white leading-tight"
          >
            Still Have Questions?
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-6 text-lg text-white/80 leading-relaxed"
          >
            No question is too small. We&apos;re happy to help you figure out the right tour, the right gear, or anything else. Just reach out.
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
            <Link
              href="/tours"
              className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 min-w-[200px]"
            >
              Explore Tours
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
