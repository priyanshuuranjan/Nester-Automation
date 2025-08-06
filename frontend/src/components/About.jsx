import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  // Split the content into short and full versions
  const shortText = "Nester Automation India Private Limited is powered by a team of highly qualified technocrats and specialist engineers, each bringing extensive experience and expertise to deliver optimal engineering solutions."
  
  const fullText = "Nester Automation India Private Limited is powered by a team of highly qualified technocrats and specialist engineers, each bringing extensive experience and expertise to deliver optimal engineering solutions. Our organization is further strengthened by technically adept project managers and certified engineers, ensuring that every project is managed with precision and professionalism. We pride ourselves on a customer-centric approach. Our team remains consistently motivated to achieve high productivity, even under demanding timelines, and is dedicated to delivering solutions that are both cost-effective and time-efficient. At Nester Automation India Private Limited, we offer solutions that are fully customizable and upgradeable, with comprehensive system integration capabilities — empowering our clients with flexibility and scalability for their evolving needs."

  const AnimatedText = ({ text, delay = 0 }) => {
    const words = text.split(' ')
    
    return (
      <div>
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: delay + (index * 0.02), // Faster animation for better UX
              ease: "easeOut"
            }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </div>
    )
  }

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <AnimatedText text="About Us" />
            </motion.h2>
            
            <motion.div 
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <AnimatedText 
                text={shortText}
                delay={0.3} 
              />
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4">
                      <AnimatedText 
                        text={fullText.replace(shortText, "").trim()}
                        delay={0.1} 
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            
            <motion.button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg mb-4 flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </motion.button>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Industrial Automation"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg opacity-20"></div>
          </div>
        </div>

        {/* Statistics */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + (index * 0.1),
                ease: "easeOut" 
              }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold text-primary mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + (index * 0.1),
                  type: "spring",
                  stiffness: 150
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))} */}
        </motion.div>
      </div>
    </section>
  )
}

export default About
