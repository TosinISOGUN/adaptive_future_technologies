import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    tagline: "Adaptive Future Technologies",
    headline: ["Engineering the", "Digital Future", "of Africa"],
    description:
      "We engineer the Digital Operating Systems for governments, enterprises, and institutions in emerging markets.",
  },
  {
    image: heroSlide2,
    tagline: "GovTech & Enterprise",
    headline: ["Data-Driven", "Decision Making", "at Scale"],
    description:
      "Sovereign platforms for revenue collection, transparency, and real-time intelligence.",
  },
  {
    image: heroSlide3,
    tagline: "Innovation Hub",
    headline: ["Building", "Tomorrow's", "Solutions Today"],
    description:
      "From concept to deployment — bespoke engineering that transforms complex problems into seamless flows.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background images with crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      </AnimatePresence>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto section-padding">
        <AnimatePresence mode="wait">
          <motion.div key={current}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/80 font-medium text-sm tracking-[0.3em] uppercase mb-6"
            >
              {slide.tagline}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 text-white"
            >
              {slide.headline[0]}
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                {slide.headline[1]}
              </span>
              <br />
              {slide.headline[2]}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10"
            >
              {slide.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#solutions"
            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Explore Solutions
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${i === current ? "w-10 bg-white" : "w-4 bg-white/40"
              }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-white/60" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
