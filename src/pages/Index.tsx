import HeroSection from "@/components/ui/hero-section";
import ServicesSection from "@/components/ui/services-section";
import AboutSection from "@/components/ui/about-section";
import ContactSection from "@/components/ui/contact-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
