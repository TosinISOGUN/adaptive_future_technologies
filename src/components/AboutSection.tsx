import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Rocket } from "lucide-react";
import GridPattern from "./GridPattern";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 section-padding flex items-center relative overflow-hidden bg-background" ref={ref}>
      <GridPattern />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-semibold">Who We Are</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-foreground">
              Bridging Global Standards
              <br />
              with <span className="text-gradient">Local Realities</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                Adaptive Future Technologies is a premier technology
                engineering firm bridging the gap between global digital standards and
                local operational realities.
              </p>
              <p>
                We don't just build software; we engineer the Digital Operating Systems
                for governments, enterprises, and institutions in emerging markets.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="text-primary" size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To be the operating system for African growth.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Rocket className="text-primary" size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To deploy adaptive, resilient infrastructure.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
