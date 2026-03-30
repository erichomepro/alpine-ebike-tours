"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, BookOpen } from "lucide-react";
import { blogPosts, blogCategories, type BlogCategory } from "@/data/blog-posts";
import { BlogCard } from "@/components/blog/blog-card";
import { cn } from "@/lib/utils";

export default function BlogPage() {
  const [category, setCategory] = useState<BlogCategory>("All");

  const filtered = useMemo(() => {
    if (category === "All") return blogPosts;
    return blogPosts.filter((post) => post.category === category);
  }, [category]);

  const featured = filtered[0];
  const remaining = filtered.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary-dark via-primary to-slate py-24 sm:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/blog/blog-hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-slate/90" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <BookOpen className="h-10 w-10 text-accent mx-auto mb-4" />
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              The Alpine Journal
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
          >
            Trail guides, riding tips, and everything you need to plan the
            perfect e-bike adventure in the Canadian Rockies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex items-center justify-center gap-6 text-sm text-white/70"
          >
            <span>{blogPosts.length} articles</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>Updated weekly</span>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-cream-dark shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center gap-2 flex-wrap">
            <SlidersHorizontal className="h-4 w-4 text-foreground/40 mr-1" />
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 min-h-[46px] min-w-[46px]",
                  category === cat
                    ? "bg-primary text-white"
                    : "bg-cream text-foreground/60 hover:bg-cream-dark"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 px-4 bg-cream">
        <div className="mx-auto max-w-6xl">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-foreground/50">
                No articles in this category yet. Check back soon.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {/* Featured Article */}
              {featured && <BlogCard post={featured} featured />}

              {/* Remaining Articles Grid */}
              {remaining.length > 0 && (
                <div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="font-[var(--font-heading)] text-2xl font-bold text-slate mb-8"
                  >
                    More Articles
                  </motion.h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {remaining.map((post, i) => (
                      <BlogCard key={post.slug} post={post} index={i} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-slate">
              Stay in the Loop
            </h2>
            <p className="mt-4 text-foreground/60 max-w-lg mx-auto">
              New trail guides, seasonal updates, and riding tips delivered to
              your inbox. No spam, just mountain wisdom.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
