 import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import heroBackground from "@/assets/hero-background.jpg";
import partnership1 from "@/assets/Partnership1.png";
import partnership2 from "@/assets/Partnership2.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-teal-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center space-y-12 mb-20">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[0.9] tracking-tight">
                <span className="block mb-2">When Expertise Matters,</span>
                <span className="block mb-2">Possibilities Become</span>
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent font-black">
                  Limitless
                </span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full mt-8"></div>
            </div>

            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl mx-auto leading-relaxed font-light">
              Your Potential + Our Expertise = <span className="font-semibold text-cyan-300">Modernize Technology Business</span>
            </p>

            {/* Course Search - Enhanced */}
            <div className="max-w-2xl mx-auto mt-12">
              <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Find Your Course Here"
                    className="pl-12 h-14 bg-transparent border-0 text-white text-lg placeholder:text-white/60 focus:ring-0 focus:outline-none"
                  />
                </div>
                <Button size="lg" className="h-14 px-8 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  Search
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Partnership Badges - Redesigned */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {/* Partnership Section Header */}
            <div className="lg:col-span-3 text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">In Partnership with</h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto"></div>
            </div>

            {/* TD SYNNEX Partnership */}
            <div className="group">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 transition-all duration-300 hover:shadow-3xl hover:scale-105 hover:bg-white">
                <img 
                  src={partnership1} 
                  alt="TD SYNNEX Partnership" 
                  className="h-16 w-auto mx-auto transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>

            {/* IBM Partnership */}
            <div className="group">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 transition-all duration-300 hover:shadow-3xl hover:scale-105 hover:bg-white">
                <img 
                  src={partnership2} 
                  alt="IBM Partnership" 
                  className="h-16 w-auto mx-auto transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Badge Program Info */}
            <div className="group">
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/30 shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105 hover:from-white/25 hover:to-white/15">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">Badge Program</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    As a Global Training Provider for IBM Training, Through TD SYNNEX SME Integration Minds Pvt Ltd. 
                    is fully authorized to issue <span className="font-semibold text-cyan-300">original IBM badges</span> for all eligible courses.
                  </p>
                </div>
              </div>
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