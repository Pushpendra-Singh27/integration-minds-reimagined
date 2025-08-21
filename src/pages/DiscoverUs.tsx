import { motion } from "framer-motion";
import { Lightbulb, Target, Users, Award, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DiscoverUs = () => {
  const values = [
    {
      title: "Expertise",
      description: "Deep technical knowledge across modern technologies",
      icon: Award,
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "Intensity",
      description: "Passionate commitment to your success",
      icon: TrendingUp,
      gradient: "from-secondary to-secondary-light"
    },
    {
      title: "Reliability",
      description: "Consistent delivery and unwavering support",
      icon: CheckCircle,
      gradient: "from-primary-glow to-secondary"
    },
    {
      title: "Curiosity",
      description: "Continuous learning and innovation mindset",
      icon: Lightbulb,
      gradient: "from-secondary to-primary"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/5 to-primary/10">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-32 left-32 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-32 right-32 w-96 h-96 bg-gradient-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-hero rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-text-glow">
              Discover <span className="bg-gradient-secondary bg-clip-text text-transparent">Integration Minds</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-primary">
              Grow Your ExpertiseStack, Own Your Digital Modernization Journey
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              To compete in the digital era, organizations are investing in new skills and processes. Moving to modern technologies and building native skills requires organizations to operate in a new way.
            </p>
            <Button size="lg" className="bg-gradient-secondary hover:shadow-glow text-lg px-8 py-4">
              <Target className="mr-2 h-5 w-5" />
              Explore Our Journey
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mission Section - Dark */}
      <section className="py-20 bg-gradient-to-b from-foreground to-foreground/95 text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Our <span className="text-secondary-light">Mission</span>
            </h2>
            <p className="text-xl text-background/90 mb-8 leading-relaxed">
              Our training and consulting offerings help you build native skills and technical mastery to achieve better business outcomes. To innovate and modernize faster with proven, modern techniques.
            </p>
            <p className="text-lg text-background/80">
              Integration Minds plays a vital role in engaging with your minds and building the required technical competency to cultivate native capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-subtle">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary rounded-full blur-2xl animate-float"></div>
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
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              When our Expertise Minds integrate with these values, it becomes a package that can exploit your potential to excel in your technology business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0, rotateY: -15 }}
                whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-glow transition-all duration-500 hover-glow">
                  <CardHeader className="text-center">
                    <motion.div 
                      className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${value.gradient} flex items-center justify-center`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <value.icon className="h-10 w-10 text-background" />
                    </motion.div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-center">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Dark */}
      <section className="py-20 bg-gradient-to-r from-foreground via-foreground/95 to-foreground text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
              About <span className="text-primary-glow">Integration Minds</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">What Makes Our Services "Best"?</h3>
                <p className="text-background/90 mb-6 leading-relaxed">
                  We believe in your potential and we believe in our expertise. Firstly, we don't just drop in, train, and leave—we'll work side by side with your team to build capabilities and instill a process that shows immediate and lasting impact.
                </p>
                <p className="text-background/80">
                  When our Expertise Minds are integrated with "Intensity", "Reliability" & "Curiosity", it becomes a package that can be engaged to exploit your potential to excel in your technology business.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {[
                  "One-point solution for all technology needs",
                  "Competitive pricing without compromising quality",
                  "Side-by-side capability building approach",
                  "Immediate and lasting impact focus"
                ].map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-primary-glow flex-shrink-0" />
                    <span className="text-background/90">{point}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Commitment</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Empower your teams to deliver the products your customers need. We're not just a service provider—we're your strategic partner in digital transformation.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="hover:shadow-glow transition-all duration-300 hover-glow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Team Empowerment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We work alongside your team to build lasting capabilities and foster continuous improvement.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-glow transition-all duration-300 hover-glow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Business Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our solutions are designed to create immediate value and long-term strategic advantages.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
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
              Ready to <span className="text-secondary-light">Transform</span> Together?
            </h2>
            <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how Integration Minds can help you achieve your digital transformation goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-secondary hover:shadow-glow text-lg px-8 py-4">
                Start Partnership
              </Button>
              <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10 text-lg px-8 py-4">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DiscoverUs;