import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const Education = () => {
  const items = [
    {
      title: "B.Tech Computer Science & Engineering",
      place: "SIMAT College (KTU University)",
      type: "education",
    },
    {
      title: "Software Testing",
      place: "Luminar Technolab, Ernakulam",
      type: "education",
    },
    {
      title: "MERN Stack Development",
      place: "Kerala Business Academy, Trivandrum",
      type: "education",
    },
    {
      title: "Backend Developer",
      place: "Clan Leopro, Ernakulam",
      type: "experience",
    },
  ]

  return (
    <section
      id="education"
      className="w-full min-h-screen flex flex-col justify-center scroll-mt-25 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-5xl mx-auto text-center space-y-12">

        {/* Heading */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 dark:from-white to-gray-500 dark:to-gray-400 bg-clip-text text-transparent">
            Education & Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white dark:bg-gray-900 border shadow-md hover:shadow-xl transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                {item.type === "education" ? (
                  <AcademicCapIcon className="w-6 h-6 text-blue-600" />
                ) : (
                  <BriefcaseIcon className="w-6 h-6 text-green-600" />
                )}
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.place}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Education