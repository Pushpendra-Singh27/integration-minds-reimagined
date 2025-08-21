import { motion } from "framer-motion";
import { Cloud, Monitor, Zap, Shield, Users, Clock, Award, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CloudLabs = () => {
  const features = [
    {
      title: "24/7 Access",
      description: "Practice anytime, anywhere with round-the-clock lab availability",
      icon: Clock,
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "Live Support",
      description: "Get instant help from our expert support team",
      icon: Headphones,
      gradient: "from-secondary to-secondary-light"
    },
    {
      title: "Real Environments",
      description: "Work with actual enterprise tools and configurations",
      icon: Monitor,
      gradient: "from-primary-glow to-secondary"
    },
    {
      title: "Secure Platform",
      description: "Enterprise-grade security for safe learning experiences",
      icon: Shield,
      gradient: "from-secondary to-primary"
    }
  ];

  const benefits = [
    {
      title: "Hands-On Learning",
      description: "Practice with real tools and scenarios to build practical skills"
    },
    {
      title: "Cost-Effective",
      description: "No need for expensive infrastructure setup or maintenance"
    },
    {
      title: "Scalable Training",
      description: "Train multiple employees simultaneously without resource constraints"
    },
    {
      title: "Updated Content",
      description: "Always work with the latest versions of enterprise software"
    },
    {
      title: "Progress Tracking",
      description: "Monitor learning progress and skill development in real-time"
    },
    {
      title: "Certification Ready",
      description: "Prepare for industry certifications with realistic exam environments"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-24 left-24 w-96 h-96 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-24 right-24 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-hero rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <Cloud className="w-24 h-24 mx-auto mb-4 text-primary" />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 hero-text-glow">
              Cloud <span className="bg-gradient-primary bg-clip-text text-transparent">Labs</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Hands-on cloud training environments for real-world skill development
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4">
              <Zap className="mr-2 h-5 w-5" />
              Start Lab Training
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What is Cloud Labs - Dark Section */}
      <section className="py-20 bg-gradient-to-b from-foreground to-foreground/95 text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              What are <span className="text-primary-glow">Cloud Labs</span>?
            </h2>
            <p className="text-xl text-background/90 mb-8 leading-relaxed">
              Integration Minds Cloud Labs environment ensures that your employees get hands-on training along with theoretical knowledge. Cloud labs are customized and created based on your requirements, allowing learners to engage with content easily.
            </p>
            <p className="text-lg text-background/80 mb-8">
              Your employees can practice new skills as they learn them, gaining practical knowledge that ensures they are well-equipped to meet your business objectives immediately post training.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-subtle">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-56 h-56 bg-primary rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary rounded-full blur-2xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Key <span className="bg-gradient-primary bg-clip-text text-transparent">Features</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0, rotateY: -15 }}
                whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-glow transition-all duration-500 hover-glow">
                  <CardHeader className="text-center">
                    <motion.div 
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="h-8 w-8 text-background" />
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Train with CloudLabs - Dark Section */}
      <section className="py-20 bg-gradient-to-r from-foreground via-foreground/95 to-foreground text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Why Train with <span className="text-primary-glow">CloudLabs</span>
            </h2>
            <p className="text-xl text-background/90 max-w-4xl mx-auto">
              CloudLabs training via Integration Minds is the best experience to learn digitally advanced courses. Our courses enable learners to include practical knowledge in their real-time work, increasing the quality of work they deliver to the company.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-background/10 backdrop-blur-md border-background/20 hover:bg-background/20 transition-all duration-300 hover:shadow-glow">
                  <CardHeader>
                    <CardTitle className="text-xl text-background group-hover:text-primary-glow transition-colors">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-background/80">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center"
              >
                <Headphones className="w-12 h-12 text-primary-foreground" />
              </motion.div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-primary bg-clip-text text-transparent">24/7</span> Live Support
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our round-the-clock support ensures that your employees get full technical hands-on practice, and non-technical problems are addressed immediately as they arise.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4">
              <Users className="mr-2 h-5 w-5" />
              Contact Support Team
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="py-20 bg-gradient-to-r from-foreground via-primary/20 to-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to <span className="text-primary-glow">Experience</span> Cloud Labs?
            </h2>
            <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
              Start your hands-on learning journey with our state-of-the-art cloud training environments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10 text-lg px-8 py-4">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudLabs;