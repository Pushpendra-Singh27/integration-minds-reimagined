import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, UserCheck, ArrowRight } from "lucide-react";
import trainingImage from "@/assets/training-image.jpg";
import consultingImage from "@/assets/consulting-image.jpg";
import hiringImage from "@/assets/hiring-image.jpg";
import servicesBackground from "@/assets/services-background.jpg";

const ServicesSection = () => {
  const services = [
    {
      id: "training",
      title: "Technical Training",
      description: "Learning never exhausts the mind, rather it adds value to its existence",
      icon: BookOpen,
      image: trainingImage,
      features: [
        "IBM Authorized Training",
        "Official Curriculum & Labs",
        "Certified Instructors",
        "Badge Certification Programs"
      ],
      cta: "Explore Training Programs"
    },
    {
      id: "consulting", 
      title: "Technology Consulting",
      description: "A project is complete when it starts working for you, rather than you working for it.",
      icon: Users,
      image: consultingImage,
      features: [
        "Digital Transformation",
        "Technology Modernization",
        "Process Automation",
        "Expert Technical Advisory"
      ],
      cta: "Get Consulting Services"
    },
    {
      id: "hireminds",
      title: "HireMinds",
      description: "When there is none to match your JD, we play the role with our expert minds through collaborative hiring process.",
      icon: UserCheck,
      image: hiringImage,
      features: [
        "Technical Talent Sourcing",
        "Skill-based Matching",
        "Interview Coordination", 
        "Collaborative Hiring Process"
      ],
      cta: "Find Talent"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${servicesBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let us be your <span className="bg-gradient-primary bg-clip-text text-transparent">Trusted Partner</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We understand IT business framework because we persistently build stack of expert minds in new and 
            emerging trends in information technologies. From invisible IT Infrastructure to Unleashing Applications, 
            from Data Modernization to Process Automation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className="group hover-glow border-0 shadow-card bg-card/50 backdrop-blur-sm animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-elegant group-hover:shadow-glow transition-all duration-300"
                    size="lg"
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Enroll in Our Programs
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our role is to help your technology business take advantage of emerging trends in information technology. 
            Let us be your trusted companion and help you on that journey.
          </p>
          <Button size="lg" className="bg-gradient-secondary hover:shadow-glow">
            View All Programs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;