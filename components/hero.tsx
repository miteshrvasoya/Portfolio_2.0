"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const fullText = "Hi, I'm Mitesh Vasoya"
  const typingSpeed = 60

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (!isLoaded) return

    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, typingSpeed)

    return () => clearInterval(interval)
  }, [isLoaded])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c10] via-[#141517] to-[#1a1a1d]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side glow for text */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-radial from-cyan-500/20 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
        {/* Right side glow for profile area */}
        <div className="absolute -top-20 -right-40 w-96 h-96 bg-gradient-radial from-blue-500/15 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
        {/* Bottom accent */}
        <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="space-y-8">
            {/* Location Badge */}
            <div
              className={`inline-block transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                <span className="text-sm font-medium text-cyan-400">📍 Based in Ahmedabad, India</span>
              </div>
            </div>

            {/* Main Heading with Typing */}
            <div
              className={`transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
                {displayText}
                <span className="animate-pulse">|</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p
              className={`text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg transition-all duration-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Senior Backend Engineer specializing in Node.js, PostgreSQL & Fintech Systems. Building scalable
              infrastructure that powers millions of transactions.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                asChild
                size="lg"
                className="bg-[#00adb5] text-white hover:bg-[#0099a6] hover:shadow-lg hover:shadow-cyan-600/30 transition-all duration-300 ease-in-out px-6 py-3 rounded-xl font-medium hover:scale-105"
              >
                <Link href="#contact">
                  Get in Touch <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border border-gray-500 text-gray-200 bg-transparent hover:bg-gray-800 hover:border-gray-400 transition-all duration-300 ease-in-out px-6 py-3 rounded-xl font-medium hover:scale-105"
              >
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div
              className={`flex gap-4 transition-all duration-1200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                href="https://github.com/miteshrvasoya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gray-900/40 hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-400 transition-all duration-200 border border-gray-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
                aria-label="GitHub"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mitesh-vasoya/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gray-900/40 hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-400 transition-all duration-200 border border-gray-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="mailto:mitesh.r.vasoya@gmail.com"
                className="p-3 rounded-xl bg-gray-900/40 hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-400 transition-all duration-200 border border-gray-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
                aria-label="Email"
              >
                <Mail size={24} />
              </Link>
            </div>
          </div>

          <div
            className={`hidden lg:flex items-center justify-center transition-all duration-1200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Floating animated circle with gradient glow */}
            <div className="relative w-full max-w-md aspect-square">
              {/* Outer glow circle */}
              <div className="absolute inset-0 bg-gradient-radial from-cyan-500/30 via-cyan-500/10 to-transparent rounded-full blur-2xl animate-pulse" />

              {/* Middle accent circle */}
              <div className="absolute inset-8 bg-gradient-radial from-blue-500/20 via-cyan-500/10 to-transparent rounded-full blur-xl" />

              {/* Inner floating circle */}
              <div className="absolute inset-16 bg-gradient-to-br from-cyan-500/40 via-blue-500/20 to-transparent rounded-full blur-lg animate-float" />

              {/* Profile placeholder - replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 flex items-center justify-center">
                  <div className="text-6xl">💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1500 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll to explore</span>
          <div className="w-6 h-10 border border-gray-600 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-cyan-500 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
