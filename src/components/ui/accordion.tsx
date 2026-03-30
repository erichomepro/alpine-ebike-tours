"use client";

import { useState, useCallback, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  const id = useId();
  const headingId = `${id}-heading`;
  const panelId = `${id}-panel`;

  return (
    <div className="border-b border-cream-dark last:border-b-0">
      <h3>
        <button
          id={headingId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-5 px-1 text-left text-lg font-medium text-slate hover:text-primary transition-colors min-h-[46px]"
        >
          <span>{question}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="shrink-0"
          >
            <ChevronDown className="h-5 w-5 text-primary" />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 px-1 text-foreground/80 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const handleToggle = useCallback(
    (index: number) => {
      setOpenIndices((prev) => {
        const next = new Set(allowMultiple ? prev : []);
        if (prev.has(index)) {
          next.delete(index);
        } else {
          next.add(index);
        }
        return next;
      });
    },
    [allowMultiple]
  );

  return (
    <div className={cn("divide-y-0 rounded-2xl bg-white shadow-sm border border-cream-dark", className)}>
      <div className="px-6">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndices.has(index)}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}
