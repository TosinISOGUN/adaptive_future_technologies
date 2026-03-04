import Navbar from "../components/Navbar";
import ProductsSection from "../components/ProductsSection";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import productsHero from "@/assets/products-saas.png";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Product Suite | Flow Cloud Ecosystem"
        description="Explore our modular, intelligent software solutions for financial, operational, and fiscal management."
      />
      <Navbar />
      <PageHeader
        title="The Flow Cloud"
        subtitle="A unified ecosystem of modular, intelligent tools designed for modern operations."
        backgroundImage={productsHero}
      />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default Products;
