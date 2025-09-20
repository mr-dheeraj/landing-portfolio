import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  ExternalLink,
  Code2
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dheeraj1753@gmail.com",
      href: "mailto:dheeraj1753@gmail.com",
      description: "Best way to reach me"
    },
    {
      icon: MapPin,
      label: "Location", 
      value: "Gandhinagar, Gujarat",
      href: null,
      description: "Currently based in"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/mr-dheeraj",
      href: "https://github.com/mr-dheeraj",
      description: "Check out my code"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/dheeraj-pratap",
      href: "https://linkedin.com/in/dheeraj-pratap",
      description: "Professional network"
    }
  ];

  const quickActions = [
    {
      title: "View Resume",
      description: "Download my latest resume",
      icon: ExternalLink,
      href: "https://drive.google.com/file/d/1rdqLBGoC2o2bmqHRi1EUxo8FnZmQnV2M/view?usp=sharing",
      variant: "hero" as const
    },
    {
      title: "GitHub Profile",
      description: "Explore my repositories",
      icon: Github,
      href: "https://github.com/mr-dheeraj",
      variant: "glass" as const
    },
    {
      title: "LeetCode Profile", 
      description: "Check my coding practice",
      icon: Code2,
      href: "https://leetcode.com/u/dheeraj_128",
      variant: "glass" as const
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glass-card">
            Get In Touch
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm actively seeking software engineering opportunities and always open to 
            discussing technology, career opportunities, or potential collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-0 bg-card/50 hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        <contact.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">{contact.label}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{contact.description}</p>
                        {contact.href ? (
                          <Button variant="link" className="p-0 h-auto text-primary" asChild>
                            <a href={contact.href} target={contact.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                              {contact.value}
                              {contact.href.startsWith('http') && (
                                <ExternalLink className="w-3 h-3 ml-1" />
                              )}
                            </a>
                          </Button>
                        ) : (
                          <span className="text-foreground font-medium">{contact.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border/50">
                  <h4 className="font-semibold text-lg mb-4">Ready to Connect?</h4>
                  <p className="text-muted-foreground mb-6">
                    Whether you have a job opportunity, want to discuss a project, or just want to 
                    chat about technology, I'd love to hear from you!
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button variant="hero" size="lg" className="animate-glow-pulse" asChild>
                      <a href="mailto:dheeraj1753@gmail.com">
                        <Send className="w-5 h-5 mr-2" />
                        Send Email
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://linkedin.com/in/dheeraj-pratap" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 mr-2" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-center gradient-text">Quick Actions</h3>
            
            {quickActions.map((action, index) => (
              <Card key={index} className="glass-card border-0 bg-card/30 hover-lift">
                <CardContent className="p-6 text-center">
                  <action.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{action.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
                  <Button variant={action.variant} size="sm" className="w-full" asChild>
                    <a href={action.href} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}

            {/* Status Card */}
            <Card className="glass-card border-0 bg-success/5 border-success/20">
              <CardContent className="p-6 text-center">
                <div className="w-3 h-3 bg-success rounded-full mx-auto mb-3 animate-pulse"></div>
                <h4 className="font-semibold text-success mb-2">Available for Work</h4>
                <p className="text-sm text-muted-foreground">
                  Currently seeking full-time software engineering positions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Built with ❤️ using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;