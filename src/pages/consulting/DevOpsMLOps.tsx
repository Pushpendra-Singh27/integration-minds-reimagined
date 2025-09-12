import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cog, GitBranch, Zap, Bot, ArrowRight } from "lucide-react";

const DevOpsMLOps = () => {
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
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                <Cog className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-text-glow">
              DevOps & <span className="bg-gradient-secondary bg-clip-text text-transparent">MLOps</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Streamline development and ML workflows with automation and best practices for continuous delivery
            </p>
            <Button size="lg" className="bg-gradient-secondary hover:shadow-glow text-lg px-8 py-4">
              Accelerate Your Pipeline
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              What We <span className="bg-gradient-secondary bg-clip-text text-transparent">Do</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We make you SHIFT to Continuous Delivery by aligning business, development and operations and automating the end-to-end lifecycle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GitBranch,
                title: "CI/CD Pipeline",
                description: "Build robust continuous integration and deployment pipelines for faster delivery"
              },
              {
                icon: Zap,
                title: "Automation",
                description: "Automate testing, deployment, and infrastructure management processes"
              },
              {
                icon: Bot,
                title: "MLOps Integration",
                description: "Streamline machine learning model deployment and monitoring workflows"
              },
              {
                icon: Cog,
                title: "Process Transformation",
                description: "Transform teams and processes for DevOps and MLOps excellence"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0, rotateX: -15 }}
                whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, z: 10 }}
                className="group"
              >
                <Card className="h-full hover-glow border-0 shadow-card bg-card/50 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <motion.div 
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our offerings */}
      <section className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-secondary-light">Our offerings</h2>
          
          {/* DevOps Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-6">DevOps</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Build CI/CD Pipeline",
                "Continuous Testing",
                "DevOps for Legacy to Cloud",
                "People to Process Transformation",
                "To Setup Platform",
                "To Setup Center of Excellence",
                "DevSecOps: Shift Left"
              ].map((item) => (
                <Card key={item} className="bg-background text-foreground border border-foreground/20 shadow-sm">
                  <CardContent className="py-6 text-center font-medium">{item}</CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* MLOps Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-6">MLOps</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Model Development",
                "Model Retraining",
                "Model Validation",
                "Model Deployment"
              ].map((item) => (
                <Card key={item} className="bg-background text-foreground border border-foreground/20 shadow-sm">
                  <CardContent className="py-6 text-center font-medium">{item}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SME Platforms */}
      <section className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-secondary-light">
            Leverage our Subject Matter Experts in Multi Platforms
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Chef",
              "Puppet",
              "Ansible",
              "Pivotal",
              "Jenkins",
              "Terraform",
              "GitHub",
              "Docker",
              "Kubernetes",
              "Azure MLOps",
              "GCP MLOps",
              "AWS SageMaker",
              "Metaflow",
              "Data Version Control",
              "Pachyderm & Seldon",
              "KubeFlow & MLFlow"
            ].map((item) => (
              <Card key={item} className="bg-background text-foreground border border-foreground/20 shadow-sm">
                <CardContent className="py-6 text-center font-medium">{item}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOpsMLOps;
