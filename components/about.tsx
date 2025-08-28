import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Rocket, Users, Sparkles, Zap } from "lucide-react"

const highlights = [
  {
    icon: Brain,
    title: "AI & ML Expertise",
    description: "Specialized in LLMs, Generative AI, and autonomous agent development",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Expert in Next.js, Node.js, PostgreSQL, and cloud-native architectures",
  },
  {
    icon: Rocket,
    title: "Enterprise Solutions",
    description: "Delivered scalable, production-ready systems for startups and enterprises",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Led cross-functional teams and mentored engineers across multiple projects",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Passionate about leveraging AI, automation, and healthcare-focused technologies to enhance patient outcomes,
            decision-making, and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="group border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-background/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                    <highlight.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground text-pretty">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold text-foreground">Professional Summary</h3>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Accomplished AI Engineer and Senior Full-Stack Developer with 6+ years of experience architecting,
              developing, and deploying enterprise-grade AI solutions, SaaS platforms, and healthcare applications.
              Specialized in Agentic AI Engineering, Large Language Models (LLMs), Generative AI, and autonomous agent
              development, with strong expertise in full-stack technologies including Next.js, Node.js, PostgreSQL and
              cloud-native architectures.
            </p>
            <p className="text-muted-foreground text-pretty leading-relaxed mt-4">
              Skilled in integrating OpenAI APIs, LangChain, Supabase, Stripe, and Google Cloud to deliver scalable,
              production-ready systems. Adept at building MVPs for startups, optimizing performance, and conducting
              codebase audits to ensure reliability and scalability. Recognized for leading cross-functional teams,
              mentoring engineers, and driving innovation that aligns with business and compliance goals.
            </p>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-5 w-5 text-primary" />
              <h4 className="text-lg font-semibold text-foreground">Key Specializations</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Agentic AI Engineering",
                "Large Language Models",
                "Generative AI",
                "OpenAI APIs",
                "LangChain",
                "Next.js",
                "Node.js",
                "PostgreSQL",
                "Cloud Architecture",
                "Healthcare Technology",
                "SaaS Development",
                "Team Leadership",
              ].map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
