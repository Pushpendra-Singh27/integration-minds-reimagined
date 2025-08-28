import { motion } from "framer-motion";
import { BookOpen, Award, Users, Target, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Training = () => {
  // Full list from integrationminds.com/training
  const technicalCourses: { title: string; slug: string }[] = [
    { title: "S/W & H/W Fundamental Courses", slug: "sw-hw-fundamentals" },
    { title: "CyberSecurity Courses", slug: "cybersecurity-courses" },
    { title: "Python Courses", slug: "python-courses" },
    { title: "Cloud Computing Courses", slug: "cloud-computing-courses" },
    { title: "API Courses", slug: "api-courses" },
    { title: "DevOPs Courses", slug: "devops-courses" },
    { title: "AI, ML, DS & DL Courses", slug: "ai-ml-ds-dl-courses" },
    { title: "BigData & Hadoop Courses", slug: "bigdata-hadoop-courses" },
    { title: "Internet of Things Courses", slug: "internet-of-things-courses" },
    { title: "Blockchain Courses", slug: "blockchain-courses" },
    { title: "Middleware Technologies Courses", slug: "middleware-technologies" },
    { title: "SysML & MSBE", slug: "sysml-msbe-courses" },
    { title: "Software Testing Courses", slug: "software-testing-courses" },
    { title: "Telecom & Wireless Courses", slug: "telecom-wireless-courses" },
    { title: "Mobile App Dev Courses", slug: "mobile-app-dev-courses" },
  ];

  const financialCourses: { title: string; slug: string }[] = [
    { title: "Excel and VBA for Finance", slug: "excel-vba-finance" },
    { title: "Project Finance", slug: "project-finance" },
    { title: "Financial Research & Analysis", slug: "financial-research-analysis" },
    { title: "Corporate Finance", slug: "corporate-finance" },
    { title: "Financial Modeling & Valuation", slug: "financial-modeling-valuation" },
    { title: "Corporate Valuation", slug: "corporate-valuation" },
    { title: "Finance for Non-Finance", slug: "finance-for-non-finance" },
    { title: "Credit Research", slug: "credit-research" },
    { title: "M&A Financial Modeling", slug: "ma-financial-modeling" },
    { title: "Private Equity", slug: "private-equity" },
    { title: "Capital Markets & Securities", slug: "capital-markets-securities" },
    { title: "Credit Management", slug: "credit-management" },
    { title: "Risk & Compliance", slug: "risk-compliance" },
    { title: "Budgeting & Control", slug: "budgeting-control" },
    { title: "Derivatives Trading", slug: "derivatives-trading" },
    { title: "Integrated Treasury Management", slug: "integrated-treasury-management" },
    { title: "Supply Chain Finance", slug: "supply-chain-finance" },
  ];

  const ibmCourses: { title: string; slug: string }[] = [
    { title: "IBM Power Systems - AIX-PowerHA SystemMirror, IBM PowerVM", slug: "ibm-power-aix-powerha-powervm" },
    { title: "IBM Power Systems - Linux", slug: "ibm-power-linux" },
    { title: "IBM Z-Information Management Solution (IMS) IBM Spectrum Computing, Spectrum Scale, Spectrum Protect", slug: "ibm-z-ims-spectrum" },
    { title: "IBM Management Platform-NetCool, Tiwoli Workload Scheduler", slug: "ibm-management-platform" },
    { title: "IBM Watson- Watson Discovery, OpenScale, Conversational Al", slug: "ibm-watson" },
    { title: "IBM Power Systems - Cognitive, IBM PowerVC", slug: "ibm-power-cognitive-powervc" },
    { title: "IBM Z-Mainframe- z/OS, z/VM, JCL&Utilities, Facilities, Operator, REXX, TSO", slug: "ibm-z-mainframe" },
    { title: "IBM Storage-DS8000, FlashSystem V9000, SAN Volume Controller, DFSMS, Stowize, IBM Cloud Pak for Data", slug: "ibm-storage-spectrum" },
    { title: "IBM Engineering Lifecycle Management", slug: "ibm-engineering-lifecycle" },
    { title: "IBM Power Systems - IBM I, BRMS for IBM I, RPG IV, DevOps on IBM I", slug: "ibm-power-ibmi-devops" },
    { title: "IBM Z-Mainframe-Assembler Language, Parallel Sysplex, IMS DBRC", slug: "ibm-z-assembler-sysplex" },
    { title: "IBM Integration & Development-API, WebSphere Application Server (WAS) and MQ", slug: "ibm-integration-development" },
    { title: "IBM Security-QRadar and Indentity& Access Management, Guardium", slug: "ibm-security-qradar-iam-guardium" },
    { title: "IBM Supply Chain- IBM Sterling OMS, Secury proxy", slug: "ibm-supply-chain-sterling" },
  ];

  const trainingModalities = [
    {
      title: "Instructor-led- online (ILO)",
      description:
        "Experience live, instructor-led training delivered directly to your PC using VOIP technology and hands-on labs for real-time instruction without travel.",
    },
    {
      title: "Instructor-led (Classroom)",
      description:
        "Instructor-led sessions with slides and hands-on labs in a friendly, safe environment—ideal for certification preparation and practical experience.",
    },
    {
      title: "Web Based Training (WBT)",
      description:
        "A modular blend of multimedia, interactive labs, and course material presented in a comprehensive online course format.",
    },
  ];

  const spvcText =
    "IBM's Self-Paced Virtual Classes offer a flexible option to master skills at your own pace. Courses typically take 1–5 days; upon activation you have 30 days of access including online readings, multimedia presentations, and demonstrations.";

  const contact = {
    trainingEmail: "training@integrationminds.com",
    consultingEmail: "consulting@integrationminds.com",
    hireEmail: "hireminds@integrationminds.com",
    address:
      "SME Integration Minds Private Limited, #822/741/A, 3rd floor, Choyal Towers, 12th Main Road, AECS Layout, ‘B’ Block, Singasandra, Bangalore - 560068",
    phones: ["+91-97315 72612", "+91-90360 20999"],
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Animated Background Image */}
        <motion.img
          src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
          alt="Training background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, x: -20, y: -10 }}
          animate={{ scale: 1.2, x: 20, y: 10 }}
          transition={{ duration: 22, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />

        {/* 50% black overlay for readability */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
              Technical Training
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Master cutting-edge technologies with hands-on training from IBM Global Training Providers
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4">
              <Play className="mr-2 h-5 w-5" />
              Start Learning Today
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Dark Section - Technical Courses (full list with links) */}
      <section className="py-20 bg-gradient-to-b from-foreground/95 to-foreground text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Technical <span className="text-primary-glow">Courses</span>
            </h2>
            <p className="text-xl text-background/80 max-w-3xl mx-auto">
              Explore all course categories offered under Technical Training
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technicalCourses.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-background/10 backdrop-blur-md border-background/20 hover:bg-background/20 transition-all duration-300 hover:shadow-glow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-background" />
                    </div>
                    <CardTitle className="text-background group-hover:text-primary-glow transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="ghost" className="w-full text-background hover:bg-background/20 group-hover:bg-primary/20">
                      <Link to={`/training/${item.slug}`}>Open <ChevronRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Courses */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Financial <span className="bg-gradient-primary bg-clip-text text-transparent">Courses</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive finance programs and certifications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {financialCourses.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <Card className="h-full hover:shadow-glow transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Award className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="ghost" className="w-full">
                      <Link to={`/training/${item.slug}`}>Open <ChevronRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IBM Courses */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              IBM <span className="text-primary">Courses</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Official IBM curriculum. Reach out via Contact Us for schedules and enrollment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ibmCourses.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <Card className="h-full hover:shadow-glow transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center">
                      <Users className="h-8 w-8 text-background" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="ghost" className="w-full">
                      <Link to={`/training/${item.slug}`}>Open <ChevronRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Animated Background */}
      <section className="py-20 relative overflow-hidden bg-gradient-subtle">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-xl animate-bounce"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-secondary rounded-full blur-2xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-12">
              Why Choose Our <span className="bg-gradient-primary bg-clip-text text-transparent">Training</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Award,
                  title: "Expert Instructors",
                  description: "Learn from certified IBM professionals with real-world experience",
                },
                {
                  icon: Users,
                  title: "Hands-on Learning",
                  description: "Practice with real projects and scenarios in our cloud labs",
                },
                {
                  icon: Target,
                  title: "Industry Recognition",
                  description: "Get certificates that are recognized by leading tech companies",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-glow transition-all duration-300 hover-glow">
                    <CardHeader className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <feature.icon className="h-10 w-10 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-lg">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Modalities */}
      <section className="py-20 bg-gradient-to-r from-foreground via-foreground/95 to-foreground text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Training Modalities</h2>
            <p className="text-xl text-background/80 max-w-3xl mx-auto">
              Flexible delivery formats tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {trainingModalities.map((m, idx) => (
              <motion.div
                key={m.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-background/10 backdrop-blur-md border-background/20 hover:bg-background/20 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Target className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle>{m.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-background/80">{m.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPVC */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Self Paced Virtual Classes (SPVC)</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">{spvcText}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact and Quick Links */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
                <CardDescription>For inquiries and enrollment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>
                  <strong>Training Services:</strong>
                  <a className="ml-2 text-primary underline" href={`mailto:${contact.trainingEmail}`}>{contact.trainingEmail}</a>
                </p>
                <p>
                  <strong>Technology Consulting:</strong>
                  <a className="ml-2 text-primary underline" href={`mailto:${contact.consultingEmail}`}>{contact.consultingEmail}</a>
                </p>
                <p>
                  <strong>Staffing - HireMinds:</strong>
                  <a className="ml-2 text-primary underline" href={`mailto:${contact.hireEmail}`}>{contact.hireEmail}</a>
                </p>
                <p className="text-sm text-muted-foreground">{contact.address}</p>
                <p className="text-sm">
                  {contact.phones.join(" / ")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
                <CardDescription>Explore more</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    { t: "IBM Training", h: "https://www.integrationminds.com/ibm-training-courses" },
                    { t: "S/W & H//W Training", h: "https://www.integrationminds.com/software-training" },
                    { t: "Financial Courses", h: "https://www.integrationminds.com/financial-courses" },
                    { t: "Training Modalities", h: "https://www.integrationminds.com/training-modalities" },
                    { t: "Technology Consulting", h: "https://www.integrationminds.com/technology-consulting" },
                    { t: "Hire Minds", h: "https://www.integrationminds.com/hire-minds" },
                    { t: "CloudLabs", h: "https://www.integrationminds.com/cloud-labs" },
                    { t: "Core Values", h: "https://www.integrationminds.com/core-values" },
                    { t: "Webinar", h: "https://www.integrationminds.com/webinars" },
                    { t: "Corporate Responsibility", h: "https://www.integrationminds.com/corporate-responsibility" },
                    { t: "Career", h: "https://www.integrationminds.com/careers" },
                  ].map((q) => (
                    <a key={q.t} className="text-primary hover:underline" href={q.h} target="_blank" rel="noreferrer">
                      {q.t}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="py-20 bg-gradient-to-r from-foreground via-foreground/95 to-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to <span className="text-primary-glow">Transform</span> Your Skills?
            </h2>
            <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have advanced their careers with our training programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4">
                Enroll Now
              </Button>
              <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10 text-lg px-8 py-4">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Training;