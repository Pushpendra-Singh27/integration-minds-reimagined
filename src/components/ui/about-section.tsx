import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Eye, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    "Official IBM Training Partner",
    "Over a Decade of Experience", 
    "Authorized IBM Labs & Materials",
    "Best of Breed Instructors",
    "Global Training Delivery",
    "Comprehensive Skill Development"
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Successful Projects" },
    { number: "1000+", label: "Professionals Trained" },
    { number: "50+", label: "Enterprise Clients" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            About Integration Minds
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why <span className="bg-gradient-primary bg-clip-text text-transparent">SME Integration Minds</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Grow Your Expertise Stack, Own Your Digital Modernization Journey
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - About Text */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Your Expertise Development Partner
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                What makes our services unquestionably "Best". Is it because, we are one point solution or 
                Is it because we offer our services at lowest cost, we would rather say, Firstly we believe 
                in your Potential and we believe in our Expertise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When our Expertise Minds integrated with "Intensity", "Reliability" & "Curiosity", 
                it becomes a package which can be engaged to exploit your Potential to excel in your technology business.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We don't just drop in, train, and leave—we'll work side by side with your team to build capabilities 
                and instill a process that shows immediate and lasting impact.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats & Cards */}
          <div className="space-y-6 animate-scale-in">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover-glow border-0 shadow-card">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mission & Vision Cards */}
            <div className="space-y-4">
              <Card className="hover-glow border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Our Mission</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        To be a globally reachable Technical Competency Developer for Information Technology 
                        customers which brings added business value to technology & its users, because, 
                        we believe everyone has a right to be an Expert.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-glow border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary/10 rounded-lg p-3">
                      <Eye className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Our Vision</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        To be a globally reachable Technical Competency Developer for Information Technology 
                        customers which brings added business value to technology & its users, because, 
                        we believe everyone has a right to be an Expert.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* IBM Training Section */}
        <div className="text-center bg-gradient-subtle rounded-2xl p-8 animate-fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-primary mr-3" />
            <h3 className="text-2xl font-bold text-foreground">Authorized IBM Training Partner</h3>
          </div>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            SME Integration Minds Pvt Ltd. has been an official IBM Training Provider for well over a decade, 
            and as an IBM Global Training Partner (GTP) we have been delivering offerings using official IBM course 
            materials and authorised IBM labs to provide a highly polished delivery using best of breed instructors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;