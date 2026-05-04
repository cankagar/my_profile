"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [[absolutePosition, direction], setTuple] = useState([0, 0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const total = images.length;

  const currentIndex = total > 0 ? ((absolutePosition % total) + total) % total : 0;

  const handlePrev = useCallback(() => {
    setTuple(([prevPos]) => [prevPos - 1, -1]);
  }, []);

  const handleNext = useCallback(() => {
    setTuple(([prevPos]) => [prevPos + 1, 1]);
  }, []);

  const goToIndex = useCallback((idx: number) => {
    setTuple(([prevPos]) => {
      const currentIdx = ((prevPos % total) + total) % total;
      let diff = idx - currentIdx;
      if (diff === 0) return [prevPos, 0];
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;
      return [prevPos + diff, diff > 0 ? 1 : -1];
    });
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape" && lightboxOpen) setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, lightboxOpen]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [lightboxOpen]);

  if (total === 0) return null;

  const items = total === 1
    ? [{ offset: 0, absoluteIndex: absolutePosition, state: "active" as const }]
    : [
        { offset: -1, absoluteIndex: absolutePosition - 1, state: "left" as const },
        { offset: 0, absoluteIndex: absolutePosition, state: "active" as const },
        { offset: 1, absoluteIndex: absolutePosition + 1, state: "right" as const },
      ];

  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "90%" : "-190%",
      y: "-50%",
      scale: 0.6,
      opacity: 0,
      filter: "blur(4px)",
      zIndex: 1,
      boxShadow: "var(--shadow-card)",
    }),
    active: {
      x: "-50%",
      y: "-50%",
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 10,
      boxShadow: "var(--shadow-elevated)",
    },
    left: {
      x: "-135%",
      y: "-50%",
      scale: 0.8,
      opacity: 0.7,
      filter: "blur(2px)",
      zIndex: 5,
      boxShadow: "var(--shadow-card)",
    },
    right: {
      x: "35%",
      y: "-50%",
      scale: 0.8,
      opacity: 0.7,
      filter: "blur(2px)",
      zIndex: 5,
      boxShadow: "var(--shadow-card)",
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-190%" : "90%",
      y: "-50%",
      scale: 0.6,
      opacity: 0,
      filter: "blur(4px)",
      zIndex: 1,
      boxShadow: "var(--shadow-card)",
    }),
  };

  return (
    <>
      <div className="relative w-full flex items-center justify-center py-8">
        {/* Left Arrow */}
        {total > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-4 z-20 p-3 rounded-full bg-bg-card border border-border hover:border-accent/40 text-text-muted hover:text-accent shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all"
            aria-label="Önceki görsel"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Carousel Track */}
        <div
          className="relative w-full max-w-5xl mx-auto overflow-hidden px-12 md:px-16"
          style={{ height: "clamp(220px, 35vw, 420px)" }}
        >
          <AnimatePresence initial={false} custom={direction}>
            {items.map((item) => {
              const idx = ((item.absoluteIndex % total) + total) % total;
              const img = images[idx];

              return (
                <motion.div
                  key={item.absoluteIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate={item.state}
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 w-[55%] aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-bg-card"
                  onClick={() => {
                    if (item.state === "active") setLightboxOpen(true);
                    else if (item.state === "left") handlePrev();
                    else if (item.state === "right") handleNext();
                  }}
                >
                  <Image
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 50vw"
                    priority={item.state === "active"}
                  />
                  {item.state === "active" && (
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-300 flex items-center justify-center group cursor-pointer">
                      <span className="opacity-0 group-hover:opacity-100 bg-text-primary/60 text-text-inverse px-4 py-2 rounded-full text-sm backdrop-blur-md transition-opacity duration-300 pointer-events-none">
                        Büyüt
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        {total > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-0 md:right-4 z-20 p-3 rounded-full bg-bg-card border border-border hover:border-accent/40 text-text-muted hover:text-accent shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all"
            aria-label="Sonraki görsel"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Dots indicator */}
      {total > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-accent w-6" : "bg-border hover:bg-border-hover"
              }`}
              aria-label={`Görsel ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-overlay backdrop-blur-sm p-4 md:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 z-50 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white backdrop-blur-md transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            {total > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="absolute left-4 md:left-8 z-50 p-3 bg-white/20 hover:bg-white/30 rounded-full text-white backdrop-blur-md transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="absolute right-4 md:right-8 z-50 p-3 bg-white/20 hover:bg-white/30 rounded-full text-white backdrop-blur-md transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0.5, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl aspect-video md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentIndex]}
                alt={`Expanded ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

