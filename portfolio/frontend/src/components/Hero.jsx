import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Full Stack Developer'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home"  className="py-24 pt-25 px-4 sm:px-6 lg:px-8 scroll-mt-10 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 dark:from-white to-gray-600 dark:to-gray-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Jithin M</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-600 dark:text-gray-300 leading-tight">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl sm:max-w-2xl">
            Passionate full-stack developer crafting modern web applications with React, Node.js, and MongoDB.
            Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#projects"
              className="group bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              View My Work
              <svg className="w-4 sm:w-5 h-4 sm:h-5 inline ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-500 text-gray-800 dark:text-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center"
            >
              Get In Touch
            </a>
          </div>
          <div className="mt-8 sm:mt-12 flex space-x-4 sm:space-x-6 justify-center md:justify-start pt-4">
            <a href="mailto:your.email@example.com" className="group p-2 sm:p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all">
              <EnvelopeIcon className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
            </a>
            <a href="tel:+1234567890" className="group p-2 sm:p-3 rounded-xl bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/40 transition-all">
              <PhoneIcon className="w-5 sm:w-6 h-5 sm:h-6 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden sm:flex md:flex md:justify-center lg:w-full order-1 md:order-2"
        >
          <div className="relative w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96">
            <div className="w-full h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl sm:rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute inset-8 sm:inset-10 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/30 shadow-2xl">
              <div className="p-6 sm:p-8 md:p-10">
                <div className="space-y-3 sm:space-y-4">
                  <div className="h-2 sm:h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                  <div className="h-2 sm:h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse delay-200"></div>
                  <div className="h-2 sm:h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse delay-400"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

