import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/aft-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Impact", href: "/impact" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-primary shadow-lg"
          : "bg-primary/95 backdrop-blur-md"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 pr-6 md:pr-0">
          <div className="flex items-center">
            <Link to="/" className="relative flex items-center h-16 w-32 md:w-36 group">
              <img
                src={logo}
                alt="Adaptive Future Technologies"
                className="absolute left-[-20px] md:left-[-40px] top-1/2 -translate-y-1/2 h-44 md:h-52 w-auto max-w-none object-contain transition-all duration-300 pointer-events-none"
              />
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-xs font-medium text-primary-foreground/75 hover:text-primary-foreground transition-colors duration-300 uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-xs font-bold px-4 py-1.5 rounded-full bg-primary-foreground text-primary hover:bg-secondary hover:text-white transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-primary-foreground"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl text-primary-foreground hover:text-primary-foreground/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
