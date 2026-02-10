import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's Build the <span className="text-gradient">Future Together</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Mail, label: "Email", value: "hello@adaptive-future.com", href: "mailto:hello@adaptive-future.com" },
            { icon: Phone, label: "Phone", value: "08130534710", href: "tel:08130534710" },
            { icon: MapPin, label: "Office", value: "No 3 Powerhouse Road, Ibadan, Oyo State, Nigeria", href: "#" },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border text-center hover:border-primary/40 transition-colors duration-500 block"
            >
              <item.icon className="text-primary mx-auto mb-4" size={24} />
              <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
              <p className="text-foreground font-medium text-sm">{item.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
