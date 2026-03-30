"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Map, ArrowRight } from "lucide-react";

export function TrailMapTeaser() {
  return (
    <section className="py-20 px-4 bg-slate">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <Map className="h-6 w-6 text-accent" />
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Interactive Trail Map
              </span>
            </div>
            <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-white leading-tight">
              Explore Our Trails in 3D
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Fly over the Canadian Rockies on our interactive Mapbox 3D terrain
              map. See every trail, check elevation profiles, and plan your
              perfect ride — all before you arrive.
            </p>
            <Link
              href="/trails/map"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent hover:bg-accent-dark text-white px-6 py-3 font-semibold transition-colors"
            >
              Open Trail Map
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="w-full md:w-80 aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center">
            <Map className="h-16 w-16 text-white/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
