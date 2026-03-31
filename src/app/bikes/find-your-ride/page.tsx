"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Zap,
  Mountain,
  Clock,
  Calendar,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { tours } from "@/data/tours";
import { bikes } from "@/data/bikes";
import { trails } from "@/data/trails";

/* ---------- Quiz Data ---------- */

interface QuizOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface QuizStep {
  question: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  options: QuizOption[];
}

const steps: QuizStep[] = [
  {
    question: "Who's riding?",
    subtitle: "Help us pick the right bikes and pace",
    icon: Users,
    options: [
      { label: "Just me", value: "solo" },
      { label: "Couple", value: "couple" },
      { label: "Family with kids", value: "family" },
      { label: "Group of friends", value: "friends" },
      { label: "Corporate team", value: "corporate" },
    ],
  },
  {
    question: "What's your experience level?",
    subtitle: "No wrong answers — we've got bikes for everyone",
    icon: Zap,
    options: [
      { label: "First time on an e-bike", value: "beginner" },
      { label: "Some cycling experience", value: "intermediate" },
      { label: "Regular rider / cyclist", value: "advanced" },
    ],
  },
  {
    question: "What excites you most?",
    subtitle: "Pick the one that makes you lean in",
    icon: Mountain,
    options: [
      { label: "Stunning mountain views", value: "views" },
      { label: "Wildlife spotting", value: "wildlife" },
      { label: "A bit of a physical challenge", value: "challenge" },
      { label: "Photography opportunities", value: "photography" },
      { label: "Local food & culture", value: "food" },
    ],
  },
  {
    question: "How long do you want to ride?",
    subtitle: "Including stops, photos, and snack breaks",
    icon: Clock,
    options: [
      { label: "2-3 hours (quick adventure)", value: "short" },
      { label: "Half day (4-5 hours)", value: "half" },
      { label: "Full day (6+ hours)", value: "full" },
    ],
  },
  {
    question: "When are you visiting?",
    subtitle: "Each season has its own magic in the Rockies",
    icon: Calendar,
    options: [
      { label: "Spring (May-June)", value: "spring" },
      { label: "Summer (July-August)", value: "summer" },
      { label: "Fall (September-October)", value: "fall" },
      { label: "Not sure yet", value: "unsure" },
    ],
  },
];

/* ---------- Recommendation Engine ---------- */

interface Recommendation {
  tour: (typeof tours)[number];
  bike: (typeof bikes)[number];
  trail: (typeof trails)[number];
  matchPercent: number;
  reason: string;
}

function getRecommendation(answers: Record<number, string>): Recommendation {
  const experience = answers[1];
  const interest = answers[2];
  const duration = answers[3];

  // Tours: 0=Grand Loop, 1=Morning Experience, 2=Moraine Lake, 3=Rail Trail
  let tourIndex = 0;
  let bikeIndex = 0;
  let matchPercent = 92;
  let reason = "";

  if (experience === "beginner") {
    bikeIndex = 2; // Cannondale comfort
    if (duration === "short") {
      tourIndex = 1; // Lake Louise Morning Experience
      reason =
        "The Lake Louise Morning Experience is perfect for first-timers — brunch at the ski resort, a gentle 8 km ride, and a lakeside walk at one of the most famous lakes in the world.";
      matchPercent = 97;
    } else {
      tourIndex = 2; // Moraine Lake
      reason =
        "The Moraine Lake ride is unforgettable — a car-free road to the Twenty Dollar View, with the e-bike handling the climb so you arrive fresh and energized.";
      matchPercent = 95;
    }
  } else if (experience === "advanced" || interest === "challenge") {
    bikeIndex = 1; // Trek Powerfly
    tourIndex = 0; // Grand Loop
    reason =
      "You want the full experience — the Grand Loop takes you to Lake Louise AND Moraine Lake in one epic day. Brunch, lakeside walks, the Rockpile Trail, and a thrilling downhill return.";
    matchPercent = 94;
  } else {
    bikeIndex = 0; // Specialized Vado SL
    if (interest === "photography" || interest === "views") {
      tourIndex = 2; // Moraine Lake
      reason =
        "Moraine Lake is the most photographed spot in the Rockies for a reason. The Rockpile Trail delivers the iconic Twenty Dollar View, and the car-free ride there is pure peace.";
      matchPercent = 96;
    } else if (duration === "full" || interest === "wildlife") {
      tourIndex = 0; // Grand Loop
      reason =
        "The Grand Loop is our signature experience — Lake Louise, Moraine Lake, the Twenty Dollar View, brunch, packed lunch, and the best downhill ride in the Rockies.";
      matchPercent = 93;
    } else {
      tourIndex = 1; // Morning Experience
      reason =
        "The Lake Louise Morning Experience is our most popular ride — brunch at the resort, a scenic ride to the lake, and a relaxed lakeside walk. Simple, stunning, perfect.";
      matchPercent = 95;
    }
  }

  const tour = tours[tourIndex];
  const bike = bikes[bikeIndex];
  const trail = trails.find((t) => t.slug === tour.trail) || trails[0];

  return { tour, bike, trail, matchPercent, reason };
}

/* ---------- Main Component ---------- */

