import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const OurCompany = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const facilities = [
    {
      id: 1,
      title: "CNC Machining Center",
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop&crop=center",
      alt: "Modern CNC machining center with precision equipment"
    },
    {
      id: 2,
      title: "Assembly Workshop",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center",
      alt: "Professional assembly workshop with organized workstations"
    },
    {
      id: 3,
      title: "Quality Testing Lab",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop&crop=center",
      alt: "Advanced quality control and testing laboratory"
    },
    {
      id: 4,
      title: "Robotic Automation Cell",
      image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&h=400&fit=crop&crop=center",
      alt: "Automated robotic manufacturing cell"
    },
    {
      id: 5,
      title: "Material Storage",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&crop=center",
      alt: "Organized material storage and inventory system"
    },
    {
      id: 6,
      title: "Electrical Panel Workshop",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&crop=center",
      alt: "Electrical control panel manufacturing workshop"
    }
  ]

  const companyAreas = [
    {
      id: 1,
      name: "Company Area 1",
      image: "/src/gallery/1.png",
      type: "Interior"
    },
    {
      id: 2,
      name: "Company Area 2", 
      image: "/src/gallery/2.png",
      type: "Interior"
    },
    {
      id: 3,
      name: "Company Area 3",
      image: "/src/gallery/3.png",
      type: "Interior"
    },
    {
      id: 4,
      name: "Company Area 4",
      image: "/src/gallery/4.png",
      type: "Exterior"
    },
    {
      id: 5,
      name: "Company Area 5",
      image: "/src/gallery/5.png",
      type: "Interior"
    },
    {
      id: 6,
      name: "Company Area 6",
      image: "/src/gallery/6.png",
      type: "Interior"
    },
    {
      id: 7,
      name: "Company Area 7",
      image: "/src/gallery/7.png",
      type: "Exterior"
    },
    {
      id: 8,
      name: "Company Area 8",
      image: "/src/gallery/8.png",
      type: "Interior"
    },
    {
      id: 9,
      name: "Company Area 9",
      image: "/src/gallery/9.png",
      type: "Interior"
    },
    {
      id: 10,
      name: "Company Area 10",
      image: "/src/gallery/10.png",
      type: "Interior"
    },
    {
      id: 11,
      name: "Company Area 11",
      image: "/src/gallery/11.png",
      type: "Interior"
    },
    {
      id: 12,
      name: "Company Area 12",
      image: "/src/gallery/12.png",
      type: "Exterior"
    },
    {
      id: 13,
      name: "Company Area 13",
      image: "/src/gallery/13.png",
      type: "Interior"
    },
    {
      id: 14,
      name: "Company Area 14",
      image: "/src/gallery/14.png",
      type: "Interior"
    },
    {
      id: 15,
      name: "Company Area 15",
      image: "/src/gallery/15.png",
      type: "Interior"
    },
    {
      id: 16,
      name: "Company Area 16",
      image: "/src/gallery/16.png",
      type: "Exterior"
    },
    {
      id: 17,
      name: "Company Area 17",
      image: "/src/gallery/17.png",
      type: "Interior"
    },
    {
      id: 18,
      name: "Company Area 18",
      image: "/src/gallery/18.png",
      type: "Interior"
    },
    {
      id: 19,
      name: "Company Area 19",
      image: "/src/gallery/19.png",
      type: "Exterior"
    },
    {
      id: 20,
      name: "Company Area 20",
      image: "/src/gallery/20.png",
      type: "Interior"
    },
    {
      id: 21,
      name: "Company Area 21",
      image: "/src/gallery/21.png",
      type: "Interior"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % companyAreas.length)
      }, 4000) // Change slide every 4 seconds
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, companyAreas.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % companyAreas.length)
    setIsAutoPlaying(false) // Stop auto-play when user interacts
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + companyAreas.length) % companyAreas.length)
    setIsAutoPlaying(false) // Stop auto-play when user interacts
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false) // Stop auto-play when user interacts
  }

  // Get visible slides (current + 2 on each side for larger view)
  const getVisibleSlides = () => {
    const slides = []
    const totalSlides = companyAreas.length
    
    for (let i = -2; i <= 2; i++) {
      const index = (currentSlide + i + totalSlides) % totalSlides
      slides.push({ ...companyAreas[index], slideIndex: i })
    }
    return slides
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
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
            Our <span className="text-yellow-400">Company</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Explore our world-class company infrastructure, modern facilities, and professional 
            work environments that enable us to deliver exceptional automation solutions.
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Manufacturing Infrastructure</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our state-of-the-art manufacturing facilities are designed to deliver excellence in industrial automation. 
              From advanced production floors to specialized testing laboratories, every area is optimized for 
              quality, efficiency, and innovation.
            </p>
          </motion.div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=${encodeURIComponent(facility.title)}`
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Areas - Interior & Exterior */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Company Areas</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Take a comprehensive look at our professional workspace through this interactive slideshow, 
              showcasing both interior and exterior infrastructure across our facilities.
            </p>
          </motion.div>

          {/* Sliding Carousel */}
          <div className="relative">
            {/* Main Carousel Container */}
            <div 
              className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="flex transition-transform duration-500 ease-in-out h-full">
                {getVisibleSlides().map((slide, index) => {
                  const { slideIndex } = slide
                  const isCenter = slideIndex === 0
                  const isAdjacent = Math.abs(slideIndex) === 1
                  const isEdge = Math.abs(slideIndex) === 2

                  return (
                    <motion.div
                      key={`${slide.id}-${currentSlide}`}
                      className={`relative flex-shrink-0 transition-all duration-500 cursor-pointer ${
                        isCenter 
                          ? 'w-1/2 z-20' 
                          : isAdjacent 
                            ? 'w-1/4 z-10' 
                            : 'w-1/8 z-0'
                      }`}
                      style={{
                        transform: `translateX(${slideIndex * (isCenter ? 0 : isAdjacent ? (slideIndex > 0 ? 10 : -10) : (slideIndex > 0 ? 20 : -20))}px) scale(${
                          isCenter ? 1 : isAdjacent ? 0.8 : 0.6
                        })`,
                        opacity: isEdge ? 0.3 : isAdjacent ? 0.7 : 1
                      }}
                      onClick={() => !isCenter && goToSlide((currentSlide + slideIndex + companyAreas.length) % companyAreas.length)}
                      whileHover={!isCenter ? { scale: isAdjacent ? 0.85 : 0.65 } : {}}
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-xl shadow-xl">
                        <img
                          src={slide.image}
                          alt={slide.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = `https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=Image ${slide.id}`
                          }}
                        />
                        
                        {/* Overlay for center image */}
                        {isCenter && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent">
                            <div className="absolute bottom-6 left-6 right-6">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h3 className="text-2xl font-bold text-white mb-2">
                                    Area {slide.id}
                                  </h3>
                                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    slide.type === 'Interior' 
                                      ? 'bg-blue-100 text-blue-800' 
                                      : 'bg-green-100 text-green-800'
                                  }`}>
                                    {slide.type}
                                  </span>
                                </div>
                                <div className="text-white/80 text-lg font-medium">
                                  {currentSlide + 1} / {companyAreas.length}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Type badge for non-center images */}
                        {!isCenter && (
                          <div className="absolute top-3 right-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              slide.type === 'Interior' 
                                ? 'bg-blue-100 text-blue-800' 
                                : 'bg-green-100 text-green-800'
                            }`}>
                              {slide.type}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 z-30"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 z-30"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {companyAreas.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-30"
            >
              {isAutoPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-12">Company at a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "50,000+", label: "Sq. Ft. Facility", icon: "🏭" },
                { number: "21", label: "Company Areas", icon: "🏢" },
                { number: "6", label: "Manufacturing Units", icon: "⚙️" },
                { number: "100%", label: "Safety Compliant", icon: "✅" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default OurCompany
