import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Code2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(34, 40, 49, 0.95), rgba(34, 40, 49, 0.85)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <Badge variant="secondary" className="mb-6 glass-card">
              <Code2 className="w-4 h-4 mr-2" />
              Software Engineer
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Dheeraj</span>
              <br />
              <span className="text-foreground">Pratap Singh</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              M.Tech Software Systems student at DA-IICT with professional experience in 
              <span className="text-accent font-semibold"> Golang, React.js, and Full-Stack Development</span>. 
              Passionate about building scalable solutions and solving complex problems.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button 
                variant="hero" 
                size="lg" 
                className="animate-glow-pulse"
                asChild
              >
                <a href="#contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </a>
              </Button>
              
              <Button variant="glass" size="lg" asChild>
                <a href="#projects">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Projects
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover-lift" asChild>
                <a href="https://github.com/mr-dheeraj" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover-lift" asChild>
                <a href="https://linkedin.com/in/dheeraj-pratap" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover-lift" asChild>
                <a href="mailto:dheeraj1753@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 hover-lift glow-effect">
                <img 
                  src="/profil.jpg"
                  alt="Dheeraj Pratap Singh" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Available for Opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;