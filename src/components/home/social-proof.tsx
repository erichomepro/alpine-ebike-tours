"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    author: "Sarah M.",
    location: "Calgary, AB",
    rating: 5,
    text: "Absolutely incredible experience! The Legacy Trail ride was breathtaking. Our guide was knowledgeable, funny, and knew exactly where to stop for the best photos. The e-bike made it effortless — I'm 62 and had zero trouble keeping up.",
    tour: "Legacy Trail Adventure",
  },
  {
    author: "Mike & Jenny K.",
    location: "Vancouver, BC",
    rating: 5,
    text: "We did the Sunset Golden Hour Ride for our anniversary and it was magical. Champagne at the summit viewpoint with the mountains glowing pink — honestly the best evening of our entire trip to the Rockies.",
    tour: "Sunset Golden Hour Ride",
  },
  {
    author: "David R.",
    location: "Toronto, ON",
    rating: 5,
    text: "I'm not a cyclist at all, but the e-bike changed everything. Within 5 minutes I felt totally comfortable. We saw elk, eagles, and the most stunning mountain views I've ever seen. Already planning our next visit.",
    tour: "Bow Valley Explorer",
  },
  {
    author: "The Patterson Family",
    location: "Edmonton, AB",
    rating: 5,
    text: "Perfect family activity! Our teenagers actually put their phones away. The guide made it fun for everyone, from our 14-year-old to grandma. Can't recommend this enough for families visiting Banff.",
    tour: "Legacy Trail Adventure",
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
