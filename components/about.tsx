"use client"

import { useEffect, useState } from "react"
import { Code2, Database, Cloud, Zap } from "lucide-react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: Code2,
      title: "Backend Development",
      description: "Expertise in Node.js, TypeScript, and building robust server-side applications",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Proficient with PostgreSQL, designing scalable schemas and optimizing queries",
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Experience with AWS, Docker, and deploying production-grade applications",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Focused on system optimization, caching strategies, and load balancing",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="space-y-16">
        {/* Section Header */}
        <div
          className={`space-y-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">Building scalable systems</h2>
          <p className="text-lg text-foreground/70 max-w-3xl">
            With over 8 years of experience in backend engineering, I've helped fintech companies scale their
            infrastructure to handle millions of transactions. I'm passionate about clean architecture, performance
            optimization, and mentoring junior developers.
          </p>
        </div>

        {/* Highlights Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 hover:bg-card/50 transition-all duration-300 group"
              >
                <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition-colors">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-foreground/70">{highlight.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
