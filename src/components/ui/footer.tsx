import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import integrationMindsLogo from "@/assets/Logo.png";

const Footer = () => {
  const services = [
    { name: "Technical Training", href: "/training" },
    { name: "Technology Consulting", href: "/consulting" },
    { name: "HireMinds", href: "/hireminds" },
    { name: "CloudLabs", href: "/cloud-labs" },
  ];

  const popularCourses = [
    { name: "IBM Training", href: "/training" },
    { name: "Cloud Computing", href: "/training" },
    { name: "Cybersecurity", href: "/training" },
    { name: "DevOps", href: "/training" },
    { name: "AI & Machine Learning", href: "/training" },
    { name: "Python Development", href: "/training" },
  ];

  const company = [
    { name: "About Us", href: "/discover-us" },
    { name: "Core Values", href: "/discover-us" },
    { name: "Careers", href: "/discover-us" },
    { name: "Contact Us", href: "/discover-us" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <img 
                  src={integrationMindsLogo} 
                  alt="Integration Minds" 
                  className="h-12 w-auto"
                />
                <p className="text-slate-300 leading-relaxed text-base max-w-sm">
                  Grow Your Expertise Stack, Own Your Digital Modernization Journey.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-white tracking-wide uppercase text-cyan-400 border-b border-slate-700 pb-2">Contact Info</h3>
                
                {/* Email Contacts */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-white font-medium text-sm">Training Inquiries</p>
                      <p className="text-slate-300 text-sm truncate">training@integrationminds.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-white font-medium text-sm">Consulting Services</p>
                      <p className="text-slate-300 text-sm truncate">consulting@integrationminds.com</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-medium text-sm">Phone Support</p>
                    <div className="text-slate-300 text-sm space-y-1">
                      <p>+91-97315 72612</p>
                      <p>+91-90360 20999</p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-medium text-sm mb-2">Office Address</p>
                    <div className="text-slate-300 text-sm leading-relaxed space-y-1">
                      <p className="font-medium">SME Integration Minds Private Limited</p>
                      <p>#822/741/A, 3rd floor, Choyal Towers</p>
                      <p>12th Main Road, AECS Layout, 'B' Block</p>
                      <p>Singasandra, Bangalore - 560068</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white tracking-wide uppercase text-cyan-400 border-b border-slate-700 pb-2">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      to={service.href}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group text-sm py-1"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Courses */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white tracking-wide uppercase text-cyan-400 border-b border-slate-700 pb-2">Popular Courses</h3>
              <ul className="space-y-3">
                {popularCourses.map((course) => (
                  <li key={course.name}>
                    <Link 
                      to={course.href}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group text-sm py-1"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{course.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white tracking-wide uppercase text-cyan-400 border-b border-slate-700 pb-2">Company</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group text-sm py-1"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-12 border-t border-slate-700">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Start Your Journey?</h3>
                <p className="text-slate-300">Join thousands of professionals advancing their careers with us.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/discover-us">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                    Contact Us
                  </Button>
                </Link>
                <a href="https://wa.me/919731572612" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-3 rounded-xl">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2025 SME Integration Minds Private Limited. All rights reserved.
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <Link to="/discover-us" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/discover-us" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/discover-us" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;