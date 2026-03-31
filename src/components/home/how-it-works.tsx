"use client";

import { motion } from "framer-motion";
import { MapPin, Bike, Camera } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Show Up",
    description:
      "Arrive at the meeting point, get fitted with your e-bike, and receive a quick safety briefing. We handle everything — just bring yourself.",
  },
  {
    number: "02",
    icon: Bike,
    title: "Ride",
    description:
      "Your guide leads you through stunning trails at your pace. The e-bike handles the hills so you can focus on the views.",
  },
  {
    number: "03",
    icon: Camera,
    title: "Remember",
    description:
      "Scenic stops, wildlife, photos at the best viewpoints, and a packed lunch in the mountains. An experience you'll never forget.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 px-4 bg-white">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-16"
        >
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            It&apos;s as simple as it sounds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center px-4"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <span className="mt-4 block font-mono text-sm font-bold text-accent tracking-widest">
                STEP {step.number}
              </span>
              <h3 className="mt-2 font-[var(--font-heading)] text-xl font-semibold text-slate">
                {step.title}
              </h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
