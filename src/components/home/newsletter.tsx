"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Download, Check, Mail } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: Wire to Resend / Supabase
    setSubmitted(true);
  }

  return (
    <section className="py-20 px-4 bg-cream">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6">
            <Download className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-slate">
            Get the Free Trail Guide
          </h2>
          <p className="mt-4 text-foreground/70 leading-relaxed max-w-lg mx-auto">
            Download our PDF guide to the best e-bike trails in Banff and
            Canmore — including insider tips, seasonal recommendations, and
            packing checklists. Plus get exclusive offers and trail updates.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 rounded-xl bg-success/10 p-6"
            >
              <Check className="h-8 w-8 text-success mx-auto mb-2" />
              <p className="font-semibold text-slate">
                Check your inbox!
              </p>
              <p className="text-sm text-foreground/60 mt-1">
                Your trail guide is on its way. Happy riding!
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/30" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full rounded-xl border border-cream-dark bg-white pl-12 pr-4 py-3.5 text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-accent hover:bg-accent-dark text-white px-6 py-3.5 font-semibold shadow-md hover:shadow-lg transition-all duration-200 min-h-[46px] shrink-0"
              >
                Send Me the Guide
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-foreground/40">
            No spam, ever. Unsubscribe anytime. We respect your inbox.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
