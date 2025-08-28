import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MainframesPowerSystems = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Mainframes, IBM i (as400) & PowerSystems</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Mainframes are robust, resilient, securable and technologically advanced platforms for hybrid cloud. Re-Host, Re-Engineer, Re-Architect and Re-New your AS400 applications on cloud. IBM Power Systems Servers, powering the hybrid enterprise.
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
                Modernize legacy workloads on robust hybrid-cloud ready mainframe and Power platforms.
              </p>
              <p>
                Rehost, reengineer and rearchitect AS400 applications to unlock agility and value.
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
              "Mainframe migration to AWS",
              "Mainframe implementations",
              "Mainframe upgrades to 2.4v",
              "Mainframe Audits",
              "zOS Containerization",
              "Re-Host as400 to cloud",
              "Re-Architect AS400 applications",
              "Migrate Batch Jobs to the cloud",
              "PowerHA system mirror Admin",
              "Migrating LPARs to the new OS",
              "Dual VIO configurations",
              "Active memory expansion",
              "Live Partition Mobility",
              "vSCSI and NPIV configurations",
              "Fix and Patch maintenance",
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
              "IBM zOS, zVM, z/VSE, z/TPF, z14, z15, CICS, DB2 for zOS, IMS, REXX",
              "JCL, Websphere for zOS",
              "DB2 Performance Tuning for zOS",
              "Tivoli System Automation for zOS",
              "z/OS Security-Crypto & RACF",
              "Parallel Sysplex",
              "IBM i (as400), RPG-iV, HMC",
              "BRMS for IBM-I, PowerVM on IBM-I",
              "IBM i Performance Tuning",
              "PowerSystems for AIX, LPAR",
              "PowerHA System Mirror",
              "Docker for PowerSystems",
              "IBM PowerHA for Linux",
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

export default MainframesPowerSystems;
