import { motion } from 'framer-motion'
import { ArrowLongRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const About = () => {
  return (
    <section
      id="about"
className="w-full pt-30 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center space-y-10">

        {/* Heading */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 dark:from-white to-gray-500 dark:to-gray-400 bg-clip-text text-transparent leading-tight">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Intro */}
        <div className="space-y-4">
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Crafting scalable web applications with modern technologies. Transforming complex problems into intuitive, beautiful digital experiences.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">

          {[{
            icon: <ArrowLongRightIcon className="w-5 h-5 text-white" />,
            title: "Fast Delivery",
            desc: "Quality on time",
            color: "from-blue-500 to-blue-600"
          },{
            icon: <CheckCircleIcon className="w-5 h-5 text-white" />,
            title: "Clean Code",
            desc: "Scalable code",
            color: "from-emerald-500 to-teal-600"
          },{
            icon: <CheckCircleIcon className="w-5 h-5 text-white" />,
            title: "Premium Design",
            desc: "Beautiful UI",
            color: "from-purple-500 to-pink-600"
          }].map((item, i) => (
            <motion.div
              key={i}
              className="p-5 rounded-xl border hover:shadow-lg transition-all bg-white dark:bg-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`w-10 h-10 mx-auto mb-3 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                {item.icon}
              </div>
              <h4 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default About