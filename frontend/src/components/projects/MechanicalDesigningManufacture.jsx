import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const MechanicalDesigningManufacture = () => {
  // Background images for hero section
  const heroImages = [
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // CAD design
    'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Manufacturing
    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Precision tools
    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Mechanical parts
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
  const designServices = [
    {
      title: '3D CAD Design & Modeling',
      description: 'Advanced 3D design and modeling services using industry-leading software for precision engineering.',
      features: ['SolidWorks Design', 'AutoCAD Drafting', 'Parametric Modeling', 'Assembly Design'],
      icon: '📐',
      software: ['SolidWorks', 'AutoCAD', 'Inventor', 'CATIA']
    },
    {
      title: 'Structural Engineering',
      description: 'Comprehensive structural analysis and design for industrial structures, platforms, and frameworks.',
      features: ['Load Analysis', 'Stress Calculation', 'Finite Element Analysis', 'Safety Factor Design'],
      icon: '🏗️',
      applications: ['Industrial Platforms', 'Support Structures', 'Machine Frames', 'Building Frameworks']
    },
    {
      title: 'Machine Design',
      description: 'Custom machine design services from concept to detailed manufacturing drawings.',
      features: ['Concept Development', 'Mechanism Design', 'Component Selection', 'Performance Optimization'],
      icon: '⚙️',
      types: ['Special Purpose Machines', 'Automation Equipment', 'Processing Machines', 'Material Handling']
    },
    {
      title: 'Piping & Layout Design',
      description: 'Industrial piping design and plant layout services for optimal flow and accessibility.',
      features: ['Piping Layout', 'Isometric Drawings', 'P&ID Development', 'Equipment Placement'],
      icon: '🔧',
      standards: ['ASME B31.3', 'API Standards', 'ISO Piping', 'Local Codes']
    }
  ]

  const manufacturingCapabilities = [
    {
      title: 'Precision Machining',
      description: 'High-precision machining services with advanced CNC equipment for complex components.',
      equipment: ['CNC Milling Centers', 'CNC Turning Centers', 'Multi-axis Machining', 'Wire EDM'],
      capabilities: ['±0.001" Tolerance', 'Complex Geometries', 'Prototype to Production', 'Various Materials'],
      icon: '🔩'
    },
    {
      title: 'Sheet Metal Fabrication',
      description: 'Complete sheet metal fabrication services from cutting to finishing and assembly.',
      processes: ['Laser Cutting', 'Plasma Cutting', 'Press Brake Forming', 'Welding & Assembly'],
      materials: ['Stainless Steel', 'Carbon Steel', 'Aluminum', 'Galvanized Steel'],
      icon: '📏'
    },
    {
      title: 'Welding & Assembly',
      description: 'Professional welding and assembly services with certified welders and quality control.',
      techniques: ['MIG/TIG Welding', 'Arc Welding', 'Spot Welding', 'Robotic Welding'],
      certifications: ['AWS Certified', 'ASME Qualified', 'ISO 3834', 'EN 1090'],
      icon: '🔥'
    },
    {
      title: 'Surface Treatment',
      description: 'Complete surface treatment solutions for corrosion protection and aesthetic finish.',
      treatments: ['Powder Coating', 'Galvanizing', 'Anodizing', 'Painting'],
      colors: ['Standard RAL Colors', 'Custom Colors', 'Textured Finishes', 'Special Coatings'],
      icon: '🎨'
    }
  ]

  const industries = [
    { name: 'Oil & Gas', icon: '⛽', applications: ['Offshore Platforms', 'Refineries', 'Pipelines', 'Storage Tanks'] },
    { name: 'Power Generation', icon: '⚡', applications: ['Power Plants', 'Substations', 'Renewable Energy', 'Transmission'] },
    { name: 'Chemical Processing', icon: '🧪', applications: ['Process Equipment', 'Reactors', 'Heat Exchangers', 'Distillation'] },
    { name: 'Manufacturing', icon: '🏭', applications: ['Production Lines', 'Material Handling', 'Quality Control', 'Packaging'] },
    { name: 'Infrastructure', icon: '🌉', applications: ['Bridges', 'Buildings', 'Transportation', 'Utilities'] },
    { name: 'Mining', icon: '⛏️', applications: ['Conveyor Systems', 'Processing Equipment', 'Storage Solutions', 'Safety Systems'] }
  ]

  const qualityStandards = [
    'ISO 9001:2015',
    'ASME Standards',
    'API Specifications',
    'AWS Welding Codes',
    'AISC Steel Standards',
    'OSHA Safety Standards',
    'CE Marking',
    'Local Building Codes'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 overflow-hidden">
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
            Mechanical Designing <br/>& <span className="text-yellow-400">Manufacture</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Complete mechanical engineering solutions from conceptual design to precision manufacturing, 
            delivering innovative solutions for diverse industrial applications.
          </motion.p>
        </div>
      </section>

      {/* Design Services Section */}
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
              Design Engineering Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive mechanical design services leveraging advanced CAD tools and engineering expertise 
              to bring your concepts to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Capabilities:</h4>
                      <ul className="grid grid-cols-2 gap-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {service.software && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Software:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.software.map((software, softwareIndex) => (
                            <span 
                              key={softwareIndex}
                              className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs"
                            >
                              {software}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {service.applications && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.applications.map((app, appIndex) => (
                            <span 
                              key={appIndex}
                              className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
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
              Manufacturing Capabilities
            </h2>
            <p className="text-lg text-gray-600">
              State-of-the-art manufacturing facility with advanced equipment and skilled craftsmen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {manufacturingCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{capability.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                    <p className="text-gray-600 mb-4">{capability.description}</p>
                    
                    {capability.equipment && (
                      <div className="mb-3">
                        <h4 className="font-semibold text-gray-900 mb-2">Equipment:</h4>
                        <ul className="grid grid-cols-1 gap-1">
                          {capability.equipment.map((equip, equipIndex) => (
                            <li key={equipIndex} className="flex items-center text-sm text-gray-700">
                              <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                              {equip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {capability.processes && (
                      <div className="mb-3">
                        <h4 className="font-semibold text-gray-900 mb-2">Processes:</h4>
                        <div className="flex flex-wrap gap-2">
                          {capability.processes.map((process, processIndex) => (
                            <span 
                              key={processIndex}
                              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                            >
                              {process}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {capability.capabilities && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Capabilities:</h4>
                        <div className="flex flex-wrap gap-2">
                          {capability.capabilities.map((cap, capIndex) => (
                            <span 
                              key={capIndex}
                              className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
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
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Delivering mechanical solutions across diverse industrial sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                  <ul className="space-y-1">
                    {industry.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
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
              Quality Standards & Certifications
            </h2>
            <p className="text-lg text-gray-600">
              Committed to delivering excellence through adherence to international standards
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {qualityStandards.map((standard, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-md"
                whileHover={{ scale: 1.05, backgroundColor: '#f3f4f6' }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-purple-800 font-semibold">{standard}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Bring Your Mechanical Design to Life?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              From concept to completion, our team delivers precision engineering and manufacturing excellence.
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

export default MechanicalDesigningManufacture
