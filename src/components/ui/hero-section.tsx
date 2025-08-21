import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import heroBackground from "@/assets/hero-background.jpg";
import tdSynnexPartnership from "/lovable-uploads/23b84b0e-20f4-4672-a5ff-62377a53e4a5.png";
import ibmPartnership from "/lovable-uploads/315312b4-8a95-4024-a6fa-2035a79c0179.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up">
              <span className="hero-text-glow">When Expertise Matters,</span>
              <br />
              <span className="hero-text-glow">Possibilities Become</span>
              <br />
              <span className="bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">
                Limitless
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Your Potential + Our Expertise = Modernize Technology Business
            </p>

            {/* Course Search */}
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 animate-scale-in">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Find Your Course Here"
                  className="pl-10 h-12 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/70"
                />
              </div>
              <Button size="lg" className="h-12 bg-white text-primary hover:bg-white/90 font-semibold">
                Search
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Partnership Badges */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 animate-slide-in-right">
            {/* TD SYNNEX Partnership */}
            <div className="glass-card rounded-lg p-6 partnership-badge hover-glow">
              <img 
                src={tdSynnexPartnership} 
                alt="TD SYNNEX Partnership" 
                className="h-20 w-auto mx-auto"
              />
            </div>

            {/* IBM Partnership */}
            <div className="glass-card rounded-lg p-6 partnership-badge hover-glow">
              <img 
                src={ibmPartnership} 
                alt="IBM Business Partner" 
                className="h-20 w-auto mx-auto"
              />
            </div>

            {/* Badge Program Info */}
            <div className="glass-card rounded-lg p-6 max-w-sm text-center hover-glow">
              <h3 className="text-white font-semibold text-lg mb-2">Badge Program</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                As a Global Training Provider for IBM Training, Through TD SYNNEX SME Integration Minds Pvt Ltd. 
                is fully authorized to issue original IBM badges for all eligible courses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl float-animation"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/20 rounded-full blur-lg float-animation" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default HeroSection;