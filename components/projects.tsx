"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const Projects = () => {
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

    const element = document.getElementById("projects")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Payment Processing Platform",
      description:
        "Built a high-performance payment processing system handling 500K transactions/day. Implemented real-time settlement, fraud detection, and multi-currency support.",
      technologies: ["Node.js", "PostgreSQL", "Redis", "Kafka", "AWS"],
      links: {
        github: "https://github.com",
        demo: "https://example.com",
      },
    },
    {
      title: "Real-time Analytics Engine",
      description:
        "Developed streaming analytics pipeline with sub-second latency. Processes and aggregates billions of events daily. Built custom dashboards for data visualization.",
      technologies: ["TypeScript", "Elasticsearch", "Kafka", "Node.js", "Docker"],
      links: {
        github: "https://github.com",
        demo: "https://example.com",
      },
    },
    {
      title: "Microservices Infrastructure",
      description:
        "Designed and implemented microservices architecture for scalable fintech platform. Includes service discovery, API gateway, and distributed tracing.",
      technologies: ["Kubernetes", "Docker", "gRPC", "Prometheus", "Grafana"],
      links: {
        github: "https://github.com",
        demo: "https://example.com",
      },
    },
    {
      title: "Database Optimization Suite",
      description:
        "Created tools and guidelines for PostgreSQL query optimization. Reduced P99 query latency by 60% across production databases.",
      technologies: ["PostgreSQL", "Python", "SQL", "Monitoring", "Performance"],
      links: {
        github: "https://github.com",
        demo: "https://example.com",
      },
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="space-y-16">
        {/* Section Header */}
        <div
          className={`space-y-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Projects</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">Notable Work</h2>
          <p className="text-lg text-foreground/70">
            Showcasing key projects that demonstrate technical expertise and impact
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              style={{
                transitionDelay: isVisible ? `${index * 75}ms` : "0ms",
              }}
            >
              {/* Project Header */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>

              {/* Description */}
              <p className="text-foreground/70 mb-4 leading-relaxed">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-primary/10 text-accent text-xs rounded border border-accent/30 group-hover:bg-accent/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <Button asChild variant="ghost" size="sm" className="text-foreground/70 hover:text-accent">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className="text-foreground/70 hover:text-accent">
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
