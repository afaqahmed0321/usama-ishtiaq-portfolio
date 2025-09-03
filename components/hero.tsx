import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 bg-[url('/abstract-ai-neural-network.png')] opacity-5 bg-cover bg-center" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance">
              <span className="text-foreground">USAMA</span> <span className="text-accent">ISHTIAQ</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted font-medium text-balance">
              Agentic AI Engineer | AI & ML Engineer | Full Stack Developer
            </p>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Accomplished AI Engineer with 6+ years of experience architecting enterprise-grade AI solutions, SaaS
            platforms, and autonomous agent development. Specialized in LLMs, Generative AI, and full-stack
            technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowDown className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a href="mailto:meetusama.dev@gmail.com" className="text-muted hover:text-accent transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/usama-ishtiaq-devai" className="text-muted hover:text-accent transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/uh-sama" className="text-muted hover:text-accent transition-colors">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted" />
      </div>
    </section>
  )
}
