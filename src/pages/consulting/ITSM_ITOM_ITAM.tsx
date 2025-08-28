import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ITSM_ITOM_ITAM = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">ITSM-ITOM-ITAM</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We streamline IT operations by modernizing your ITSM, simplify IT operations with ITOM, and automate the end-to-end lifecycle for software licenses, hardware assets, and cloud with ITAM.
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
                Transform service management, operations, and asset management with integrated platforms and automation.
              </p>
              <p>
                Gain visibility, control, and cost optimization across your IT landscape.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ITSM_ITOM_ITAM;
