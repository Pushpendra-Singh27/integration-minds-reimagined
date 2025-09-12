import { motion } from "framer-motion";
import { Users, UserCheck, Clock, Target, Briefcase, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const HireMinds = () => {
  const [showPermanentHiring, setShowPermanentHiring] = useState(false);
  const [showContractToHire, setShowContractToHire] = useState(false);
  const [showSourceTrainDeploy, setShowSourceTrainDeploy] = useState(false);
  const [showITContractors, setShowITContractors] = useState(false);

  const services = [
    {
      title: "Permanent Hiring",
      description: "Find the perfect full-time talent for your long-term technology needs",
      icon: UserCheck,
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "IT Contractors",
      description: "Flexible monthly and hourly IT professionals for project-based work",
      icon: Clock,
      gradient: "from-secondary to-secondary-light"
    },
    {
      title: "Contract-To-Hire",
      description: "Evaluate talent with contract work before making permanent offers",
      icon: Target,
      gradient: "from-primary-glow to-secondary"
    },
    {
      title: "Executive Sourcing",
      description: "Confidential recruitment for senior leadership and executive positions",
      icon: Briefcase,
      gradient: "from-secondary to-primary"
    },
    {
      title: "Source, Train & Deploy",
      description: "Custom talent pipeline with training tailored to your requirements",
      icon: Users,
      gradient: "from-primary to-secondary-light"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-hero rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 hero-text-glow">
              IT <span className="bg-gradient-primary bg-clip-text text-transparent">Staffing</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Connect with top-tier IT talent through our comprehensive staffing solutions
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4">
              Find Talent Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Dark */}
      <section className="py-20 bg-gradient-to-b from-foreground to-foreground/95 text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Technology <span className="text-primary-glow">Hiring Services</span>
            </h2>
            <p className="text-xl text-background/80 max-w-3xl mx-auto">
              Tailored staffing solutions to meet your unique technology requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0, rotateY: -15 }}
                whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <Card className="h-full bg-background/10 backdrop-blur-md border-background/20 hover:bg-background/20 transition-all duration-500 hover:shadow-glow">
                  <CardHeader className="text-center">
                    <motion.div 
                      className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="h-10 w-10 text-background" />
                    </motion.div>
                    <CardTitle className="text-2xl text-background group-hover:text-primary-glow transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-background/70 mb-6 text-lg">
                      {service.description}
                    </CardDescription>
                    <Button 
                      variant="ghost" 
                      className="w-full text-background hover:bg-background/20 group-hover:bg-primary/20"
                      onClick={() => {
                        if (service.title === "Permanent Hiring") {
                          setShowPermanentHiring(true);
                        } else if (service.title === "Contract-To-Hire") {
                          setShowContractToHire(true);
                        } else if (service.title === "Source, Train & Deploy") {
                          setShowSourceTrainDeploy(true);
                        } else if (service.title === "IT Contractors") {
                          setShowITContractors(true);
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Permanent Hiring Modal */}
      {showPermanentHiring && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPermanentHiring(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Header Section */}
            <div className="relative overflow-hidden rounded-t-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20"></div>
              <div className="relative p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                  <UserCheck className="h-12 w-12 text-cyan-400" />
                </div>
                <h2 className="text-5xl font-bold text-white mb-4">Permanent Hiring</h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  Our permanent hiring services are ideal for hard-to-fill specialized skill roles where we takes charge
                  of finding, filtering, interviewing and placing the required skill minds for your organization.
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-cyan-400 mb-6">
                  Our hiring engagement models are flexible with below options
                </h3>
              </div>

              {/* Engagement Models */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Flat fees based on skill set and time factor
                  </h4>
                  <p className="text-white/80">
                    Fixed pricing structure based on the complexity of skills required and urgency of the position
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Percentage-based fees
                  </h4>
                  <p className="text-white/80">
                    Competitive percentage of annual salary, ensuring alignment with successful placements
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Industry standard
                  </h4>
                  <p className="text-white/80">
                    Market-competitive rates following industry best practices and benchmarks
                  </p>
                </motion.div>
              </div>

              {/* Key Features */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-6">Our Approach</h4>
                  <ul className="space-y-4">
                    {[
                      "Comprehensive skill assessment and technical evaluation",
                      "Cultural fit analysis to ensure long-term success",
                      "Multi-stage interview process with technical experts",
                      "Background verification and reference checks",
                      "Seamless onboarding and integration support"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/90">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white mb-6">Why Choose Us</h4>
                  <ul className="space-y-4">
                    {[
                      "Extensive network of pre-vetted professionals",
                      "Industry expertise across diverse technology domains",
                      "Guaranteed replacement within warranty period",
                      "Dedicated account management and support",
                      "Transparent communication throughout the process"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/90">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center pt-8 border-t border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">Ready to Find Your Perfect Hire?</h4>
                <p className="text-white/80 mb-6">Let's discuss your permanent hiring needs and create a customized solution</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-3">
                    Start Hiring Process
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Contract-To-Hire Modal */}
      {showContractToHire && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowContractToHire(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Header Section */}
            <div className="relative overflow-hidden rounded-t-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-600/20"></div>
              <div className="relative p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Target className="h-12 w-12 text-purple-400" />
                </div>
                <h2 className="text-5xl font-bold text-white mb-4">Contract-To-Hire</h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  Our contract-to-hire services provide flexibility to fast hiring and minimal risk when your organization has
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              {/* Scenarios */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Internal resources aren't immediately available and time factor
                  </h4>
                  <p className="text-white/80 text-sm">
                    When your team needs immediate support but permanent positions aren't ready to be filled
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-4">
                    When the future workload is unpredictable
                  </h4>
                  <p className="text-white/80 text-sm">
                    Perfect for projects with uncertain scope or fluctuating resource requirements
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Employer wants to "Try Them Before Hire Them"
                  </h4>
                  <p className="text-white/80 text-sm">
                    Evaluate cultural fit and performance before making permanent hiring decisions
                  </p>
                </motion.div>
              </div>

              {/* Benefits and Process */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-6">Key Benefits</h4>
                  <ul className="space-y-4">
                    {[
                      "Reduced hiring risk with evaluation period",
                      "Faster onboarding compared to permanent hiring",
                      "Flexibility to convert to permanent based on performance",
                      "Cost-effective solution for uncertain project timelines",
                      "Access to skilled professionals immediately"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/90">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white mb-6">How It Works</h4>
                  <ul className="space-y-4">
                    {[
                      "Initial contract period (typically 3-6 months)",
                      "Performance evaluation and feedback collection",
                      "Cultural fit assessment during contract period",
                      "Option to convert to permanent employment",
                      "Seamless transition with no additional fees"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/90">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Success Metrics */}
              <div className="bg-white/5 rounded-xl p-6 mb-8">
                <h4 className="text-2xl font-bold text-white mb-4 text-center">Success Metrics</h4>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
                    <p className="text-white/80">Conversion Rate to Permanent</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">30%</div>
                    <p className="text-white/80">Faster Than Traditional Hiring</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                    <p className="text-white/80">Client Satisfaction Rate</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center pt-8 border-t border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">Ready to Try Before You Hire?</h4>
                <p className="text-white/80 mb-6">Minimize risk and maximize success with our contract-to-hire solutions</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold px-8 py-3">
                    Start Contract-To-Hire
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Source, Train & Deploy Modal */}
      {showSourceTrainDeploy && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowSourceTrainDeploy(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Header Section */}
            <div className="relative overflow-hidden rounded-t-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-600/20"></div>
              <div className="relative p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Users className="h-12 w-12 text-teal-400" />
                </div>
                <h2 className="text-5xl font-bold text-white mb-4">Source, Train & Deploy (STD)</h2>
                <div className="text-left max-w-4xl mx-auto space-y-4">
                  <p className="text-lg text-white/90">
                    Our STD model (Source, Train & Deploy) is one of unique service that provides customized & specialized 
                    skilled minds who would be ready to deploy for IT companies for their specific projects. There is a huge 
                    gap in the skillset required by the corporates and the skillset possessed by the candidates.
                  </p>
                  <p className="text-lg text-white/90">
                    Many IT Companies spend a huge amount of time and money sourcing candidates, screening them, then 
                    train them from scratch for the skill set required to deploy for specific projects. Our STD model plays vital 
                    role in saving significant cost and time in getting you exactly required skill set resources.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-teal-400 mb-6">
                  How effective our SDT model in comparison with others
                </h3>
              </div>

              {/* Key Benefits */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-6">Our STD Process</h4>
                  <ul className="space-y-4">
                    {[
                      "Source candidates with foundational technical skills",
                      "Assess learning capability and technical aptitude",
                      "Design customized training programs for your specific needs",
                      "Provide intensive hands-on training with real projects",
                      "Deploy fully trained resources ready for immediate productivity"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/90">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white mb-6">Cost & Time Savings</h4>
                  <ul className="space-y-4">
                    {[
                      "Eliminate recruitment overhead and screening costs",
                      "Reduce training time from months to weeks",
                      "No investment in training infrastructure",
                      "Guaranteed skill proficiency upon deployment",
                      "Flexible scaling based on project requirements"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/90">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Comparison Metrics */}
              <div className="bg-white/5 rounded-xl p-8 mb-8">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">STD Model vs Traditional Hiring</h4>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-400 mb-2">70%</div>
                    <p className="text-white/80 mb-2">Cost Reduction</p>
                    <p className="text-sm text-white/60">Compared to traditional hiring + training</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-400 mb-2">60%</div>
                    <p className="text-white/80 mb-2">Time Savings</p>
                    <p className="text-sm text-white/60">From sourcing to deployment</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-400 mb-2">95%</div>
                    <p className="text-white/80 mb-2">Success Rate</p>
                    <p className="text-sm text-white/60">Project readiness upon deployment</p>
                  </div>
                </div>
              </div>

              {/* Training Specializations */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">Training Specializations</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    "Cloud Technologies (AWS, Azure, GCP)",
                    "DevOps & CI/CD",
                    "Full-Stack Development",
                    "Data Science & Analytics",
                    "Cybersecurity",
                    "AI/ML Engineering",
                    "Mobile App Development",
                    "Enterprise Software"
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center hover:bg-white/15 transition-all duration-300"
                    >
                      <span className="text-white/90 text-sm font-medium">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center pt-8 border-t border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Hiring Process?</h4>
                <p className="text-white/80 mb-6">Let us source, train, and deploy the perfect team for your specific project needs</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-semibold px-8 py-3">
                    Start STD Program
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3">
                    Discuss Requirements
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* IT Contractors Modal */}
      {showITContractors && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowITContractors(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Header Section */}
            <div className="relative overflow-hidden rounded-t-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-600/20"></div>
              <div className="relative p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Clock className="h-12 w-12 text-orange-400" />
                </div>
                <h2 className="text-5xl font-bold text-white mb-4">IT Contractors (Monthly & Hourly)</h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  We being IT Training & Consulting company, we understand how unpredictable industry is and what a 
                  specific project demands niche skills to perform task
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-orange-400 mb-6">
                  This model is best suitable
                </h3>
              </div>

              {/* Suitable Scenarios */}
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-4">
                    When a project demands specific skills for very short time or one time need
                  </h4>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-4">
                    When company cannot afford to hire required subject matter experts
                  </h4>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-4">
                    When company cannot afford to train their existing resources
                  </h4>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-4">
                    When tasks are very critical both in time and billing
                  </h4>
                </motion.div>
              </div>

              {/* Solution Statement */}
              <div className="bg-white/5 rounded-xl p-6 mb-8 text-center">
                <p className="text-lg text-white/90">
                  In order to tackle above challenges faced by companies, Our SMEs are available to engage on hourly or 
                  monthly billing to perform the required task.
                </p>
              </div>

              {/* Benefits and Features */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-6">Key Benefits</h4>
                  <ul className="space-y-4">
                    {[
                      "Immediate access to specialized expertise",
                      "Cost-effective for short-term projects",
                      "No long-term commitment required",
                      "Flexible hourly or monthly billing options",
                      "Reduced overhead and training costs"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/90">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white mb-6">Our Expertise Areas</h4>
                  <ul className="space-y-4">
                    {[
                      "Cloud Architecture & Migration",
                      "DevOps & Infrastructure Automation",
                      "Cybersecurity & Compliance",
                      "Data Analytics & Business Intelligence",
                      "Enterprise Software Development"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/90">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Engagement Models */}
              <div className="bg-white/5 rounded-xl p-8 mb-8">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">Flexible Engagement Models</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <h5 className="text-xl font-bold text-white mb-2">Hourly Billing</h5>
                    <p className="text-white/80">Perfect for specific tasks, consultations, and short-term technical support</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h5 className="text-xl font-bold text-white mb-2">Monthly Contracts</h5>
                    <p className="text-white/80">Ideal for ongoing projects requiring dedicated expertise over extended periods</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center pt-8 border-t border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">Need Expert IT Contractors?</h4>
                <p className="text-white/80 mb-6">Get immediate access to specialized skills without long-term commitments</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-3">
                    Hire Contractors Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3">
                    Discuss Requirements
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Benefits Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-subtle">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 right-16 w-48 h-48 bg-primary rounded-full blur-xl animate-bounce"></div>
          <div className="absolute bottom-16 left-16 w-64 h-64 bg-secondary rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">HireMinds</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Vetted Professionals",
                description: "All candidates undergo rigorous technical and cultural assessments"
              },
              {
                title: "Rapid Deployment",
                description: "Get qualified professionals on your team within days, not weeks"
              },
              {
                title: "Flexible Engagement",
                description: "Choose from permanent, contract, or contract-to-hire options"
              },
              {
                title: "Custom Training",
                description: "Source, Train & Deploy model ensures perfect skill alignment"
              },
              {
                title: "Global Talent Pool",
                description: "Access to skilled professionals across diverse technologies"
              },
              {
                title: "Ongoing Support",
                description: "Continuous support throughout the engagement lifecycle"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full hover:shadow-glow transition-all duration-300 hover-glow">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Dark */}
      <section className="py-20 bg-gradient-to-r from-foreground via-foreground/95 to-foreground text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary-glow">Process</span>
            </h2>
            <p className="text-xl text-background/80 max-w-3xl mx-auto">
              A streamlined approach to finding the perfect talent for your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Requirements", description: "Understand your specific needs and culture" },
              { step: "02", title: "Sourcing", description: "Tap into our extensive talent network" },
              { step: "03", title: "Screening", description: "Rigorous technical and cultural assessment" },
              { step: "04", title: "Deployment", description: "Seamless onboarding and integration" }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-background/70">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Build Your <span className="bg-gradient-primary bg-clip-text text-transparent">Dream Team</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your staffing needs and find the perfect talent for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4">
                Start Hiring
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Schedule Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HireMinds;