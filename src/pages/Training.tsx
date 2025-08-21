import { motion } from "framer-motion";
import { BookOpen, Award, Users, Target, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Training = () => {
  const courses = [
    {
      title: "S/W & H/W Fundamental Courses",
      description: "Core software and hardware fundamentals",
      icon: BookOpen,
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "CyberSecurity Courses",
      description: "Advanced cybersecurity training",
      icon: Award,
      gradient: "from-secondary to-secondary-light"
    },
    {
      title: "Python Courses",
      description: "Complete Python development training",
      icon: Target,
      gradient: "from-primary-glow to-secondary"
    },
    {
      title: "Cloud Computing Courses",
      description: "Multi-cloud architecture and services",
      icon: Users,
      gradient: "from-secondary to-primary"
    },
    {
      title: "API Courses",
      description: "API development and integration",
      icon: BookOpen,
      gradient: "from-primary to-secondary-light"
    },
    {
      title: "DevOps Courses",
      description: "Complete DevOps pipeline training",
      icon: Award,
      gradient: "from-secondary-light to-primary-glow"
    },
    {
      title: "AI, ML, DS & DL Courses",
      description: "Artificial Intelligence and Machine Learning",
      icon: Target,
      gradient: "from-primary-glow to-secondary"
    },
    {
      title: "BigData & Hadoop Courses",
      description: "Big Data analytics and Hadoop ecosystem",
      icon: Users,
      gradient: "from-secondary to-primary-glow"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-hero rounded-full blur-2xl animate-spin-slow"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 hero-text-glow">
              Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Training</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Master cutting-edge technologies with hands-on training from IBM Global Training Providers
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4">
              <Play className="mr-2 h-5 w-5" />
              Start Learning Today
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Dark Section - Course Categories */}
      <section className="py-20 bg-gradient-to-b from-foreground/95 to-foreground text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Technical <span className="text-primary-glow">Courses</span>
            </h2>
            <p className="text-xl text-background/80 max-w-3xl mx-auto">
              Comprehensive training programs designed to elevate your technical expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <Card className="h-full bg-background/10 backdrop-blur-md border-background/20 hover:bg-background/20 transition-all duration-300 hover:shadow-glow">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${course.gradient} flex items-center justify-center`}>
                      <course.icon className="h-8 w-8 text-background" />
                    </div>
                    <CardTitle className="text-background group-hover:text-primary-glow transition-colors">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-background/70 mb-4">
                      {course.description}
                    </CardDescription>
                    <Button variant="ghost" className="w-full text-background hover:bg-background/20 group-hover:bg-primary/20">
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Animated Background */}
      <section className="py-20 relative overflow-hidden bg-gradient-subtle">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-xl animate-bounce"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-secondary rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-12">
              Why Choose Our <span className="bg-gradient-primary bg-clip-text text-transparent">Training</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Award,
                  title: "Expert Instructors",
                  description: "Learn from certified IBM professionals with real-world experience"
                },
                {
                  icon: Users,
                  title: "Hands-on Learning",
                  description: "Practice with real projects and scenarios in our cloud labs"
                },
                {
                  icon: Target,
                  title: "Industry Recognition",
                  description: "Get certificates that are recognized by leading tech companies"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-glow transition-all duration-300 hover-glow">
                    <CardHeader className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <feature.icon className="h-10 w-10 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-lg">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="py-20 bg-gradient-to-r from-foreground via-foreground/95 to-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to <span className="text-primary-glow">Transform</span> Your Skills?
            </h2>
            <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have advanced their careers with our training programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4">
                Enroll Now
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

export default Training;