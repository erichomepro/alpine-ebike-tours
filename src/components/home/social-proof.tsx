"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    author: "Sarah M.",
    location: "Calgary, AB",
    rating: 5,
    text: "Absolutely incredible experience! E-biking to Moraine Lake on the car-free road was the highlight of our entire Rockies trip. Arriving by bike while everyone else was on shuttle buses felt like a secret shortcut to paradise. I'm 62 and had zero trouble.",
    tour: "Moraine Lake & Rockpile Adventure",
  },
  {
    author: "Mike & Jenny K.",
    location: "Vancouver, BC",
    rating: 5,
    text: "The Grand Loop was the best day of our trip. Brunch at the ski resort, the turquoise water at Lake Louise, then riding the car-free road to Moraine Lake — and the Rockpile viewpoint took our breath away. That downhill return was pure joy.",
    tour: "Lake Louise Grand Loop",
  },
  {
    author: "David R.",
    location: "Toronto, ON",
    rating: 5,
    text: "I'm not a cyclist at all, but the e-bike changed everything. Within 5 minutes I felt totally comfortable. Seeing Lake Louise and Moraine Lake by bike instead of from a shuttle bus was a completely different experience. Already planning our next visit.",
    tour: "Lake Louise Morning Experience",
  },
  {
    author: "The Patterson Family",
    location: "Edmonton, AB",
    rating: 5,
    text: "Perfect family activity! Our teenagers actually put their phones away when they saw Moraine Lake. The Rockpile Trail viewpoint — the Twenty Dollar View — is even more stunning in person. Can't recommend this enough.",
    tour: "Lake Louise Grand Loop",
  },
];

export function SocialProof() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-accent text-accent" />
            ))}
          </div>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
            What Our Riders Say
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            4.9 out of 5 stars from riders who discovered the Rockies on two
            wheels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut" as const,
              }}
              className="rounded-2xl bg-cream p-6 sm:p-8 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-cream-dark">
                <p className="font-semibold text-slate text-sm">
                  {review.author}
                </p>
                <p className="text-xs text-foreground/50">
                  {review.location} &middot; {review.tour}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
