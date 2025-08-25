"use client"

import { useState } from 'react'
import { Download, FileText, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface ResumeDownloadProps {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  showPreview?: boolean
}

export default function ResumeDownload({ 
  variant = 'outline', 
  size = 'md',
  showPreview = false 
}: ResumeDownloadProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    
    try {
      // Create a link element and trigger download
      const link = document.createElement('a')
      link.href = '/resume/Bhargav_Jadav_Resume.pdf'
      link.download = 'Bhargav_Jadav_Resume.pdf'
      link.target = '_blank'
      
      // Append to body, click, and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Optional: Track download event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'download', {
          event_category: 'Resume',
          event_label: 'PDF Download'
        })
      }
    } catch (error) {
      console.error('Download failed:', error)
    } finally {
      setTimeout(() => setIsDownloading(false), 1000)
    }
  }

  const handlePreview = () => {
    window.open('/resume/Bhargav_Jadav_Resume.pdf', '_blank')
  }

  const buttonSizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  if (showPreview) {
    return (
      <div className="flex flex-col sm:flex-row gap-3">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            onClick={handleDownload}
            disabled={isDownloading}
            variant={variant}
            className={`${buttonSizes[size]} font-semibold transition-all duration-300 ${
              variant === 'outline' 
                ? 'border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black' 
                : ''
            }`}
          >
            {isDownloading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
              />
            ) : (
              <Download className="mr-2" size={size === 'sm' ? 16 : size === 'lg' ? 20 : 18} />
            )}
            {isDownloading ? 'Downloading...' : 'Download Resume'}
          </Button>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            onClick={handlePreview}
            variant="ghost"
            className={`${buttonSizes[size]} text-gray-400 hover:text-white transition-all duration-300`}
          >
            <ExternalLink className="mr-2" size={size === 'sm' ? 16 : size === 'lg' ? 20 : 18} />
            Preview
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Button
        onClick={handleDownload}
        disabled={isDownloading}
        variant={variant}
        className={`${buttonSizes[size]} font-semibold transition-all duration-300 ${
          variant === 'outline' 
            ? 'border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black' 
            : ''
        }`}
      >
        {isDownloading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
          />
        ) : (
          <Download className="mr-2" size={size === 'sm' ? 16 : size === 'lg' ? 20 : 18} />
        )}
        {isDownloading ? 'Downloading...' : 'Resume'}
      </Button>
    </motion.div>
  )
}
