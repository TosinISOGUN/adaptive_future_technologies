import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO />
      <Navbar />
      <HeroSection />

      <div className="relative">
        <AboutSection />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 -mt-16 mb-20">
          <Link to="/about" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            Read Our Full Story <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className="relative">
        <ImpactSection />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 -mt-16 mb-20">
          <Link to="/impact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            View All Impact Metrics <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className="relative">
        <SolutionsSection />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 -mt-16 mb-20">
          <Link to="/solutions" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            Explore All Solutions <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className="relative">
        <ProductsSection />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 -mt-16 mb-20">
          <Link to="/products" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            Browse Our Product Suite <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
