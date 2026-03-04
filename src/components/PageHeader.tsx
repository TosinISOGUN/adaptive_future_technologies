import { motion } from "framer-motion";
import MeshGradient from "./MeshGradient";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  return (
    <section className="relative pt-64 pb-32 section-padding bg-slate-950 text-white overflow-hidden min-h-[70vh] flex items-center">
      {/* Background Layer */}
      {backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary" />
          <MeshGradient />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-primary mb-8"
          />
          <h1 className="font-display text-5xl md:text-8xl font-bold mb-8 tracking-tight leading-[0.9]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed font-light">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary/10 blur-[120px] rounded-full -z-0" />
    </section>
  );
};

export default PageHeader;
