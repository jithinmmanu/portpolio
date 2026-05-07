import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Projects = ({ projects = [] }) => {
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Web App', 'Mobile App', 'Dashboard', 'E-Commerce']

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter(p => p.category === filter)

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center scroll-mt-25 w-full py-16 sm:py-20 lg:py-24 pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mt-20 mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 dark:from-white via-gray-700 dark:via-gray-300 to-gray-500 dark:to-gray-400 bg-clip-text text-transparent">
            My Projects
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A collection of my recent work showcasing modern web technologies,
            clean architecture, and real-world problem solving.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-medium transition ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project._id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group flex flex-col bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl transition-all duration-300 p-6"
              >

                {/* Content */}
                <div className="flex flex-col flex-1">

                  {/* App Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies?.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-lg flex items-center gap-2 transition"
                      >
                        <EyeIcon className="w-4 h-4" />
                        Live
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-lg flex items-center gap-2 transition"
                      >
                        <CodeBracketIcon className="w-4 h-4" />
                        Code
                      </a>
                    )}

                  </div>

                </div>

                
              </motion.div>
            ))
          ) : (


            <div className="col-span-full text-center py-16">
              <p className="text-gray-500 dark:text-gray-400">
                No projects found in this category.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default Projects