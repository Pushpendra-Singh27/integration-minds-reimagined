import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MultiCloud = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Multi Cloud</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We help you to harness the multi cloud solutions to create delightful experience. We help you to move your infrastructure, data, and applications to accelerate digital transformations. We help you to evolve your cloud capabilities, accelerate solution delivery & reduce operating costs.
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
                Harness multi cloud to accelerate transformation while optimizing experiences and costs across platforms.
              </p>
              <p>
                Migrate and modernize infrastructure, data, and applications with proven multi-cloud practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our offerings */}
      <section className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-secondary-light">Our offerings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Multi Cloud Roadmap",
              "Workload assessments",
              "Legacy to Cloud Migration",
              "Cloud Integration",
              "Build cloud-native Apps",
              "Cloud Security",
              "Cloud Testing",
              "Cloud Data Management",
              "Cloud Engineering",
              "Cloud Infrastructure",
              "Cloud Storage",
            ].map((item) => (
              <Card key={item} className="bg-background text-foreground border border-foreground/20 shadow-sm">
                <CardContent className="py-6 text-center font-medium">{item}</CardContent>
              </Card>
            ))}
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
              "Amazon Web Services",
              "Google Cloud Platform",
              "Microsoft Azure",
              "IBM Cloud Satellite",
              "Oracle Cloud Integrator",
              "Vmware Cloud",
              "Adobe Creative Cloud",
              "Dell Technologies Cloud Platform",
              "Pivotal Cloud Foundry",
              "Salesforce Cloud",
              "RedHat Cloud Suite",
              "Alibaba Cloud",
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

export default MultiCloud;
