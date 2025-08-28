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
    </div>
  );
};

export default DevOpsMLOps;
