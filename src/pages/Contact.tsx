import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import contactHero from "@/assets/hero-slide-1.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Us | Adaptive Future Technologies"
        description="Get in touch with our team to discuss your next digital project."
      />
      <Navbar />
      <PageHeader
        title="Let's Connect"
        subtitle="Start a conversation about your digital future today."
        backgroundImage={contactHero}
      />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
