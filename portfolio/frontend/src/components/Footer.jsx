import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black py-12 px-4">
      
      <div className="max-w-7xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}


          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10"

          
        >
          
          {/* LEFT */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Jithin M
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
              Full Stack Developer creating modern, scalable, and user-friendly digital experiences.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="group p-2.5 bg-white/20 dark:bg-gray-800/50 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition"
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600" />
              </a>

              <a
                href="#"
                className="group p-2.5 bg-white/20 dark:bg-gray-800/50 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition"
              >
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Services
            </h4>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
              <li>API Development</li>
              <li>Consulting</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Newsletter
            </h4>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Get updates on projects and tech.
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="flex-1 px-3 py-2.5 bg-white/60 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        </motion.div>

        {/* BOTTOM */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
            © 2024 Jithin M. Built with MERN Stack.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer