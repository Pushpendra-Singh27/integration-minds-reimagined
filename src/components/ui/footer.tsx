import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";
import integrationMindsLogo from "@/assets/Logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Training Programs", href: "#training" },
    { name: "Consulting Services", href: "#consulting" },
    { name: "HireMinds", href: "#hireminds" },
    { name: "Badge Program", href: "#badges" },
  ];

  const services = [
    { name: "IBM Training", href: "#ibm-training" },
    { name: "Technology Consulting", href: "#consulting" },
    { name: "Digital Transformation", href: "#digital" },
    { name: "Talent Acquisition", href: "#talent" },
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
                Your trusted partner in technology training, consulting, and talent development. 
                Empowering businesses through expert knowledge and innovative solutions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>info@integrationminds.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Global Training Provider</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a 
                      href={service.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for the latest training programs and industry insights.
              </p>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="h-10"
                />
                <Button className="w-full bg-gradient-primary hover:shadow-elegant">
                  Subscribe
                </Button>
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
              © 2024 SME Integration Minds Pvt Ltd. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;