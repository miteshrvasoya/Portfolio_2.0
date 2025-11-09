"use client"

import { useEffect, useState } from "react"
import { Briefcase, Calendar, ChevronRight } from "lucide-react"

const Experience = () => {
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

    const element = document.getElementById("experience")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      company: "eVitalRx",
      steps: [
        {
          role: "Backend SDE-II",
          duration: "Feb 2025 – Present",
          achievements: [
            "Architected ₹50M+ fintech infrastructure",
            "Architected Payout Module for mass disbursements",
          ],
          technologies: ["Node.js", "PostgreSQL", "AWS", "Redis"],
          isCurrent: true,
        },
        {
          role: "Backend SDE-I",
          duration: "Aug 2023 - Feb 2025",
          achievements: [
            "Integrated multiple third-party payment APIs to enhance transaction processing",
            "Refactored and optimized SQL queries for Report modules to enhance performance",
          ],
          technologies: ["Angular", "Node.js", "MongoDB", "Socket.IO"],
        }
      ],
    },
    {
      company: "DUIUX Infotech",
      steps: [
        {
          role: "Jr. Web Developer",
          duration: "Dec 2022 - Aug 2023",
          achievements: [
            "Built scalable MERN applications", 
            "Developed e-commerce with JWT & real-time chat"
          ],
          technologies: ["TypeScript", "Express.js", "MongoDB", "React", "GraphQL"],
        },
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="space-y-16">
        {/* Section Header */}
        <div
          className={`space-y-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Professional Journey</h2>
          <p className="text-lg text-gray-400">
            Progressive experience in backend engineering, system design, and fintech infrastructure
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((company, companyIndex) => (
            <div key={companyIndex} className="space-y-6">
              {/* Company Header */}
              <div
                className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{
                  transitionDelay: isVisible ? `${companyIndex * 100}ms` : "0ms",
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-1">{company.company}</h3>
                <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
              </div>

              {/* Steps for company */}
              <div className="relative pl-8 md:pl-12">
                {/* Vertical connecting line */}
                <div className="absolute left-3 md:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-cyan-500/30 to-transparent" />

                {company.steps.map((step, stepIndex) => (
                  <div
                    key={stepIndex}
                    className={`mb-8 last:mb-0 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`}
                    style={{
                      transitionDelay: isVisible ? `${companyIndex * 150 + stepIndex * 100 + 200}ms` : "0ms",
                    }}
                  >
                    {/* Step Indicator Circle */}
                    <div className="absolute -left-6 md:-left-8 top-2 flex items-center justify-center">
                      {step.isCurrent ? (
                        <div className="relative">
                          <div className="absolute inset-0 bg-cyan-500/30 rounded-full animate-pulse" />
                          <div className="w-6 h-6 bg-cyan-500 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-5 h-5 bg-gray-700 rounded-full border-2 border-gray-600 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                        </div>
                      )}
                    </div>

                    {/* Step Card */}
                    <div className="bg-gray-900/60 rounded-xl p-5 border border-gray-800 hover:border-cyan-500/50 hover:bg-gray-800/80 transition-all duration-300 group cursor-pointer">
                      {/* Header with badge */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="p-2 bg-cyan-500/10 rounded-lg mt-0.5">
                            <Briefcase size={20} className="text-cyan-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="text-xl font-semibold text-white">{step.role}</h4>
                              {step.isCurrent && (
                                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-500/50">
                                  Current
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-1 text-gray-400 text-sm mt-1">
                              <Calendar size={14} />
                              <span>{step.duration}</span>
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="text-gray-600 group-hover:text-cyan-400 transition-colors" size={20} />
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-4 pl-11">
                        {step.achievements.map((achievement, achieveIndex) => (
                          <li key={achieveIndex} className="text-gray-300 text-sm leading-relaxed flex gap-2">
                            <span className="text-cyan-400 font-bold mt-0.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 pl-11">
                        {step.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1.5 bg-cyan-500/10 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30 hover:border-cyan-500/60 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default Experience
