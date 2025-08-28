import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin, MapPin, Send, MessageCircle, Calendar } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "meetusama.dev@gmail.com",
    href: "mailto:meetusama.dev@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 7424 898521",
    href: "tel:+447424898521",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/usama-ishtiaq",
    href: "https://linkedin.com/in/usama-ishtiaq",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United Kingdom",
    href: null,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <MessageCircle className="h-8 w-8 text-primary" />
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ready to discuss your next AI project or full-stack development needs? Let's connect and explore how we can
            work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="group border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-background/80 backdrop-blur-sm"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground font-medium">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-foreground hover:text-primary transition-colors font-semibold text-sm"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-semibold text-sm">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Available For
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "AI/ML Engineering Projects",
                    "Full-Stack Development",
                    "Technical Consulting",
                    "Team Leadership Roles",
                    "Startup MVP Development",
                    "Code Reviews & Audits",
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project Discussion"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or how I can help..."
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="mt-20 pt-12 border-t border-primary/20 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-foreground mb-2">Usama Ishtiaq</h3>
              <p className="text-muted-foreground text-sm">AI Engineer & Full Stack Developer</p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-sm font-semibold text-foreground mb-3">Quick Links</h4>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                  Experience
                </a>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </a>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <h4 className="text-sm font-semibold text-foreground mb-3">Connect</h4>
              <div className="flex justify-center md:justify-end gap-4">
                <a
                  href="mailto:meetusama.dev@gmail.com"
                  className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-4 w-4 text-primary" />
                </a>
                <a
                  href="https://linkedin.com/in/usama-ishtiaq"
                  className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-4 w-4 text-primary" />
                </a>
                <a
                  href="tel:+447424898521"
                  className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Phone className="h-4 w-4 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-6 border-t border-border/30">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">© 2025 Usama Ishtiaq. All rights reserved.</p>
              <p className="text-muted-foreground text-sm">Built with Next.js & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
