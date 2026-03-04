import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Landmark, Code, Shield, Cpu, ExternalLink } from "lucide-react";
import GridPattern from "./GridPattern";

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
    <section id="solutions" className="py-32 section-padding flex items-center relative overflow-hidden bg-background" ref={ref}>
      <GridPattern />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-semibold">
              Strategic Solutions
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-8">
              Engineered for
              <br />
              <span className="text-gradient">High-Stakes Environments</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We provide the digital backbone for critical operations, ensuring
              transparency and efficiency where it matters most.
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
                Request a Demo <ExternalLink size={16} />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 cursor-default flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <sol.icon className="text-primary group-hover:text-white" size={24} />
              </div>
              <h3 className="font-display text-lg font-bold mb-3 text-foreground">{sol.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{sol.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
