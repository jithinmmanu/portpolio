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
      setProjects(data)
    } catch (err) {
      console.log('No backend yet:', err)
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

