import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { Package, Globe, TrendingUp, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const stats = [
  { icon: Package, value: "12+", label: "Enterprise Platforms Deployed" },
  { icon: Globe, value: "4", label: "Sectors Served" },
  { icon: TrendingUp, value: "100%", label: "Revenue Visibility Increase" },
];

const testimonials = [
  {
    quote: "Adaptive Future moved us from fragmented spreadsheets to a unified digital command center. Their GovTech solution didn't just digitize our process; it transformed our revenue visibility.",
    author: "Public Sector Partner",
    sector: "GovTech"
  },
  {
    quote: "Our transaction success rates across borders spiked by 40% after integrating AFT's adaptive payment rail. They truly understand the complexity of emerging financial markets.",
    author: "Chief Technology Officer",
    sector: "FinTech Unicorn"
  },
  {
    quote: "AFT's secure data infrastructure allowed us to scale our maternal health platform to millions. Their commitment to zero-downtime is life-saving.",
    author: "Director of Health Informatics",
    sector: "HealthTech"
  },
  {
    quote: "Digitizing the supply chain for smallholder farmers was a pipe dream until AFT stepped in. Their offline-first approach is a game-changer for the last mile.",
    author: "CEO",
    sector: "Agri-Export Group"
  }
];

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const numericPart = parseInt(target.replace(/\D/g, "")) || 0;

  useEffect(() => {
    if (!inView || numericPart === 0) return;
    let start = 0;
    const duration = 2000;
    const step = duration / numericPart;
    const timer = setInterval(() => {
      start++;
      setCount(start);
      if (start >= numericPart) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, numericPart]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl font-bold text-gradient">
      {numericPart === 0 ? target : count}
      {suffix}
    </span>
  );
}

const ImpactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  return (
    <section id="impact" className="py-32 section-padding relative flex items-center" ref={ref}>
      <div className="max-w-7xl mx-auto relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Our Impact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Performance & Proof
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We measure success not just in code deployed, but in value generated.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="text-center p-10 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors duration-500"
            >
              <stat.icon className="text-primary mx-auto mb-4" size={28} />
              <AnimatedCounter
                target={stat.value}
                suffix={stat.value.includes("+") ? "+" : stat.value.includes("%") ? "%" : ""}
              />
              <p className="text-muted-foreground mt-3 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <Quote className="text-primary/20 mx-auto mb-6" size={48} />

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 px-4">
                  <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-foreground/80 italic mb-6 min-h-[140px] flex items-center justify-center">
                    "{t.quote}"
                  </blockquote>
                  <p className="text-primary font-medium">— {t.author}</p>
                  <p className="text-muted-foreground text-sm mt-1">{t.sector}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === selectedIndex ? "bg-primary w-6" : "bg-primary/20 hover:bg-primary/40"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;

