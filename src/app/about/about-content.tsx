"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  Clock,
  Leaf,
  Shield,
  Heart,
  Mountain,
  Users,
  Award,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const stagger = {
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true },
};

const whyEbikeCards = [
  {
    icon: Zap,
    title: "No Fitness Barrier",
    description:
      "The pedal-assist motor does the heavy lifting so you can enjoy the scenery, not the suffering. Whether you're 16 or 76, you'll keep up with the group and finish with a smile.",
  },
  {
    icon: Clock,
    title: "See More in Less Time",
    description:
      "Cover twice the distance of a regular bike with half the effort. That means more viewpoints, more wildlife spotting, and more of those jaw-dropping mountain moments.",
  },
  {
    icon: Leaf,
    title: "Gentle on the Planet",
    description:
      "Zero emissions, whisper-quiet motors, and minimal trail impact. You'll explore the Rockies the way they deserve to be explored -- slowly, quietly, and with respect.",
  },
];

const commitments = [
  {
    icon: Shield,
    title: "Safety First, Always",
    description:
      "Every ride starts with a safety briefing and bike fitting. Helmets are mandatory (it's the law in Alberta), and our guides carry first aid kits, bear spray, and communication devices on every tour.",
  },
  {
    icon: Leaf,
    title: "Leave No Trace",
    description:
      "We stick to designated trails, pack out everything we bring in, and follow Parks Canada guidelines to the letter. We're guests in this landscape, and we act like it.",
  },
  {
    icon: Heart,
    title: "Local to the Core",
    description:
      "We live here. We hire local guides, partner with Canmore and Banff businesses, and put a portion of every booking toward trail maintenance and conservation projects in the Bow Valley.",
  },
];

