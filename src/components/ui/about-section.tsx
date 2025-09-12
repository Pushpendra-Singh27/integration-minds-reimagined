import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Eye, Award, Sparkles, Users, Trophy, Globe } from "lucide-react";

const AboutSection = () => {
  const features = [
    { icon: Award, text: "Official IBM Training Partner" },
    { icon: Trophy, text: "Over a Decade of Experience" },
    { icon: Sparkles, text: "Authorized IBM Labs & Materials" },
    { icon: Users, text: "Best of Breed Instructors" },
    { icon: Globe, text: "Global Training Delivery" },
    { icon: Target, text: "Comprehensive Skill Development" }
  ];

  const stats = [
    { number: "10+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
    { number: "500+", label: "Successful Projects", color: "from-green-500 to-teal-500" },
    { number: "1000+", label: "Professionals Trained", color: "from-purple-500 to-pink-500" },
    { number: "50+", label: "Enterprise Clients", color: "from-orange-500 to-red-500" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-200/20 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-600 mr-2" />
            <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">About Integration Minds</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">
            Why <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 bg-clip-text text-transparent">SME Integration Minds</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Grow Your Expertise Stack, Own Your Digital Modernization Journey
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 mb-20">
          {/* Left Column - About Text */}
          <div className="xl:col-span-2 space-y-8 animate-fade-in-up">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  Your Expertise Development Partner
                </h3>
              </div>
              
              <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p className="text-lg">
                  What makes our services unquestionably <span className="font-semibold text-cyan-600">"Best"</span>? 
                  It's not just because we're a one-point solution or offer competitive pricing. 
                  We believe in <span className="font-semibold">your potential</span> and trust in our expertise.
                </p>
                <p className="text-lg">
                  When our expertise integrates with <span className="font-semibold text-teal-600">intensity</span>, 
                  <span className="font-semibold text-blue-600"> reliability</span>, and 
                  <span className="font-semibold text-purple-600"> curiosity</span>, it becomes a powerful package 
                  designed to unlock your potential and excel in technology business.
                </p>
                <p className="text-lg">
                  We don't just deliver training and leave—we work side by side with your team to build lasting 
                  capabilities and establish processes that deliver immediate and sustained impact.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium text-slate-900 dark:text-white">{feature.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6 animate-scale-in">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-3xl p-8 border border-cyan-200/50 dark:border-cyan-700/50 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  To be a globally reachable Technical Competency Developer for Information Technology 
                  customers, bringing added business value to technology and its users—because we believe 
                  everyone has the right to be an Expert.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-blue-200/50 dark:border-blue-700/50 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  To empower organizations worldwide with cutting-edge technical expertise, fostering innovation 
                  and digital transformation that creates lasting value for businesses and their communities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* IBM Training Section */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">Authorized IBM Training Partner</h3>
          </div>
          <p className="text-xl text-slate-200 max-w-5xl mx-auto leading-relaxed">
            SME Integration Minds Pvt Ltd. has been an official IBM Training Provider for well over a decade. 
            As an IBM Global Training Partner (GTP), we deliver world-class training using official IBM course 
            materials and authorized IBM labs, ensuring the highest quality education with industry-leading instructors.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-sm font-semibold text-cyan-300">Trusted by Fortune 500 Companies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;