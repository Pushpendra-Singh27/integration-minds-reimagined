import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blockchain = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Blockchain</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We have deep understanding of the Blockchain ecosystem to enable our customers to develop and implement Blockchain-based solutions. Our team of experts can help implement custom Distributed Ledger Technology using various platforms.
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
                Advisory, architecture, and delivery of secure blockchain and DLT solutions.
              </p>
              <p>
                Pragmatic use of the right platform and patterns for your industry and use-cases.
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
              "Blockchain Strategy & Advisory",
              "Blockchain POC",
              "Blockchain Platform Engineering",
              "Smart Contract Solutions",
              "Blockchain Security",
              "Blockchain Training",
              "IBM Blockchain Trusted Identity",
              "Cryptocurrencies",
              "Distributed Applications",
              "Public And Private Blockchains Development",
              "Blockchain-as-a-Service"
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
              "ETHEREUM",
              "HYPERLEDGER FABRIC",
              "R3, Ripple",
              "CORDA",
              "Microsoft Azure Blockchain",
              "Oracle Blockchain",
              "IBM Blockchain",
              "Parity, Multichain",
              "Geth",
              "Solc"
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

export default Blockchain;
