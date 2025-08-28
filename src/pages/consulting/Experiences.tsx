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
    </div>
  );
};

export default Experiences;
