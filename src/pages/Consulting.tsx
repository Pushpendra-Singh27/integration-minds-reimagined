import { motion } from "framer-motion";
import { Database, Shield, Cloud, Cog, Server, Lock, Layers, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Consulting = () => {
  const services = [
    {
      title: "Data & Analytics",
      description: "Transform your data into actionable insights with advanced analytics solutions",
      icon: Database,
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "DevOps & MLOps",
      description: "Streamline development and ML workflows with automation and best practices",
      icon: Cog,
      gradient: "from-secondary to-secondary-light"
    },
    {
      title: "Multi Cloud",
      description: "Leverage multiple cloud platforms for optimal performance and cost efficiency",
      icon: Cloud,
      gradient: "from-primary-glow to-secondary"
    },
    {
      title: "CyberSecurity",
      description: "Protect your digital assets with comprehensive security solutions",
      icon: Shield,
      gradient: "from-secondary to-primary"
    },
    {
      title: "Mainframes & IBM PowerSystems",
      description: "Modernize legacy systems while maintaining enterprise reliability",
      icon: Server,
      gradient: "from-primary to-secondary-light"
    },
    {
      title: "Blockchain",
      description: "Implement secure, decentralized solutions for your business needs",
      icon: Lock,
      gradient: "from-secondary-light to-primary-glow"
    },
    {
      title: "Application Modernization",
      description: "Transform legacy applications into modern, scalable solutions",
      icon: Layers,
      gradient: "from-primary-glow to-secondary"
    },
    {
      title: "ITSM-ITOM-ITAM",
      description: "Optimize IT service management and operations for better efficiency",
      icon: Monitor,
      gradient: "from-secondary to-primary-glow"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/5 to-primary/10">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-32 left-32 w-72 h-72 bg-gradient-secondary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-96 h-96 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-hero rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 hero-text-glow">
              Technology <span className="bg-gradient-secondary bg-clip-text text-transparent">Consulting</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Accelerate your digital transformation with expert consulting services from IBM Global Partners
            </p>
            <Button size="lg" className="bg-gradient-secondary hover:shadow-glow text-lg px-8 py-4">
              Get Expert Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Dark Section */}
      <section className="py-20 bg-gradient-to-b from-foreground to-foreground/90 text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Consulting <span className="text-secondary-light">Services</span>
            </h2>
            <p className="text-xl text-background/80 max-w-3xl mx-auto">
              Expert guidance to navigate your digital transformation journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0, rotateX: -15 }}
                whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, z: 10 }}
                className="group"
              >
                <Card className="h-full bg-background/10 backdrop-blur-md border-background/20 hover:bg-background/20 transition-all duration-500 hover:shadow-glow">
                  <CardHeader className="text-center">
                    <motion.div 
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="h-8 w-8 text-background" />
                    </motion.div>
                    <CardTitle className="text-background group-hover:text-secondary-light transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-background/70 mb-4">
                      {service.description}
                    </CardDescription>
                    <Button variant="ghost" className="w-full text-background hover:bg-background/20 group-hover:bg-secondary/20">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-subtle">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 bg-secondary rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-56 h-56 bg-primary rounded-full blur-2xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-12">
              Why Choose Our <span className="bg-gradient-secondary bg-clip-text text-transparent">Consulting</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">Expert Partnership</h3>
                <p className="text-lg text-muted-foreground">
                  As IBM Global Partners, we bring deep expertise and proven methodologies to every engagement.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">End-to-End Solutions</h3>
                <p className="text-lg text-muted-foreground">
                  From strategy to implementation, we provide comprehensive solutions tailored to your needs.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button size="lg" className="bg-gradient-secondary hover:shadow-glow text-lg px-8 py-4">
                Start Your Transformation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="py-20 bg-gradient-to-r from-foreground via-secondary/20 to-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to <span className="text-secondary-light">Innovate</span>?
            </h2>
            <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can accelerate your digital transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-secondary hover:shadow-glow text-lg px-8 py-4">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10 text-lg px-8 py-4">
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;