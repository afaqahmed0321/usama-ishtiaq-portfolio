import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Database, Cloud, Wrench, Users, Sparkles, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Artificial Intelligence & LLMs",
    icon: Brain,
    skills: [
      "OpenAI APIs",
      "Whisper",
      "LangChain",
      "LLMOps",
      "Generative AI",
      "GPT Models",
      "Transformer Architecture",
      "Vector Databases",
      "Firecrawl",
      "RapidAPI",
    ],
  },
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["Next.js", "React.js", "Angular", "React Native", "Tailwind CSS", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend & API Engineering",
    icon: Zap,
    skills: ["Node.js", "Express.js", "Nest.js", "RESTful APIs", "GraphQL", "Supabase", "Firebase"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Cloud Platforms & Services",
    icon: Cloud,
    skills: ["Google Cloud Platform (GCP)", "Stripe", "Google AdSense", "CI/CD Pipelines", "Docker", "GitHub Actions"],
  },
  {
    title: "DevOps & Collaboration",
    icon: Wrench,
    skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Postman", "Jira", "Trello", "ClickUp", "Slack", "Agile/Scrum"],
  },
]

const expertiseLevels = [
  {
    name: "AI/ML Engineering",
    level: "Expert",
    icon: Brain,
    description: "Advanced LLM integration & autonomous agents",
  },
  { name: "Full-Stack Development", level: "Expert", icon: Code, description: "End-to-end application development" },
  { name: "Cloud Architecture", level: "Advanced", icon: Cloud, description: "Scalable cloud-native solutions" },
  { name: "Team Leadership", level: "Advanced", icon: Users, description: "Cross-functional team management" },
  { name: "System Design", level: "Expert", icon: Sparkles, description: "Enterprise-grade architecture" },
  { name: "DevOps & CI/CD", level: "Advanced", icon: Wrench, description: "Automated deployment pipelines" },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "text-primary bg-primary/20 border-primary/30"
    case "Advanced":
      return "text-primary bg-primary/10 border-primary/20"
    default:
      return "text-primary bg-primary/10 border-primary/20"
  }
}

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive expertise across AI/ML, full-stack development, and cloud technologies
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center flex items-center justify-center gap-3">
            <Sparkles className="h-6 w-6 text-primary" />
            Core Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseLevels.map((expertise, index) => (
              <Card
                key={index}
                className="group border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-background/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                      <expertise.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{expertise.name}</h4>
                  <Badge className={`mb-3 ${getLevelColor(expertise.level)} border`}>{expertise.level}</Badge>
                  <p className="text-sm text-muted-foreground text-pretty">{expertise.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-background/80 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="text-lg text-foreground flex items-center gap-3 group-hover:text-primary transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs border border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
