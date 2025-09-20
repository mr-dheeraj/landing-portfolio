import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Database, 
  Cloud, 
  Wrench, 
  Brain, 
  Users, 
  MessageCircle, 
  Target,
  BookOpen
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Golang", level: 85, color: "bg-primary" },
        { name: "Python", level: 60, color: "bg-success" },
        { name: "C++", level: 75, color: "bg-primary" },
        { name: "SQL", level: 85, color: "bg-accent" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: [
        { name: "React.js", level: 50, color: "bg-accent" },
        { name: "Express.js", level: 85, color: "bg-success" },
        { name: "Node.js", level: 85, color: "bg-primary" }
      ]
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 70, color: "bg-success" },
        { name: "PostgreSQL", level: 90, color: "bg-primary" },
        { name: "Firebase", level: 80, color: "bg-accent" }
      ]
    },
    {
      title: "Developer Tools",
      icon: Cloud,
      skills: [
        { name: "GitHub", level: 90, color: "bg-primary" },
        { name: "Postman", level: 85, color: "bg-accent" },
        { name: "VS Code", level: 95, color: "bg-success" },
        { name: "Ngrok", level: 70, color: "bg-primary" }
      ]
    }
  ];

  const softSkills = [
    { name: "Team Collaboration", icon: Users, description: "Experience working with cross-functional teams" },
    { name: "Problem Solving", icon: Brain, description: "Strong analytical and debugging skills" },
    { name: "Communication", icon: MessageCircle, description: "Clear technical documentation and reporting" },
    { name: "Leadership", icon: Target, description: "Project coordination and mentoring" }
  ];

  const coursework = [
    "Data Structures and Algorithms",
    "Database Management System", 
    "Operating System",
    "Software Engineering",
    "System Design"
  ];

  const interests = [
    "Full Stack Development",
    "Competitive Programming",
    "Cloud Architecture",
    "DevOps & CI/CD",
    "API Design"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glass-card">
            Technical Expertise
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical skill set spanning full-stack development, 
            backend systems, and modern development tools
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card border-0 bg-card/50 hover-lift">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Soft Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <Card key={index} className="glass-card border-0 bg-card/30 hover-lift text-center">
                <CardContent className="p-6">
                  <skill.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coursework & Interests */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="glass-card border-0 bg-card/50 hover-lift">
            <CardHeader>
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold">Relevant Coursework</h3>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2">
                {coursework.map((course, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">{course}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-0 bg-card/50 hover-lift">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-success" />
                <h3 className="text-xl font-bold">Areas of Interest</h3>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge key={index} variant="secondary" className="bg-success/10 border-success/20 text-success">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;