import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Import all images from the gallery folder
  const importImages = () => {
    const images = []
    
    // Directors with detailed information
    images.push({
      id: 'director',
      src: '/src/gallery/Director.png',
      alt: 'Mr. TARA CHAND - Director',
      category: 'leadership',
      title: 'Mr. TARA CHAND',
      position: 'Director',
      description: 'Visionary leader with over 25 years of experience in industrial automation and manufacturing. Mr. Tara Chand has pioneered innovative solutions in robotic automation and has been instrumental in establishing Nester Automation as a leading name in the industry. His strategic vision and technical expertise have driven the company\'s growth and expansion into new markets.',
      hierarchy: 1,
      achievements: [
        'Founded Nester Automation with a vision to revolutionize industrial automation',
        'Led successful implementation of 500+ automation projects',
        'Expert in PLC programming, SCADA systems, and industrial robotics',
        'Recognized industry leader in manufacturing optimization'
      ]
    })
    
    images.push({
      id: 'managing-director',
      src: '/src/gallery/Managing Director.png',
      alt: 'Mr. JAGDISH BURDAK - Managing Director',
      category: 'leadership',
      title: 'Mr. JAGDISH BURDAK',
      position: 'Managing Director',
      description: 'Dynamic business leader responsible for operational excellence and strategic growth initiatives. Mr. Jagdish Burdak brings extensive experience in project management, client relations, and business development. Under his leadership, the company has achieved remarkable growth and established strong partnerships with leading automotive and manufacturing companies.',
      hierarchy: 2,
      achievements: [
        'Spearheaded company\'s expansion into automotive sector',
        'Built strategic partnerships with Fortune 500 companies',
        'Implemented quality management systems and ISO certifications',
        'Led digital transformation initiatives across all departments'
      ]
    })

    // Company and employee images (1.png to 21.png)
    for (let i = 1; i <= 21; i++) {
      images.push({
        id: `image-${i}`,
        src: `/src/gallery/${i}.png`,
        alt: `Company Image ${i}`,
        category: i <= 10 ? 'company' : 'employees',
        title: i <= 10 ? `Company Facility ${i}` : `Team Member ${i - 10}`,
        position: i <= 10 ? 'Infrastructure' : 'Employee',
        description: i <= 10 ? 'Our state-of-the-art facilities and infrastructure showcasing modern manufacturing capabilities' : 'Dedicated team members driving excellence and innovation in their respective departments',
        hierarchy: i <= 10 ? 4 : 3 // Company facilities last, team members after leadership
      })
    }

    return images
  }

  const [images] = useState(importImages())

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const categories = [
    { id: 'all', name: 'All Images', count: images.length },
    { id: 'leadership', name: 'Leadership', count: images.filter(img => img.category === 'leadership').length },
    { id: 'company', name: 'Company', count: images.filter(img => img.category === 'company').length },
    { id: 'employees', name: 'Employees', count: images.filter(img => img.category === 'employees').length }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? images.sort((a, b) => (a.hierarchy || 5) - (b.hierarchy || 5)) // Sort by hierarchy
    : images.filter(img => img.category === selectedCategory)
             .sort((a, b) => (a.hierarchy || 5) - (b.hierarchy || 5))

  const openModal = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600 text-lg">Loading Gallery...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Company <span className="text-yellow-400">Gallery</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Discover our journey, meet our leadership team, and explore our 
            state-of-the-art facilities and dedicated workforce.
          </motion.p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200 hover:border-blue-300'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </motion.div>

          {/* Leadership Section - Special Treatment */}
          {(selectedCategory === 'all' || selectedCategory === 'leadership') && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our experienced leadership team combines decades of industry expertise with innovative vision, 
                  driving Nester Automation to new heights in industrial automation and manufacturing excellence.
                </p>
              </div>
              
              {/* Hierarchical Leadership Display */}
              <div className="space-y-12">
                {images
                  .filter(img => img.category === 'leadership')
                  .sort((a, b) => a.hierarchy - b.hierarchy)
                  .map((image, index) => (
                  <motion.div
                    key={image.id}
                    className={`bg-gradient-to-r ${image.hierarchy === 1 ? 'from-blue-50 to-indigo-50' : 'from-gray-50 to-blue-50'} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                  >
                    <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
                      {/* Image Section */}
                      <div className="lg:w-1/3 flex-shrink-0">
                        <div 
                          className="relative group cursor-pointer"
                          onClick={() => openModal(image)}
                        >
                          <div className={`w-64 h-80 mx-auto rounded-xl overflow-hidden shadow-lg ${image.hierarchy === 1 ? 'ring-4 ring-blue-200' : 'ring-2 ring-gray-200'} group-hover:ring-blue-400 transition-all duration-300`}>
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e) => {
                                e.target.src = `https://via.placeholder.com/300x400/4F46E5/FFFFFF?text=${encodeURIComponent(image.title)}`
                              }}
                            />
                          </div>
                          {image.hierarchy === 1 && (
                            <div className="absolute -top-2 -right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Director
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="lg:w-2/3 text-center lg:text-left">
                        <div className="mb-6">
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">{image.title}</h3>
                          <p className="text-xl text-blue-600 font-semibold mb-4">{image.position}</p>
                          <p className="text-gray-700 text-lg leading-relaxed">{image.description}</p>
                        </div>
                        
                        {/* Achievements */}
                        {image.achievements && (
                          <div className="mt-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                            <ul className="space-y-2">
                              {image.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-700">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Regular Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredImages
                .filter(img => selectedCategory === 'leadership' || img.category !== 'leadership')
                .map((image, index) => (
                <motion.div
                  key={image.id}
                  className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  onClick={() => openModal(image)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=${encodeURIComponent(image.title)}`
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                    <p className="text-sm text-blue-600 mb-2">{image.position}</p>
                    <p className="text-xs text-gray-600">{image.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredImages.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal for Image Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto max-h-[70vh] object-contain"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=${encodeURIComponent(selectedImage.title)}`
                    }}
                  />
                </div>
                <div className="md:w-1/3 p-6 bg-gray-50">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                  <p className="text-lg text-blue-600 mb-4">{selectedImage.position}</p>
                  <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                  
                  {/* Show achievements in modal for leadership */}
                  {selectedImage.achievements && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="text-sm space-y-1">
                        {selectedImage.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="text-sm text-gray-500">
                    <p>Category: {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}</p>
                    {selectedImage.hierarchy && (
                      <p>Hierarchy Level: {selectedImage.hierarchy}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery
