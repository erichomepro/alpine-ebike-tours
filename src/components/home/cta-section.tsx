"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary" />
      <div className="absolute inset-0 opacity-10 bg-[url('/images/trails/mountains-pattern.jpg')] bg-cover bg-center" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
        >
          Not sure which tour is right for you?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-lg text-white/80 leading-relaxed"
        >
          Take our 60-second quiz and we&apos;ll match you with the perfect
          ride based on your experience level, interests, and schedule.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/bikes/find-your-ride"
            className="rounded-xl bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Find Your Ride
          </Link>
          <Link
            href="/contact"
            className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 text-lg font-semibold transition-all duration-200"
          >
            Talk to a Guide
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
