import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import SolutionsSection from "../components/SolutionsSection";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import solutionsHero from "@/assets/govtech-viz.png";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO
        title="Strategic Solutions | Adaptive Future Technologies"
        description="Enterprise-grade digital infrastructure for governments and large-scale enterprises."
      />
      <Navbar />
      <PageHeader
        title="Strategic Solutions"
        subtitle="Digital infrastructure engineered for transparency, efficiency, and scale."
        backgroundImage={solutionsHero}
      />
      <SolutionsSection />
      <Footer />
    </div>
  );
};

export default Solutions;
