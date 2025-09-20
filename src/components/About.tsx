import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Award, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education Excellence",
      description: "M.Tech Software Systems at DA-IICT (8.20 CPI) and B.Tech CSE (7.60 CPI)",
      color: "text-primary"
    },
    {
      icon: Code,
      title: "Industry Experience",
      description: "Software Engineer at Cloudnuro.ai with hands-on Golang, PostgreSQL & API development",
      color: "text-accent"
    },
    {
      icon: Award,
      title: "Technical Skills",
      description: "Proficient in Full-Stack Development, MERN Stack, Cloud Technologies & Problem Solving",
      color: "text-success"
    },
    {
      icon: Target,
      title: "Career Goals",
      description: "Seeking challenging software engineering roles to build impactful, scalable solutions",
      color: "text-accent"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glass-card">
            About Me
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Passionate <span className="gradient-text">Software Engineer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Currently pursuing M.Tech in Software Systems at DA-IICT with professional experience 
            in developing scalable backend systems, REST APIs, and full-stack applications. 
            I thrive on solving complex problems and building efficient solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="glass-card hover-lift border-0 bg-card/50">
              <CardContent className="p-6 text-center">
                <highlight.icon className={`w-12 h-12 mx-auto mb-4 ${highlight.color}`} />
                <h3 className="text-lg font-semibold mb-3">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Journey */}
          <Card className="glass-card border-0 bg-card/50 hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Technical Journey</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Extensive experience with Golang REST APIs, PostgreSQL optimization, 
                    Firebase integration at Cloudnuro.ai.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Full-Stack Projects</h4>
                  <p className="text-muted-foreground">
                    Built comprehensive applications using MERN stack including e-commerce platforms 
                    with payment integration, user authentication, and admin dashboards.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Innovation & IoT</h4>
                  <p className="text-muted-foreground">
                    Developed IoT solutions using Python Flask, MQTT protocol, ESP32, and real-time 
                    data monitoring systems with dynamic Wi-Fi configuration.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Core Strengths */}
          <Card className="glass-card border-0 bg-card/50 hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Core Strengths</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold">Problem Solving</h4>
                    <p className="text-muted-foreground text-sm">
                      Strong analytical skills with experience in debugging complex systems and optimizing performance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold">Team Collaboration</h4>
                    <p className="text-muted-foreground text-sm">
                      Proven ability to work with cross-functional teams and maintain comprehensive documentation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold">Continuous Learning</h4>
                    <p className="text-muted-foreground text-sm">
                      Always exploring new technologies and best practices in software development
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold">Quality Focus</h4>
                    <p className="text-muted-foreground text-sm">
                      Committed to writing clean, maintainable code with proper testing and documentation
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;