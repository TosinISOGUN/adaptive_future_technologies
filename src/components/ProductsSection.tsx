import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  DollarSign,
  Settings,
  ClipboardCheck,
  Heart,
  Leaf,
  ShieldCheck,
  BarChart3,
  Database,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import GridPattern from "./GridPattern";

const products = [
  {
    icon: DollarSign,
    name: "FinFlow",
    category: "Financial Intelligence",
    description: "Enterprise-grade financial monitoring and predictive cash-flow modeling for sovereign entities.",
    features: ["Automated Reconciliation", "Predictive Cash-Flow", "Multi-Entity Control"],
    color: "blue",
  },
  {
    icon: Settings,
    name: "OpsFlow",
    category: "Process Automation",
    description: "Dynamic workflow engine that eliminates operational bottlenecks through intelligent automation.",
    features: ["Dynamic Workflow Mapping", "Automated Task Routing", "SLA Tracking"],
    color: "indigo",
  },
  {
    icon: ClipboardCheck,
    name: "AuditFlow",
    category: "GRC & Compliance",
    description: "Digital audit trails and risk monitoring systems ensuring 100% regulatory compliance.",
    features: ["Digital Audit Trails", "Log Management", "Continuous Risk Monitoring"],
    color: "emerald",
  },
  {
    icon: Heart,
    name: "MedicFlow",
    category: "HealthTech",
    description: "Unified healthcare management platform connecting patient care with administrative efficiency.",
    features: ["Unified EMR", "Patient Journey Mgmt", "Billing Integration"],
    color: "rose",
  },
  {
    icon: Leaf,
    name: "EcoFlow",
    category: "EnvTech",
    description: "Geo-spatial environment tracking and waste management analytics for smarter, cleaner cities.",
    features: ["Waste Tracking", "Volume Analytics", "Community Engagement"],
    color: "green",
  },
];

const sectors = [
  { name: "Public Sector", icon: BarChart3 },
  { name: "Healthcare", icon: Heart },
  { name: "Finance", icon: Database },
  { name: "Logistics", icon: Settings },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="products"
      className="py-32 section-padding relative overflow-hidden bg-background border-t border-border/50"
      ref={ref}
    >
      <GridPattern />
      {/* Background Decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/2 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-semibold">
              The Flow Cloud Ecosystem
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Unified. Modular. <br />
              <span className="text-gradient">Intelligent.</span>
            </h2>
          </motion.div>

          <div className="flex flex-col items-end gap-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-end"
            >
              {sectors.map((s) => (
                <div key={s.name} className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 text-xs font-medium text-muted-foreground uppercase tracking-widest">
                  <s.icon size={14} className="text-primary/60" />
                  {s.name}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-3xl bg-card border border-border hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <p.icon className="text-primary group-hover:text-white" size={28} />
              </div>

              <div className="mb-4">
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                  {p.name}
                </h3>
                <p className="text-primary/70 text-xs uppercase tracking-widest font-semibold">
                  {p.category}
                </p>
              </div>

              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                {p.description}
              </p>

              <div className="mt-auto space-y-4">
                <div className="flex flex-wrap gap-2">
                  {p.features.map(f => (
                    <span key={f} className="text-[10px] px-2 py-1 rounded bg-muted text-muted-foreground">
                      {f}
                    </span>
                  ))}
                </div>

                <div className="h-px bg-border pt-4" />

                <Link to="/products" className="inline-flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-3 transition-all">
                  Product Details <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}

          {/* Custom CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="p-8 rounded-3xl bg-primary text-primary-foreground flex flex-col justify-center items-center text-center overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ShieldCheck size={120} />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4 relative z-10">
              Ready for Your Custom Solution?
            </h3>
            <p className="text-primary-foreground/70 mb-8 max-w-[200px] relative z-10 text-sm">
              We engineer bespoke software tailored to your operational needs.
            </p>
            <Link to="/contact" className="px-8 py-3 rounded-full bg-white text-primary font-bold hover:bg-white/90 transition-colors relative z-10 text-sm">
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
