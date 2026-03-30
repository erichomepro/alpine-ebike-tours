"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background — placeholder for drone video */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary to-slate">
        {/* When drone video is ready, replace with:
        <video autoPlay muted loop playsInline poster="/images/hero-poster.jpg" className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/hero-drone.mp4" type="video/mp4" />
        </video>
        */}
        <div className="absolute inset-0 bg-[url('/images/stock/hero-mountains.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-[var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
        >
          Ride the Rockies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed"
        >
          Guided e-bike tours through the Canadian Rockies.
          <br className="hidden sm:block" />
          No experience needed. All gear included.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
          className="mt-4 text-base sm:text-lg text-accent-light font-semibold"
        >
          Tours from $175 &middot; Canmore & Banff
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/tours"
            className="rounded-xl bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 min-w-[200px]"
          >
            Explore Tours
          </Link>
          <Link
            href="/book"
            className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 min-w-[200px]"
          >
            Book Now
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-8 w-8 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
