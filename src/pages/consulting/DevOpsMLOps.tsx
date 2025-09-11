import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DevOpsMLOps = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">DevOps & MLOps</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We make you SHIFT to Continuous Delivery. Our DevOps offerings help you to evolve continuously by bringing your business, development and operation together and automate the entire process. Our pool of subject matters experts in DevOps & MLOps helps you whether you’re building your tool chain for your customers or transforming your existing team, we are flexible to work as per your requirements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle>What We Do?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We make you SHIFT to Continuous Delivery by aligning business, development and operations and automating the end-to-end lifecycle.
              </p>
              <p>
                Our experts support building or modernizing your DevOps and MLOps toolchains and practices tailored to your needs.
              </p>
            </CardContent>
          </Card>
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
