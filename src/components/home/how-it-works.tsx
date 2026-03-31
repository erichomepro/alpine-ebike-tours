"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Shield,
  Bike,
  Camera,
  MessageCircle,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Meet Your Guide",
    description:
      "Arrive at Lake Louise Ski Resort, enjoy brunch, and get fitted with your perfect e-bike. We handle everything — just show up ready to smile.",
    color: "bg-primary",
  },
  {
    number: "02",
    icon: Shield,
    title: "Gear Up & Learn",
    description:
      "Quick safety briefing, e-bike orientation, and we load up your snacks and water. In 10 minutes you'll feel like a pro.",
    color: "bg-slate",
  },
  {
    number: "03",
    icon: Bike,
    title: "Hit the Trail",
    description:
      "Your guide leads you through the most stunning trails in the Rockies. Scenic stops, wildlife spotting, and the best photo ops — all at your pace.",
    color: "bg-primary",
  },
  {
    number: "04",
    icon: Camera,
    title: "Capture the Moments",
    description:
      "Stop at handpicked viewpoints for photos. On select tours, a professional photographer captures the whole ride for you.",
    color: "bg-accent",
  },
  {
    number: "05",
    icon: MessageCircle,
    title: "Celebrate & Recap",
    description:
      "Back at the shop, your guide recaps the highlights and shares their favourite hidden gems for your next visit.",
    color: "bg-slate",
  },
  {
    number: "06",
    icon: Star,
    title: "Share & Relive",
    description:
      "Get your photos, share the adventure on social, and leave a review. Your friends will be booking their own ride by tomorrow.",
    color: "bg-accent",
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-20 sm:py-28 px-4 bg-white overflow-hidden">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Your Experience
          </span>
          <h2 className="mt-3 font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
            How a Tour Works
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            From first pedal to lasting memories — here&apos;s exactly what to
            expect when you ride with us.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-cream-dark -translate-x-1/2">
            <motion.div
              className="w-full bg-primary rounded-full origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Riding bike icon that follows scroll progress (desktop) */}
          <motion.div
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 items-center justify-center"
            style={{ top: lineHeight }}
          >
            <motion.div
              animate={{ rotate: [0, -3, 3, -3, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 rounded-full bg-accent shadow-lg shadow-accent/30 flex items-center justify-center -mt-5"
            >
              <Bike className="h-5 w-5 text-white" />
            </motion.div>
          </motion.div>

          {/* Mobile vertical line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-cream-dark" />

          {/* Mobile riding bike */}
          <motion.div
            className="md:hidden absolute left-2 z-20"
            style={{ top: lineHeight }}
          >
            <motion.div
              animate={{ rotate: [0, -3, 3, -3, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-8 h-8 rounded-full bg-accent shadow-lg shadow-accent/30 flex items-center justify-center -mt-4"
            >
              <Bike className="h-4 w-4 text-white" />
            </motion.div>
          </motion.div>

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                    ease: "easeOut" as const,
                  }}
                  className={cn(
                    "relative grid gap-6 md:gap-12 items-center",
                    "md:grid-cols-[1fr_auto_1fr]",
                    "pl-16 md:pl-0"
                  )}
                >
                  {/* Left content (or empty on odd) */}
                  <div
                    className={cn(
                      "md:text-right",
                      !isEven && "md:order-3 md:text-left",
                      isEven ? "md:order-1" : "md:order-3"
                    )}
                  >
                    <div
                      className={cn(
                        isEven
                          ? "md:ml-auto md:mr-0"
                          : "md:mr-auto md:ml-0",
                        "max-w-sm"
                      )}
                    >
                      <span className="font-mono text-xs font-bold text-primary/40 tracking-widest">
                        STEP {step.number}
                      </span>
                      <h3 className="mt-1 font-[var(--font-heading)] text-xl font-bold text-slate">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-foreground/60 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden md:flex order-2 relative z-10">
                    <motion.div
                      whileInView={{ scale: [0.5, 1.15, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className={cn(
                        "w-14 h-14 rounded-full flex items-center justify-center shadow-lg",
                        step.color
                      )}
                    >
                      <step.icon className="h-6 w-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Mobile node (positioned absolutely) */}
                  <motion.div
                    whileInView={{ scale: [0.5, 1.15, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={cn(
                      "md:hidden absolute left-2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10",
                      step.color
                    )}
                  >
                    <step.icon className="h-5 w-5 text-white" />
                  </motion.div>

                  {/* Right content (or empty on even) */}
                  <div
                    className={cn(
                      "hidden md:block",
                      isEven ? "md:order-3" : "md:order-1"
                    )}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
