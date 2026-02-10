import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Package, Globe, TrendingUp, Quote } from "lucide-react";

const stats = [
  { icon: Package, value: "12+", label: "Enterprise Platforms Deployed" },
  { icon: Globe, value: "4", label: "Sectors Served" },
  { icon: TrendingUp, value: "100%", label: "Revenue Visibility Increase" },
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

  return (
    <section id="impact" className="py-32 section-padding relative" ref={ref}>
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Our Impact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Performance & Proof
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We measure success not just in code deployed, but in value generated.
          </p>
        </motion.div>

        {/* Stats */}
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

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto text-center relative"
        >
          <Quote className="text-primary/20 mx-auto mb-6" size={48} />
          <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-foreground/90 italic mb-6">
            "Adaptive Future moved us from fragmented spreadsheets to a unified
            digital command center. Their GovTech solution didn't just digitize our
            process; it transformed our revenue visibility."
          </blockquote>
          <p className="text-primary font-medium">— Public Sector Partner</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
