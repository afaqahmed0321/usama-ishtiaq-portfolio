import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Building, Award, TrendingUp } from "lucide-react"

const experiences = [
  {
    company: "Devsinc",
    positions: [
      {
        title: "Senior AI & LLM Engineer",
        period: "Aug 2024 – Aug 2025",
        achievements: [
          "Led the design and deployment of enterprise-grade Gen-AI solutions, shaping architecture and guiding team implementation",
          "Championed strategy for LLM integration and autonomous agent development (AutoGPT, BabyAGI)",
          "Established best practices for AI adoption, scaling, and performance monitoring",
        ],
      },
      {
        title: "LLM Engineer",
        period: "Jan 2024 – Aug 2024",
        achievements: [
          "Developed and optimized Generative AI and LLM solutions using TensorFlow, PyTorch, GPT architectures",
          "Integrated vector semantic search and NLP capabilities for faster information retrieval",
          "Delivered scalable AI-powered microservices with seamless backend integration",
        ],
      },
    ],
    technologies: ["TensorFlow", "PyTorch", "GPT", "LangChain", "Vector Databases", "AutoGPT", "BabyAGI"],
  },
  {
    company: "Podium",
    positions: [
      {
        title: "Full Stack Developer",
        period: "Dec 2022 – Jan 2024",
        achievements: [
          "Powered 24/7 AI Employee capability for lead engagement, achieving 45% higher conversion rates",
          "Centralized omnichannel communications (SMS, calls, chat, reviews) within unified inbox",
          "Boosted sales performance by 30% through lead capture optimization and response time reduction",
          "Enhanced reputation management through AI-driven review generation and automation",
        ],
      },
    ],
    technologies: ["Next.js", "Node.js", "AI Integration", "SMS APIs", "Real-time Communication"],
  },
  {
    company: "Programmers Force",
    positions: [
      {
        title: "Senior Full Stack Engineer (Security / Compliance Focused)",
        period: "Sep 2021 – Nov 2022",
        achievements: [
          "Built front-end modules and SDK integrations for Facia.ai with liveness detection and anti-spoofing",
          "Designed dashboards & APIs for The KYB, streamlining corporate verification workflows",
          "Developed Shufti Pro's verification portal with OCR, biometric matching, and AML screening",
          "Integrated AML Watcher tools enabling real-time AML checks",
        ],
      },
      {
        title: "Software Engineer (AI/ML / Compliance Focus)",
        period: "Feb 2020 – Aug 2021",
        achievements: [
          "Optimized AI-driven algorithms for rapid face matching and one-second liveness detection",
          "Enhanced The KYB platform with UBO identification and risk scoring across 250+ jurisdictions",
          "Improved Shufti Pro's pipeline with OCR-based document processing and biometric authentication",
        ],
      },
    ],
    technologies: ["Python", "OpenCV", "OCR", "Biometric Systems", "AML/KYC", "React", "Flask", "Django"],
  },
  {
    company: "Altar.io",
    positions: [
      {
        title: "Junior Software Engineer",
        period: "Jan 2019 – Jan 2020",
        achievements: [
          "Built backend APIs using Python, Flask/Django for scalable data processing",
          "Automated testing workflows with Docker & CI tools, reducing human error by 70%",
          "Enabled CI/CD pipelines, cutting post-integration defects by 90%",
          "Built ETL pipelines and prototyped NLP features using NLTK and spaCy",
        ],
      },
    ],
    technologies: ["Python", "Flask", "Django", "Docker", "CI/CD", "NLTK", "spaCy", "OpenCV"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            6+ years of experience building cutting-edge AI solutions and full-stack applications
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-accent hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 bg-accent rounded-full border-4 border-background shadow-lg hidden lg:block z-10"></div>

                <Card className="lg:ml-20 border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 bg-background/80 backdrop-blur-sm group">
                  <CardHeader className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <Building className="h-6 w-6 text-accent" />
                          <CardTitle className="text-2xl text-foreground group-hover:text-accent transition-colors">
                            {experience.company}
                          </CardTitle>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.slice(0, 4).map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs border-accent/30 hover:border-accent hover:bg-accent/10 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {experience.technologies.length > 4 && (
                            <Badge variant="outline" className="text-xs border-accent/30">
                              +{experience.technologies.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {experience.positions.map((position, posIndex) => (
                      <div key={posIndex} className="relative">
                        {/* Position timeline */}
                        <div className="flex gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-3 h-3 bg-accent/60 rounded-full mt-2"></div>
                            {posIndex < experience.positions.length - 1 && (
                              <div className="w-0.5 h-full bg-accent/20 ml-1 mt-2"></div>
                            )}
                          </div>
                          <div className="flex-1 pb-8">
                            <div className="mb-4">
                              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                                <Award className="h-5 w-5 text-accent" />
                                {position.title}
                              </h3>
                              <div className="flex items-center gap-2 text-muted-foreground mt-2">
                                <Calendar className="h-4 w-4" />
                                <span className="text-sm font-medium">{position.period}</span>
                              </div>
                            </div>
                            <div className="space-y-3">
                              {position.achievements.map((achievement, achIndex) => (
                                <div key={achIndex} className="flex items-start gap-3 group/achievement">
                                  <TrendingUp className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                  <p className="text-muted-foreground text-pretty leading-relaxed group-hover/achievement:text-foreground transition-colors">
                                    {achievement}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
