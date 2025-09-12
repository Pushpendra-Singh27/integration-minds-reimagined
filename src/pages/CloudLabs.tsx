import { motion } from "framer-motion";
import { Cloud, Monitor, Zap, Shield, Users, Clock, Award, Headphones, X, Server, Database, Settings, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const CloudLabs = () => {
  const [showVPSModal, setShowVPSModal] = useState(false);
  const [showManagedServersModal, setShowManagedServersModal] = useState(false);
  const [showPrivateCloudModal, setShowPrivateCloudModal] = useState(false);
  const [showVirtualDesktopModal, setShowVirtualDesktopModal] = useState(false);
  const [showVirtualLabsModal, setShowVirtualLabsModal] = useState(false);
  const [showObjectStorageModal, setShowObjectStorageModal] = useState(false);
  const [showKubernetesModal, setShowKubernetesModal] = useState(false);
  const [showApplicationPublishingModal, setShowApplicationPublishingModal] = useState(false);
  const [showTallyOnCloudModal, setShowTallyOnCloudModal] = useState(false);

  const features = [
    {
      title: "24/7 Access",
      description: "Practice anytime, anywhere with round-the-clock lab availability",
      icon: Clock,
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "Live Support",
      description: "Get instant help from our expert support team",
      icon: Headphones,
      gradient: "from-secondary to-secondary-light"
    },
    {
      title: "Real Environments",
      description: "Work with actual enterprise tools and configurations",
      icon: Monitor,
      gradient: "from-primary-glow to-secondary"
    },
    {
      title: "Secure Platform",
      description: "Enterprise-grade security for safe learning experiences",
      icon: Shield,
      gradient: "from-secondary to-primary"
    }
  ];

  const benefits = [
    {
      title: "Hands-On Learning",
      description: "Practice with real tools and scenarios to build practical skills"
    },
    {
      title: "Cost-Effective",
      description: "No need for expensive infrastructure setup or maintenance"
    },
    {
      title: "Scalable Training",
      description: "Train multiple employees simultaneously without resource constraints"
    },
    {
      title: "Updated Content",
      description: "Always work with the latest versions of enterprise software"
    },
    {
      title: "Progress Tracking",
      description: "Monitor learning progress and skill development in real-time"
    },
    {
      title: "Certification Ready",
      description: "Prepare for industry certifications with realistic exam environments"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-24 left-24 w-96 h-96 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-24 right-24 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-hero rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <Cloud className="w-24 h-24 mx-auto mb-4 text-primary" />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 hero-text-glow">
              Cloud <span className="bg-gradient-primary bg-clip-text text-transparent">Labs</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Hands-on cloud training environments for real-world skill development
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4">
              <Zap className="mr-2 h-5 w-5" />
              Start Lab Training
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What is Cloud Labs - Dark Section */}
      <section className="py-20 bg-gradient-to-b from-foreground to-foreground/95 text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              What are <span className="text-primary-glow">Cloud Labs</span>?
            </h2>
            <p className="text-xl text-background/90 mb-8 leading-relaxed">
              Integration Minds Cloud Labs environment ensures that your employees get hands-on training along with theoretical knowledge. Cloud labs are customized and created based on your requirements, allowing learners to engage with content easily.
            </p>
            <p className="text-lg text-background/80 mb-8">
              Your employees can practice new skills as they learn them, gaining practical knowledge that ensures they are well-equipped to meet your business objectives immediately post training.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-subtle">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-56 h-56 bg-primary rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary rounded-full blur-2xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Key <span className="bg-gradient-primary bg-clip-text text-transparent">Features</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0, rotateY: -15 }}
                whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-glow transition-all duration-500 hover-glow">
                  <CardHeader className="text-center">
                    <motion.div 
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="h-8 w-8 text-background" />
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Labs Capabilities Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-4xl mx-auto leading-relaxed">
              Integration Minds is very Unique on creating and exciting the cloud labs and clone with multiple systems at a time.
            </h2>
          </motion.div>

          {/* Nine Clickable Buttons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Virtual Private Server",
              "Managed Servers", 
              "Private Cloud Infrastructure",
              "Virtual Desktop Servers",
              "Virtual Labs",
              "Object Storage",
              "Kubernetes Clusters",
              "Application Publishing",
              "Tally On Cloud"
            ].map((service, index) => (
              <motion.button
                key={service}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/90 hover:bg-white text-slate-800 font-medium py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center min-h-[80px] flex items-center justify-center"
                onClick={() => {
                  if (service === "Virtual Private Server") {
                    setShowVPSModal(true);
                  } else if (service === "Managed Servers") {
                    setShowManagedServersModal(true);
                  } else if (service === "Private Cloud Infrastructure") {
                    setShowPrivateCloudModal(true);
                  } else if (service === "Virtual Desktop Servers") {
                    setShowVirtualDesktopModal(true);
                  } else if (service === "Virtual Labs") {
                    setShowVirtualLabsModal(true);
                  } else if (service === "Object Storage") {
                    setShowObjectStorageModal(true);
                  } else if (service === "Kubernetes Clusters") {
                    setShowKubernetesModal(true);
                  } else if (service === "Application Publishing") {
                    setShowApplicationPublishingModal(true);
                  } else if (service === "Tally On Cloud") {
                    setShowTallyOnCloudModal(true);
                  } else {
                    console.log(`Clicked on ${service}`);
                  }
                }}
              >
                <span className="text-lg">{service}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Private Server Modal */}
      {showVPSModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-slate-900 to-black rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowVPSModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Header Section */}
            <div className="relative overflow-hidden rounded-t-2xl">
              <div className="relative p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Server className="h-10 w-10 text-blue-400" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-6 text-center">Virtual Private Servers</h2>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Integration Minds' VPS provides dedicated resources in a virtualized environment, ensuring optimal 
                  performance, flexibility, and security for your applications and websites, with easy scalability and 
                  cost-effective solutions.
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 space-y-8">
              {/* VPS Description */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Virtual Private Servers (VPS)</h3>
                <p className="text-white/90 leading-relaxed">
                  Harness the Power of Virtual Private Servers with Integration Minds
                </p>
                <p className="text-white/90 leading-relaxed mt-4">
                  In today's fast-paced digital landscape, businesses need flexible, reliable computing solutions. 
                  Integration Minds Virtual Private Server (VPS) provide the perfect blend of performance and customization, 
                  making them an ideal choice for companies of all sizes.
                </p>
                <p className="text-white/90 leading-relaxed mt-4">
                  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
                  sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
              </div>

              {/* Why Choose VPS */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose VPS?</h3>
                <p className="text-white/90 leading-relaxed">
                  A Virtual Private Server offers a virtualized environment that mimics a dedicated server within a shared 
                  hosting infrastructure. This means you get dedicated resources, like CPU, RAM and bandwidth, 
                  optimized performance for your applications and websites. Unlike traditional shared hosting, VPS gives the 
                  flexibility to adapt the server environment to your exact specifications.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Scalability and Flexibility
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    One of the key advantages of VPS is its scalability. As your business grows, you can easily upgrade 
                    your resources without the need for costly hardware investments. Whether you need additional bandwidth, 
                    increased traffic, or expanded storage capacities, or host multiple websites, VPS offers the 
                    flexibility to adapt to your evolving business.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Enhanced Security
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Security is paramount in the digital age. Integration Minds VPS solutions come with robust security 
                    features, including firewalls, regular backups, and DDoS protection. Our virtual environments 
                    ensure that your data and applications remain safe from potential threats.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Cost-Effective Solution
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Compared to dedicated servers, VPS is a cost-effective solution that doesn't compromise on performance. 
                    You get the benefits of a dedicated server at a fraction of the cost, 
                    making it an attractive option for startups and small to medium-sized businesses.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    24/7 Support
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    At Integration Minds, we understand that your business operates around the clock. That's why our 
                    expert support team is available 24/7 to assist you with any technical issues or concerns you may have. 
                    Whether you need help with server configuration, troubleshooting, or general inquiries, 
                    we take care of your server management needs.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Conclusion</h3>
                <p className="text-white/90 leading-relaxed">
                  Whether you're launching a new project, running an e-commerce site, or managing multiple applications, 
                  Integration Minds Virtual Private Servers provide the performance, security, and scalability you need to succeed. 
                  Contact us today to learn more about our VPS solutions and discover how we can help you achieve your business goals with 
                  cloud infrastructure.
                </p>
              </div>

              {/* CTA Section */}
              <div className="text-center pt-8 border-t border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">Ready to Get Started with VPS?</h4>
                <p className="text-white/80 mb-6">Experience the power and flexibility of Virtual Private Servers</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-3">
                    Get VPS Now
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

      {/* Managed Servers Modal */}
      {showManagedServersModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-slate-900 to-black rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowManagedServersModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Header Section */}
            <div className="relative overflow-hidden rounded-t-2xl">
              <div className="relative p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Monitor className="h-10 w-10 text-green-400" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-6 text-center">Managed Servers</h2>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Our Managed Servers offer a hassle-free solution with full server management, including setup, 
                  monitoring and maintenance, ensuring high performance, security, and uptime for your 
                  critical business operations.
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 space-y-8">
              {/* Managed Servers Description */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Managed Servers</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Streamline Your IT Operations with Integration Minds Managed Servers
                </p>
                <p className="text-white/90 leading-relaxed">
                  In the ever-evolving world of technology, businesses are constantly looking to optimize their IT operations 
                  and reduce the burden of server management. Integration Minds offers a comprehensive 
                  managed server solution, allowing you to focus on your core business activities while we handle the complexities of server 
                  administration.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid md:grid-cols-1 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    What are Managed Servers?
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Managed Servers are dedicated servers that are fully managed by a team of expert technicians. 
                    This means that all aspects of server maintenance, including hardware monitoring, software updates, 
                    security patches, and performance optimization, are handled by professionals, 
                    without the hassle of managing it yourself.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Performance and Reliability
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Our Managed Servers are built on best-in-class, enterprise-grade performance and reliability. We 
                    use state-of-the-art hardware and cutting-edge technology to ensure your applications run smoothly and efficiently. 
                    With proactive monitoring and maintenance, we can identify and resolve potential issues before they impact your business, 
                    ensuring maximum uptime and optimal performance.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Security and Compliance
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    In today's digital landscape, security is not an option. Integration Minds Managed Servers come with 
                    robust security measures, including firewalls, intrusion detection systems, regular security audits, and 
                    compliance with industry standards. We take a proactive approach to security, ensuring that your 
                    data and applications are protected against threats and vulnerabilities.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Scalability
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    As your business grows, so do your IT needs. Our Managed Servers offer seamless scalability, 
                    allowing you to easily upgrade your resources as your requirements evolve. Whether you need additional processing power, 
                    storage capacity, or bandwidth, we can quickly and efficiently scale your infrastructure to meet your growing demands.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Expert Support
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    One of the key advantages of choosing Integration Minds Managed Servers is access to our 
                    team of certified professionals. Our experts are available 24/7 to assist you with any issues or questions. This means 
                    faster resolution times, reduced downtime, and peace of mind knowing that your infrastructure is in capable hands.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Conclusion</h3>
                <p className="text-white/90 leading-relaxed">
                  Integration Minds Managed Servers offer a powerful and hassle-free solution for businesses looking to 
                  optimize their IT infrastructure. With our comprehensive management services, you can focus on what you do best while we 
                  take care of the technical details. Our commitment to performance, security, scalability, and expert support makes us the 
                  ideal partner for your managed server needs.
                </p>
              </div>

              {/* CTA Section */}
              <div className="text-center pt-8 border-t border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">Ready to Simplify Your Server Management?</h4>
                <p className="text-white/80 mb-6">Let our experts handle your server infrastructure while you focus on your business</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-3">
                    Get Managed Servers
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

      {/* Private Cloud Infrastructure Modal */}
      {showPrivateCloudModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-slate-900 to-black rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPrivateCloudModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Header Section */}
            <div className="relative overflow-hidden rounded-t-2xl">
              <div className="relative p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Cloud className="h-10 w-10 text-purple-400" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-6 text-center">Private Cloud Infrastructure</h2>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Integration Minds Private Cloud Infrastructure provides a customizable, secure, and scalable cloud 
                  environment tailored to your specific business needs, offering exclusive access and complete 
                  control over your IT resources.
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 space-y-8">
              {/* Private Cloud Infrastructure Description */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Private Cloud Infrastructure</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Build Your Own Cloud Ecosystem with Integration Minds Private Cloud Infrastructure
                </p>
                <p className="text-white/90 leading-relaxed">
                  As businesses increasingly rely on digital solutions, the need for a flexible, secure, and scalable IT infrastructure 
                  becomes paramount. Integration Minds Private Cloud Infrastructure provides a comprehensive solution 
                  tailored to your organization's unique needs, offering unmatched control and customization.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid md:grid-cols-1 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    What is Private Cloud Infrastructure?
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    A Private Cloud is a dedicated cloud environment designed for a single organization. Unlike public 
                    cloud services, a private cloud offers enhanced security, compliance, and control over your data and applications. 
                    It combines the benefits of cloud computing with the security and control of on-premises infrastructure, 
                    providing a hybrid solution that meets the specific requirements of your business.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Customization and Control
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    One of the main advantages of a private cloud is the level of control it offers. With Integration 
                    Minds Private Cloud Infrastructure, you have complete control over your computing environment, from 
                    hardware selection to software configuration. This level of customization ensures that your IT infrastructure perfectly aligns with your business goals.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Enhanced Security
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Security is a critical concern for any business, and private clouds offer superior security compared 
                    to public cloud solutions. Integration Minds Private Cloud Infrastructure includes advanced security measures, 
                    such as firewalls, encryption, access controls, and regular security audits. This ensures that your sensitive data 
                    and applications are protected from external threats and unauthorized access.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Scalability and Flexibility
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    As your business grows, so do your IT needs. Integration Minds Private Cloud Infrastructure 
                    is designed to scale with your organization, allowing you to easily add or remove resources as needed. 
                    This flexibility ensures that you only pay for what you use, while still having the capacity to handle 
                    increased workloads and new applications as your business evolves.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Expert Support
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    At Integration Minds, we understand that managing a private cloud environment can be complex. 
                    That's why we offer comprehensive support services to help you get the most out of your private cloud infrastructure. 
                    Our team of experts is available 24/7 to assist with any technical issues or questions, 
                    ensuring that your infrastructure runs smoothly and efficiently.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Conclusion</h3>
                <p className="text-white/90 leading-relaxed">
                  Integration Minds Private Cloud Infrastructure offers a powerful and flexible solution for businesses looking to 
                  take control of their IT environment. Whether you're looking to improve security, increase scalability, or 
                  gain greater control over your computing resources, our private cloud solutions provide the foundation you need to succeed. 
                  Contact us today to learn more about how we can help you build and manage your private cloud infrastructure.
                </p>
              </div>

              {/* CTA Section */}
              <div className="text-center pt-8 border-t border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">Ready to Build Your Private Cloud?</h4>
                <p className="text-white/80 mb-6">Take complete control of your IT infrastructure with our private cloud solutions</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-8 py-3">
                    Get Private Cloud
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

      {/* Virtual Desktop Servers Modal */}
      {showVirtualDesktopModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-slate-900 to-black rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowVirtualDesktopModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Header Section */}
            <div className="relative overflow-hidden rounded-t-2xl">
              <div className="relative p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Monitor className="h-10 w-10 text-indigo-400" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-6 text-center">Virtual Desktop Servers</h2>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Virtual Desktop Servers enable secure, remote access to desktop environments from any device, 
                  enhancing productivity, simplifying IT management, and providing your security for a truly 
                  flexible workforce.
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 space-y-8">
              {/* Virtual Desktop Servers Description */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Virtual Desktop Servers</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Empower Your Workforce with Integration Minds Virtual Desktop Servers
                </p>
                <p className="text-white/90 leading-relaxed">
                  In the modern business environment, flexibility and security are key to maintaining productivity and efficiency. 
                  Integration Minds Virtual Desktop Servers (VDS) provide a powerful solution that enables employees to access 
                  their desktop environments securely from anywhere, at any time.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid md:grid-cols-1 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                    What are Virtual Desktop Servers?
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Virtual Desktop Servers (VDS) are cloud-based solutions hosted on the cloud. They allow 
                    users to access their desktop environment and applications from any device with an internet connection. 
                    Unlike traditional desktop setups, VDS provides a centralized, managed environment that offers enhanced 
                    security, scalability, and cost-effectiveness for businesses of all sizes.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                    Anywhere, Anytime Access
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    One of the primary benefits of VDS is the ability to work from anywhere. Whether your team is in the 
                    office, working from home, or traveling, they can access their desktop environment with ease. This level of 
                    flexibility is essential for modern businesses that need to adapt to changing work environments and 
                    maintain productivity regardless of location.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                    Enhanced Security
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Security is a top concern for any business, and VDS addresses this by centralizing data and applications 
                    in a secure cloud environment. Integration Minds Virtual Desktop Servers include advanced security features 
                    such as multi-factor authentication, encryption, and regular security updates. This ensures that your sensitive 
                    business data remains protected, even when accessed from remote locations.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                    Cost Efficiency
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    By implementing VDS, organizations can achieve significant cost savings. Virtual Desktop Servers 
                    eliminate the need for expensive desktop hardware and reduce IT maintenance costs. Additionally, 
                    the scalable nature of VDS means you only pay for what you use, making it a cost-effective solution 
                    for businesses of all sizes.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                    Simplified IT Management
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Managing a large number of desktop environments can be challenging, but VDS simplifies this process. 
                    With centralized management, IT teams can efficiently manage operating systems, applications, and security policies 
                    from a single location. This reduces the complexity and time required for IT management tasks.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Conclusion</h3>
                <p className="text-white/90 leading-relaxed">
                  Integration Minds Virtual Desktop Servers provide a comprehensive solution for businesses looking to 
                  enhance flexibility, security, and cost-effectiveness. By enabling remote access to desktop environments, 
                  VDS empowers your workforce to be productive from anywhere while maintaining the highest levels of security. 
                  Contact us today to learn more about how Virtual Desktop Servers can transform your business operations.
                </p>
              </div>

              {/* CTA Section */}
              <div className="text-center pt-8 border-t border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">Ready to Go Virtual?</h4>
                <p className="text-white/80 mb-6">Transform your workforce with secure, flexible virtual desktop solutions</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold px-8 py-3">
                    Get Virtual Desktop
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

      {/* Virtual Labs Modal */}
      {showVirtualLabsModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-slate-900 to-black rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowVirtualLabsModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Header Section */}
            <div className="relative overflow-hidden rounded-t-2xl">
              <div className="relative p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Zap className="h-10 w-10 text-yellow-400" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-6 text-center">Virtual Labs</h2>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Our Virtual Labs offer cloud-based, scalable environments for training, testing, and development, 
                  providing on-demand access to virtualized resources for practical, hands-on experience without the 
                  need for physical hardware.
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 space-y-8">
              {/* Virtual Labs Description */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Virtual Labs</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Innovate and Educate with Integration Minds Virtual Labs
                </p>
                <p className="text-white/90 leading-relaxed">
                  In today's fast-paced technology landscape, hands-on experience is crucial for skill development and innovation. 
                  Integration Minds Virtual Labs offer a cutting-edge solution for training, development, and experimentation. Our Virtual Labs provide a flexible, scalable, and 
                  cost-effective platform that meets the needs of educators, IT professionals, and developers.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid md:grid-cols-1 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    What are Virtual Labs?
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Virtual Labs are cloud-based, customizable environments that simulate real-world scenarios for learning, 
                    testing, and development. They provide users with access to a wide range of software, tools, and configurations 
                    without the need for physical hardware. This makes them ideal for educational institutions, training centers, 
                    and organizations looking to provide hands-on experience in a controlled, safe environment.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Enhanced Learning Experience
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    For educators and trainers, Virtual Labs offer a dynamic and interactive learning environment that 
                    enhances the educational experience. Students can experiment with different technologies, practice real-world scenarios, 
                    and gain practical skills without the limitations of physical lab setups. This flexibility enhances learning outcomes and provides an effective way 
                    to bridge the gap between theory and practice.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Cost-Effective Solution
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Traditional labs can be expensive to set up and maintain, requiring significant investments in 
                    hardware, software, and infrastructure. Virtual Labs eliminate these costs by providing cloud-based environments 
                    that can be accessed from anywhere. This makes high-quality training and development accessible to organizations of all sizes, 
                    regardless of their budget or physical infrastructure.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Scalability and Flexibility
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Virtual Labs are designed to scale with your needs. Whether you're training a small team or hundreds of students, 
                    our Virtual Labs can accommodate your requirements. The flexible nature of cloud-based environments means that 
                    you can easily adjust resources, add new configurations, and customize the lab environment to meet specific learning objectives 
                    or project requirements.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Secure and Isolated Environment
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Security is a critical consideration in any lab environment. Integration Minds Virtual Labs provide 
                    secure, isolated environments that protect both the host infrastructure and user data. Each lab session is 
                    contained within its own virtual environment, ensuring that experiments and configurations do not affect other users or systems. 
                    This isolation also allows for safe testing of potentially disruptive technologies and configurations.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Real-World Applications
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Virtual Labs are not limited to educational purposes. They are also invaluable for professionals 
                    and organizations looking to test new technologies, develop applications, or conduct research. The ability to quickly 
                    spin up specialized environments makes Virtual Labs an essential tool for innovation and development in various industries, 
                    from software development to cybersecurity training.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Conclusion</h3>
                <p className="text-white/90 leading-relaxed">
                  Integration Minds Virtual Labs represent the future of hands-on learning and development. 
                  By providing flexible, scalable, and cost-effective lab environments, we enable educators, trainers, and professionals 
                  to deliver high-quality experiences that drive skill development and innovation. Whether you're looking to enhance your training programs, 
                  conduct research, or develop new technologies, our Virtual Labs provide the foundation you need to succeed.
                </p>
              </div>

              {/* CTA Section */}
              <div className="text-center pt-8 border-t border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">Ready to Innovate?</h4>
                <p className="text-white/80 mb-6">Experience hands-on learning with our cutting-edge virtual lab environments</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold px-8 py-3">
                    Start Virtual Lab
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

      {/* Object Storage Modal */}
      {showObjectStorageModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-slate-900 to-black rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            <button
              onClick={() => setShowObjectStorageModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            <div className="relative overflow-hidden rounded-t-2xl">
              <div className="relative p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Database className="h-10 w-10 text-orange-400" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-6 text-center">Object Storage</h2>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Integration Minds Object Storage provides a scalable, secure, and cost-effective solution for storing 
                  large volumes of unstructured data, ensuring high availability, durability, and seamless integration 
                  with your applications.
                </p>
              </div>
            </div>

            <div className="p-8 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Object Storage</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Scale Your Data Efficiently with Integration Minds Object Storage
                </p>
                <p className="text-white/90 leading-relaxed">
                  Modern businesses generate vast amounts of data that need to be stored, managed, and accessed efficiently. 
                  Integration Minds Object Storage offers a robust solution that scales with your data needs while providing 
                  enterprise-grade security and performance.
                </p>
              </div>

              <div className="grid md:grid-cols-1 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    What is Object Storage?
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Object Storage is a data storage architecture that manages data as objects, unlike traditional file systems 
                    that organize data as files and folders. Each object contains the data, metadata, and a unique identifier, 
                    making it ideal for storing large amounts of unstructured data such as documents, images, videos, and backups.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Limitless Scalability
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    One of the key advantages of Integration Minds Object Storage is its limitless scalability. As your data 
                    grows, our storage solution grows with you. There are no limits to the amount of data you can store, 
                    and you only pay for what you use, making it a cost-effective solution for businesses of all sizes.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    High Durability and Availability
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Data protection is paramount in any storage solution. Integration Minds Object Storage is designed 
                    for 99.999999999% (11 9's) durability, ensuring that your data is safe and accessible when you need it. 
                    Our distributed architecture provides high availability and redundancy across multiple data centers.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Cost-Effective
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Integration Minds Object Storage offers competitive pricing with no upfront costs. You pay only for the storage 
                    you use and the data transfer you consume. Our tiered pricing model allows you to optimize costs based on 
                    your access patterns, with options for frequently accessed data and long-term archival storage.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Enhanced Security
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Security is built into every aspect of Integration Minds Object Storage. Data is encrypted both in transit 
                    and at rest, with comprehensive access controls and authentication mechanisms. Our security features include 
                    bucket policies, access control lists (ACLs), and integration with identity management systems.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Seamless Integration
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Integration Minds Object Storage is designed to integrate seamlessly with your existing applications and workflows. 
                    With support for standard APIs and protocols, you can easily migrate existing data and integrate our storage 
                    solution into your current infrastructure without significant changes to your applications.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Conclusion</h3>
                <p className="text-white/90 leading-relaxed">
                  Integration Minds Object Storage provides a comprehensive solution for modern data storage needs. 
                  With its scalability, durability, cost-effectiveness, and security features, it's the ideal choice for businesses 
                  looking to manage their growing data requirements efficiently. Contact us today to learn how Object Storage 
                  can transform your data management strategy.
                </p>
              </div>

              <div className="text-center pt-8 border-t border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">Ready to Scale Your Storage?</h4>
                <p className="text-white/80 mb-6">Store unlimited data with enterprise-grade security and performance</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3">
                    Get Object Storage
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

      {/* Kubernetes Clusters Modal */}
      {showKubernetesModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-slate-900 to-black rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            <button
              onClick={() => setShowKubernetesModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            <div className="relative overflow-hidden rounded-t-2xl">
              <div className="relative p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Settings className="h-10 w-10 text-blue-400" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-6 text-center">Kubernetes Clusters</h2>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Our fully managed Kubernetes Clusters provide enterprise-grade orchestration for containerized 
                  applications, offering automated scaling, security, flexibility, and expert support for 
                  modern application deployment.
                </p>
              </div>
            </div>

            <div className="p-8 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Kubernetes Clusters</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Accelerate Your Containerization Journey with Integration Minds Kubernetes Clusters
                </p>
                <p className="text-white/90 leading-relaxed">
                  In the era of cloud-native applications, Kubernetes has emerged as the de facto standard for container orchestration. 
                  Integration Minds Kubernetes Clusters provide a fully managed, enterprise-grade platform that simplifies 
                  the deployment, scaling, and management of containerized applications.
                </p>
              </div>

              <div className="grid md:grid-cols-1 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    What are Kubernetes Clusters?
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Kubernetes is an open-source platform designed to automate deploying, scaling, and operating application containers. 
                    A Kubernetes cluster consists of a set of worker machines, called nodes, that run containerized applications. 
                    Integration Minds provides fully managed Kubernetes clusters that handle the complexity of cluster management, 
                    allowing you to focus on your applications.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Simplified Deployment and Management
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Managing Kubernetes clusters can be complex, but Integration Minds simplifies this process with our fully managed service. 
                    We handle cluster provisioning, upgrades, patching, and monitoring, so you can focus on developing and deploying your applications. 
                    Our intuitive management console provides easy access to cluster resources and monitoring tools.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Scalability and Performance
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    One of the key benefits of Kubernetes is its ability to automatically scale applications based on demand. 
                    Integration Minds Kubernetes Clusters provide horizontal pod autoscaling and cluster autoscaling, ensuring that your 
                    applications have the resources they need while optimizing costs. Our high-performance infrastructure ensures 
                    low latency and high throughput for your applications.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Enhanced Security and Compliance
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Security is a critical consideration for containerized applications. Integration Minds Kubernetes Clusters include 
                    built-in security features such as network policies, role-based access control (RBAC), and pod security policies. 
                    We also provide regular security updates and compliance with industry standards, ensuring that your applications 
                    are secure and compliant.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Cost Efficiency
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    By leveraging Integration Minds Kubernetes Clusters, you can achieve significant cost savings compared to managing 
                    your own infrastructure. Our managed service eliminates the need for dedicated DevOps resources to manage clusters, 
                    and our efficient resource utilization ensures that you only pay for what you use. Auto-scaling features help 
                    optimize costs by scaling resources up or down based on demand.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Conclusion</h3>
                <p className="text-white/90 leading-relaxed">
                  Integration Minds Kubernetes Clusters provide a powerful and flexible solution for deploying and managing 
                  containerized applications. With our fully managed service, you can leverage the benefits of Kubernetes without 
                  the complexity of cluster management. Whether you're migrating existing applications to containers or building 
                  new cloud-native applications, our Kubernetes Clusters provide the foundation you need to succeed.
                </p>
              </div>

              <div className="text-center pt-8 border-t border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">Ready to Orchestrate?</h4>
                <p className="text-white/80 mb-6">Deploy and scale containerized applications with enterprise-grade Kubernetes</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-3">
                    Start Kubernetes
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

      {/* Application Publishing Modal */}
      {showApplicationPublishingModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-slate-900 to-black rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            <button
              onClick={() => setShowApplicationPublishingModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            <div className="relative overflow-hidden rounded-t-2xl">
              <div className="relative p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Globe className="h-10 w-10 text-green-400" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-6 text-center">Application Publishing</h2>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Integration Minds Application Publishing services streamline software deployment and distribution, 
                  ensuring a seamless, secure, and efficient process for delivering applications to users over the 
                  internet or private networks.
                </p>
              </div>
            </div>

            <div className="p-8 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Application Publishing</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Streamline Software Deployment with Integration Minds Application Publishing
                </p>
                <p className="text-white/90 leading-relaxed">
                  In today's digital world, the ability to deliver and distribute software applications efficiently is crucial for business success. 
                  Integration Minds Application Publishing provides a comprehensive solution for deploying applications to users, ensuring a smooth and 
                  seamless deployment process that meets the needs of businesses in professionals and developers.
                </p>
              </div>

              <div className="grid md:grid-cols-1 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    What is Application Publishing?
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Application Publishing refers to the process of making software applications available to end users over a network. 
                    This can involve deploying applications to cloud platforms, distributing them through app stores, or making them accessible 
                    via web browsers. Integration Minds Application Publishing services provide the tools and infrastructure needed to 
                    streamline this process.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Simplified Deployment
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Deploying applications can be complex and time-consuming, but Integration Minds Application 
                    Publishing simplifies this process. Our platform provides automated deployment pipelines, version control, 
                    and rollback capabilities, making it easy to deploy applications quickly and reliably. Whether you're deploying web applications, 
                    mobile apps, or desktop software, our tools streamline the entire process.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Enhanced User Experience
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    User experience is a key factor in the success of any application. Integration Minds Application 
                    Publishing services are designed to provide users with fast, reliable access to applications. Our content delivery network (CDN) 
                    ensures that applications load quickly, regardless of the user's location, while our robust infrastructure provides high availability 
                    and minimal downtime.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Security and Compliance
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Security is a top priority in application deployment. Integration Minds Application Publishing includes 
                    comprehensive security measures to protect both applications and user data. Our services include secure transmission protocols, 
                    access controls, and compliance with industry standards. We also provide regular security updates and monitoring to ensure that 
                    applications remain secure throughout their lifecycle.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Expert Support
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    At Integration Minds, we understand that application deployment can be challenging. That's why we provide 
                    comprehensive support services to help you every step of the way. Our team of experts is available 24/7 to assist with 
                    deployment issues, troubleshooting, and optimization. We also provide documentation, tutorials, and best practices to help you 
                    make the most of our Application Publishing services.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Conclusion</h3>
                <p className="text-white/90 leading-relaxed">
                  Integration Minds Application Publishing services offer a powerful and flexible solution for deploying 
                  and distributing software applications. By streamlining the deployment process, enhancing user experience, and providing 
                  robust security and support, we enable businesses to deliver high-quality applications to their users efficiently and effectively. 
                  Contact us today to learn how our Application Publishing services can transform your software deployment strategy.
                </p>
              </div>

              <div className="text-center pt-8 border-t border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">Ready to Publish?</h4>
                <p className="text-white/80 mb-6">Deploy and distribute your applications with enterprise-grade publishing services</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-3">
                    Start Publishing
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

      {/* Tally on Cloud Modal */}
      {showTallyOnCloudModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-slate-900 to-black rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            <button
              onClick={() => setShowTallyOnCloudModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            <div className="relative overflow-hidden rounded-t-2xl">
              <div className="relative p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Server className="h-10 w-10 text-red-400" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-6 text-center">Tally on Cloud</h2>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Tally on Cloud brings the power of Tally ERP to a secure cloud platform, providing anywhere, anytime access to 
                  accounting tools, enhancing collaboration, and ensuring robust security and scalability.
                </p>
              </div>
            </div>

            <div className="p-8 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Tally on Cloud</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Revolutionize Your Accounting with Tally on Cloud from Integration Minds
                </p>
                <p className="text-white/90 leading-relaxed">
                  In the world of accounting, efficiency, accuracy, and accessibility are paramount. Integration Minds Tally on 
                  Cloud offers a comprehensive solution that brings the power of Tally ERP to the cloud, providing businesses with 
                  the flexibility and scalability they need to manage their financial operations effectively.
                </p>
              </div>

              <div className="grid md:grid-cols-1 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    What is Tally on Cloud?
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Tally on Cloud is a cloud-based version of the popular Tally ERP software, which is widely used for accounting, 
                    inventory management, and business operations. By hosting Tally on the cloud, businesses can access their accounting 
                    data and applications from anywhere, at any time, using any device with an internet connection. This eliminates the need for 
                    on-premises infrastructure and provides greater flexibility and accessibility.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    Anywhere, Anytime Access
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    One of the biggest advantages of Tally on Cloud is the ability to access your accounting data from anywhere. 
                    Whether you're in the office, working from home, or traveling, you can access Tally and manage your business operations 
                    seamlessly. This level of accessibility is essential for modern businesses that need to stay connected and productive 
                    regardless of location.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    Enhanced Collaboration
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Tally on Cloud enables seamless collaboration among team members. Multiple users can access the same Tally 
                    environment simultaneously, allowing for real-time collaboration on accounting tasks. This improves efficiency and ensures that 
                    all team members have access to the most up-to-date financial information, enhancing decision-making and productivity.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    Data Security
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Security is a top priority when it comes to financial data. Integration Minds Tally on Cloud includes robust security measures 
                    to protect your sensitive accounting information. Our cloud infrastructure includes encryption, access controls, regular backups, 
                    and compliance with industry standards. This ensures that your financial data is secure and protected from unauthorized access 
                    and data loss.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    Expert Support
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    At Integration Minds, we understand that accounting software is critical to your business operations. That's why we provide 
                    comprehensive support services for Tally on Cloud. Our team of experts is available 24/7 to assist with any technical issues, 
                    provide training, and help you optimize your use of Tally. We also offer regular updates and maintenance to ensure that your 
                    system remains current and efficient.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Conclusion</h3>
                <p className="text-white/90 leading-relaxed">
                  Integration Minds Tally on Cloud offers a powerful and flexible solution for modernizing your 
                  accounting operations. By bringing Tally ERP to the cloud, we enable businesses to access their financial data from anywhere, 
                  enhance collaboration, and ensure robust security and scalability. Whether you're a small business or a large enterprise, 
                  Tally on Cloud provides the tools and flexibility you need to manage your accounting operations effectively.
                </p>
              </div>

              <div className="text-center pt-8 border-t border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">Ready to Go Cloud?</h4>
                <p className="text-white/80 mb-6">Access your Tally ERP from anywhere with secure cloud-based accounting</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-3">
                    Start Tally Cloud
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

      {/* Why Train with CloudLabs - Dark Section */}
      <section className="py-20 bg-gradient-to-r from-foreground via-foreground/95 to-foreground text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Why Train with <span className="text-primary-glow">CloudLabs</span>
            </h2>
            <p className="text-xl text-background/90 max-w-4xl mx-auto">
              CloudLabs training via Integration Minds is the best experience to learn digitally advanced courses. Our courses enable learners to include practical knowledge in their real-time work, increasing the quality of work they deliver to the company.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-background/10 backdrop-blur-md border-background/20 hover:bg-background/20 transition-all duration-300 hover:shadow-glow">
                  <CardHeader>
                    <CardTitle className="text-xl text-background group-hover:text-primary-glow transition-colors">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-background/80">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center"
              >
                <Headphones className="w-12 h-12 text-primary-foreground" />
              </motion.div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-primary bg-clip-text text-transparent">24/7</span> Live Support
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our round-the-clock support ensures that your employees get full technical hands-on practice, and non-technical problems are addressed immediately as they arise.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4">
              <Users className="mr-2 h-5 w-5" />
              Contact Support Team
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="py-20 bg-gradient-to-r from-foreground via-primary/20 to-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to <span className="text-primary-glow">Experience</span> Cloud Labs?
            </h2>
            <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
              Start your hands-on learning journey with our state-of-the-art cloud training environments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4">
                Start Free Trial
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

export default CloudLabs;