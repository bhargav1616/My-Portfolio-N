"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Download, Sparkles, Code2, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef } from "react"

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-" />
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1.2, 1, 1.2]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Content */}
      <motion.section 
        style={{ y, opacity }}
        className="relative z-10 min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center space-x-2 text-emerald-400"
              >
                <Sparkles size={20} />
                <span className="text-sm font-medium tracking-wider uppercase">Web Developer</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-6xl lg:text-8xl font-black leading-none"
              >
                <span className="block text-white">BHARGAV</span>
                <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  JADAV
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl text-gray-300 max-w-lg leading-relaxed"
              >
                I craft exceptional digital experiences through innovative web solutions. 
                Specializing in modern frameworks and cutting-edge technologies.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/projects">
                <Button className="group bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black font-semibold px-8 py-4 rounded-none text-lg transition-all duration-300">
                  Explore Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              
              <Button 
                onClick={() => {
                  // Create a link element and trigger download
                  const link = document.createElement('a');
                  link.href = '/resume/BHARGAV_JADAV.pdf';
                  link.download = 'BHARGAV_JADAV.pdf';
                  link.target = '_blank';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                variant="outline" 
                className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black px-8 py-4 rounded-none text-lg font-semibold transition-all duration-300"
              >
                <Download className="mr-2" size={20} />
                Resume
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800"
            >
              <div>
                <div className="text-3xl font-bold text-emerald-400">50+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">3+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Years Exp</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">100%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Geometric Design */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Main geometric shape */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute inset-0 border-2 border-emerald-400/30 transform rotate-45"
            />
            
            <motion.div
              animate={{ 
                rotate: [360, 0],
                scale: [1.1, 1, 1.1]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute inset-8 border-2 border-cyan-400/30 transform -rotate-45"
            />
            
            <motion.div
              animate={{ 
                rotate: [0, 180, 360],
                scale: [1, 0.8, 1]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute inset-16 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 transform rotate-12"
            />

            {/* Floating elements */}
            <motion.div
              animate={{ 
                y: [-20, 20, -20],
                x: [-10, 10, -10]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-12 right-12 w-16 h-16 bg-emerald-500 rounded-full opacity-80"
            />
            
            <motion.div
              animate={{ 
                y: [20, -20, 20],
                x: [10, -10, 10]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute bottom-12 left-12 w-12 h-12 bg-cyan-500 transform rotate-45 opacity-80"
            />

            {/* Tech icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <Code2 size={48} className="text-emerald-400" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-emerald-400 to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  )
}
