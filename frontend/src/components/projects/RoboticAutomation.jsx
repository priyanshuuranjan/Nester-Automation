import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const RoboticAutomation = () => {
  // Background images for hero section
  const heroImages = [
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Industrial robot
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Robotic arm
    'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Robot assembly
    'https://images.unsplash.com/photo-1581091870616-3c9ce8aef7e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Automated production
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-slide background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [heroImages.length])

  const roboticServices = [
    {
      title: 'Industrial Robot Integration',
      description: 'Complete robot integration services including 6-axis articulated robots, SCARA robots, and collaborative robots (cobots).',
      features: ['Robot Programming', 'End-of-Arm Tooling', 'Safety Integration', 'Process Optimization'],
      icon: '🤖',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Automated Assembly Systems',
      description: 'Custom automated assembly lines for high-volume production with precision and consistency.',
      features: ['Assembly Line Design', 'Quality Control Integration', 'Flexible Automation', 'Cycle Time Optimization'],
      icon: '🔧',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Material Handling Automation',
      description: 'Automated material handling solutions including AGVs, conveyor systems, and robotic palletizers.',
      features: ['AGV Systems', 'Robotic Palletizing', 'Conveyor Integration', 'Warehouse Automation'],
      icon: '📦',
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Welding Automation',
      description: 'Robotic welding systems for consistent, high-quality welds with improved safety and productivity.',
      features: ['MIG/TIG Welding', 'Seam Tracking', 'Adaptive Control', 'Quality Monitoring'],
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Pick & Place Solutions',
      description: 'High-speed pick and place systems for packaging, sorting, and material handling applications.',
      features: ['Vision Guidance', 'Delta Robots', 'Vacuum Handling', 'Speed Optimization'],
      icon: '🎯',
      image: 'https://images.unsplash.com/photo-1581091870616-3c9ce8aef7e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Collaborative Robotics',
      description: 'Safe human-robot collaboration solutions for flexible manufacturing and assembly operations.',
      features: ['Safety Monitoring', 'Force Limiting', 'Easy Programming', 'Flexible Deployment'],
      icon: '🤝',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  const robotTypes = [
    { 
      name: 'Articulated Robots', 
      icon: '🦾',
      description: '6-axis robots for complex movements',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    { 
      name: 'SCARA Robots', 
      icon: '🔄',
      description: 'High-speed assembly applications',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    { 
      name: 'Delta Robots', 
      icon: '⚡',
      description: 'Ultra-fast pick and place operations',
      image: 'https://images.unsplash.com/photo-1581091870616-3c9ce8aef7e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    { 
      name: 'Collaborative Robots', 
      icon: '🤝',
      description: 'Safe human-robot interaction',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    { 
      name: 'Cartesian Robots', 
      icon: '📏',
      description: 'Linear motion applications',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    { 
      name: 'Cylindrical Robots', 
      icon: '🎯',
      description: 'Rotary and linear movements',
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    { 
      name: 'Mobile Robots (AGV)', 
      icon: '🚗',
      description: 'Autonomous material transport',
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    { 
      name: 'Palletizing Robots', 
      icon: '📦',
      description: 'Automated packaging solutions',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]

  const robotBrands = [
    'ABB IRB Series',
    'KUKA KR Series',
    'Fanuc R-2000i',
    'Yaskawa Motoman',
    'Universal Robots UR',
    'Kawasaki RS Series',
    'Epson C4/G10',
    'Stäubli TX Series',
    'Omron TM Series',
    'Denso VS Series',
    'Mitsubishi RV Series',
    'Nachi MZ Series'
  ]

  const applications = [
    {
      title: 'Automotive Manufacturing',
      description: 'Robotic welding, painting, and assembly for automotive production lines.',
      icon: '🚗',
      features: ['Body Welding', 'Paint Application', 'Engine Assembly', 'Quality Inspection']
    },
    {
      title: 'Electronics Assembly',
      description: 'Precision assembly and testing of electronic components and circuit boards.',
      icon: '💻',
      features: ['PCB Assembly', 'Component Placement', 'Testing & Inspection', 'Packaging']
    },
    {
      title: 'Food & Packaging',
      description: 'Hygienic robotic solutions for food processing and packaging operations.',
      icon: '🍕',
      features: ['Food Handling', 'Packaging Lines', 'Palletizing', 'Quality Control']
    },
    {
      title: 'Pharmaceutical',
      description: 'Clean room robotics for pharmaceutical manufacturing and packaging.',
      icon: '💊',
      features: ['Sterile Handling', 'Precise Dispensing', 'Packaging', 'Batch Tracking']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-blue-900 overflow-hidden">
        {/* Sliding Background Images */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5 }}
            />
          </AnimatePresence>
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        {/* Image indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-yellow-400 scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Robotic <span className="text-yellow-400">Automation</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Revolutionizing manufacturing with advanced robotic solutions, intelligent automation systems, 
            and seamless human-robot collaboration for enhanced productivity and precision.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Robotic Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive robotic automation services designed to transform your manufacturing processes 
              with precision, efficiency, and intelligent automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roboticServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 text-3xl bg-white/90 w-12 h-12 rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Robot Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Robot Types & Configurations
            </h2>
            <p className="text-lg text-gray-600">
              Diverse robotic solutions tailored to specific industrial applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {robotTypes.map((robot, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Background Image */}
                <div className="relative h-40 overflow-hidden">
                  <motion.img
                    src={robot.image}
                    alt={robot.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Icon and Text Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <motion.div 
                      className="text-3xl mb-2 bg-white/90 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {robot.icon}
                    </motion.div>
                    <h3 className="font-semibold text-white text-sm group-hover:text-yellow-300 transition-colors duration-300 mb-1">
                      {robot.name}
                    </h3>
                    <p className="text-xs text-gray-200 group-hover:text-gray-100 transition-colors duration-300">
                      {robot.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-lg text-gray-600">
              Robotic automation solutions across diverse manufacturing sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="text-4xl mb-4 text-center">{app.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                <p className="text-gray-600 mb-4">{app.description}</p>
                <ul className="space-y-2">
                  {app.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Robot Brands Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Robot Brands & Models
            </h2>
            <p className="text-lg text-gray-600">
              Working with world-leading robotic manufacturers and platforms
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {robotBrands.map((brand, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-purple-50 to-blue-100 rounded-lg p-4 text-center border border-purple-200"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: '#e0e7ff',
                  y: -5,
                  boxShadow: '0 10px 25px rgba(139, 92, 246, 0.15)',
                  transition: { duration: 0.3 }
                }}
                animate={{ 
                  y: [0, -2, 0],
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.2,
                    ease: "easeInOut"
                  },
                  opacity: { duration: 0.5, delay: index * 0.05 }
                }}
              >
                <span className="text-purple-800 font-medium">{brand}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/90 to-blue-700/90" />
        
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 border-2 border-yellow-400/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-16 h-16 border-2 border-white/20 rotate-45"
            animate={{ rotate: 405, scale: [1, 1.2, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-400/20 rounded-full"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Manufacturing with Robotics?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let our robotic automation experts design and implement the perfect robotic solution for your production needs.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mx-auto max-w-md">
              <p className="text-white text-lg mb-2">
                Contact us at:
              </p>
              <a 
                href="mailto:nesterautomation@gmail.com" 
                className="text-yellow-300 hover:text-yellow-200 text-xl font-semibold transition-colors duration-300"
              >
                nesterautomation@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default RoboticAutomation
