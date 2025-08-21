import { motion } from "framer-motion";
import { Users, UserCheck, Clock, Target, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HireMinds = () => {
  const services = [
    {
      title: "Permanent Hiring",
      description: "Find the perfect full-time talent for your long-term technology needs",
      icon: UserCheck,
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "IT Contractors",
      description: "Flexible monthly and hourly IT professionals for project-based work",
      icon: Clock,
      gradient: "from-secondary to-secondary-light"
    },
    {
      title: "Contract-To-Hire",
      description: "Evaluate talent with contract work before making permanent offers",
      icon: Target,
      gradient: "from-primary-glow to-secondary"
    },
    {
      title: "Executive Sourcing",
      description: "Confidential recruitment for senior leadership and executive positions",
      icon: Briefcase,
      gradient: "from-secondary to-primary"
    },
    {
      title: "Source, Train & Deploy",
      description: "Custom talent pipeline with training tailored to your requirements",
      icon: Users,
      gradient: "from-primary to-secondary-light"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-hero rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 hero-text-glow">
              IT <span className="bg-gradient-primary bg-clip-text text-transparent">Staffing</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Connect with top-tier IT talent through our comprehensive staffing solutions
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4">
              Find Talent Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Dark */}
      <section className="py-20 bg-gradient-to-b from-foreground to-foreground/95 text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Technology <span className="text-primary-glow">Hiring Services</span>
            </h2>
            <p className="text-xl text-background/80 max-w-3xl mx-auto">
              Tailored staffing solutions to meet your unique technology requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0, rotateY: -15 }}
                whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <Card className="h-full bg-background/10 backdrop-blur-md border-background/20 hover:bg-background/20 transition-all duration-500 hover:shadow-glow">
                  <CardHeader className="text-center">
                    <motion.div 
                      className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="h-10 w-10 text-background" />
                    </motion.div>
                    <CardTitle className="text-2xl text-background group-hover:text-primary-glow transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-background/70 mb-6 text-lg">
                      {service.description}
                    </CardDescription>
                    <Button variant="ghost" className="w-full text-background hover:bg-background/20 group-hover:bg-primary/20">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-subtle">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 right-16 w-48 h-48 bg-primary rounded-full blur-xl animate-bounce"></div>
          <div className="absolute bottom-16 left-16 w-64 h-64 bg-secondary rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">HireMinds</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Vetted Professionals",
                description: "All candidates undergo rigorous technical and cultural assessments"
              },
              {
                title: "Rapid Deployment",
                description: "Get qualified professionals on your team within days, not weeks"
              },
              {
                title: "Flexible Engagement",
                description: "Choose from permanent, contract, or contract-to-hire options"
              },
              {
                title: "Custom Training",
                description: "Source, Train & Deploy model ensures perfect skill alignment"
              },
              {
                title: "Global Talent Pool",
                description: "Access to skilled professionals across diverse technologies"
              },
              {
                title: "Ongoing Support",
                description: "Continuous support throughout the engagement lifecycle"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full hover:shadow-glow transition-all duration-300 hover-glow">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Dark */}
      <section className="py-20 bg-gradient-to-r from-foreground via-foreground/95 to-foreground text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary-glow">Process</span>
            </h2>
            <p className="text-xl text-background/80 max-w-3xl mx-auto">
              A streamlined approach to finding the perfect talent for your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Requirements", description: "Understand your specific needs and culture" },
              { step: "02", title: "Sourcing", description: "Tap into our extensive talent network" },
              { step: "03", title: "Screening", description: "Rigorous technical and cultural assessment" },
              { step: "04", title: "Deployment", description: "Seamless onboarding and integration" }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-background/70">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Build Your <span className="bg-gradient-primary bg-clip-text text-transparent">Dream Team</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your staffing needs and find the perfect talent for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4">
                Start Hiring
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Schedule Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HireMinds;