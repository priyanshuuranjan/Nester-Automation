import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const mainServices = [
    {
      title: 'Industrial Automation Services',
      description: 'Complete automation solutions including PLC Programming, HMI Development, and System Integration',
      icon: '⚙️',
      services: [
        'PLC Programming',
        'HMI Graphic Development', 
        'VFD Installation & Commissioning',
        'Industrial Networking',
        'Control System Architecture',
        'Servo System Configuration',
        'Control System Design Service',
        'Communication Networks Field Wiring'
      ],
      brands: ['Mitsubishi', 'Allen Bradley', 'Siemens', 'Omron Delta', 'Pro-Face']
    },
    {
      title: 'Material Handling Equipment',
      description: 'Custom conveyors and lifting equipment designed to minimize tact time and increase production',
      icon: '🏭',
      services: [
        'Roller Conveyor',
        'Slat Conveyor', 
        'Chain Hoists',
        'Free Flow Gravity Conveyor',
        'Goods Elevator',
        'Scissor Lift Tables',
        'Industrial Manipulators'
      ]
    },
    {
      title: 'Special Purpose Machines (SPM)',
      description: 'Custom-built machines designed to help clients achieve their goals in competitive markets',
      icon: '🔧',
      services: [
        'Leak Testing Machine',
        'Industrial Washing Machine',
        'Press Machine',
        'Drilling SPM',
        'Hydraulic Application',
        'JIG & FIXTURE',
        'Nut Runner Assembly Machine',
        'Pneumatic Application'
      ]
    },
    {
      title: 'Machining & Fabrication',
      description: 'Complete machining solutions with state-of-the-art equipment for precision manufacturing',
      icon: '⚡',
      services: [
        'Laser Cutting Machine',
        'Press Bending Machine',
        'Milling Machine',
        'Lathe Machine',
        'CNC/VMC Machine',
        'Slotting Machine',
        'Surface Grinding Machine',
        'Radial Drill Machine',
        'Bandsaw Machine',
        'Servo Arm Drill Tapping Machine',
        'MIG/Arc Welding',
        'Powder Coating'
      ]
    },
    {
      title: 'Industrial Robot Programming',
      description: 'Expert programming services for major industrial robot brands and automation systems',
      icon: '🤖',
      services: [
        'Robot Programming & Integration',
        'Path Planning & Optimization',
        'Vision System Integration',
        'Safety System Configuration',
        'Production Line Integration',
        'Maintenance & Support'
      ],
      brands: ['Fanuc', 'Yaskawa', 'Kuka', 'ABB', 'Kawasaki', 'Mitsubishi']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We are mainly dealing with all types of services. We provide comprehensive customer support for 
            industrial automation services including PLC Programming, HMI Graphic Development, 
            VFD Installation & Commissioning, and much more.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                
                {/* Service Info */}
                <div className="lg:col-span-1">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Brands if available */}
                  {service.brands && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Supported Brands:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.brands.map((brand, brandIndex) => (
                          <span 
                            key={brandIndex}
                            className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Services List */}
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">Our Capabilities:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.services.map((item, serviceIndex) => (
                      <motion.div
                        key={serviceIndex}
                        className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors duration-200"
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Automate Your Business?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Let's discuss how our comprehensive automation services can transform your operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
