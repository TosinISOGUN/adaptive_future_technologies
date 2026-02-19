import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Landmark, Code, Shield, Cpu } from "lucide-react";

const solutions = [
  {
    icon: Landmark,
    title: "GovTech & Fiscal Intelligence",
    description:
      "Sovereign platforms for revenue collection, agent performance tracking, and transparency including Outdoor Advertising & IGR Systems.",
  },
  {
    icon: Code,
    title: "Custom Enterprise Engineering",
    description:
      "Bespoke web/mobile application development and legacy system modernization tailored to your unique operational needs.",
  },
  {
    icon: Shield,
    title: "Revenue Assurance",
    description:
      "Digital revenue assurance frameworks designed to increase Internally Generated Revenue (IGR) for state governments.",
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    description:
      "Enterprise planning software to improve workflow and productivity across organizations in emerging markets.",
  },
];

const SolutionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="py-32 section-padding flex items-center" ref={ref}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Strategic Solutions
          </p>
          <div className="glow-line max-w-xs mb-8" />
          <h2 className="font-display text-4xl md:text-5xl font-bold max-w-2xl leading-tight text-foreground">
            Engineered for
            <br />
            <span className="text-gradient">High-Stakes Environments</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                <sol.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">{sol.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{sol.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
