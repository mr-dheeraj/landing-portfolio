import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Cloudnuro.ai",
      location: "Bengaluru, Karnataka",
      duration: "Mar 2023 – Jan 2024",
      type: "Full-time",
      achievements: [
        "Developed robust Golang REST APIs and resolved critical bug fixes identified by QA team, testing solutions across Dev and UAT environments",
        "Integrated Firebase Authentication APIs for secure user management including password operations and user validation",
        "Optimized faulty PostgreSQL queries that were returning inaccurate results, improving data reliability",
        "Collaborated seamlessly with frontend teams for API integration while maintaining comprehensive MkDocs documentation",
        "Built automated Golang scripts to implement 'Indicative pricing' feature across Dev, UAT and Production environments",
        "Developed customer support ticket creation APIs with auto-sync to Scrum master's board for efficient tracking"
      ],
      technologies: ["Golang", "PostgreSQL", "Firebase", "REST APIs", "MkDocs", "Postman", "GitHub"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glass-card">
            Professional Experience
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Industry <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hands-on professional experience in software development, API design, and system optimization
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card border-0 bg-card/50 hover-lift mb-8">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-lg text-primary mb-2">
                      <Building2 className="w-5 h-5" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">Key Achievements</h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-muted-foreground">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="bg-primary/10 border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Experience Note */}
        <Card className="glass-card border-0 bg-card/30 max-w-2xl mx-auto mt-8">
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold text-lg mb-2 gradient-text">Seeking New Opportunities</h3>
            <p className="text-muted-foreground">
              Open to full-time software engineering roles where I can apply my backend development 
              expertise and continue growing as a professional developer.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;