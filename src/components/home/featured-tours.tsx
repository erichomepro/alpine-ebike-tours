"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, MapPin, Star } from "lucide-react";
import { tours } from "@/data/tours";
import { cn } from "@/lib/utils";

const difficultyStyles = {
  easy: "bg-green-100 text-green-800",
  moderate: "bg-blue-100 text-blue-800",
  challenging: "bg-gray-900 text-white",
};

export function FeaturedTours() {
  const featured = tours.slice(0, 3);

  return (
    <section className="py-20 px-4 bg-cream">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
            Our Most Popular Tours
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Small groups, expert guides, and the most scenic trails in the
            Canadian Rockies. Every tour includes e-bike, helmet, and all gear.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((tour, i) => (
            <motion.div
              key={tour.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link
                href={`/tours/${tour.slug}`}
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
                    {tour.difficulty.charAt(0).toUpperCase() +
                      tour.difficulty.slice(1)}
                  </span>
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

                  {/* Price & Rating */}
                  <div className="mt-4 flex items-center justify-between pt-4 border-t border-cream-dark">
                    <div>
                      <span className="text-2xl font-bold text-primary">
                        ${tour.price}
                      </span>
                      <span className="text-sm text-foreground/50 ml-1">
                        /person
                      </span>
                    </div>
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
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-base font-semibold transition-all duration-200"
          >
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  );
}
