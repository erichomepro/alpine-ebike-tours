"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SlidersHorizontal, ArrowUpDown, Sparkles } from "lucide-react";
import { tours } from "@/data/tours";
import { cn } from "@/lib/utils";
import { TourCard } from "@/components/tours/tour-card";
import type { Tour } from "@/types";

type Difficulty = "all" | Tour["difficulty"];
type SortOption = "recommended" | "price-low" | "price-high" | "duration" | "rating";

const difficultyFilters: { value: Difficulty; label: string }[] = [
  { value: "all", label: "All Levels" },
  { value: "easy", label: "Easy" },
  { value: "moderate", label: "Moderate" },
  { value: "challenging", label: "Challenging" },
];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "recommended", label: "Recommended" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

const difficultyFilterStyles: Record<string, string> = {
  all: "bg-primary text-white",
  easy: "bg-green-100 text-green-800",
  moderate: "bg-blue-100 text-blue-800",
  challenging: "bg-gray-900 text-white",
};

function getDurationHours(duration: string): number {
  const match = duration.match(/(\d+(?:\.\d+)?)/);
  return match ? parseFloat(match[1]) : 0;
}

export default function ToursPage() {
  const [difficulty, setDifficulty] = useState<Difficulty>("all");
  const [sort, setSort] = useState<SortOption>("recommended");

  const filtered = useMemo(() => {
    let result =
      difficulty === "all"
        ? [...tours]
        : tours.filter((t) => t.difficulty === difficulty);

    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "duration":
        result.sort(
          (a, b) => getDurationHours(a.duration) - getDurationHours(b.duration)
        );
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [difficulty, sort]);

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
            Explore Our Tours
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
          >
            Small groups. Expert local guides. Premium e-bikes and all gear
            included. Choose the ride that matches your pace and discover the
            Canadian Rockies your way.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex items-center justify-center gap-6 text-sm text-white/70"
          >
            <span>4 unique tours</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>From $175/person</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>May - October</span>
          </motion.div>
        </div>
      </section>

      {/* Filter & Sort Bar */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-cream-dark shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Difficulty Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <SlidersHorizontal className="h-4 w-4 text-foreground/40 mr-1" />
              {difficultyFilters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setDifficulty(f.value)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 min-h-[46px] min-w-[46px]",
                    difficulty === f.value
                      ? difficultyFilterStyles[f.value]
                      : "bg-cream text-foreground/60 hover:bg-cream-dark"
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="h-4 w-4 text-foreground/40" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="rounded-lg border border-cream-dark bg-cream px-3 py-2 text-sm text-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary min-h-[46px]"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Grid */}
      <section className="py-16 px-4 bg-cream">
        <div className="mx-auto max-w-6xl">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-foreground/50">
                No tours match that filter. Try a different difficulty level.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filtered.map((tour, i) => (
                <TourCard key={tour.slug} tour={tour} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quiz CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="h-10 w-10 text-accent mx-auto mb-4" />
            <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-slate">
              Not Sure Which Tour is Right for You?
            </h2>
            <p className="mt-4 text-foreground/60 max-w-lg mx-auto">
              Answer a few quick questions about your fitness level, interests,
              and schedule. We will match you with your perfect Rocky Mountain
              ride.
            </p>
            <Link
              href="/bikes/find-your-ride"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent hover:bg-accent-dark text-white px-8 py-4 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              Take the Quiz
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
