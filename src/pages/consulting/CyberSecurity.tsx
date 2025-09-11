import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CyberSecurity = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Cyber Security</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We help you keep your technology business protected and resilient. We prioritize prevention, minimize risk, and help control losses. We offer cybersecurity customized to your business context and act as a partner in your cyber-transformation journey.
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
                Tailored cybersecurity strategy, architecture, and implementation to strengthen resilience.
              </p>
              <p>
                Ongoing partnership to evolve your defenses aligned to business risk.
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
              "Risk & Threat assessments",
              "SIEM & Endpoint Security",
              "Vulnerability Management",
              "Identity & Access Management",
              "Data Privacy and Protection",
              "Infrastructure Security",
              "Governance, Risk & Compliance",
              "Cloud Security & OWASP",
              "Network Security & Segmentation",
              "Migrating LPARs to the new OS",
              "SOC Security Operation Center)",
              "Cyber Range"
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
              "Oracle, Logrythm",
              "Splunk, ArcSight",
              "IBM TAM QRadar IAM",
              "Okta IAM Sailpoint, Saviynt IAM",
              "McAfee, Sophos, RSA",
              "Ivanti Symantec RSA",
              "Checkpoint, TrendMicr",
              "FireEye, Gigamon, PaloAlto",
              "Juniper, ForcePoint",
              "SAP GRC, RSA Archer",
              "LogicManager, MetricStream GRC"
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

export default CyberSecurity;
