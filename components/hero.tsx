"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Terminal, Database, Server, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Gradients (Aurora Effect) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-cyan-900/20 blur-[100px] animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-900/20 blur-[100px] animate-pulse delay-1000" />
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[100px] animate-pulse delay-2000" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-10">
            
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-gray-300 tracking-wide">Available for new projects</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1
                className={`text-6xl md:text-8xl font-bold tracking-tighter text-white transition-all duration-700 delay-100 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Mitesh <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                  Vasoya
                </span>
              </h1>
              <p
                className={`text-xl md:text-2xl text-gray-400 max-w-lg leading-relaxed transition-all duration-700 delay-200 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Senior Backend Engineer crafting scalable fintech infrastructure and resilient systems.
              </p>
            </div>

            {/* Tech Stack Indicators */}
            <div 
              className={`flex flex-wrap gap-3 transition-all duration-700 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
               {[
                 { icon: Terminal, label: "Node.js" },
                 { icon: Database, label: "PostgreSQL" },
                 { icon: Server, label: "AWS" },
                 { icon: Cpu, label: "Microservices" }
               ].map((tech, i) => (
                 <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-lg text-sm text-gray-300">
                   <tech.icon size={16} className="text-cyan-400"/>
                   {tech.label}
                 </div>
               ))}
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-5 pt-2 transition-all duration-700 delay-400 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base bg-white text-black hover:bg-gray-200 rounded-full font-semibold transition-transform hover:scale-105"
              >
                <Link href="#contact">
                  Let's Talk <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/10 rounded-full font-medium backdrop-blur-sm transition-transform hover:scale-105"
              >
                <Link href="#projects">View Work</Link>
              </Button>
            </div>

            {/* Socials */}
            <div
              className={`flex items-center gap-6 pt-4 transition-all duration-700 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link href="https://github.com/miteshrvasoya" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </Link>
              <Link href="https://www.linkedin.com/in/mitesh-vasoya/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </Link>
              <Link href="mailto:mitesh.r.vasoya@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div
            className={`relative hidden lg:block transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
             {/* Abstract Glass Card Visual */}
            <div className="relative w-full aspect-square max-w-lg mx-auto perspective-1000">
              {/* Background Glow */}
               <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl transform rotate-6 animate-pulse" />
               
               {/* Main Card */}
               <div className="relative h-full w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl transform transition-transform hover:rotate-1 hover:scale-[1.02] duration-500">
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  
                  {/* Pseudo Code Block */}
                  <div className="mt-8 space-y-3 font-mono text-sm">
                    <div className="flex gap-2 text-pink-400">
                      <span>const</span>
                      <span className="text-blue-400">engineer</span>
                      <span className="text-white">=</span>
                      <span className="text-yellow-400">{"{"}</span>
                    </div>
                    <div className="pl-4 space-y-1">
                      <div className="text-gray-300">
                        name: <span className="text-green-400">"Mitesh Vasoya"</span>,
                      </div>
                      <div className="text-gray-300">
                        role: <span className="text-green-400">"Backend Architect"</span>,
                      </div>
                      <div className="text-gray-300">
                        skills: <span className="text-yellow-400">["Node", "SQL", "Cloud"]</span>,
                      </div>
                      <div className="text-gray-300">
                        passion: <span className="text-green-400">"Building Scalable Systems"</span>
                      </div>
                    </div>
                    <div className="text-yellow-400">{"}"}</div>
                    
                    <div className="pt-4 flex gap-2 text-pink-400">
                      <span>engineer</span>
                      <span className="text-white">.</span>
                      <span className="text-blue-400">buildFuture</span>
                      <span className="text-yellow-400">()</span>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                   <div className="absolute bottom-8 right-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 opacity-20 blur-xl animate-bounce" />
                   </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
