import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  // Portfolio categories with their respective images
  const portfolioCategories = [
    {
      id: 'industrial-jig-fixture',
      name: 'Industrial Jig Fixture',
      description: 'Custom welding jigs, assembly fixtures, and material handling systems for automotive and manufacturing industries.',
      icon: '🔧',
      color: 'from-blue-600 to-blue-800',
      images: [
        {
          src: '/Products/Industrial Jig Fixture/Industrial Jig Fixture_Brake And Fuel pipe Assembly Jigs.jpg',
          name: 'Brake And Fuel pipe Assembly Jigs'
        },
        {
          src: '/Products/Industrial Jig Fixture/Industrial Jig Fixture_Door setting Jig.jpg',
          name: 'Door setting Jig'
        },
        {
          src: '/Products/Industrial Jig Fixture/Industrial Jig Fixture_Exhaust Pipe Welding Jig.jpg',
          name: 'Exhaust Pipe Welding Jig'
        },
        {
          src: '/Products/Industrial Jig Fixture/Industrial Jig Fixture_Fender Riveting Jig.jpg',
          name: 'Fender Riveting Jig'
        },
        {
          src: '/Products/Industrial Jig Fixture/Industrial Jig Fixture_Hood Setting jig.jpg',
          name: 'Hood Setting jig'
        },
        {
          src: '/Products/Industrial Jig Fixture/Industrial Jig Fixture_Hood Welding Jig.jpg',
          name: 'Hood Welding Jig'
        },
        {
          src: '/Products/Industrial Jig Fixture/Industrial Jig Fixture_Material Handling & Transfer Systems.jpg',
          name: 'Material Handling & Transfer Systems'
        },
        {
          src: '/Products/Industrial Jig Fixture/Industrial Jig Fixture_Mirror Patch Welding.jpg',
          name: 'Mirror Patch Welding'
        },
        {
          src: '/Products/Industrial Jig Fixture/Industrial Jig Fixture_Powered Roller Pallet Conveyor.jpg',
          name: 'Powered Roller Pallet Conveyor'
        }
      ]
    },
    {
      id: 'plc-control-panel',
      name: 'PLC Control Panel',
      description: 'Advanced PLC control panels for automation systems with comprehensive monitoring and control capabilities.',
      icon: '🖥️',
      color: 'from-green-600 to-green-800',
      images: [
        {
          src: '/Products/PLC Control Panel/automation-plc-control-panels-1000x1000.webp',
          name: 'Automation PLC Control Panels'
        },
        {
          src: '/Products/PLC Control Panel/plc-panel-automation-integration.jpg',
          name: 'PLC Panel Automation Integration'
        }
      ]
    },
    {
      id: 'robotic-system',
      name: 'Robotic System',
      description: 'Complete robotic automation solutions including welding, pick & place, machine tending, and laser cutting systems.',
      icon: '🤖',
      color: 'from-purple-600 to-purple-800',
      images: [
        {
          src: '/Products/Robotic System/Robotic System_Robtic laser cutting system.png',
          name: 'Robtic laser cutting system'
        },
        {
          src: '/Products/Robotic System/Robotic System_mag welding robotic system.png',
          name: 'MAG welding robotic system'
        },
        {
          src: '/Products/Robotic System/Robotic System_mig welding robotic system.png',
          name: 'MIG welding robotic system'
        },
        {
          src: '/Products/Robotic System/Robotic System_robot training cell.png',
          name: 'Robot training cell'
        },
        {
          src: '/Products/Robotic System/Robotic System_robotic machine tendung system.png',
          name: 'Robotic machine tending system'
        },
        {
          src: '/Products/Robotic System/Robotic System_robotic pick & place with conveyor tracking.png',
          name: 'Robotic pick & place with conveyor tracking'
        },
        {
          src: '/Products/Robotic System/Robotic System_robotic pick and place system.png',
          name: 'Robotic pick and place system'
        },
        {
          src: '/Products/Robotic System/Robotic System_spot welding robotic system.png',
          name: 'Spot welding robotic system'
        }
      ]
    },
    {
      id: 'special-purpose-machine',
      name: 'Special Purpose Machine',
      description: 'Custom-designed special purpose machines for specific manufacturing processes and automation requirements.',
      icon: '⚙️',
      color: 'from-red-600 to-red-800',
      images: [
        {
          src: '/Products/Special Purpose Machine/3 axis Servo Press Machine.jpg',
          name: '3 axis Servo Press Machine'
        },
        {
          src: '/Products/Special Purpose Machine/Assy. & Nipple Stacking.jpg',
          name: 'Assy. & Nipple Stacking'
        },
        {
          src: '/Products/Special Purpose Machine/Assy. and Crimping SPM.jpg',
          name: 'Assy. and Crimping SPM'
        },
        {
          src: '/Products/Special Purpose Machine/Automotive Mechanical Cable Assy. System.jpg',
          name: 'Automotive Mechanical Cable Assy. System'
        },
        {
          src: '/Products/Special Purpose Machine/End Forming Machine.jpg',
          name: 'End Forming Machine'
        },
        {
          src: '/Products/Special Purpose Machine/Endurance Testing.jpg',
          name: 'Endurance Testing'
        },
        {
          src: '/Products/Special Purpose Machine/Inkjet Printing System.jpg',
          name: 'Inkjet Printing System'
        },
        {
          src: '/Products/Special Purpose Machine/Inner Wire cutting Machine.jpg',
          name: 'Inner Wire cutting Machine'
        },
        {
          src: '/Products/Special Purpose Machine/Riveting Machine.jpg',
          name: 'Riveting Machine'
        },
        {
          src: '/Products/Special Purpose Machine/Rotary MAG Welding.jpg',
          name: 'Rotary MAG Welding'
        },
        {
          src: '/Products/Special Purpose Machine/Secondary Packaging System.jpg',
          name: 'Secondary Packaging System'
        },
        {
          src: '/Products/Special Purpose Machine/Servo Press 1 Ton.jpg',
          name: 'Servo Press 1 Ton'
        },
        {
          src: '/Products/Special Purpose Machine/Spacer Insertion System.jpg',
          name: 'Spacer Insertion System'
        },
        {
          src: '/Products/Special Purpose Machine/Spare Wheel Mounting.jpg',
          name: 'Spare Wheel Mounting'
        }
      ]
    }
  ]

  // Get filtered images based on selected category
  const getFilteredImages = () => {
    if (selectedCategory === 'all') {
      return portfolioCategories.flatMap(category => 
        category.images.map(image => ({
          ...image,
          category: category.name,
          categoryId: category.id,
          color: category.color
        }))
      )
    }
    
    const category = portfolioCategories.find(cat => cat.id === selectedCategory)
    return category ? category.images.map(image => ({
      ...image,
      category: category.name,
      categoryId: category.id,
      color: category.color
    })) : []
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our <span className="text-yellow-400">Portfolio</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Showcasing our expertise in industrial automation, custom machinery, 
            and precision engineering solutions across diverse industries.
          </motion.p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-gray-600">
              Explore our comprehensive range of automation solutions
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Products
            </motion.button>
            {portfolioCategories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Category Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {portfolioCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className={`bg-gradient-to-br ${category.color} rounded-lg p-6 text-white cursor-pointer`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm opacity-90 mb-4">{category.description}</p>
                <div className="text-sm font-medium">
                  {category.images.length} Products
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Gallery */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence>
              {getFilteredImages().map((image, index) => (
                <motion.div
                  key={`${image.categoryId}-${index}`}
                  className="group relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={image.src}
                      alt={image.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className={`absolute top-3 left-3 bg-gradient-to-r ${image.color} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                      {image.category}
                    </div>
                    
                    {/* View Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-3">
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {image.name}
                    </h3>
                    <p className="text-sm text-gray-600">{image.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.name}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              {/* Image Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.name}</h3>
                <p className="text-gray-600">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Portfolio
