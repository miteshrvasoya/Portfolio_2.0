"use client"

import { useEffect, useState } from "react"

const Skills = () => {
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

    const element = document.getElementById("skills")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "SQL", "Go"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "NestJS", "Fastify", "gRPC"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB"],
    },
    {
      category: "DevOps & Cloud",
      skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Microservices", "REST APIs", "GraphQL", "Message Queues"],
    },
    {
      category: "Specializations",
      skills: ["Fintech", "System Design", "Performance Optimization", "CI/CD", "Monitoring"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="space-y-16">
        {/* Section Header */}
        <div
          className={`space-y-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Skills</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">Technologies & Expertise</h2>
          <p className="text-lg text-foreground/70">
            A comprehensive toolkit developed through years of production experience
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300 group"
              style={{
                transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
              }}
            >
              <h3 className="text-lg font-semibold mb-4 text-accent group-hover:text-accent">{category.category}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
