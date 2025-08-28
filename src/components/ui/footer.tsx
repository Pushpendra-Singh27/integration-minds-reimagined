import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import integrationMindsLogo from "@/assets/Logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Technical Training", href: "/training" },
    { name: "Technology Consulting", href: "/consulting" },
    { name: "HireMinds", href: "/hireminds" },
    { name: "CloudLabs", href: "/cloud-labs" },
  ];

  const categories = [
    { name: "IBM Training", href: "/training" },
    { name: "S/W & H/W Training", href: "/training" },
    { name: "Python Courses", href: "/training" },
    { name: "API Courses", href: "/training" },
    { name: "Cybersecurity Courses", href: "/training" },
    { name: "Cloud Computing Courses", href: "/training" },
    { name: "DevOps Courses", href: "/training" },
    { name: "AI, ML, DS & DL Courses", href: "/training" },
    { name: "Internet of Things Courses", href: "/training" },
    { name: "Blockchain Courses", href: "/training" },
    { name: "BigData & Hadoop Courses", href: "/training" },
    { name: "Mainframe & as400 Courses", href: "/training" },
  ];

  const resources = [
    { name: "Technology Consulting", href: "/consulting" },
    { name: "Hire Minds", href: "/hireminds" },
    { name: "CloudLabs", href: "/cloud-labs" },
    { name: "Core Values", href: "/discover-us" },
    { name: "Corporate Responsibility", href: "/discover-us" },
    { name: "Careers", href: "/discover-us" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-b from-muted/20 to-muted/50 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src={integrationMindsLogo} 
                  alt="Integration Minds" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Grow Your Expertise Stack, Own Your Digital Modernization Journey.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>training@integrationminds.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+91-97315 72612 / +91-90360 20999</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>
                    SME Integration Minds Private Limited, #822/741/A, 3rd floor, Choyal Towers, 12th Main Road,
                    AECS Layout, ‘B’ Block, Singasandra, Bangalore - 560068
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground pl-5">
                  <Mail className="w-4 h-4 opacity-70" />
                  <span>consulting@integrationminds.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground pl-5">
                  <Mail className="w-4 h-4 opacity-70" />
                  <span>hireminds@integrationminds.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Categories</h3>
              <ul className="space-y-3">
                {categories.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Actions */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Resources</h3>
              <ul className="space-y-3">
                {resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link to="/discover-us" className="w-full sm:w-auto">
                  <Button className="w-full bg-gradient-secondary hover:shadow-glow">Contact Us</Button>
                </Link>
                <a
                  href="tel:+919731572612"
                  className="w-full sm:w-auto"
                >
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" /> Whatsapp us
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              2025 SME Integration Minds Private Limited. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/discover-us" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/discover-us" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/discover-us" className="text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;