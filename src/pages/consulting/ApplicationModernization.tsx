import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ApplicationModernization = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Application Modernization</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We make you more responsive, agile and cost effective to create new markets and increase customer retention. We drive transformational outcomes through APIs, microservices and integration.
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
                Modernize applications with API-first architectures and microservices to unlock agility.
              </p>
              <p>
                Integrate systems and data to accelerate delivery and customer value.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ApplicationModernization;
