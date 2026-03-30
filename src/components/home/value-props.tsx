"use client";

import { motion } from "framer-motion";
import { Zap, Mountain, ShieldCheck } from "lucide-react";

const props = [
  {
    icon: Zap,
    title: "No Fitness Required",
    description:
      "E-bikes do the hard work so you can enjoy the scenery. Pedal as much or as little as you want — the motor handles the hills.",
  },
  {
    icon: Mountain,
    title: "Stunning Routes",
    description:
      "Ride through the heart of the Canadian Rockies on trails handpicked for their jaw-dropping views, wildlife, and photo opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "All Gear Included",
    description:
      "Premium e-bike, helmet, safety gear, snacks, water, and an expert local guide — everything you need for an unforgettable ride.",
  },
];

export function ValueProps() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {props.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center px-4"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <prop.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-6 font-[var(--font-heading)] text-xl font-semibold text-slate">
                {prop.title}
              </h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
