import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { DollarSign, Settings, ClipboardCheck, Heart, Leaf } from "lucide-react";
import productsBg from "@/assets/products-bg.jpg";

const products = [
  {
    icon: DollarSign,
    name: "FinFlow",
    category: "Financial Intelligence",
    features: ["Automated Reconciliation", "Predictive Cash-Flow", "Multi-Entity Expense Control"],
    benefit: "Transforms finance from bookkeeping to strategic foresight.",
  },
  {
    icon: Settings,
    name: "OpsFlow",
    category: "Process Automation",
    features: ["Dynamic Workflow Mapping", "Automated Task Routing", "SLA Tracking"],
    benefit: "Eliminates operational bottlenecks and ensures 100% accountability.",
  },
  {
    icon: ClipboardCheck,
    name: "AuditFlow",
    category: "GRC (Compliance)",
    features: ["Digital Audit Trails", "Regulatory Reporting", "Continuous Risk Monitoring"],
    benefit: "Reduces compliance risk and accelerates audit cycles.",
  },
  {
    icon: Heart,
    name: "MedicFlow",
    category: "HealthTech",
    features: ["Unified EMR", "Patient Journey Management", "Billing Integration"],
    benefit: "Improves patient outcomes while optimizing hospital revenue.",
  },
  {
    icon: Leaf,
    name: "EcoFlow",
    category: "EnvTech",
    features: ["Geo-Spatial Waste Tracking", "Volume Analytics", "Community Engagement"],
    benefit: "Enables data-driven environmental planning and cleaner cities.",
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section
      id="products"
      className="py-32 section-padding relative overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${productsBg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            The Flow Cloud Ecosystem
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Unified. Modular. <span className="text-gradient">Intelligent.</span>
          </h2>
        </motion.div>

        {/* Product tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {products.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {p.name}
            </button>
          ))}
        </motion.div>

        {/* Active product detail */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-10 md:p-14 rounded-3xl bg-card border border-border">
            <div className="flex items-center gap-4 mb-8">
              {(() => {
                const Icon = products[active].icon;
                return (
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="text-primary" size={28} />
                  </div>
                );
              })()}
              <div>
                <h3 className="font-display text-3xl font-bold">{products[active].name}</h3>
                <p className="text-primary text-sm">{products[active].category}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                  Core Features
                </p>
                <ul className="space-y-3">
                  {products[active].features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                  Primary Benefit
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  {products[active].benefit}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
