"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, MapPin, Star, AlertCircle } from "lucide-react";
import { tours } from "@/data/tours";
import { cn } from "@/lib/utils";

const difficultyStyles = {
  easy: "bg-green-100 text-green-800",
  moderate: "bg-blue-100 text-blue-800",
  challenging: "bg-gray-900 text-white",
};

export function FeaturedTours() {
  return (
    <section className="py-20 px-4 bg-cream">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
            Our Tours
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Small groups, expert guides, and the most scenic trails in the
            Canadian Rockies. Every tour includes e-bike, helmet, and all gear.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tours.map((tour, i) => {
            const is2027 = tour.season.includes("2027");
            return (
              <motion.div
                key={tour.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Link
                  href={is2027 ? "/lake-louise-ski-resort" : `/tours/${tour.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
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
                        sizes="(max-width: 768px) 100vw, 50vw"
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
                      {tour.difficulty.charAt(0).toUpperCase() +
                        tour.difficulty.slice(1)}
                    </span>
                    {is2027 && (
                      <span className="absolute top-4 right-4 z-20 rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-xs font-semibold flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        Coming 2027
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
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

                    {/* Rating */}
                    <div className="mt-4 flex items-center justify-between pt-4 border-t border-cream-dark">
                      <span className="text-sm font-semibold text-primary">
                        Contact for pricing
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="text-sm font-semibold text-slate">
                          {tour.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
