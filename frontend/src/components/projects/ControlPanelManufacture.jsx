import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const ControlPanelManufacture = () => {
  // Background images for hero section
  const heroImages = [
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Control panel
    'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Electrical panel
    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Manufacturing
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Industrial
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [heroImages.length])
  const panelTypes = [
    {
      title: 'Motor Control Centers (MCC)',
      description: 'Complete motor control solutions with variable frequency drives, soft starters, and protection systems.',
      features: ['Variable Speed Drives', 'Motor Protection', 'Power Monitoring', 'Remote Control'],
      icon: '⚙️',
      applications: ['Industrial Motors', 'Pump Control', 'Fan Control', 'Conveyor Systems']
    },
    {
      title: 'PLC Control Panels',
      description: 'Custom-designed PLC panels with integrated HMI, I/O modules, and communication systems.',
      features: ['PLC Integration', 'HMI Interface', 'I/O Expansion', 'Communication Modules'],
      icon: '🖥️',
      applications: ['Process Control', 'Manufacturing Lines', 'Building Automation', 'Water Treatment']
    },
    {
      title: 'Power Distribution Panels',
      description: 'Safe and efficient power distribution solutions with monitoring and protection systems.',
      features: ['Load Distribution', 'Circuit Protection', 'Power Monitoring', 'Energy Management'],
      icon: '⚡',
      applications: ['Industrial Plants', 'Commercial Buildings', 'Data Centers', 'Manufacturing Facilities']
    },
    {
      title: 'Instrumentation Panels',
      description: 'Precision instrumentation and measurement panels for process monitoring and control.',
      features: ['Signal Conditioning', 'Data Acquisition', 'Alarm Systems', 'Process Indication'],
      icon: '📊',
      applications: ['Chemical Plants', 'Oil & Gas', 'Water Treatment', 'Food Processing']
    },
    {
      title: 'Safety & Fire Panels',
      description: 'Critical safety systems including fire detection, gas monitoring, and emergency shutdown systems.',
      features: ['Fire Detection', 'Gas Monitoring', 'Emergency Shutdown', 'Safety Interlocks'],
      icon: '🚨',
      applications: ['Hazardous Areas', 'Chemical Plants', 'Oil Refineries', 'Manufacturing Plants']
    },
    {
      title: 'HVAC Control Panels',
      description: 'Building automation panels for heating, ventilation, and air conditioning systems.',
      features: ['Climate Control', 'Energy Optimization', 'Scheduling', 'Remote Monitoring'],
      icon: '🌡️',
      applications: ['Commercial Buildings', 'Hospitals', 'Hotels', 'Industrial Facilities']
    }
  ]

  const specifications = [
    {
      category: 'Electrical Standards',
      items: ['IEC 61439', 'IS 8623', 'UL 508A', 'NEMA Standards']
    },
    {
      category: 'Protection Ratings',
      items: ['IP20 to IP65', 'NEMA 1 to NEMA 4X', 'Explosion Proof', 'Weatherproof']
    },
    {
      category: 'Voltage Ratings',
      items: ['110V to 690V AC', '24V to 220V DC', 'Single & Three Phase', 'Custom Voltages']
    },
    {
      category: 'Current Ratings',
      items: ['Up to 6300A', 'High Breaking Capacity', 'Selective Coordination', 'Arc Flash Protection']
    }
  ]

  const features = [
    {
      title: 'Custom Design & Engineering',
      description: 'Tailored solutions designed to meet specific application requirements and industry standards.',
      icon: '📐'
    },
    {
      title: 'Quality Manufacturing',
      description: 'State-of-the-art manufacturing facility with modern equipment and quality control systems.',
      icon: '🏭'
    },
    {
      title: 'Testing & Validation',
      description: 'Comprehensive testing including electrical, mechanical, and environmental validation.',
      icon: '🔬'
    },
    {
      title: 'Installation & Commissioning',
      description: 'Professional installation services with complete commissioning and startup support.',
      icon: '🔧'
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance services and technical support to ensure optimal performance.',
      icon: '🛠️'
    },
    {
      title: 'Compliance & Certification',
      description: 'All panels comply with international standards and come with necessary certifications.',
      icon: '✅'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-900 via-green-800 to-green-900 overflow-hidden">
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
            Control Panel <span className="text-yellow-400">Manufacture</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Expert manufacturing of custom control panels, motor control centers, and electrical distribution 
            systems for industrial and commercial applications.
          </motion.p>
        </div>
      </section>

      {/* Panel Types Section */}
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
              Control Panel Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of control panels designed and manufactured to meet 
              diverse industrial automation and power distribution requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {panelTypes.map((panel, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{panel.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{panel.title}</h3>
                  <p className="text-gray-600 mb-4">{panel.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {panel.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {panel.applications.map((app, appIndex) => (
                        <span 
                          key={appIndex}
                          className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
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
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-600">
              Our control panels meet international standards and specifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{spec.category}</h3>
                <ul className="space-y-2">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose Our Control Panels?
            </h2>
            <p className="text-lg text-gray-600">
              Excellence in design, manufacturing, and service delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Custom Control Panel Solutions?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Our engineering team is ready to design and manufacture the perfect control panel for your application.
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

export default ControlPanelManufacture
