import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, MessageSquare, Users, Target } from "lucide-react";

const ContactSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Expert Guidance",
      description: "Get personalized recommendations from our technology experts"
    },
    {
      icon: Users,
      title: "Collaborative Approach", 
      description: "Work side by side with our team to build lasting capabilities"
    },
    {
      icon: MessageSquare,
      title: "24/7 Support",
      description: "Ongoing support throughout your learning and implementation journey"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Looking to <span className="bg-gradient-primary bg-clip-text text-transparent">Modernize</span> your Technology Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your technology capabilities? Let's discuss how our expertise can accelerate your digital journey.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-card hover-glow animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Get Started with Us
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          required
                          className="h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          required
                          className="h-11"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          required
                          className="h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          className="h-11"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-foreground">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="interest" className="text-sm font-medium text-foreground">
                        Area of Interest
                      </label>
                      <select 
                        id="interest"
                        className="w-full h-11 px-3 py-2 border border-input bg-background rounded-md text-sm"
                      >
                        <option value="">Select an option</option>
                        <option value="training">Technical Training</option>
                        <option value="consulting">Technology Consulting</option>
                        <option value="hireminds">HireMinds - Talent Acquisition</option>
                        <option value="ibm-training">IBM Training Programs</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your requirements, challenges, or questions..."
                        required
                        rows={4}
                        className="resize-none"
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full bg-gradient-primary hover:shadow-glow"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Benefits Sidebar */}
            <div className="space-y-6 animate-slide-in-right">
              <Card className="border-0 shadow-card hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Why Choose Integration Minds?
                  </h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => {
                      const IconComponent = benefit.icon;
                      return (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="bg-primary/10 rounded-lg p-2 flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground text-sm mb-1">
                              {benefit.title}
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card bg-gradient-primary text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-3">Ready to Get Started?</h3>
                  <p className="text-sm mb-4 text-white/90">
                    Join thousands of professionals who have transformed their careers with our training programs.
                  </p>
                  <Button variant="secondary" size="sm" className="w-full">
                    View Training Catalog
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;