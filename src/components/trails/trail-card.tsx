"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Mountain,
  Clock,
  ArrowRight,
  Footprints,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Trail } from "@/types";

const difficultyStyles = {
  easy: "bg-green-100 text-green-800",
  moderate: "bg-blue-100 text-blue-800",
  challenging: "bg-gray-900 text-white",
};

interface TrailCardProps {
  trail: Trail;
  index?: number;
}

export function TrailCard({ trail, index = 0 }: TrailCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/trails/${trail.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-slate/10">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
          <Image
            src={trail.heroImage}
            alt={`${trail.name} trail in the Canadian Rockies`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span
            className={cn(
              "absolute top-4 left-4 z-20 rounded-full px-3 py-1 text-xs font-semibold",
              difficultyStyles[trail.difficulty]
            )}
          >
            {trail.difficulty.charAt(0).toUpperCase() +
              trail.difficulty.slice(1)}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col">
          <h3 className="font-[var(--font-heading)] text-xl font-semibold text-slate group-hover:text-primary transition-colors">
            {trail.name}
          </h3>
          <p className="mt-2 text-sm text-foreground/60 line-clamp-2">
            {trail.description}
          </p>

          {/* Stats */}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-foreground/50">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4 shrink-0" />
              {trail.distance}
            </span>
            <span className="flex items-center gap-1">
              <Mountain className="h-4 w-4 shrink-0" />
              {trail.elevationGain}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4 shrink-0" />
              {trail.duration}
            </span>
          </div>

          {/* Surface & CTA */}
          <div className="mt-4 flex items-center justify-between pt-4 border-t border-cream-dark">
            <span className="flex items-center gap-1.5 text-sm text-foreground/50">
              <Footprints className="h-4 w-4 shrink-0" />
              {trail.surface}
            </span>
            <ArrowRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