export default function FindYourRidePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const totalSteps = steps.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  function selectAnswer(value: string) {
    const newAnswers = { ...answers, [currentStep]: value };
    setAnswers(newAnswers);

    if (currentStep < totalSteps - 1) {
      setTimeout(() => setCurrentStep((s) => s + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  }

  function goBack() {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  }

  function restart() {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  }

  const recommendation = showResult ? getRecommendation(answers) : null;

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary to-primary-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="h-8 w-8 text-accent mx-auto mb-4" />
            <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Find Your Perfect Ride
            </h1>
            <p className="mt-4 text-lg text-white/80">
              5 quick questions. 60 seconds. One perfect recommendation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiz Area */}
      <section className="py-12 sm:py-16 px-4 min-h-[500px]">
        <div className="mx-auto max-w-2xl">
          {/* Progress Bar */}
          {!showResult && (
            <div className="mb-10">
              <div className="flex items-center justify-between text-sm text-foreground/50 mb-2">
                <span>
                  Question {currentStep + 1} of {totalSteps}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 rounded-full bg-cream-dark overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" as const }}
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {(() => {
                  const step = steps[currentStep];
                  const StepIcon = step.icon;
                  return (
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <StepIcon className="h-6 w-6 text-primary" />
                        <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-slate">
                          {step.question}
                        </h2>
                      </div>
                      <p className="text-foreground/60 mb-8">{step.subtitle}</p>

                      <div className="space-y-3">
                        {step.options.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => selectAnswer(option.value)}
                            className={cn(
                              "w-full text-left rounded-xl border-2 px-6 py-4 text-lg font-medium transition-all duration-200 min-h-[56px]",
                              answers[currentStep] === option.value
                                ? "border-primary bg-primary/5 text-primary"
                                : "border-cream-dark bg-white text-slate hover:border-primary/30 hover:bg-primary/[0.02]"
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>

                      {/* Back button */}
                      {currentStep > 0 && (
                        <button
                          onClick={goBack}
                          className="mt-6 flex items-center gap-2 text-sm text-foreground/50 hover:text-primary transition-colors"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          Back
                        </button>
                      )}
                    </div>
                  );
                })()}
              </motion.div>
            ) : recommendation ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Match Header */}
                <div className="text-center mb-10">
                  <div className="mx-auto h-20 w-20 rounded-full bg-success/10 flex items-center justify-center mb-4">
                    <Check className="h-10 w-10 text-success" />
                  </div>
                  <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-slate">
                    Your Perfect Ride
                  </h2>
                  <div className="mt-2 inline-block rounded-full bg-primary/10 px-4 py-1.5">
                    <span className="text-sm font-bold text-primary">
                      {recommendation.matchPercent}% match
                    </span>
                  </div>
                </div>

                {/* Reason */}
                <p className="text-center text-lg text-foreground/70 leading-relaxed mb-10 max-w-lg mx-auto">
                  {recommendation.reason}
                </p>

                {/* Recommendation Cards */}
                <div className="space-y-6">
                  {/* Tour */}
                  <div className="rounded-2xl bg-white border border-cream-dark p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                      Recommended Tour
                    </p>
                    <h3 className="font-[var(--font-heading)] text-xl font-bold text-slate">
                      {recommendation.tour.name}
                    </h3>
                    <p className="mt-2 text-foreground/60">
                      {recommendation.tour.tagline}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-foreground/50">
                      <span>{recommendation.tour.duration}</span>
                      <span>{recommendation.tour.distance}</span>
                      <span className="font-bold text-primary">
                        ${recommendation.tour.price}/person
                      </span>
                    </div>
                    <Link
                      href={`/tours/${recommendation.tour.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
                    >
                      View Tour Details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Bike */}
                  <div className="rounded-2xl bg-white border border-cream-dark p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                      Recommended Bike
                    </p>
                    <h3 className="font-[var(--font-heading)] text-xl font-bold text-slate">
                      {recommendation.bike.name}
                    </h3>
                    <p className="mt-2 text-foreground/60 text-sm">
                      {recommendation.bike.type} — {recommendation.bike.specs.range},{" "}
                      {recommendation.bike.specs.weight}
                    </p>
                    <Link
                      href={`/bikes/${recommendation.bike.slug}`}
                      className="mt-3 inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors text-sm"
                    >
                      View Bike
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Trail */}
                  <div className="rounded-2xl bg-white border border-cream-dark p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                      Recommended Trail
                    </p>
                    <h3 className="font-[var(--font-heading)] text-xl font-bold text-slate">
                      {recommendation.trail.name}
                    </h3>
                    <p className="mt-2 text-foreground/60 text-sm">
                      {recommendation.trail.distance} — {recommendation.trail.difficulty} —{" "}
                      {recommendation.trail.duration}
                    </p>
                    <Link
                      href={`/trails/${recommendation.trail.slug}`}
                      className="mt-3 inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors text-sm"
                    >
                      View Trail Guide
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href={`/book?tour=${recommendation.tour.slug}`}
                    className="rounded-xl bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 min-w-[200px] text-center"
                  >
                    Book This Ride
                  </Link>
                  <button
                    onClick={restart}
                    className="rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-200 min-w-[200px]"
                  >
                    Retake Quiz
                  </button>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
