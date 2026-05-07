import { useEffect, useState } from 'react'

import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/education'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('darkMode') === 'true'
    setDarkMode(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const toggleTheme = () => setDarkMode(!darkMode)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects')
      const data = await res.json()

      // Frontend-only extra projects (Play Store links)
      const playStoreProjects = [
        {
          title: 'Buyit',
          description: 'A mobile app to simplify purchasing and stay updated with your buys.',
          url: 'https://play.google.com/store/apps/details?id=com.buyitltd.buyit',
          category: 'Mobile App',
          technologies: ['Mobile App']
        },
        {
          title: 'Reachout',
          description: 'A mobile app designed for smooth corporate outreach and communication.',
          url: 'https://play.google.com/store/apps/details?id=com.reachoutAlpha.corporatemobile',
          category: 'Mobile App',
          technologies: ['Mobile App']
        },
        {
          title: 'Rigging calculator',
          description: 'A mobile app to help you calculate rigging requirements quickly and accurately.',
          url: 'https://play.google.com/store/apps/details?id=com.org.leoRiggingCalculator',
          category: 'Mobile App',
          technologies: ['Mobile App']
        }
      ]

      setProjects([...(Array.isArray(data) ? data : []), ...playStoreProjects])
    } catch (err) {
      console.log('No backend yet:', err)

      // Still render frontend-only projects even if backend is down
      setProjects([
        {
          title: 'Buyit',
          description: 'A mobile app to simplify purchasing and stay updated with your buys.',
          image:
            'https://images.unsplash.com/photo-1556742049-0cfed7f8a5f6?w=500&fit=crop',
          url: 'https://play.google.com/store/apps/details?id=com.buyitltd.buyit',
          category: 'Mobile App',
          technologies: ['Mobile App']
        },
        {
          title: 'Reachout',
          description: 'A mobile app designed for smooth corporate outreach and communication.',

          url: 'https://play.google.com/store/apps/details?id=com.reachoutAlpha.corporatemobile',
          category: 'Mobile App',
          technologies: ['Mobile App']
        },
        {
          title: 'Rigging calculator',
          description: 'A mobile app to help you calculate rigging requirements quickly and accurately.',
          image:
            'https://images.unsplash.com/photo-1604881991238-4b4c4b8a7e0c?w=500&fit=crop',
          url: 'https://play.google.com/store/apps/details?id=com.org.leoRiggingCalculator',
          category: 'Mobile App',
          technologies: ['Mobile App']
        }
      ])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 from-white to-gray-50 transition-all duration-500">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
     
      <main>
        <Hero />
        <About />
        <Education/>
        <Skills />
        <Projects projects={projects} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

