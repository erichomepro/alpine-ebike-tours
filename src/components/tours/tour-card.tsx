"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, MapPin, Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Tour } from "@/types";

const difficultyStyles = {
  easy: "bg-green-100 text-green-800",
  moderate: "bg-blue-100 text-blue-800",
  challenging: "bg-gray-900 text-white",
};

interface TourCardProps {
  tour: Tour;
  index?: number;
}

export function TourCard({ tour, index = 0 }: TourCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/tours/${tour.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-slate/10">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
          {tour.heroImage ? (
            <Image
              src={tour.heroImage}
              alt={`${tour.name} — ${tour.tagline}`}
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 group-hover:scale-105 transition-transform duration-500" />
          )}
          <span
            className={cn(
              "absolute top-4 left-4 z-20 rounded-full px-3 py-1 text-xs font-semibold",
              difficultyStyles[tour.difficulty]
            )}
          >
            {tour.difficulty.charAt(0).toUpperCase() + tour.difficulty.slice(1)}
          </span>
          {tour.maxGroupSize <= 4 && (
            <span className="absolute top-4 right-4 z-20 rounded-full bg-accent/90 text-white px-3 py-1 text-xs font-semibold">
              Intimate Group
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col">
          <h3 className="font-[var(--font-heading)] text-xl font-semibold text-slate group-hover:text-primary transition-colors">
            {tour.name}
          </h3>
          <p className="mt-2 text-sm text-foreground/60 line-clamp-2">
            {tour.tagline}
          </p>

          {/* Stats */}
          <div className="mt-4 flex items-center gap-4 text-sm text-foreground/50">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {tour.duration}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {tour.distance}
            </span>
          </div>

          {/* Price & Rating */}
          <div className="mt-4 flex items-center justify-between pt-4 border-t border-cream-dark">
            <div>
              <span className="text-2xl font-bold text-primary">
                ${tour.price}
              </span>
              <span className="text-sm text-foreground/50 ml-1">/person</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="text-sm font-semibold text-slate">
                  {tour.rating}
                </span>
              </div>
              <ArrowRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
