"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    author: "Sarah M.",
    location: "Calgary, AB",
    rating: 5,
    text: "Absolutely incredible experience! The rail trail was beautiful and the trestle bridge took our breath away. I'm 62 and had zero trouble on the e-bike — it handles the hills for you.",
    tour: "Rail Trail & Taunton Trestle Ride",
  },
  {
    author: "Mike & Jenny K.",
    location: "Vancouver, BC",
    rating: 5,
    text: "What an incredible day. Riding through the foothills on an old railway trail was something totally different. The trestle bridge views were unreal and the packed lunch on the trail was a perfect touch.",
    tour: "Rail Trail & Taunton Trestle Ride",
  },
  {
    author: "David R.",
    location: "Toronto, ON",
    rating: 5,
    text: "I'm not a cyclist at all, but the e-bike changed everything. Within 5 minutes I felt totally comfortable. The guide was fantastic and the scenery was world-class. Already planning our next visit.",
    tour: "Rail Trail & Taunton Trestle Ride",
  },
  {
    author: "The Patterson Family",
    location: "Edmonton, AB",
    rating: 5,
    text: "Perfect family activity! Our teenagers actually put their phones away when we hit the trestle bridge. The whole experience was easy, fun, and something we'll remember forever. Can't recommend this enough.",
    tour: "Rail Trail & Taunton Trestle Ride",
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
