"use client"

import { useEffect, useState } from "react"
import { GraduationCap, Calendar } from "lucide-react"

const Education = () => {
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

    const element = document.getElementById("education")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science",
      school: "Indian Institute of Technology (IIT)",
      year: "2016 - 2018",
      description: "Specialized in distributed systems and algorithms. GPA: 3.8/4.0",
    },
    {
      degree: "Diploma",
      field: "Information Technology",
      school: "Government Polytechnic College",
      year: "2013 - 2016",
      description: "Foundation in web technologies and database management.",
    },
  ]

  const certifications = [
    "AWS Certified Solutions Architect - Professional",
    "Kubernetes Application Developer (CKAD)",
    "PostgreSQL DBA Certification",
    "System Design Advanced Course",
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="space-y-16">
        {/* Section Header */}
        <div
          className={`space-y-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Education</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">Learning & Development</h2>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formal Education */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-semibold">Formal Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg mt-1 flex-shrink-0">
                      <GraduationCap size={20} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <p className="text-foreground/70 text-sm">{edu.field}</p>
                      <p className="text-foreground/60 text-xs mt-1">{edu.school}</p>
                      <div className="flex items-center gap-1 text-foreground/50 text-xs mt-2">
                        <Calendar size={14} />
                        <span>{edu.year}</span>
                      </div>
                      <p className="text-foreground/70 text-sm mt-2">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
          >
            <h3 className="text-2xl font-semibold">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 bg-card border border-border rounded-lg hover:border-accent/50 hover:bg-card/50 transition-all flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-foreground/70">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
