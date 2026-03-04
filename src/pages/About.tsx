import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import aboutHero from "@/assets/about-team.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us | Adaptive Future Technologies"
        description="Learn about our mission to bridge global standards with local realities through engineering excellence."
      />
      <Navbar />
      <PageHeader
        title="Engineering for the Future"
        subtitle="Bridging the gap between global digital standards and local operational realities."
        backgroundImage={aboutHero}
      />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
