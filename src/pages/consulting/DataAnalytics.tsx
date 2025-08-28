import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DataAnalytics = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Data & Analytics</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Disrupt with data, partnering with Integration Minds offers you reliable industry’s best practices, strategies, and effective data analytics solutions that provide you the intelligence to build actionable insights. We help customers to use data and analytics to create new business models and revenue streams – all while ensuring security, quality and regulatory compliance of data.
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
                Disrupt with data, partnering with Integration Minds offers you reliable industry’s best practices, strategies, and effective data analytics solutions that provide you the intelligence to build actionable insights.
              </p>
              <p>
                We help customers to use data and analytics to create new business models and revenue streams – all while ensuring security, quality and regulatory compliance of data.
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
              "Analytics on prem & on cloud",
              "BigData Analytics & Testing",
              "BI, DW, ETL & Data Lakes",
              "Master Data Management (MDM)",
              "Reference Data Management",
              "Predictive & Prescriptive analysis",
              "Data Ingestion & Integration",
              "Data Monetization",
              "Data Modernization",
              "Data Migration",
              "Data Operation",
              "Data Governance",
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
              "Hortonworks, Cloudera",
              "R, Python, MATLAB",
              "OBIEE, Cognos",
              "SCALA, Impala",
              "Talend, TABLEUE",
              "QlikView, PowerBI",
              "Snowflake, Teradata",
              "Oracle MDM",
              "Informatica MDM",
              "SAP MDM",
              "IBM MDM",
              "Riversand MDM",
              "Reltia MDM",
              "TIBCO MDM",
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

export default DataAnalytics;
