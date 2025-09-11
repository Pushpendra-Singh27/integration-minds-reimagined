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

      {/* Our offerings */}
      <section className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-secondary-light">Our offerings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "ITSM Implementation",
              "ITSM Migration",
              "Configuration Management",
              "Change & Release Management",
              "Incident & Event Management",
              "ITOM Implementations",
              "Service Mapping",
              "Certificate Management",
              "Site Reliability Operations",
              "Firewall Audits & Reporting",
              "ITAM Implementations",
              "Hardware Asset Management",
              "Software Asset Management",
              "CMDB"
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
              "ServiceNow ITSM & ITOM",
              "BMC Remedy, BMC HELIX",
              "Ivanti Service Manager",
              "CA Clarity Service Manager",
              "Bamboo, JIRA, CONFLUENCE",
              "AppDynamics",
              "Dynatrace, LogicMonitor",
              "IBM ControlDesk & SmartCloud",
              "ScienceLogic",
              "Solarwinds ITOM, New Relic",
              "ZenDesk, Groove",
              "IBM Maximo EAM",
              "Infor EAM",
              "SAP EAM",
              "Oracle EAM",
              "MicroFocus Asset Manager",
              "Ivanti Asset Management Suite"
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

export default ITSM_ITOM_ITAM;
