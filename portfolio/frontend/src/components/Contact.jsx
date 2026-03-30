import { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        setStatus('Message sent successfully! 🚀')
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (err) {
      setStatus('Failed to send message. Please try again.')
    }
    setLoading(false)
  }

  return (
<section
  id="contact"
className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-800"
>
  <div className="max-w-5xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 dark:from-white via-gray-700 dark:via-gray-300 to-gray-500 dark:to-gray-400 bg-clip-text text-transparent">
        Get In Touch
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
    </div>

    {/* Layout */}
    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Let’s talk about your project
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Feel free to reach out. I’m always open to discussing new ideas or opportunities.
          </p>
        </div>

        <div className="space-y-4">

          {[{
            icon: <EnvelopeIcon className="w-6 h-6 text-blue-600" />,
            title: "Email",
            value: "jithin@example.com",
            link: "mailto:jithin@example.com"
          },{
            icon: <PhoneIcon className="w-6 h-6 text-green-600" />,
            title: "Phone",
            value: "+1 (234) 567-890",
            link: "tel:+1234567890"
          },{
            icon: <MapPinIcon className="w-6 h-6 text-purple-600" />,
            title: "Location",
            value: "Your City, Country"
          }].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 border border-white/30 dark:border-gray-700/30"
            >
              <div className="flex-shrink-0">{item.icon}</div>

              <div className="min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.title}
                </p>

                {item.link ? (
                  <a
                    href={item.link}
                    className="text-sm font-medium text-gray-900 dark:text-white break-words"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          ))}

        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/50 dark:border-gray-700/50 shadow-xl"
      >
        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-gray-900/50 outline-none text-sm"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-gray-900/50 outline-none text-sm"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-gray-900/50 outline-none resize-none text-sm"
          />

          {status && (
            <div className="p-3 rounded-lg text-sm text-center font-medium">
              {status}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 text-sm"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

        </form>
      </motion.div>

    </div>
  </div>
</section>
  )
}

export default Contact