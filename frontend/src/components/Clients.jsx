import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Clients = () => {
  const navigate = useNavigate()
  
  const clientLogos = [
    { name: 'Maruti Suzuki', logo: './images/Company1.jpg' },
    { name: 'BARD', logo: './Client/BARD.png' },
    { name: 'Bellasonica', logo: './Client/Bellasonica.png' },
    { name: 'COMAU', logo: './Client/COMAU.png' },
    { name: 'Faith Automation', logo: './Client/Faith Automation.png' },
    { name: 'Hirotec', logo: './Client/Hirotac.png' },
    { name: 'Hitachi', logo: './Client/Hitachi.png' },
    { name: 'Komatsu', logo: './Client/Komatsu.png' },
    { name: 'Losung', logo: './Client/Losung.png' },
    { name: 'NKC', logo: './Client/NKC.png' },
    { name: 'YASKAWA', logo: './Client/YASKAWA.png' },
  ]

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Trusted Clients</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We are proud to work with industry leaders and global giants who trust us 
            to deliver superior industrial automation and manufacturing solutions.
          </p>
        </motion.div>

        {/* Sliding Client Logos */}
        <div className="relative overflow-hidden rounded-lg py-8">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-10"></div>
          
          <motion.div 
            className="flex items-center space-x-12"
            animate={{ 
              x: [0, -100 * clientLogos.length] 
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* First set of logos */}
            {clientLogos.map((client, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 bg-white  p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                <img 
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-24 object-contain hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.target.src = './images/Company1.jpg';
                  }}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clientLogos.map((client, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                <img 
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.target.src = './images/Company1.jpg';
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Join Our Team Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Join Our Team"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
            />
            <h3 className="text-3xl font-bold text-white mb-4">Join Our Team</h3>
            <p className="text-white/90 text-lg mb-8">
              Join our team of dedicated experts who are driven to Nester Automation's mission.
              We foster a collaborative environment where you can learn from the best and
              contribute your unique talents.
            </p>
            <button 
              onClick={() => navigate('/career')}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              Explore Careers
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
