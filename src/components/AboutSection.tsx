import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Rocket } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 section-padding flex items-center" ref={ref}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Who We Are</p>
          <div className="glow-line max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight text-foreground">
              Bridging Global Standards
              <br />
              with <span className="text-gradient">Local Realities</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Adaptive Future Technologies is a premier technology
              engineering firm bridging the gap between global digital standards and
              local operational realities.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We don't just build software; we engineer the Digital Operating Systems
              for governments, enterprises, and institutions in emerging markets.
              From our headquarters in Ibadan, we combine deep local insight with
              enterprise-grade architecture.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="text-primary" size={20} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the operating system for African growth, empowering every
                government and enterprise to achieve digital sovereignty,
                transparency, and unlimited scalability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Rocket className="text-primary" size={20} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To deploy adaptive, resilient, and intelligent technology
                infrastructure that solves the unique challenges of the African
                landscape—turning complex problems into seamless flows.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
