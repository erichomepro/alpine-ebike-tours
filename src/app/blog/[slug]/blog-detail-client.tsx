"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  List,
} from "lucide-react";
import { BlogCard } from "@/components/blog/blog-card";
import type { BlogPost } from "@/types";

interface BlogDetailClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

interface TocItem {
  id: string;
  text: string;
}

function extractHeadings(html: string): TocItem[] {
  const matches = html.matchAll(/<h2\s+id="([^"]+)"[^>]*>(.*?)<\/h2>/g);
  const items: TocItem[] = [];
  for (const match of matches) {
    items.push({
      id: match[1],
      text: match[2].replace(/<[^>]*>/g, ""),
    });
  }
  return items;
}

export function BlogDetailClient({ post, relatedPosts }: BlogDetailClientProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const toc = useMemo(() => extractHeadings(post.content), [post.content]);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary-dark via-primary to-slate py-20 sm:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-slate/90" />
        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
          >
            <Link
              href="/blog"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Blog
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/40 truncate">{post.category}</span>
          </motion.div>

          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-block rounded-full bg-accent/90 text-white px-4 py-1.5 text-xs font-semibold mb-6">
              {post.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Meta bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/70"
          >
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formattedDate}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 sm:py-16 px-4 bg-cream">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-sm p-6 sm:p-10"
            >
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-[var(--font-heading)] prose-headings:text-slate prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pt-8 prose-h2:border-t prose-h2:border-cream-dark
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-5
                  prose-li:text-foreground/80 prose-li:leading-relaxed
                  prose-ul:my-4 prose-ul:space-y-2
                  prose-strong:text-slate prose-strong:font-semibold
                  prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-accent/5 prose-blockquote:rounded-r-xl prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-foreground/70
                  prose-a:text-primary prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-primary-dark"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-cream-dark">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="h-4 w-4 text-foreground/40" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-foreground/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>

            {/* Sidebar — Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl shadow-sm p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <List className="h-4 w-4 text-primary" />
                    <h3 className="font-[var(--font-heading)] text-sm font-bold text-slate uppercase tracking-wider">
                      In This Article
                    </h3>
                  </div>
                  <nav className="space-y-1">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block py-2 px-3 text-sm text-foreground/60 hover:text-primary hover:bg-cream rounded-lg transition-colors leading-snug"
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </motion.div>

                {/* Quick CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-primary rounded-2xl shadow-sm p-6 mt-6 text-white"
                >
                  <h3 className="font-[var(--font-heading)] text-lg font-bold">
                    Ready to Ride?
                  </h3>
                  <p className="mt-2 text-sm text-white/75 leading-relaxed">
                    Book a guided e-bike tour through the Canadian Rockies. All
                    gear included, no experience needed.
                  </p>
                  <Link
                    href="/tours"
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-accent hover:bg-accent-dark text-white px-5 py-3 text-sm font-semibold transition-all duration-200"
                  >
                    View Tours
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Ready to Ride CTA (mobile) */}
      <section className="py-12 px-4 bg-primary lg:hidden">
        <div className="mx-auto max-w-3xl text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold">
              Ready to Ride?
            </h2>
            <p className="mt-4 text-white/75 max-w-lg mx-auto">
              Book a guided e-bike tour through the Canadian Rockies. All gear
              included, no experience needed.
            </p>
            <Link
              href="/tours"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent hover:bg-accent-dark text-white px-8 py-4 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              View Tours
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-slate mb-10 text-center"
            >
              Related Articles
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((rp, i) => (
                <BlogCard key={rp.slug} post={rp} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
