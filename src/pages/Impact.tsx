import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import ImpactSection from "../components/ImpactSection";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import impactHero from "@/assets/impact-hero.png";

const Impact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Our Impact | Adaptive Future Technologies"
        description="Discover how our digital solutions are driving real-world value and performance."
      />
      <Navbar />
      <PageHeader
        title="Measurable Impact"
        subtitle="Moving beyond code to create tangible value for governments and enterprises."
        backgroundImage={impactHero}
      />
      <ImpactSection />
      <Footer />
    </div>
  );
};

export default Impact;
