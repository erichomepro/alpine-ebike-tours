"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const tourOptions = [
  "Lake Louise Morning Experience (Easy)",
  "Moraine Lake & Rockpile Adventure (Moderate)",
  "Lake Louise Grand Loop (Full Day)",
  "Rail Trail & Trestle Ride (Alberta Parks)",
  "Private / Custom Tour",
  "Group Booking",
  "Not sure yet",
];

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    tourInterest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Please enter your name.";
    if (!formState.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formState.message.trim()) newErrors.message = "Please enter a message.";
    return newErrors;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // TODO: Wire to API / Resend / Supabase
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl bg-white border border-cream-dark p-10 text-center"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
          <Send className="h-8 w-8 text-success" />
        </div>
        <h3 className="mt-6 text-2xl font-bold text-slate">Message Sent!</h3>
        <p className="mt-3 text-foreground/70 leading-relaxed">
          Thanks for reaching out. We typically respond within a few hours during the season. In the meantime, feel free to browse our tours.
        </p>
        <Link
          href="/tours"
          className="mt-6 inline-block rounded-xl bg-accent hover:bg-accent-dark text-white px-6 py-3 font-semibold transition-colors"
        >
          Explore Tours
        </Link>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate mb-1.5">
          Name <span className="text-error">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={formState.name}
          onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
          className={cn(
            "w-full rounded-xl border bg-white px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all",
            errors.name ? "border-error" : "border-cream-dark"
          )}
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-error">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate mb-1.5">
          Email <span className="text-error">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={formState.email}
          onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
          className={cn(
            "w-full rounded-xl border bg-white px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all",
            errors.email ? "border-error" : "border-cream-dark"
          )}
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-error">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate mb-1.5">
          Phone <span className="text-foreground/40 text-xs">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={formState.phone}
          onChange={(e) => setFormState((s) => ({ ...s, phone: e.target.value }))}
          className="w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          placeholder="(403) 555-1234"
        />
      </div>

      {/* Tour Interest */}
      <div>
        <label htmlFor="tourInterest" className="block text-sm font-medium text-slate mb-1.5">
          Tour Interest
        </label>
        <select
          id="tourInterest"
          value={formState.tourInterest}
          onChange={(e) => setFormState((s) => ({ ...s, tourInterest: e.target.value }))}
          className="w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
        >
          <option value="">Select a tour (optional)</option>
          {tourOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate mb-1.5">
          Message <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={formState.message}
          onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
          className={cn(
            "w-full rounded-xl border bg-white px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y",
            errors.message ? "border-error" : "border-cream-dark"
          )}
          placeholder="Tell us what you're thinking -- dates, group size, questions, anything!"
        />
        {errors.message && <p className="mt-1 text-sm text-error">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-xl bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 min-h-[46px]"
      >
        Send Message
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary to-primary-light" />
        <div className="absolute inset-0 bg-[url('/images/stock/mountain-lake.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <motion.p
            {...fadeUp}
            className="text-accent-light font-semibold tracking-wide uppercase text-sm"
          >
            We&apos;d love to hear from you
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-4 font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
          >
            Questions about tours, group bookings, or just want to say hi? We&apos;re real people who love talking about e-bikes and mountains.
          </motion.p>
        </div>
      </section>

      {/* Two-column: Form + Info */}
      <section className="py-20 sm:py-28 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form (left, wider) */}
            <motion.div {...fadeUp} className="lg:col-span-3">
              <div className="rounded-2xl bg-white border border-cream-dark p-8 sm:p-10">
                <h2 className="font-[var(--font-heading)] text-2xl font-bold text-slate mb-2">
                  Send Us a Message
                </h2>
                <p className="text-foreground/60 mb-8">
                  We aim to reply within a few hours during the riding season.
                </p>
                <ContactForm />
              </div>
            </motion.div>

            {/* Info (right) */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate">Location</h3>
                  <p className="mt-1 text-foreground/70 leading-relaxed">
                    Lake Louise Ski Resort &amp; Alberta Parks<br />
                    Canadian Rockies, Alberta
                  </p>
                  <p className="mt-1 text-sm text-foreground/50">
                    Exact meeting points provided upon booking
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate">Phone</h3>
                  <a
                    href="tel:+14035551234"
                    className="mt-1 block text-primary hover:text-primary-dark transition-colors font-medium"
                  >
                    (403) 555-1234
                  </a>
                  <p className="mt-1 text-sm text-foreground/50">
                    Call or text -- we respond to both
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate">Email</h3>
                  <a
                    href="mailto:info@alpineebiketours.com"
                    className="mt-1 block text-primary hover:text-primary-dark transition-colors font-medium"
                  >
                    info@alpineebiketours.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate">Business Hours</h3>
                  <div className="mt-1 text-foreground/70 space-y-1">
                    <p>
                      <span className="font-medium">May -- October:</span> 8:00 AM -- 7:00 PM daily
                    </p>
                    <p>
                      <span className="font-medium">November -- April:</span> By appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Questions (WhatsApp / Text) */}
              <div className="rounded-2xl bg-cream p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-slate">Quick Questions?</h3>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                  For a fast response, text us directly or send a message on WhatsApp. We&apos;re usually faster on text than email.
                </p>
                <a
                  href="sms:+14035551234"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-primary-dark text-white px-5 py-3 text-sm font-semibold transition-colors min-h-[46px]"
                >
                  <Phone className="h-4 w-4" />
                  Text Us Now
                </a>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-slate mb-3">Follow Along</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/share/g/1K9KRrKzcn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a
                    href="https://instagram.com/alpineebiketours"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Placeholder */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp}>
            <div className="rounded-2xl bg-white border border-cream-dark overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9938.5!2d-116.1622!3d51.4419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5370e576b0b1a12d%3A0xc4e9e14fbb0e2a2a!2sThe%20Lake%20Louise%20Ski%20Resort!5e0!3m2!1sen!2sca!4v1711814400000!5m2!1sen!2sca"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Alpine E-Bike Tours — Lake Louise Ski Resort, Alberta"
                className="rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.h2
            {...fadeUp}
            className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white leading-tight"
          >
            Rather Just Book?
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-6 text-lg text-white/80 leading-relaxed"
          >
            Skip the back and forth -- pick a tour, choose your date, and you&apos;re all set.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              href="/book"
              className="inline-block rounded-xl bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Book a Tour
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
