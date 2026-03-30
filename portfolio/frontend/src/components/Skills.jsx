import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CodeBracketIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const Skills = () => {
  const skills = [
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'Node.js', level: 90, category: 'Backend' },
    { name: 'MongoDB', level: 85, category: 'Database' },
    { name: 'Tailwind', level: 95, category: 'Styling' },
    { name: 'JavaScript', level: 98, category: 'Core' },
    { name: 'Express.js', level: 88, category: 'Backend' },
    { name: 'Next.js', level: 80, category: 'Framework' },
    { name: 'TypeScript', level: 75, category: 'Core' }
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
  id="skills"
  ref={ref}
className="w-full pt-30 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
>
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-12 items-start justify-center">
        
        {/* LEFT SIDE - SKILLS */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-6"
        >
          <div className="text-center lg:text-left mb-8 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 dark:from-white via-gray-700 dark:via-gray-300 to-gray-500 dark:to-gray-400 bg-clip-text text-transparent mb-4 leading-tight">
              Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto lg:mx-0 rounded-full"></div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center justify-center lg:justify-start gap-3 mb-8">
            <CodeBracketIcon className="w-8 h-8 text-blue-600" />
            Technical Skills
          </h3>

          <div className="space-y-4">
            {skills.slice(0, 6).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="font-semibold text-gray-600 dark:text-gray-400 text-sm">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-2 rounded-full shadow"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* DIVIDER */}
        <div className="hidden lg:block w-px bg-gray-300 dark:bg-gray-700"></div>

        {/* RIGHT SIDE - TOOLS */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-3 mb-8 col-span-full">
            <ChartBarIcon className="w-8 h-8 text-green-600" />
            Tools I Use
          </h3>

          {[
            'VS Code', 'Git', 'Docker', 'Figma',
            'Postman', 'Vercel', 'Netlify', 'MongoDB',
            'Firebase', 'AWS', 'Vite', 'NPM'
          ].map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-4 rounded-xl border border-white/40 dark:border-gray-700/40 shadow-lg hover:shadow-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer text-center hover:shadow-purple-500/20 w-full max-w-[120px]"
            >
              <div className="text-lg mb-1">{getIcon(tool)}</div>
              <h4 className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {tool}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>



      
    </section>
  )
}





const getIcon = (tool) => {
  const icons = {
    'VS Code': '⚡',
    Git: '🌐',
    Docker: '🐳',
    Figma: '🎨',
    Postman: '📮',
    Vercel: '🚀',
    Netlify: '☁️',
    MongoDB: '🗄️',
    Firebase: '🔥',
    AWS: '☁️',
    Vite: '⚡',
    NPM: '📦'
  }
  return icons[tool] || '🔧'
}

export default Skills