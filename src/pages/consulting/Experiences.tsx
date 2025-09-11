import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experiences = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Experiences</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Explore our hands-on solution accelerators, reference implementations, and PoCs that demonstrate our expertise across industries and technologies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Featured Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                A curated set of engineering experiences that showcase pragmatic patterns, tooling, and measurable outcomes.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cloud-native reference architectures</li>
                <li>DevOps/MLOps pipelines and governance</li>
                <li>Data & Analytics accelerators</li>
                <li>Security blueprints and hardening guides</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Outcomes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <ul className="list-disc pl-6 space-y-1">
                <li>Faster time-to-value with reusable assets</li>
                <li>Operational excellence through automation</li>
                <li>Improved reliability, security, and compliance</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-secondary-light">Experiences</h2>
          
          {/* E-commerce Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">Create personalize experience in m-commerce & e-commerce with our experts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "IBM Sterling Commerce",
                "IBM WebSphere Commerce",
                "Manhattan WMS",
                "Oracle CX Commerce",
                "Salesforce Commerce",
                "Magento",
                "SAP Commerce Cloud",
                "ZOHO Inventory",
                "BigCommerce"
              ].map((item) => (
                <Card key={item} className="bg-background text-foreground border border-foreground/20 shadow-sm">
                  <CardContent className="py-6 text-center font-medium">{item}</CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* ECM Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">Capture, Protect, Activate, Analyze And Engage Your ECM business with our ECM experts.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "IBM Filenet & Datacap",
                "IBM CMCM",
                "OpenText eDOcs",
                "Oracle WebContent",
                "Alfresco Content Services",
                "Sitecone",
                "SharePoint"
              ].map((item) => (
                <Card key={item} className="bg-background text-foreground border border-foreground/20 shadow-sm">
                  <CardContent className="py-6 text-center font-medium">{item}</CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile Apps Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">Modernize Mobile Apps with our Experts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Android",
                "iOS",
                "Blackberry",
                "Xamarin",
                "SWIFT",
                "Drupal",
                "CASA HTML5",
                "Javascript, AngularJS",
                "Sencha Touch",
                "Kotlin",
                "C++"
              ].map((item) => (
                <Card key={item} className="bg-background text-foreground border border-foreground/20 shadow-sm">
                  <CardContent className="py-6 text-center font-medium">{item}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
