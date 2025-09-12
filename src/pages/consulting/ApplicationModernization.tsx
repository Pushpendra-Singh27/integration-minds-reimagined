import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, ArrowRight } from "lucide-react";

const ApplicationModernization = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10">
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
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                <RefreshCw className="h-10 w-10 text-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-text-glow">
              Application <span className="bg-gradient-secondary bg-clip-text text-transparent">Modernization</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform legacy applications into responsive, agile, and cost-effective solutions through APIs, microservices, and integration
            </p>
            <Button size="lg" className="bg-gradient-secondary hover:shadow-glow text-lg px-8 py-4">
              Modernize Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We <span className="bg-gradient-primary bg-clip-text text-transparent">Do</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Drive transformational outcomes through modern architectures, APIs, microservices, and seamless integration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">API-First Architecture</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Modernize applications with API-first architectures and microservices to unlock agility, 
                    scalability, and faster time-to-market for your digital initiatives.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-secondary">System Integration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Integrate systems and data seamlessly to accelerate delivery, enhance customer value, 
                    and create new market opportunities through connected experiences.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="py-20 bg-gradient-to-b from-foreground to-foreground/95 text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-secondary bg-clip-text text-transparent">Offerings</span>
            </h2>
            <p className="text-xl text-background/80 max-w-3xl mx-auto">
              Comprehensive modernization services to transform your legacy applications into future-ready solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Container Architecture",
              "Microservices Architecture",
              "Application Rearchitecture",
              "Application Replatforming",
              "Legacy Migration",
              "Product Engineering",
              "API Management",
              "Middleware Integration",
              "Cloud Integration",
              "Enterprise Web Solutions",
              "Site Reliability Engineering"
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-background text-foreground border border-background/20 hover:shadow-glow hover:scale-105 transition-all duration-300">
                  <CardContent className="py-8 text-center">
                    <h3 className="font-semibold text-lg">{item}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SME Platforms Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              SME <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leverage our Subject Matter Experts across modern development platforms and methodologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              "Mainframe Migration",
              "Containers",
              "Microservices",
              "DevOps & DevSecOps",
              "Test Automation",
              "TDD & BDD",
              "Middleware Tools",
              "Multi-Cloud Migration",
              "API Tools",
              "Performance Monitoring"
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 border-primary/20">
                  <CardContent className="py-6 text-center">
                    <h3 className="font-medium text-sm">{item}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="bg-gradient-secondary bg-clip-text text-transparent">Modernize?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your legacy applications into agile, scalable solutions that drive business growth
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4">
              Start Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationModernization;
