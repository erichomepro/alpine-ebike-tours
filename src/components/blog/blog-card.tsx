"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Calendar, User, ArrowRight, Tag } from "lucide-react";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  featured?: boolean;
}

export function BlogCard({ post, index = 0, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href={`/blog/${post.slug}`}
          className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image placeholder */}
            <div className="relative h-64 md:h-full min-h-[280px] overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Tag className="h-7 w-7 text-primary/40" />
                  </div>
                  <p className="text-sm text-primary/30 font-medium">
                    Featured Article
                  </p>
                </div>
              </div>
              <span className="absolute top-4 left-4 z-20 rounded-full bg-accent/90 text-white px-3 py-1 text-xs font-semibold">
                {post.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-sm text-foreground/50 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {formattedDate}
                </span>
                <span className="w-1 h-1 rounded-full bg-foreground/20" />
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-slate group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h2>

              <p className="mt-4 text-foreground/60 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-foreground/50">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full"
      >
        {/* Image placeholder */}
        <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary/15 via-primary/5 to-accent/10">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Tag className="h-5 w-5 text-primary/30" />
            </div>
          </div>
          <span className="absolute top-4 left-4 z-20 rounded-full bg-accent/90 text-white px-3 py-1 text-xs font-semibold">
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col">
          <div className="flex items-center gap-3 text-xs text-foreground/50 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {formattedDate}
            </span>
            <span className="w-1 h-1 rounded-full bg-foreground/20" />
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>

          <h3 className="font-[var(--font-heading)] text-lg font-semibold text-slate group-hover:text-primary transition-colors leading-snug line-clamp-2">
            {post.title}
          </h3>

          <p className="mt-3 text-sm text-foreground/60 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between pt-4 border-t border-cream-dark">
            <span className="flex items-center gap-1.5 text-sm text-foreground/50">
              <User className="h-3.5 w-3.5" />
              {post.author}
            </span>
            <ArrowRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
