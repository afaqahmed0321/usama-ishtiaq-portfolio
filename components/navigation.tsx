"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/10 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 group">
            <div className="relative">
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                Usama Ishtiaq
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <div className="text-sm text-primary/80 font-medium">AI Engineer</div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2 bg-background/20 rounded-full px-2 py-2 backdrop-blur-sm border border-primary/10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.href.slice(1)
                      ? "text-white bg-primary shadow-lg shadow-primary/25 scale-105"
                      : "text-foreground/80 hover:text-white hover:bg-primary/20 hover:shadow-md"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:bg-primary/20 hover:text-white transition-all duration-200 rounded-full p-3"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden animate-in slide-in-from-top-2 duration-200">
          <div className="px-6 pt-4 pb-6 space-y-3 bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-xl">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`block px-5 py-3 rounded-xl text-base font-medium transition-all duration-200 transform hover:scale-[1.02] ${
                  activeSection === item.href.slice(1)
                    ? "text-white bg-primary shadow-lg shadow-primary/25"
                    : "text-foreground/80 hover:text-white hover:bg-primary/20 hover:shadow-md"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
