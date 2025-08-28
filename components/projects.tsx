import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Brain, Heart, Zap, Sparkles } from "lucide-react"

const projects = [
  {
    title: "Recruiter AI",
    description:
      "Developed a resume parser powered by OpenAI with semantic job-fit analysis, boosting recruiter efficiency through intelligent candidate matching and automated screening.",
    technologies: ["OpenAI API", "Next.js", "Node.js", "PostgreSQL", "NLP"],
    category: "AI/ML",
    icon: Brain,
  },
  {
    title: "Edvenity",
    description:
      "Built a multi-role recruitment platform with AI-powered matching, interview scheduling, and scoring system, enhancing candidate-employer satisfaction through intelligent automation.",
    technologies: ["React", "Node.js", "AI Matching", "Scheduling APIs", "MongoDB"],
    category: "Full-Stack",
    icon: Zap,
  },
  {
    title: "Lemur Healthcare",
    description:
      "Designed a Next.js application for healthcare facilities, integrating Google Maps API for location-based services and custom APIs for real-time patient data management.",
    technologies: ["Next.js", "Google Maps API", "Healthcare APIs", "Real-time Data"],
    category: "Healthcare",
    icon: Heart,
  },
  {
    title: "Snap Promise",
    description:
      "Revamped a web application improving onboarding experience with Google/Apple authentication integration and secure Stripe payment processing for enhanced user experience.",
    technologies: ["React", "OAuth", "Stripe", "Payment Processing", "Authentication"],
    category: "Full-Stack",
    icon: Sparkles,
  },
  {
    title: "Instant Space",
    description:
      "Created chat and multilingual modules boosting accessibility and communication using React & Node.js, enabling real-time global communication across language barriers.",
    technologies: ["React", "Node.js", "WebSocket", "Translation APIs", "Real-time Chat"],
    category: "Communication",
    icon: Zap,
  },
  {
    title: "Grow and Share",
    description:
      "Built a comprehensive job-matching platform integrating advanced search capabilities, interactive maps, and subscription models with Stripe for monetization.",
    technologies: ["Full-Stack", "Advanced Search", "Maps Integration", "Stripe", "Subscriptions"],
    category: "Platform",
    icon: Sparkles,
  },
  {
    title: "Serve on Route",
    description:
      "Designed a parcel delivery application with real-time chat and maps functionality, built on React Native & Nest.js for cross-platform mobile delivery tracking.",
    technologies: ["React Native", "Nest.js", "Real-time Tracking", "Maps", "Mobile Development"],
    category: "Mobile",
    icon: Zap,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Key Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Showcase of innovative solutions spanning AI/ML, full-stack development, and specialized platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-background/80 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative h-32 bg-primary/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-4 bg-primary/20 backdrop-blur-sm rounded-2xl">
                    <project.icon className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-background/80 text-foreground border-border/50 backdrop-blur-sm"
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm text-pretty leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-primary/30 hover:border-primary hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent hover:bg-primary/10 hover:border-primary transition-colors"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-white border-0">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
