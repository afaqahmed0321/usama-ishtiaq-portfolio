import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    field: "Computer Science",
    institution: "University of Bristol",
    period: "2021-2022",
    location: "Bristol, UK",
    description:
      "Advanced studies in computer science with focus on software engineering, algorithms, and system design.",
  },
  {
    degree: "Bachelor of Applied Science (BASc)",
    field: "Computer Science",
    institution: "University of Essex",
    period: "2015-2019",
    location: "Essex, UK",
    description:
      "Comprehensive foundation in computer science fundamentals, programming, and software development methodologies.",
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Strong academic foundation in computer science from prestigious UK institutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <GraduationCap className="h-8 w-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground mb-2">{edu.degree}</CardTitle>
                    <div className="space-y-2">
                      <p className="text-lg font-medium text-muted">{edu.field}</p>
                      <p className="text-lg font-semibold text-accent">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty leading-relaxed">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
