import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
      setProjects(data)
    } catch (err) {
      console.log('No backend yet:', err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 from-white to-gray-50 transition-all duration-500">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <div className="pt-20 sm:pt-24 md:pt-28 lg:pt-32"></div>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects projects={projects} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

