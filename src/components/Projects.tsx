import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Database, Smartphone, ShoppingCart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Blinkit - E-commerce Platform",
      description: "A comprehensive full-stack e-commerce application built with modern technologies, featuring complete user authentication, payment integration, and admin dashboard for efficient management.",
      icon: ShoppingCart,
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Stripe", "Redux", "Cloudinary"],
      features: [
        "JWT-based authentication with role-based access control",
        "Integrated Stripe for secure payment processing",
        "Resend API for transactional email notifications",
        "Cloudinary integration for product image management",
        "Admin dashboard for inventory and order management",
        "Redux for efficient state management",
        "RESTful API design for seamless communication"
      ],
      githubLink: "https://github.com/mr-dheeraj/Blinkit_ecommerce",
      liveLink: "https://blinkit-fullstack-v1.vercel.app/",
      color: "border-primary/20 bg-primary/5"
    },
    {
      title: "Amazon Clone",
      description: "A pixel-perfect Amazon website clone showcasing advanced frontend development skills with interactive components and modern web technologies.",
      icon: ExternalLink,
      technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
      features: [
        "Responsive design matching Amazon's UI/UX",
        "Interactive shopping cart functionality", 
        "Dynamic navigation with search capabilities",
        "Product carousel and image sliders",
        "Modern CSS animations and transitions",
        "Cross-browser compatibility",
        "Deployed via GitHub Pages for easy access"
      ],
      githubLink: "https://github.com/mr-dheeraj/amazon-clone",
      liveLink: "https://mr-dheeraj.github.io/amazon-clone/",
      color: "border-accent/20 bg-accent/5"
    },
    {
      title: "Smart Energy Monitoring System",
      description: "An innovative IoT solution for real-time energy monitoring using MQTT protocol, featuring ESP32 integration and dynamic Wi-Fi configuration capabilities.",
      icon: Database,
      technologies: ["Python", "Flask", "C++", "MQTT", "HiveMQ", "Firebase", "ESP32", "Arduino IDE"],
      features: [
        "Real-time sensor data publishing via MQTT protocol",
        "Python Flask web application with Pub/Sub architecture",
        "ESP32 configuration for voltage and current monitoring",
        "HiveMQ broker for reliable message transmission",
        "Remote device control with ON/OFF commands",
        "Dynamic captive Wi-Fi portal for secure setup",
        "Firebase integration for data persistence",
        "Relay-based switching for device control"
      ],
      githubLink: "https://github.com/dheeraj/smart-energy-monitor",
      liveLink: null,
      color: "border-success/20 bg-success/5"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glass-card">
            Featured Projects
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical skills through diverse projects spanning full-stack development, 
            IoT systems, and modern web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className={`glass-card border-0 hover-lift ${project.color}`}>
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <project.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-lg">{project.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.liveLink && (
                      <Button variant="default" size="sm" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    {project.features.length > 4 && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Additional Features:</p>
                        <ul className="space-y-1">
                          {project.features.slice(4).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-xs text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/mr-dheeraj" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View More Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;