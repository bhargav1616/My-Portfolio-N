"use client"

import { motion } from "framer-motion"
import { Brain, Heart, Zap, Target, Award, Coffee } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
// import ResumeDownload from "@/public/resume/BHARGAV_JADAV.pdf"

const skills = [
  { name: "Frontend", level: 95, color: "emerald" },
  { name: "Backend", level: 60, color: "cyan" },
  { name: "Database", level: 85, color: "blue" },
  { name: "Mobile", level: 82, color: "pink" },
  { name: "UI/UX", level: 90, color: "orange" }
]

const values = [
  { icon: Brain, title: "Innovation", description: "Always exploring new technologies and creative solutions" },
  { icon: Heart, title: "Passion", description: "Deeply committed to crafting exceptional user experiences" },
  { icon: Zap, title: "Performance", description: "Obsessed with speed, efficiency, and optimal solutions" },
  { icon: Target, title: "Precision", description: "Attention to detail in every line of code and design" }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-black to-cyan-900/10" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block p-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full mb-6"
            >
              <Coffee size={32} className="text-emerald-400" />
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-black mb-6">
              <span className="block text-gray-400">ABOUT</span>
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                BHARGAV
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A passionate developer who transforms ideas into digital reality through code, creativity, and innovation.
            </p>

            {/* Resume Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              {/* <ResumeDownload showPreview={true} size="lg" /> */}
            </motion.div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-emerald-400">About MySelf</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    My journey into web development began with a simple curiosity about how websites work. 
                    That curiosity quickly evolved into a passion for creating digital experiences that not 
                    only look beautiful but also solve real-world problems.
                  </p>
                  <p>
                    Over the past 3+ years, I've had the privilege of working on diverse projects, from 
                    e-commerce platforms to complex web applications. Each project has taught me something 
                    new and reinforced my belief that great code is not just functional—it's elegant.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring the latest tech trends, contributing to 
                    open-source projects, or sharing knowledge with the developer community. I believe in 
                    continuous learning and staying ahead of the curve.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-cyan-400">Core Values</h3>
                <div className="grid grid-cols-2 gap-4">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="p-4 bg-gray-900/50 border border-gray-800 hover:border-emerald-500/50 transition-colors"
                    >
                      <value.icon size={24} className="text-emerald-400 mb-2" />
                      <h4 className="font-semibold text-white mb-1">{value.title}</h4>
                      <p className="text-sm text-gray-400">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              {/* Skills */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-cyan-400">Technical Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-emerald-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 1 + index * 0.1 }}
                          className={`h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Achievement Cards */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-emerald-400">Achievements</h3>
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="p-6 bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border border-emerald-500/30"
                  >
                    <Award size={32} className="text-emerald-400 mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">5+ Projects Delivered</h4>
                    <p className="text-gray-300">Successfully completed projects across various industries</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className="p-6 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30"
                  >
                    <Zap size={32} className="text-cyan-400 mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">Performance Optimization</h4>
                    <p className="text-gray-300">Improved application performance by up to 300%</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
