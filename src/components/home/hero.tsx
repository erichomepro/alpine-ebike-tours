"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Mountain, MapPin, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[950px] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/stock/hero-edmonton-river-valley.jpg"
          alt="E-bike riders on a trail overlooking Edmonton's North Saskatchewan River Valley"
          fill
          priority
          unoptimized
          className="object-cover"
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content — bottom-aligned for cinematic feel */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full bg-accent/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white mb-6"
        >
          <Zap className="h-4 w-4" />
          2026 Season Now Booking
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="font-[var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] max-w-4xl"
        >
          Explore Alberta
          <br />
          <span className="text-accent-light">by E-Bike</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mt-5 text-lg sm:text-xl text-white/85 max-w-xl leading-relaxed"
        >
          Guided tours through the Rockies, river valleys, and historic rail
          trails. Premium e-bikes handle the hills — you enjoy the views.
        </motion.p>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
          className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70"
        >
          <span className="flex items-center gap-1.5">
            <Mountain className="h-4 w-4 text-accent-light" />
            Canadian Rockies &amp; River Valleys
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-accent-light" />
            Edmonton &middot; Lake Louise &middot; Alberta Parks
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-start gap-4"
        >
          <Link
            href="/tours"
            className="rounded-xl bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            View All Tours
          </Link>
          <Link
            href="/book"
            className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 text-lg font-semibold transition-all duration-200"
          >
            Book Now — From $99
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-8 w-8 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
