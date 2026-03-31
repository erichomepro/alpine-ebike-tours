"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, MapPin, Star, AlertCircle } from "lucide-react";
import { tours } from "@/data/tours";
import { cn } from "@/lib/utils";

const difficultyStyles: Record<string, string> = {
  easy: "bg-green-100 text-green-800",
  moderate: "bg-blue-100 text-blue-800",
  challenging: "bg-gray-900 text-white",
};

export default function ToursPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary-dark via-primary to-slate py-24 sm:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tours/legacy-trail-hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-slate/90" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold text-white"
          >
            Our Tours
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
          >
            Small groups. Expert local guides. Premium e-bikes and all gear
            included. Choose your ride and discover the Canadian Rockies.
          </motion.p>
        </div>
      </section>

      {/* Tour Grid */}
      <section className="py-16 px-4 bg-cream">
        <div className="mx-auto max-w-5xl">
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
                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full"
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden bg-slate/10">
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
                      <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-slate group-hover:text-primary transition-colors">
                        {tour.name}
                      </h2>
                      <p className="mt-3 text-foreground/60 leading-relaxed">
                        {tour.tagline}
                      </p>

                      {is2027 && (
                        <p className="mt-3 text-sm text-amber-700 bg-amber-50 rounded-lg px-3 py-2">
                          Coming 2027 — Pending Parks Canada approval and ski hill parking approval
                        </p>
                      )}

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

                      {/* Price */}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-slate">
            Ready to Ride?
          </h2>
          <p className="mt-4 text-foreground/60 max-w-lg mx-auto">
            Book online or give us a call. We&apos;ll handle everything — just
            show up ready for an unforgettable day in the mountains.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="rounded-xl bg-accent hover:bg-accent-dark text-white px-8 py-4 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-base font-semibold transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
