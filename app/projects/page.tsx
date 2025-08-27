"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "ReD-Z",
    category: "Productivity",
    description: "Worldwide Sales, Sales %, and Total Revenue charts with data tables for clear business performance insights.",
    image: "/project_img/ReD-zz.PNG",
    technologies: ["React", "CSS" , "JavaScript", ],
    liveUrl: "https://red-z.netlify.app/",
    // githubUrl: "https://github.com/bhargavjadav/neurocommerce",
    featured: false
  },
  {
    id: 2,
    title: "Nike Shoes",
    category: "Productivity",
    description: "A sleek web app showcasing the latest Nike shoe collections with detailed views and user reviews.",
    image: "/project_img/react_one.PNG",
    technologies: ["React", "CSS" , "JavaScript", ],
    liveUrl: "https://nike-shoess.netlify.app/",
    // githubUrl: "https://github.com/bhargavjadav/taskflow",
    featured: false
  },
  {
    id: 3,
    title: "Flipkart Clone",
    category: "E-Commerce",
    description: "Flipkart clone with product listing, cart, checkout, user authentication, and responsive design for ecommerce practice.",
    image: "/project_img/flipkart.jpeg",
    technologies: ["React", "CSS" , "JavaScript", ],
    liveUrl: "https://flipkarrtt-clone.netlify.app",
    // githubUrl: "https://github.com/bhargavjadav/cryptotracker",
    featured: false
  },
  {
    id: 4,
    title: "Coffee Shop",
    category: "Shop",
    description: "All Types Coffee available and home dilivery.Best qualitys Coffee. Your choise Coffee order",
    image: "/project_img/coffee.jpeg",
    technologies: ["React", "CSS" , "JavaScript", ],
    liveUrl: "https://coffee-baar.netlify.app",
    // githubUrl: "https://github.com/bhargavjadav/mindspace",
    featured: false
  },
  {
    id: 5,
    title: "Swiggy Clone",
    category: "Food Delivery",
    description: "A modern food delivery web app inspired by Swiggy, cart system, restaurant listings, and responsive UI for smooth ordering.",
    image: "/project_img/swiggy.PNG",
    technologies: ["React", "CSS" , "JavaScript", ],
    liveUrl: "https://swiggyy-clone.netlify.app",
    // githubUrl: "https://github.com/bhargavjadav/codelab",
    featured: false
  },
  {
    id: 6,
    title: "Weather App",
    category: "Environment",
    description: "Carbon footprint tracking app with sustainability recommendations and community challenges.",
    image: "/project_img/WeatherApp.jpeg",
    technologies: ["React", "CSS" , "JavaScript", ],
    liveUrl: "https://example.com",
    // githubUrl: "https://github.com/bhargavjadav/ecotrack",
    featured: false
  },
  {
    id: 7,
    title: "Luxury Cars Showroom",
    category: "Dealership",
    description: "Explore premium luxury cars with elegance, power, and unmatched driving experience.",
    image: "/project_img/luxury_car.PNG",
    technologies: ["HTML", "CSS" , "JavaScript", ],
    liveUrl: "https://luxury-cars-showroomm.netlify.app",
    // githubUrl: "https://github.com/bhargavjadav16",
    featured: false
  }
]

function ProjectCard({ project, index }: { project: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]))
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]))

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`${project.featured ? 'lg:col-span-2' : ''}`}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        className="group relative h-full"
      >
        <Card className="bg-gray-900/50 border-gray-800 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden h-full backdrop-blur-sm">
          <div className="relative overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${project.featured ? 'h-64' : 'h-48'
                }`}
            />

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-start p-6"
            >
              <div className="flex space-x-3">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-emerald-500 text-black rounded-full hover:bg-emerald-400 transition-colors"
                >
                  <ExternalLink size={20} />
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Github size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                {project.category}
              </Badge>
            </div>
          </div>

          <CardContent className="p-6 flex-1 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <ArrowUpRight
                size={20}
                className="text-gray-400 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              />
            </div>

            <p className="text-gray-300 mb-4 flex-1 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-gray-800 text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export default function ProjectsPage() {
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
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block p-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full mb-6"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" />
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-black mb-6">
              <span className="block text-gray-400">FEATURED</span>
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                PROJECTS
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A curated selection of my most impactful work, showcasing innovation,
              technical excellence, and creative problem-solving.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-20"
          >
            <p className="text-gray-300 mb-6">
              Interested in working together? Let's create something amazing.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold rounded-none hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300"
            >
              Start a Project
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