const values = [
  {
    icon: Mountain,
    title: "Adventure for Everyone",
    description: "The mountains shouldn't be exclusive. E-bikes open the door for riders of all ages, abilities, and backgrounds.",
  },
  {
    icon: Users,
    title: "Small Groups, Big Moments",
    description: "We cap our groups at 8 riders so every guest gets personal attention, genuine connection, and the quiet to actually hear the river.",
  },
  {
    icon: Award,
    title: "Excellence Without Ego",
    description: "Premium bikes, expert guides, top-notch safety -- but we'll never make you feel like you need a cycling jersey to belong.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary to-primary-light" />
        <div className="absolute inset-0 bg-[url('/images/stock/rockies-landscape.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <motion.p
            {...fadeUp}
            className="text-accent-light font-semibold tracking-wide uppercase text-sm"
          >
            Alpine E-Bike Tours
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-4 font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            Our Story
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
          >
            Born from a love of the Rockies and a belief that everyone deserves to experience them.
          </motion.p>
        </div>
      </section>

      {/* Dave's Story */}
      <section className="py-20 sm:py-28 px-4">
        <div className="mx-auto max-w-3xl">
          <motion.div {...fadeUp} className="space-y-6 text-lg leading-relaxed text-foreground/85">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate mb-8">
              How It All Started
            </h2>
            <p>
              It started with a problem Dave couldn&apos;t stop thinking about.
            </p>
            <p>
              After years of guiding and riding through the Canadian Rockies, he kept meeting people who&apos;d drive from Calgary or fly from Toronto, stand at a trailhead, stare at the mountains, and say the same thing: <em>&ldquo;I wish I could ride that, but I&apos;m not fit enough.&rdquo;</em>
            </p>
            <p>
              Parents with young kids. Couples where one partner was a cyclist and the other wasn&apos;t. Retirees who used to ride decades ago. Visitors who just wanted to <em>feel</em> the mountains, not conquer them.
            </p>
            <p>
              Then Dave rode his first e-bike on the Legacy Trail between Canmore and Banff, and everything clicked. The same stunning views, the same fresh mountain air, the same thrill of cresting a ridge and seeing a turquoise lake appear below -- but without the barrier. No lung-burning climbs. No &ldquo;I can&apos;t keep up.&rdquo; Just pure, joyful riding through some of the most beautiful terrain on Earth.
            </p>
            <p>
              Alpine E-Bike Tours was born from that ride. Dave put together a small fleet of premium e-bikes, recruited local guides who know every trail and every bear-safe spot, and started taking people on the rides of their lives.
            </p>
            <p>
              Today, we&apos;ve helped hundreds of riders -- from nervous first-timers to seasoned cyclists looking for a new way to explore -- discover the Rockies on two wheels. And honestly? The best part is still that moment five minutes into the ride when a guest grins and says, <em>&ldquo;Why didn&apos;t I do this sooner?&rdquo;</em>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why E-Bikes */}
      <section className="py-20 sm:py-28 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              Why E-Bikes?
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              Electric bikes aren&apos;t a shortcut -- they&apos;re the great equalizer. Here&apos;s why they change everything.
            </p>
          </motion.div>

          <motion.div
            {...stagger}
            className="grid gap-8 sm:grid-cols-3"
          >
            {whyEbikeCards.map((card) => (
              <motion.div
                key={card.title}
                {...fadeUp}
                className="rounded-2xl bg-cream p-8 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <card.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate">
                  {card.title}
                </h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet Your Guides */}
      <section className="py-20 sm:py-28 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              Meet Your Guides
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              Local experts who know these mountains like the back of their hand.
            </p>
          </motion.div>

          <motion.div
            {...stagger}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                name: "Dave",
                role: "Founder & Lead Guide",
                bio: "Born-and-raised Bow Valley local with 15+ years of guiding experience. Certified Wilderness First Responder. Knows every trail, every viewpoint, and every spot where the elk like to hang out.",
                certifications: ["Wilderness First Responder", "CPR/AED Certified", "Parks Canada Licensed Guide"],
              },
              {
                name: "Guide Name",
                role: "Senior Trail Guide",
                bio: "An experienced mountain biker and nature interpreter who makes every ride feel like an adventure with a friend. Passionate about wildlife and helping nervous riders find their confidence.",
                certifications: ["Mountain Bike Guide Certification", "Wildlife First Aid", "Bear Awareness"],
              },
              {
                name: "Guide Name",
                role: "Trail Guide & Bike Mechanic",
                bio: "Part guide, part bike whisperer. Ensures every e-bike is perfectly tuned before each ride and can fix just about anything trailside. Guests love their energy and patience.",
                certifications: ["E-Bike Technician Certified", "Standard First Aid", "Trail Rescue"],
              },
            ].map((guide, index) => (
              <motion.div
                key={index}
                {...fadeUp}
                className="rounded-2xl bg-white border border-cream-dark p-8 text-center"
              >
                {/* Photo placeholder */}
                <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary/40" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate">
                  {guide.name}
                </h3>
                <p className="text-sm font-medium text-accent">
                  {guide.role}
                </p>
                <p className="mt-4 text-foreground/70 leading-relaxed text-sm">
                  {guide.bio}
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {guide.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="inline-block rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 sm:py-28 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              Our Commitment
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
              Running a tour company in a national park is a privilege. We take that seriously.
            </p>
          </motion.div>

          <motion.div
            {...stagger}
            className="grid gap-8 sm:grid-cols-3"
          >
            {commitments.map((item) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                className="rounded-2xl bg-cream p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate">
                  {item.title}
                </h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values / Mission */}
      <section className="py-20 sm:py-28 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
              What We Believe
            </h2>
          </motion.div>
          <motion.p
            {...fadeUp}
            className="text-center text-lg text-foreground/70 max-w-2xl mx-auto mb-16"
          >
            Three principles that guide every ride, every decision, and every interaction.
          </motion.p>

          <motion.div
            {...stagger}
            className="grid gap-8 sm:grid-cols-3"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                {...fadeUp}
                className="text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate">
                  {value.title}
                </h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary" />
        <div className="absolute inset-0 opacity-10 bg-[url('/images/stock/rockies-landscape.jpg')] bg-cover bg-center" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.h2
            {...fadeUp}
            className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Ready to Ride?
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-6 text-lg text-white/80 leading-relaxed"
          >
            Pick a tour, choose a date, and let the Rockies do the rest. No fitness test, no experience required -- just a sense of adventure.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/tours"
              className="rounded-xl bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 min-w-[200px]"
            >
              Explore Tours
            </Link>
            <Link
              href="/book"
              className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 min-w-[200px]"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
