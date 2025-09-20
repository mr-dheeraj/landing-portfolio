import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Technology (M.Tech)",
      field: "Software Systems", 
      institution: "Dhirubhai Ambani University (DA-IICT)",
      location: "Gandhinagar, Gujarat",
      duration: "2024 - Present",
      cpi: "8.20",
      status: "Current",
      highlights: [
        "Advanced coursework in data structures and algorithms",
        "Minor Project on Smart Energy using MQTT and ESP-32",
        "Coursework distributed systems and advanced software engineering"
      ]
    },
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science Engineering",
      institution: "Chandigarh Group Of Colleges",
      location: "Mohali, Punjab", 
      duration: "2019 - 2023",
      cpi: "7.60",
      status: "Completed",
      highlights: [
        "Strong foundation in computer science fundamentals",
        "Comprehensive study of algorithms, data structures, and software development",
        "Practical experience through projects and internships"
      ]
    },
    {
      degree: "12th Standard",
      field: "CBSE Board",
      institution: "St. Mary's Convent School",
      location: "Gajraula, Uttar Pradesh",
      duration: "2017 - 2018", 
      cpi: "95%",
      status: "Completed",
      highlights: [
        "Excellent academic performance with 95% marks",
        "Strong foundation in science ,mathematics and computer science",
        "Leadership roles in academic activities"
      ]
    },
    {
      degree: "10th Standard",
      field: "CBSE Board", 
      institution: "St. Mary's Convent School",
      location: "Gajraula, Uttar Pradesh",
      duration: "2015 - 2016",
      cpi: "10", 
      status: "Completed",
      highlights: [
        "Outstanding academic achievement with 10 cgpa",
        "Active participation in science exhibitions"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glass-card">
            Academic Background
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Strong academic foundation with consistent excellence throughout my educational journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-success"></div>
            
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <Card key={index} className="glass-card border-0 bg-card/50 hover-lift ml-20 relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[3.75rem] top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          <Badge variant={edu.status === 'Current' ? 'default' : 'secondary'}>
                            {edu.status}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                        <p className="text-lg text-primary font-semibold">{edu.field}</p>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-2 md:justify-end">
                          <Award className="w-4 h-4 text-success" />
                          <span className="font-semibold text-success">
                            {edu.cpi.includes('%') ? edu.cpi : `CPI: ${edu.cpi}`}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <h4 className="font-semibold mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Achievement */}
        <Card className="glass-card border-0 bg-card/30 max-w-2xl mx-auto mt-12">
          <CardContent className="p-6 text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2 gradient-text">Academic Excellence</h3>
            <p className="text-muted-foreground">
              Consistent academic performance with strong foundations in computer science, 
              mathematics, and software engineering principles throughout my educational journey.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;